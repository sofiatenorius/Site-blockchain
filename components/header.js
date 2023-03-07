class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <nav class="navbar navbar-expand-md navbar-dark" style="background-color: #1a1a1c;">
        <div class="container">
          <a class="navbar-brand" href="index.html">
            <img  class='d-inline-block' src="img/logo.png" alt="" width="75" height="50">
          </a>
          <button type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" class="navbar-toggler" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarToggleExternalContent">
            <ul class="navbar-nav ms-auto mb2 mb-lg-0">
              <li class="nav-item">
                <a href="index.html" class="nav-link">Início</a>
              </li>
              <li class="nav-item">
                <a href="pag_sobre.html" class="nav-link">Sobre</a>
              </li>
              <li class="nav-item">
                <a href="pag_contato.html" class="nav-link">Contato</a>
              </li>
            </ul>
          </div>  
        </div>
      </nav>
    `;
  }
}

customElements.define('header-component', Header);