import {DroidUIListenerInterface} from "./DroidUIListenerInterface";
import {Instance} from "../../models/Instance";
import {DroidUI} from "../DroidUI";

export class DroidUISchematicCondensedBuildListener extends DroidUIListenerInterface{

  /**
   * @param {DroidUISchematicCondensed} component
   */
  constructor(component) {
    super(component);
  }

  init() {
    document.getElementById('schematic_list_build_' + this.component.schematic.getId()).addEventListener('click', async function() {
      // Hide the selector
      // Move this into the DroidUI if it's not already there.
      window.bootstrap.Offcanvas.getInstance(document.getElementById('offcanvas')).hide();

      let instance = new Instance();
      await instance.init();
      this.program.instance = instance.address;

      let new_process_id = this.computer.add_process(this.program);

      (new DroidUI()).loadStructureBuildStatusModal(this.schematic, this.structure, this.program, new_process_id)

      this.computer.run_process(new_process_id);


    }.bind(this.component));
  }
}
