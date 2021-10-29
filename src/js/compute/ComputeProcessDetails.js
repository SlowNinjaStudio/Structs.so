
/*
 * ComputeProcessDetails
 *
 * This is a sub-class used by the ComputeProcess class.
 *
 * It wouldn't exist but the ComputeProcess class cannot pass itself
 * into the Worker process, so it has to divide out the specifics
 * using this.
 */

export class ComputeProcessDetails {
  constructor(process_id, type, program) {
    this.id = process_id;
    this.type = type;

    this.program = program;

    this.prefix   = program.getInputPrefix();
    this.pattern  = program.generatePattern();
    this.starting_nonce = Math.floor(Math.random() * 10000000000);;

    this.checkin_period = 500000;

    this.number_of_results = 1; // zero for infinte.
  }
}
