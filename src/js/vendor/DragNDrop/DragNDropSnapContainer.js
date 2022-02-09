export class DragNDropSnapContainer {

  /**
   * @param {string} snapContainerId
   * @param {string} draggableItemId
   */
  constructor(snapContainerId, draggableItemId) {
    this.snapContainerId = snapContainerId;
    this.draggableItemId = draggableItemId;
    this.containerElement = document.getElementById(this.snapContainerId);
  }

}
