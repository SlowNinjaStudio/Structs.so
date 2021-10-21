export class DroidUIMessageListItem {

  /**
   * @param {string} message
   */
  constructor(message) {
    this.message = message;
  }
  render() {
    return `
      <div class="structure-list-item container p-3">
        <div class="row">
          <div class="col">${this.message}</div>
        </div>
      </div>
    `;
  }
}
