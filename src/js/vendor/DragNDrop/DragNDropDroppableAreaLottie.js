import {DragNDropDroppableArea} from "./DragNDropDroppableArea";
import {DragNDropEventDetail} from "./DragNDropEventDetail";
import {DragNDropSnapContainer} from "./DragNDropSnapContainer";

export class DragNDropDroppableAreaLottie extends DragNDropDroppableArea {

  /**
   * @param {string} droppableAreaId
   */
  constructor(droppableAreaId) {
    super(droppableAreaId);
    this.snapContainers = new Map();
    this.onDropInside = function(customEvent) {
      const detail = DragNDropEventDetail.makeFromCustomEvent(customEvent);
      if (detail.draggableItemId === 'draggableItemCarDefensiveShield') {
        const lottieElements = document.querySelectorAll('.car_defensive');
        for (let i = 0; i < lottieElements.length; i++) {
          console.log(lottieElements[i].style.display);
          lottieElements[i].style.display = 'block';
        }
      }
      detail.draggableElement.remove();
    }.bind(this);
    this.onDropOutside = function(customEvent) {
      const detail = DragNDropEventDetail.makeFromCustomEvent(customEvent);
      detail.draggableElement.remove();
    };
  }

  /**
   * @param {DragNDropSnapContainer} snapContainer
   */
  addSnapContainer(snapContainer) {
    this.snapContainers.set(snapContainer.draggableItemId, snapContainer);
  }

  /**
   * @param draggableItemId
   * @return {DragNDropSnapContainer}
   */
  getSnapContainer(draggableItemId) {
    return this.snapContainers.get(draggableItemId);
  }

}
