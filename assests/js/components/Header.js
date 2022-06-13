class Header extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      <div class="navbar" id="navBar">
            <div class="container flex items-center">
                <div class="logo">
                    <img class="logo" src="/assests/images/makita_logo.png" />
                </div>
                <div class="links">
                    <a href="#cordless">CORDLESS</a>
                    <a href="#corded">CORDED</a>
                    <a href="#garder-power-tools">GARDEN POWER TOOLS</a>
                    <a href="#accessories">ACCESSORIES</a>
                    <a href="#support">SUPPORT</a>
                    <a href="javascript:void(0);" class="icon d-none" onclick="navBarToggle()">
                        <img src="/assests/images/hamburger.svg" class=""></img>
                    </a>
                </div>
                <div class="flex">
                    <div class="flex nav-primary-btn-wrapper ">
                        <button class="primary-btn flex">
                            <p>
                                WHERE TO BUY
                            </p>
                            <img class="primary-btn-img" src="/assests/images/location.svg" >
                        </button>
                    </div>
                    <img src="/assests/images/search.svg" >
                </div>
            </div>
        </div>
      `;
    }
  }
  
  customElements.define('header-component', Header);