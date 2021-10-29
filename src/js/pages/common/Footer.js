export class Footer {
  render() {
    return `
      <footer class="container py-4">
        <div class="row">
          <div class="col">
            <a class="slow-ninja-footer-link" href="https://slow.ninja" target="_blank"><img src="/img/SlowNinja-Logo-bw.png" alt="Slow Ninja"></a>
          </div>
        </div>
        <div class="row social-links">
          <div class="col">
            <a href="https://discord.gg/fzDzx5DnFS" target="_blank"><i class="bi bi-discord"></i></a>
            <a href="https://slowninja.notion.site/Watt-s-Happening-4307131498324176bd8692593c39c892" target="_blank"><i class="bi bi-journal-richtext"></i></a>
          </div>
        </div>
      </footer>
    `;
  }
  init(id) {
    document.getElementById(id).innerHTML = this.render();
  }
}
