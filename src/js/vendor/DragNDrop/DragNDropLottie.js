import {DragNDropDraggableItem} from "./DragNDropDraggableItem";
import {DragNDropLinkedLottieElement} from "./DragNDropLinkedLottieElement";
import {DragNDropDroppableAreaLottie} from "./DragNDropDroppableAreaLottie";

export class DragNDropLottie {
  /**
   * @param {string} droppableAreaId
   * @param {Map<string, DragNDropLinkedLottieElement>}draggableItemToLottieElementMap
   */
  constructor(droppableAreaId, draggableItemToLottieElementMap = new Map()) {
    this.droppableAreaId = droppableAreaId;
    this.draggableItemToLottieElementMap = draggableItemToLottieElementMap;
    this.detailedItemViewDroppableArea = null;
  }

  /**
   * @param {string} draggableItemId
   * @param {string} lottieElementSelector
   */
  linkDraggableItemToLottieElement(draggableItemId, lottieElementSelector) {
    this.draggableItemToLottieElementMap.set(draggableItemId, lottieElementSelector);
  }

  init() {
    if (this.draggableItemToLottieElementMap.size < 1) {
      throw new Error('No draggable items linked to lottie elements');
    }

    this.detailedItemViewDroppableArea = new DragNDropDroppableAreaLottie(this.droppableAreaId);
    for (let [draggableItemId, lottieElementSelector] of this.draggableItemToLottieElementMap) {
      const draggableItem = new DragNDropDraggableItem(draggableItemId);
      const linkedLottieElement = new DragNDropLinkedLottieElement(lottieElementSelector, draggableItem);

      draggableItem.init();
      linkedLottieElement.init();
      this.detailedItemViewDroppableArea.registerLinkedLottieElement(linkedLottieElement);
    }

    this.detailedItemViewDroppableArea.init();
  }
}
