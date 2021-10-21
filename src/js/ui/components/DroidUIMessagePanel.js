export class DroidUIMessagePanel {
  constructor(title, message) {
    this.title = title;
    this.message = message;
  }
  render() {
    return `
      <div class="message-panel-wrapper col">
        <div class="message-panel nes-container">
          <h2>${this.title}</h2>
          <p>${this.message}</p>
        </div>
      </div>
    `;
  }
}
