import {DroidUIListenerInterface} from "./DroidUIListenerInterface";
import {DroidUICommandMenu} from "../components/DroidUICommandMenu";
import {DroidUITargetMenu} from "../components/DroidUITargetMenu";

export class DroidUIStructureCommandViewListener extends DroidUIListenerInterface {

  /**
   * @param {DroidUIStructureCommandView} component
   */
  constructor(component) {
    super(component);
  }

  init() {
    if (this.component.isCreator()) {
      const commandMenu = new DroidUICommandMenu(this.component.structure);
      commandMenu.initMainMenuEventListeners();
    }

    // TODO it's possible this should be in it's own listener file
    const targetMenu = new DroidUITargetMenu(this.component.structure);
    targetMenu.initMainMenuEventListeners();
  }
}
