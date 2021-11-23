import {DroidUIEmptyListHelperInterface} from "./DroidUIEmptyListHelperInterface";
import {DroidUIMessageListItem} from "./DroidUIMessageListItem";

export class DroidUIEmptyListHelperStructureSelection extends DroidUIEmptyListHelperInterface {

  /**
   * @param {string} searchString
   */
  constructor(searchString) {
    super();
    this.searchString = searchString;
  }

  process(html) {
    if (html === '' && this.searchString === '') {
      const emptyMessage = new DroidUIMessageListItem(
        `There are no compatible structures that can build this schematic.`
        + ` A compatible structure must have one ambit (water, land, sky, or space) in common with the current schematic.`
      );
      html = emptyMessage.render();
    } else if (html === '' && this.searchString !== '') {
      const emptyMessage = new DroidUIMessageListItem(
        `No compatible structures found matching your search terms. Try using less or different keywords.`
      );
      html = emptyMessage.render();
    }
    return html;
  }
}
