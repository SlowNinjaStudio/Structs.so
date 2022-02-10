import {Coordinate} from "../MoreMath";

export class DragNDropEventDetail {

  /**
   * @param {string} draggableItemId
   * @param {HTMLElement} draggableElement
   * @param {number} x
   * @param {number} y
   */
  constructor(draggableItemId, draggableElement, x, y) {
    this.draggableItemId = draggableItemId;
    this.draggableElement = draggableElement;
    this.x = x;
    this.y = y;
  }

  /**
   * @param {CustomEvent} customEvent
   * @return {DragNDropEventDetail}
   */
  static makeFromCustomEvent(customEvent) {
    return new DragNDropEventDetail(
      customEvent.detail.draggableItemId,
      customEvent.detail.draggableElement,
      customEvent.detail.x,
      customEvent.detail.y
    );
  }

  /**
   * @return {Coordinate}
   */
  getPosition() {
    return new Coordinate(this.x, this.y);
  }

}
