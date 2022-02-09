import {ElementInfo} from "../ElementInfo";
import {Coordinate} from "../MoreMath";
import {DragNDropEventDetail} from "./DragNDropEventDetail";

export class DragNDropDraggableItem {

  /**
   * @param {string} draggableItemId
   */
  constructor(draggableItemId) {
    this.draggableItemId = draggableItemId;
    this.originalDraggableElement = document.getElementById(this.draggableItemId);
    this.draggableElement = this.originalDraggableElement;
    this.initialZIndex = this.draggableElement.style.zIndex;
    this.elementCenter = ElementInfo.getElementCenter(this.draggableElement);
    this.copyCount = 0;
  }

  /**
   * @return {function}
   */
  onDrag() {
    return function(event) {
      const mousePosition = Coordinate.makeFromEvent(event);
      const detail = new DragNDropEventDetail(
        this.draggableItemId,
        this.draggableElement,
        mousePosition.x,
        mousePosition.y
      );
      const dragEvent = new CustomEvent('DRAG_N_DROP_DRAG', { detail });

      this.draggableElement.style.left = mousePosition.x - this.elementCenter.x + 'px';
      this.draggableElement.style.top = mousePosition.y - this.elementCenter.y + 'px';
      document.dispatchEvent(dragEvent);
    }.bind(this);
  }

  /**
   * @param {string} eventName
   * @param {function} itemDragHandler
   * @param {string} dragType COPY|MOVE
   * @param {HTMLElement} selectedDraggableElement
   * @return {function}
   */
  onDragStart(eventName, itemDragHandler, dragType = 'COPY', selectedDraggableElement = null) {
    return function (event) {
      event.preventDefault();

      if (dragType === 'COPY') {
        this.copyCount++;
        this.draggableElement = this.originalDraggableElement.cloneNode(true);
        this.draggableElement.id = `${this.draggableElement.id}-copy-${this.copyCount}`;
      } else if (dragType === 'MOVE' && selectedDraggableElement !== null) {
        this.draggableElement = selectedDraggableElement;
      }
      document.body.appendChild(this.draggableElement);

      const eventEnd = (eventName === 'touchmove') ? 'touchend' : 'mouseup';
      const endHandler = this.onDrop(eventName, itemDragHandler);
      document.addEventListener(eventEnd, endHandler, { once: true });

      const mousePosition = Coordinate.makeFromEvent(event);
      this.draggableElement.style.position = 'absolute';
      this.draggableElement.style.zIndex = '999';
      this.draggableElement.style.left = mousePosition.x - this.elementCenter.x + 'px';
      this.draggableElement.style.top = mousePosition.y - this.elementCenter.y + 'px';

      document.addEventListener(eventName, itemDragHandler);
    }.bind(this);
  }

  /**
   * @param {string} eventName
   * @param {function} itemDragHandler
   * @return {function}
   */
  onDrop(eventName, itemDragHandler) {
    return function (event) {
      event.preventDefault();

      document.removeEventListener(eventName, itemDragHandler);

      const eventStart = (eventName === 'touchmove') ? 'touchstart' : 'mousedown';
      this.draggableElement.addEventListener(eventStart, this.onDragStart(
        eventName,
        itemDragHandler,
        'MOVE',
        this.draggableElement
      ));

      this.draggableElement.style.zIndex = this.initialZIndex;

      const mousePosition = Coordinate.makeFromEvent(event);
      const detail = new DragNDropEventDetail(
        this.draggableItemId,
        this.draggableElement,
        mousePosition.x,
        mousePosition.y
      );
      const dropEvent = new CustomEvent('DRAG_N_DROP_DROP', { detail });

      document.dispatchEvent(dropEvent);
    }.bind(this);
  }

  init() {
    const itemDragHandler = this.onDrag();

    const touchStartHandler = this.onDragStart('touchmove', itemDragHandler, 'COPY');
    const mouseDownHandler = this.onDragStart('mousemove', itemDragHandler, 'COPY');

    this.originalDraggableElement.addEventListener('touchstart', touchStartHandler);
    this.originalDraggableElement.addEventListener('mousedown', mouseDownHandler);
  }

}
