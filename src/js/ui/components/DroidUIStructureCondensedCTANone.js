import {EmptyProgram} from "../../compute/EmptyProgram";
import {CTA_TYPES} from "../../Constants";

export class DroidUIStructureCondensedCTANone {
  render() {
    return '';
  }

  initProgram() {
    return (new EmptyProgram())
  }

  getCTAType() { return CTA_TYPES.NONE}
}
