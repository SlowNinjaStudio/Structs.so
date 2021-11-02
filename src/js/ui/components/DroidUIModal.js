export class DroidUIModel {
  /**
   * @param {string} modalId
   * @param {string} modalTitle
   * @param {string} bodyHtml
   * @param {string} confirmButtonText
   * @param {function} confirmButtonCallback
   * @param {string} cancelButtonText
   * @param {function} cancelButtonCallback
   */
  constructor(
    modalId,
    modalTitle,
    bodyHtml,
    confirmButtonText= '',
    cancelButtonText = '',
    confirmButtonCallback = null,
    cancelButtonCallback = null
  ) {
    this.modalId = modalId;
    this.modalTitle = modalTitle;
    this.bodyHtml = bodyHtml;
    this.confirmButtonText = confirmButtonText;
    this.cancelButtonText = cancelButtonText;
    this.confirmButtonCallback = confirmButtonCallback;
    this.cancelButtonCallback = cancelButtonCallback;
  }

  getConfirmButtonId() {
    return `${this.modalId}-btn-confirm`;
  }

  getCancelButtonId() {
    return `${this.modalId}-btn-cancel`;
  }

  render() {
    return `
      <div class="droid-ui-generic-modal modal fade" id="${this.modalId}" tabIndex="-1" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">${this.modalTitle}</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">${this.bodyHtml}</div>
            <div class="modal-footer">
              ${this.cancelButtonText === '' ? '' : `
                <button
                  id="${this.getCancelButtonId()}"
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >${this.cancelButtonText}</button>
              `}
              ${this.confirmButtonText === '' ? '' : `
                <button
                    id="${this.getConfirmButtonId()}"
                  type="button"
                  class="btn btn-primary"
                  data-bs-dismiss="modal"
                >${this.confirmButtonText}</button>
              `}
            </div>
          </div>
        </div>
      </div>
    `;
  }

  show() {
    const modal = window.bootstrap.Modal.getOrCreateInstance(document.querySelector(`#${this.modalId}`));
    modal.show();
  }

  hide() {
    const modal = window.bootstrap.Modal.getOrCreateInstance(document.querySelector(`#${this.modalId}`));
    modal.hide();
  }

  /**
   * @param {string} modalContainerId
   */
  init(modalContainerId) {
    const modalContainer = document.getElementById(modalContainerId);
    modalContainer.innerHTML = this.render();

    if (this.confirmButtonCallback !== null) {
      document.getElementById(this.getConfirmButtonId()).addEventListener('click', function () {
        this.confirmButtonCallback();
      }.bind(this));
    }
    if (this.cancelButtonCallback !== null) {
      document.getElementById(this.getCancelButtonId()).addEventListener('click', function () {
        this.cancelButtonCallback();
      }.bind(this));
    }
  }
}
