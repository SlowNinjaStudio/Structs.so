import {DragNDropEventDetail} from "./DragNDropEventDetail";
import {ElementInfo} from "../ElementInfo";
import {Rectangle} from "../MoreMath";

export class DragNDropDroppableArea {

  /**
   * @param {string} droppableAreaId
   */
  constructor(droppableAreaId) {
    this.droppableAreaId = droppableAreaId;
    this.onDropInside = () => {};
    this.onDropOutside = () => {};
    this.onDragOver = () => {};
  }

  init() {
    document.addEventListener('DRAG_N_DROP_DROP', function(customEvent) {
      const dropEventDetail = DragNDropEventDetail.makeFromCustomEvent(customEvent);
      const droppableAreaElement = document.getElementById(this.droppableAreaId);
      const droppableAreaPosition = ElementInfo.getPosition(droppableAreaElement);
      const droppableAreaShape = new Rectangle(
        droppableAreaElement.offsetWidth,
        droppableAreaElement.offsetHeight,
        droppableAreaPosition.x,
        droppableAreaPosition.y
      );

      if (droppableAreaShape.isPointInside(dropEventDetail.getPosition())) {
        this.onDropInside(customEvent);
      } else {
        this.onDropOutside(customEvent);
      }
    }.bind(this));

    document.addEventListener('DRAG_N_DROP_DRAG', function(customEvent) {
      const dropEventDetail = DragNDropEventDetail.makeFromCustomEvent(customEvent);
      const droppableAreaElement = document.getElementById(this.droppableAreaId);
      const droppableAreaPosition = ElementInfo.getPosition(droppableAreaElement);
      const droppableArea = new Rectangle(
        droppableAreaElement.offsetWidth,
        droppableAreaElement.offsetHeight,
        droppableAreaPosition.x,
        droppableAreaPosition.y
      );

      if (droppableArea.isPointInside(dropEventDetail.getPosition())) {
        this.onDragOver(customEvent);
      }
    }.bind(this));
  }

}
