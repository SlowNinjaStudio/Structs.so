import {DroidUIListenerInterface} from "./DroidUIListenerInterface";
import {DroidUICommandMenu} from "../components/DroidUICommandMenu";

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
  }
}
