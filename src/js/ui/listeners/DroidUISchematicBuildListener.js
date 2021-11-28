import {DroidUI} from "../DroidUI";
import {Instance} from "../../models/Instance";
import {DroidUIListenerInterface} from "./DroidUIListenerInterface";

export class DroidUISchematicBuildListener extends DroidUIListenerInterface {

  /**
   * @param {DroidUISchematic} component
   */
  constructor(component) {
    super(component);
  }

  init() {
    if (!this.component.isCreator()) {
      return;
    }
    const droidUi = new DroidUI();

    const searchHandler = async function() {
      const instance = new Instance();
      await instance.init();

      const searchString = document.getElementById('offcanvas-search-input').value;
      droidUi.loadStructureSelectionListFromSchematic('offcanvas-body', 'offcanvas-title', this.schematic, searchString);
    }.bind(this.component);

    document.getElementById('offcanvas-search-btn').addEventListener('click', searchHandler);
    document.getElementById('offcanvas-search-input').addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        searchHandler(event);
      }
    });

    const instance = new Instance();
    instance.lazyLoad();

    document.getElementById(this.component.getBuildButtonId()).addEventListener('click', function() {
      droidUi.loadStructureSelectionListFromSchematic('offcanvas-body', 'offcanvas-title',  this.schematic);
    }.bind(this.component));
  }
}
