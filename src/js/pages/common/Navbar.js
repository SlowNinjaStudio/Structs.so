export class Navbar {
  constructor(page, options = {}) {
    this.page = page.toUpperCase();
    this.searchEnabled = options.hasOwnProperty('searchEnabled') && options.searchEnabled;
  }
  render() {
    return `
      <nav class="main-nav navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="/index.html">Structs</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item mx-2 d-lg-none">
                <a class="nav-link" href="#"><span class="settings-text">Settings<span><img class="settings-icon" src="/img/icons/icon-settings.png" alt="Settings Icon"></a>
              </li>
              <li class="nav-item mx-2">
                <a class="nav-link ${ this.page === 'R&D' ? 'active' : '' }" href="/research.html">R&D</a>
              </li>
              <li class="nav-item mx-2">
                <a class="nav-link ${ this.page === 'SCHEMATICS' ? 'active' : '' }" href="/schematics.html">Schematics</a>
              </li>
              <li class="nav-item mx-2">
                <a class="nav-link ${ this.page === 'STRUCTURES' ? 'active' : '' }" href="/structures.html">Structures</a>
              </li>
            </ul>
            ${this.searchEnabled ? `
              <div class="d-flex">
                <input id="nav-search-input" class="form-control me-2 nes-input is-dark" type="search" placeholder="Search" aria-label="Search">
                <button id="nav-search-btn" class="btn btn-outline-success nes-btn is-primary" type="button">Search</button>
              </div>
            ` : ''}
            <div class="nav-settings d-none d-lg-inline-block">
              <a href="#" class="nav-link"></a>
            </div>
          </div>
        </div>
      </nav>
    `;
  }
  init(id) {
    const navWrapper = document.getElementById(id);
    navWrapper.innerHTML = this.render();
  }
}
