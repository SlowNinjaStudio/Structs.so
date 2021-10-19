import {Computer, processes, next_process_id} from "./Computer";
import {ComputeProcessDetails} from "./ComputeProcessDetails";

import {SchematicRD} from "./SchematicRD";
import {StructureBuild} from "./StructureBuild"

import {secondsToString} from "../vendor/SecondsToString"

import {Schematic} from "../models/Schematic"
import {DroidUISchematic} from "../ui/components/DroidUISchematic";

/*
 * ComputeProcess
 *
 * An instance of a process running on the computer. 
 * You shouldn't need to directly instanciate this class, instead
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
    
    this.compute_process_details = new ComputeProcessDetails(process_id, program);
    
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
      this.worker.onmessage = function (result) {
        console.log('Received from action worker [Process ID #' + result.data[0].id + ']...');

        let current_time = Date.now()
        processes[result.data[0].id].hashes_per_second = result.data[0].rounds_total / (((current_time - processes[result.data[0].id].start) / 1000.0) + 1)

        if (typeof result.data[1] != 'undefined') {
          
          processes[result.data[0].id].results.push(result.data[1]);
          console.log(result.data[1].hash)
          processes[result.data[0].id].stop();

          document.getElementById('time_estimate_human').value = 'Research Complete!';
          document.getElementById('progress_cpu').value = processes[result.data[0].id].difficulty; 
          document.getElementById('progress_cpu_value').innerHTML =  100


          // generate the result rectangle 
          let schematic = new Schematic()
          schematic.schematicFromHash(result.data[1].hash)
          schematic.id  = 'virtual'
          let schematic_ui = new DroidUISchematic(schematic, 'result')
          document.getElementById('results').innerHTML = schematic_ui.render()


        } else {
          document.getElementById('time_estimate_human').value = secondsToString((processes[result.data[0].id].difficulty - result.data[0].rounds_total) / processes[result.data[0].id].hashes_per_second);
          document.getElementById('progress_cpu').value = result.data[0].rounds_total; 
          document.getElementById('progress_cpu_value').innerHTML =  Math.round(100.0 * (result.data[0].rounds_total / processes[result.data[0].id].difficulty))         
        }

        console.log('[Process ID #' + result.data[0].id + '] Started ' + processes[result.data[0].id].start + ' Current ' + current_time);
        console.log('[Process ID #' + result.data[0].id + '] Rounds of hashing since last check-in: ' + result.data[0].rounds_total + ' ' + '(' + (100.0 * (result.data[0].rounds_total / processes[result.data[0].id].difficulty)) + '%)');
        console.log('[Process ID #' + result.data[0].id + '] Hashes per second ' + processes[result.data[0].id].hashes_per_second)


      
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




