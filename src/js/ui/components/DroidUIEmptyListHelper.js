import {DroidUIEmptyListHelperInterface} from "./DroidUIEmptyListHelperInterface";

export class DroidUIEmptyListHelper extends DroidUIEmptyListHelperInterface{

  /**
   * @param {DroidUIMessagePanel} emptyMessageComponent
   */
  constructor(emptyMessageComponent = null) {
    super();
    this.emptyMessageComponent = emptyMessageComponent;
  }

  process(html) {
    if (html === '' && this.emptyMessageComponent) {
      return this.emptyMessageComponent.render();
    }
    return html;
  }
}
