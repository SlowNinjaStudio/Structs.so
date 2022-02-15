import {DragNDropDraggableItem} from "./DragNDropDraggableItem";

export class DragNDropLinkedLottieElement {
  /**
   * @param {string} lottieElementSelector
   * @param {DragNDropDraggableItem} draggableItem
   */
  constructor(lottieElementSelector, draggableItem) {
    this.lottieElementSelector = lottieElementSelector;
    this.draggableItem = draggableItem;
  }

  /**
   * @param {NodeListOf} lottieElements
   */
  hideLottieElements(lottieElements) {
    for (let i = 0; i < lottieElements.length; i++) {
      lottieElements[i].style.display = 'none';
    }
  }

  /**
   * @param {NodeListOf} lottieElements
   */
  linkDraggableItem(lottieElements) {
    for (let j = 0; j < lottieElements.length; j++) {
      this.draggableItem.addDragStartListener(lottieElements[j], function() {
        for (let k = 0; k < lottieElements.length; k++) {
          lottieElements[k].style.display = 'none';
        }
      });
    }
  }

  init() {
    const lottieElements = document.querySelectorAll(this.lottieElementSelector);
    this.hideLottieElements(lottieElements);
    this.linkDraggableItem(lottieElements);
  }
}
