export class DroidUIStatusCategory {

  /**
   * @param {string} listElementId
   * @param {string} containerClass
   * @param {string} categoryIconSrc
   * @param {string} categoryIconAlt
   */
  constructor(listElementId, containerClass, categoryIconSrc, categoryIconAlt) {
    this.listElementId = listElementId;
    this.containerClass = containerClass;
    this.categoryIconSrc = categoryIconSrc;
    this.categoryIconAlt = categoryIconAlt;
  }

  render() {
    return `
      <div id="${this.listElementId}-container" class="status-container px-2 ${this.containerClass}">
        <div class="row">
          <div class="col">
            <h2 class="status-container-header py-2">
              <img
                src="${this.categoryIconSrc}"
                alt="${this.categoryIconAlt}"
                class="status-container-icon"
              ><span class="status-container-header-text"></span>
            </h2>
          </div>
        </div>
        <div id="${this.listElementId}"></div>
      </div>
    `;
  }
}
