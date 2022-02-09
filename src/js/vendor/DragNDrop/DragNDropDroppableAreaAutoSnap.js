import {DragNDropDroppableArea} from "./DragNDropDroppableArea";
import {DragNDropEventDetail} from "./DragNDropEventDetail";
import {DragNDropSnapContainer} from "./DragNDropSnapContainer";

export class DragNDropDroppableAreaAutoSnap extends DragNDropDroppableArea {

  /**
   * @param {string} droppableAreaId
   */
  constructor(droppableAreaId) {
    super(droppableAreaId);
    this.snapContainers = new Map();
    this.onDropInside = function(customEvent) {
      const detail = DragNDropEventDetail.makeFromCustomEvent(customEvent);
      const snapContainer = this.getSnapContainer(detail.draggableItemId);
      if (snapContainer) {
        snapContainer.containerElement.replaceChildren(detail.draggableElement);
        detail.draggableElement.style.position = 'relative';
        detail.draggableElement.style.left = 'auto';
        detail.draggableElement.style.top = 'auto';
        detail.draggableElement.style.zIndex = '0';
      } else {
        detail.draggableElement.remove();
      }
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
