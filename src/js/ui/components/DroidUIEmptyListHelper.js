import {DroidUIEmptyListHelperInterface} from "./DroidUIEmptyListHelperInterface";

export class DroidUIEmptyListHelper extends DroidUIEmptyListHelperInterface{

  /**
   * @param {DroidUIMessagePanel} emptyMessageComponent
   */
  constructor(emptyMessageComponent) {
    super();
    this.emptyMessageComponent = emptyMessageComponent;
  }

  process(html, params = []) {
    if (html === '') {
      return this.emptyMessageComponent.render();
    }
    return html;
  }
}
