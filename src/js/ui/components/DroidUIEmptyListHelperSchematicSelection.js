import {DroidUIEmptyListHelperInterface} from "./DroidUIEmptyListHelperInterface";
import {DroidUIMessageListItem} from "./DroidUIMessageListItem";

export class DroidUIEmptyListHelperSchematicSelection extends DroidUIEmptyListHelperInterface {

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
        `There are no compatible schematics for this structure.`
        + ` A compatible schematic must have one ambit (water, land, sky, or space) in common with the current structure.`
      );
      html = emptyMessage.render();
    } else if (html === '' && this.searchString !== '') {
      const emptyMessage = new DroidUIMessageListItem(
        `No compatible schematics found matching your search terms. Try using less or different keywords.`
      );
      html = emptyMessage.render();
    }

    return html;
  }
}
