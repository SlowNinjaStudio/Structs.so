export class DroidUIArtOverlay {

  /**
   * @param {string} id
   * @param {string} body
   * @param {string} href
   */
  constructor(id, body, href = 'javascript: void(0)') {
    this.id = id;
    this.body = body;
    this.href = href;
  }

  /**
   * @return {string}
   */
  render() {

    // Ensure that there are no spaces between the html elements or it won't render correctly
    return `<div id="${this.id}" class="art-overlay">`
      + `<div class="art-overlay-vertical-align-helper"></div>`
      + `<div class="art-overlay-body"><a href="${this.href}">${this.body}</a></div>`
      + `</div>`;
  }
}
