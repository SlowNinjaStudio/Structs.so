import {processes} from "./Computer";
import {ComputeProcessDetails} from "./ComputeProcessDetails";
import {DroidUI} from "../ui/DroidUI"
import {DroidUIComputeStatus} from "../ui/components/DroidUIComputeStatus"
import {Schematic} from "../models/Schematic"
import {SchematicRD} from "./SchematicRD";
import {StructureBuild} from "./StructureBuild"

import {Instance} from "../models/Instance"
import {parseRawLog} from "@cosmjs/stargate";

/*
 * ComputeProcess
 *
 * An instance of a process running on the computer.
 * You shouldn't need to directly instantiate this class, instead
 * just pass a program (i.e. SchematicRD or StructureBuild objects)
 * to the Computer.add_process(obj) function.
 *
 */
export class ComputeProcess {
  constructor(process_id, program) {
    this.worker;
    this.results = [];

    this.id   = process_id;
    this.name = '';

    if (program instanceof SchematicRD) {
      this.type = 'Schematic R&D';
    } else if (program instanceof StructureBuild) {
      this.type = 'Structure Retooling';
    } else {
      this.type = 'Unknown Program';
    }

    this.compute_process_details = new ComputeProcessDetails(process_id, this.type, program);

    this.hashes_per_second = 0;
    this.difficulty = program.generateDifficulty();

    this.start = Date.now()
  }

  process() {
    if (this.worker === null || typeof(this.worker) == "undefined") {
      console.log('Starting Action Worker');
      this.worker = new Worker("/js/compute_worker-bundle.js");

      // That attempt to pass this through wasn't working
      // for some reason. It seemed like it was a new object being
      // passed, rather than the one expected.
      //
      // New (maybe temporary) was uses the processes array to store
      // state acrosse all running jobs. This array is brought
      // into the runtime through the Computer import
      this.worker.onmessage = async function (result) {
        console.log('Received from action worker [Process ID #' + result.data[0].id + ']...');

        let compute_status = new DroidUIComputeStatus();

        let current_time = Date.now()
        processes[result.data[0].id].hashes_per_second = result.data[0].rounds_total / (((current_time - processes[result.data[0].id].start) / 1000.0) + 1)

        if (typeof result.data[1] != 'undefined') {

          processes[result.data[0].id].results.push(result.data[1]);
          processes[result.data[0].id].stop();

          compute_status.setComplete();

          console.log(result.data[1].hash);
          console.log(result.data[1].input);

          /*
           * Generate the result rectangle
           */

          if (result.data[1].compute_process.type === 'Schematic R&D') {
            let schematic = new Schematic()
            schematic.schematicFromHash(result.data[1].hash, result.data[1].input)

            let droid_ui = new DroidUI();
            droid_ui.loadNewSchematic(schematic, 'found_schematic_list');

          } else if (result.data[1].compute_process.type === 'Structure Retooling') {
            console.log('Finished retooling but idk what to do with the results');
            // TODO: Call an action that enables the View button on the modal and adds the correct link to the new structure
            // ex call) document.getElementById('build-status-dialog').close();

            const fee = {
              amount: [
                {
                  denom: "watt",
                  amount: "1",
                },
              ],
              gas: "180000",
            };

            let instance = new Instance();
            await instance.init();

            try {
              let tx_result = await instance.performBuild(result.data[1], {
                name: result.data[1].compute_process.program.schematic.name,
                description: result.data[1].compute_process.program.schematic.description
              }, fee)



              if (typeof tx_result.data !='undefined') {
                //Maybe move this parser into its program
                console.log(JSON.parse(tx_result.rawLog))

                let tx_result_parsed = JSON.parse(tx_result.rawLog)
                // I don't fully understand how consistent this is yet.
                // entire section needs some love.
                // But it works!
                let new_structure_id = tx_result.data[0].data[1];
                document.getElementById('building_dialog_view_button').href = '/structure.html?structure_id=' + new_structure_id;
                document.getElementById('building_dialog_view_button').disabled = ""
                document.getElementById('building_dialog_view_button').classList.remove('is-disabled')
                document.getElementById('building_dialog_view_button').classList.add('is-success')
              } else {
                if (tx_result.rawLog.includes('insufficient funds')) {
                  let needed_start = tx_result.rawLog.search('[0-9]{1,}watt');
                  let needed_end = tx_result.rawLog.search('watt:') + 3 - tx_result.rawLog.search('/[0-9]{1,}watt:/i')
                  let needed = tx_result.rawLog.substring(needed_start, needed_end)
                  console.log(needed_start, needed_end)
                  compute_status.setError('Insufficient Funds (' + needed + ')')
                } else {
                  compute_status.setError('IDK: Paste to Discord (' + tx_result.rawLog + ')')
                }

              }

            }
            catch(err){
              console.log(err)
              compute_status.setError('IDK: Paste to Discord ' + err)
            }
          }

        } else {
          compute_status.updateStatus(result.data[0].rounds_total, processes[result.data[0].id].hashes_per_second, processes[result.data[0].id].difficulty);
        }

        console.log('[Process ID #' + result.data[0].id + '] Started ' + processes[result.data[0].id].start + ' Current ' + current_time);
        console.log('[Process ID #' + result.data[0].id + '] Rounds of hashing since last check-in: ' + result.data[0].rounds_total + ' ' + '(' + (100.0 * (result.data[0].rounds_total / processes[result.data[0].id].difficulty)) + '%)');
        console.log('[Process ID #' + result.data[0].id + '] Hashes per second ' + processes[result.data[0].id].hashes_per_second);
      }

      this.worker.postMessage([this.compute_process_details]);
    } else {
      console.log('Error: Action already processing, cannot start again.');
    }
  }

  stop() {
    console.log('Stopping Action Worker');
    this.worker.terminate();
  }
}
