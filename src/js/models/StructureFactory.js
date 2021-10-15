import {Structure} from "./Structure";

export class StructureFactory {
  make(obj) {
    const structure = new Structure();
    Object.assign(structure, obj);
    return structure;
  }
}
