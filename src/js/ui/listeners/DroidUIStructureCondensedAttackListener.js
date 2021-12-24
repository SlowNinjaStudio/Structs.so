import {DroidUIListenerInterface} from "./DroidUIListenerInterface";
import {Instance} from "../../models/Instance";
import {DroidUI} from "../DroidUI";

export class DroidUIStructureCondensedAttackListener extends DroidUIListenerInterface{

  /**
   * @param {DroidUIStructureCondensed} component
   */
  constructor(component) {
    super(component);
  }

  init() {
    document.getElementById('structure_list_attack_' + this.component.structure.getId()).addEventListener('click', async function() {
      // Hide the selector
      // Move this into the DroidUI if it's not already there.
      window.bootstrap.Offcanvas.getInstance(document.getElementById('offcanvas')).hide();

      let instance = new Instance();
      instance.lazyLoad();
      this.program.instance = instance.address;

      let new_process_id = this.computer.add_process(this.program);


      (new DroidUI()).loadStructureAttackStatusModal(this.program, new_process_id)
      this.computer.run_process(new_process_id);

    }.bind(this.component));
  }
}
