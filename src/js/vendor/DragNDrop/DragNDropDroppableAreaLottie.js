import {DragNDropDroppableArea} from "./DragNDropDroppableArea";
import {DragNDropEventDetail} from "./DragNDropEventDetail";
import {DragNDropLinkedLottieElement} from "./DragNDropLinkedLottieElement";

export class DragNDropDroppableAreaLottie extends DragNDropDroppableArea {

  /**
   * @param {string} droppableAreaId
   */
  constructor(droppableAreaId) {
    super(droppableAreaId);
    this.linkedLottieElements = new Map();
    this.onDropInside = function(customEvent) {
      const detail = DragNDropEventDetail.makeFromCustomEvent(customEvent);
      const linkedLottieElement = this.getLinkedLottieElement(detail.draggableItemId);
      const lottieElements = document.querySelectorAll(linkedLottieElement.lottieElementSelector);
      for (let i = 0; i < lottieElements.length; i++) {
        lottieElements[i].style.display = 'block';
      }
      detail.draggableElement.remove();
    }.bind(this);
    this.onDropOutside = function(customEvent) {
      const detail = DragNDropEventDetail.makeFromCustomEvent(customEvent);
      detail.draggableElement.remove();
    };
  }

  /**
   * @param {DragNDropLinkedLottieElement} linkedLottieElement
   */
  registerLinkedLottieElement(linkedLottieElement) {
    this.linkedLottieElements.set(linkedLottieElement.draggableItem.draggableItemId, linkedLottieElement);
  }

  /**
   * @param {string} draggableItemId
   * @return {DragNDropLinkedLottieElement}
   */
  getLinkedLottieElement(draggableItemId) {
    return this.linkedLottieElements.get(draggableItemId);
  }
}
