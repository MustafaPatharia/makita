class PromotionalBanner extends HTMLElement {
    connectedCallback() {
        var promoImage = this.attributes.promoImage.value;
        var promoTitle = this.attributes.title.value;

      this.innerHTML = `
        <div class="promo-banner flex" style="background-image: url(${promoImage})">
            <div class="container">
                <h2 class="pomo-banner-title">
                    ${promoTitle}
                </h2>
            </div>
        </div>
      `;
    }
  }
  
  customElements.define('promotional-banner', PromotionalBanner);