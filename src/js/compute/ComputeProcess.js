import {processes} from "./Computer";
import {ComputeProcessDetails} from "./ComputeProcessDetails";
import {DroidUI} from "../ui/DroidUI"
import {DroidUIComputeStatus} from "../ui/components/DroidUIComputeStatus"
import {Schematic} from "../models/Schematic"
import {SchematicRD} from "./SchematicRD";
import {StructureBuild} from "./StructureBuild"
import {StructureAttack} from "./StructureAttack";

import {Instance} from "../models/Instance"
import {parseRawLog} from "@cosmjs/stargate";
import {DroidUIStructureHealthProgress} from "../ui/components/DroidUIStructureHealthProgress";

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

  /**
   * @param {number} processId
   * @param {SchematicRD|StructureAttack|StructureBuild} program
   */
  constructor(processId, program) {
    this.worker;
    this.results = [];

    this.id   = processId;
    this.name = '';

    this.type = program.type;

    this.compute_process_details = new ComputeProcessDetails(processId, this.type, program);

    this.hashes_per_second = 0;
    this.difficulty = program.generateDifficulty();

    this.start = Date.now()
  }

  process() {
    if (this.worker === null || typeof(this.worker) == "undefined") {
      console.log('Starting Action Worker');
      this.worker = new Worker("/js/compute_worker-bundle.js");

      this.worker.onmessage = async function (result) {
        console.log('Received from action worker [Process ID #' + result.data[0].id + ']...');

        processes[result.data[0].id].compute_process_details.program.handleResult(processes[result.data[0].id], result);

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
