import {DroidUIListenerInterface} from "./DroidUIListenerInterface";
import {Instance} from "../../models/Instance";
import {DroidUI} from "../DroidUI";
import {DroidUIComputeStatus} from "../components/DroidUIComputeStatus";
import {StructureRepair} from "../../compute/StructureRepair";
import {DroidUIStructureHealthProgress} from "../components/DroidUIStructureHealthProgress";

export class DroidUIStructureCondensedRepairListener extends DroidUIListenerInterface{

  /**
   * @param {DroidUIStructureCondensed} component
   */
  constructor(component) {
    super(component);
  }

  init() {
    document.getElementById('structure_list_repair_' + this.component.structure.getId()).addEventListener('click', async function() {
      // Hide the selector
      // Move this into the DroidUI if it's not already there.
      window.bootstrap.Offcanvas.getInstance(document.getElementById('offcanvas')).hide();

      let instance = new Instance();
      await instance.initActive();
      this.program.instance = instance.address;

      (new DroidUI()).loadStructureRepairStatusModal(this.program)

      let compute_status = new DroidUIComputeStatus();
      compute_status.updateStatus(50, 1, 100)

      document.getElementById('repair-status-dialog-view-button').href = '/structure.html?structure_id=' + this.program.target_structure.id;

      instance.performRepair(this.program).then((result) => {
        let tx_result_parsed = JSON.parse(result.rawLog);

        let tx_result_processed = (new StructureRepair()).processResult(tx_result_parsed[0]);
        (new DroidUIStructureHealthProgress()).incrementHealth(tx_result_processed.targetRepairAmount);
        console.log(tx_result_parsed)
        let compute_status = new DroidUIComputeStatus();
        compute_status.setComplete();

        const repairStatusDialogViewButton = document.getElementById('repair-status-dialog-view-button')
        repairStatusDialogViewButton.disabled = ""
        repairStatusDialogViewButton.classList.remove('is-disabled')
        repairStatusDialogViewButton.classList.add('is-success')
      });

    }.bind(this.component));
  }
}
