// The Compute Worker Background Process
// Slow Ninja, Inc. 

// browserify compute_worker.js -o ../../js/compute_worker-bundle.js
const shajs = require('sha.js');

console.log('Worker node started');

var current_process;
var compute_status;
var process_nonce = 0;
var results_found = 0;

class ComputeResult {
  constructor() {
    this.compute_process;

    this.hash   = '';
    this.input  = '';
    this.nonce  = 0;
  }
}

class ComputeStatus {
	constructor(process_id) {
		this.id = process_id;
		this.rounds_total = 0;
	}
}

onmessage = function(process_request) {
	console.log('New Process Request');
	console.log('Starting worker ' + process_request.data[0].prefix + ' ' + ' ' + process_request.data[0].pattern + ' ' + process_request.data[0].starting_nonce.toString());

	current_process = process_request.data[0];
	compute_status = new ComputeStatus(current_process.id);

	process_nonce = current_process.starting_nonce;

	hash();
}

function hash() {
	while (true) {
		if (typeof current_process !== 'undefined') {
			process_nonce += 1;
			
			// Write process check-in
			if (process_nonce % current_process.checkin_period == 0) {
				compute_status.rounds_total = process_nonce - current_process.starting_nonce;
				postMessage([compute_status]);
			}

			let current_input = current_process.prefix + process_nonce.toString(); 
			let current_hash = shajs('sha256').update(current_input).digest('hex');

			if (current_process.pattern.test(current_hash)) {

				let found_compute_result = new ComputeResult();
				found_compute_result.compute_process = current_process;
				found_compute_result.hash = current_hash;
				found_compute_result.input = current_input;
				found_compute_result.nonce = process_nonce;

				console.log('Found! ' + current_hash);
				
				//Refresh stats prior to sending
				compute_status.rounds_total = process_nonce - current_process.starting_nonce;

				postMessage([compute_status, found_compute_result]);

				// Exit if the required results have been returned. 
				results_found++;
				if (current_process.number_of_results != 0 && current_process.number_of_results <= results_found) { break; }
			} 
		}
	}
}





