import {DroidUISchematic} from "./DroidUISchematic";
import {DroidUIStructureCommandView} from "./DroidUIStructureCommandView";
import {DroidUISchematicCondensed} from "./DroidUISchematicCondensed";
import {DroidUISchematicCondensedCTABuild} from "./DroidUISchematicCondensedCTABuild";
import {DroidUIStructureCondensed} from "./DroidUIStructureCondensed";
import {DroidUIStructureCondensedCTABuild} from "./DroidUIStructureCondensedCTABuild";
import {DroidUIStructureCTAFactory} from "./DroidUIStructureCTAFactory";
import {DroidUIStructureSmall} from "./DroidUIStructureSmall";
import {DroidUIStructureStatusMini} from "./DroidUIStructureStatusMini";
import {STATUS_TYPES} from "../../Constants";

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
      case 'SchematicCondensed':
        component = new DroidUISchematicCondensed(
          structure,
          params[0],
          new DroidUISchematicCondensedCTABuild(structure));
        break;
      case 'Structure':
        component = new DroidUIStructureSmall(structure, ...params);
        break;
      case 'StructureCondensedBuild':
        component = new DroidUIStructureCondensed(
          structure,
          structure,
          params[0],
          new DroidUIStructureCondensedCTABuild(structure)
        );
        break;
      case 'StructureCondensedFactory':
        component = new DroidUIStructureCondensed(
          structure,
          params[0],
          structure,
          (new DroidUIStructureCTAFactory()).make(params[1], structure)
        );
        break;
      case 'StructurePerformingCondensedFactory':
        component = new DroidUIStructureCondensed(
          structure,
          structure,
          params[0],
          (new DroidUIStructureCTAFactory()).make(params[1], structure)
        );
        break;
      case 'StructureCommandView':
        component = new DroidUIStructureCommandView(structure, ...params);
        break;
      case 'StructureStatusMiniHealth':
        component = new DroidUIStructureStatusMini(structure, STATUS_TYPES.HEALTH, ...params);
        break;
      case 'StructureStatusMiniBatteryCharge':
        component = new DroidUIStructureStatusMini(structure, STATUS_TYPES.BATTERY_CHARGE, ...params);
        break;
      default:
        throw new DroidUIComponentFactoryError(`DroidUI component with type: ${type}`);
    }
    return component;
  }
}
