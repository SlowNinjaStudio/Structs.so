import {DroidUIStructure} from "./DroidUIStructure";
import {DroidUISchematic} from "./DroidUISchematic";
import {DroidUIStructureCommandView} from "./DroidUIStructureCommandView";

export class DroidUIComponentFactoryError extends Error {
  constructor(message) {
    super(message);
    this.name = "DroidUIComponentFactoryError";
  }
}

export class DroidUIComponentFactory {
  make(type, structure, params) {
    let component;
    switch(type) {
      case 'Schematic':
        component = new DroidUISchematic(structure, ...params);
        break
      case 'Structure':
        component = new DroidUIStructure(structure, ...params);
        break;
      case 'StructureCommandView':
        component = new DroidUIStructureCommandView(structure, ...params);
        break;
      default:
        throw new DroidUIComponentFactoryError(`DroidUI component with type: ${type}`);
    }
    return component;
  }
}
