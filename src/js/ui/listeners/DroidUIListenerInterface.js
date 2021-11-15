import {NotImplementedError} from "../../vendor/NotImplementedError";

export class DroidUIListenerInterface {

  /**
   * @param component
   */
  constructor(component) {
    this.component = component;
  }

  /**
   * Initiate the listener
   */
  init() {
    throw new NotImplementedError();
  }
}
