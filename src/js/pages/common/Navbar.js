export class Navbar {
  constructor(page) {
    this.page = page.toUpperCase();
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
              <li class="nav-item mx-2">
                <a class="nav-link ${ this.page === 'R&D' ? 'active' : '' }" href="#">R&D</a>
              </li>
              <li class="nav-item mx-2">
                <a class="nav-link ${ this.page === 'SCHEMATICS' ? 'active' : '' }" href="/schematics.html">Schematics</a>
              </li>
              <li class="nav-item mx-2">
                <a class="nav-link ${ this.page === 'STRUCTURES' ? 'active' : '' }" href="/index.html">Structures</a>
              </li>
            </ul>
            <form class="d-flex">
              <input class="form-control me-2 nes-input is-dark" type="search" placeholder="Search" aria-label="Search">
              <button class="btn btn-outline-success nes-btn is-primary" type="submit">Search</button>
            </form>
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
