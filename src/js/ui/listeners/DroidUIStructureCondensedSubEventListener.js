import {DroidUIListenerInterface} from "./DroidUIListenerInterface";
import {DroidUIStructureCondensedAttackListener} from "./DroidUIStructureCondensedAttackListener";
import {DroidUIStructureCondensedRepairListener} from "./DroidUIStructureCondensedRepairListener";
import {DroidUIStructureCondensedDrainListener} from "./DroidUIStructureCondensedDrainListener";

export class DroidUIStructureCondensedSubEventListener extends DroidUIListenerInterface{

  /**
   * @param {DroidUIStructureCondensed} component
   * @param {string} callToActionType
   */
  constructor(component, callToActionType) {
    super(component);
    this.callToActionType = callToActionType;
  }

  init() {
    let listener = null;
    switch (this.callToActionType){
      case 'attack':
        listener = new DroidUIStructureCondensedAttackListener(this.component);
        break;
      case 'repair':
        listener = new DroidUIStructureCondensedRepairListener(this.component);
        break;
      case 'drain':
        listener = new DroidUIStructureCondensedDrainListener(this.component);
        break;
      default:
        throw new Error(`No listener for call-to-action type: ${this.callToActionType}`);
    }
    listener.init();
  }
}
