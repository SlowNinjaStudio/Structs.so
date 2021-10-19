import {ComputeProcess} from "./ComputeProcess";
/*
 * A little different than the others...
 * processes and next_process_id need to be accessible globally. 
 *
 * Use this function to manage processes, including intiating, running and stopping.
 */

export var processes = [];
export var next_process_id = 0; 

export class Computer { constructor() { } }   

Computer.prototype.add_process = function (program){

  	let id = next_process_id;
  	next_process_id++;

  	processes[id] = new ComputeProcess(id, program);

  	return id;
  }

Computer.prototype.run_process = function(process_id){
  processes[process_id].process();
}

Computer.prototype.stop_process = function(process_id){
  processes[process_id].stop();
}

Computer.prototype.get_results = function(process_id){
  return (typeof processes[process_id] != 'undefined') ? processes[process_id].results : null;
}

