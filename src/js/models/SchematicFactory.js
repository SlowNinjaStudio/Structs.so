import {Schematic} from "./Schematic";

export class SchematicFactory {
  make(obj) {
    const structure = new Schematic();
    Object.assign(structure, obj);
    return structure;
  }
}
