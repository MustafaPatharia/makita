class Banner extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      <div class="relative">

            <!-- Full-width images with number and caption text -->
            <div class="mySlides fade">
                <img src="/assests/images/banner-image1.png" style="width:100%">
                <div class="container">
                    <div class="text">
                        <h1>
                            ENERGIZE <br> THE GRID
                        </h1>
                        <p>
                            Learn how Makita® Cordless Solutions can <br>
                            empower linemen and utility installers to work<br>
                            with increased efficiency, lower noise, and zero emissions.
                        </p>
                        <button class="primary-btn flex">
                            <p>
                                KNOW MORE
                            </p>
                            <img class="primary-btn-img" src="/assests/images/know-more.svg" >
                        </button>
                    </div>
                </div>
            </div>
        
            <div class="mySlides fade">
                <img src="/assests//images//banner-image1.png" style="width:100%">
                <div class="container">
                    <div class="text">
                        <h1>
                            ENERGIZE <br> THE GRID
                        </h1>
                        <p>
                            Learn how Makita® Cordless Solutions can <br>
                            empower linemen and utility installers to work<br>
                            with increased efficiency, lower noise, and zero emissions.
                        </p>
                        <button class="primary-btn flex">
                            <p>
                                KNOW MORE
                            </p>
                            <img class="primary-btn-img" src="/assests/images/know-more.svg" >
                        </button>
                    </div>
                </div>
            </div>
        
            <div class="mySlides fade">
                <img src="/assests/images/banner-image1.png" style="width:100%">
                <div class="container">
                    <div class="text">
                        <h1>
                            ENERGIZE <br> THE GRID
                        </h1>
                        <p>
                            Learn how Makita® Cordless Solutions can <br>
                            empower linemen and utility installers to work<br>
                            with increased efficiency, lower noise, and zero emissions.
                        </p>
                        <button class="primary-btn flex">
                            <p>
                                KNOW MORE
                            </p>
                            <img class="primary-btn-img" src="/assests/images/know-more.svg" >
                        </button>
                    </div>
                </div>
            </div>
        
        </div>

        <!-- The dots/circles -->
        <div style="text-align:center" class="absolute dots-wrapper">
            <span class="dot active" onclick="currentSlide(1)"></span>
            <span class="dot" onclick="currentSlide(2)"></span>
            <span class="dot" onclick="currentSlide(3)"></span>
        </div>
      `;
    }
  }
  
  customElements.define('banner-component', Banner);