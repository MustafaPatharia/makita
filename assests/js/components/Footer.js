class Footer extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <footer>
            <div class="grid-container-3 container">
                <div class="flex items-center footer-logo-section">
                    <img class="footer-logo" src="/assests/images/makita_logo.png" />
                </div>
                <div class="flex items-center social-section">
                    <p class="social-section-title">Keep always updated with our fresh NEWS & blog posts</p>
                    <input type="text" name="email" placeholder="Enter your email address" />
                    <div class="flex social-icons">
                        <img src="/assests/images/ic-facebook.svg" alt="Facebook" />
                        <img src="/assests/images/ic-instagram.svg" alt="instagram" />
                        <img src="/assests/images/ic-linkedin.svg" alt="linkedin" />
                        <img src="/assests/images/ic-twitter.svg" alt="twitter" />
                        <img src="/assests/images/ic-youtube.svg" alt="youtube" />
                    </div>
                </div>
                <div class="flex items-center footer-logo-section">
                    <img class="footer-logo" src="/assests/images/company-haser-logo.png" />
                </div>
            </div>
            <div class="footer-links-section">
                <div class="grid-container-3-footer-links container">
                    <div class="contact-us">
                        <div class="flex ofiice-locations">
                            <h6>CONTACT US</h6>
                            <p>HEAD OFFICE</p>
                            <p>BRANCH DETAILS</p>
                        </div>
                        <div class="flex contact-us-details">
                            <img src="/assests/images/phone-icon.png" class="contact-us-icon"/>
                            <p class="contact-us-detail-p">+971 4 2222471   -  +971 4 2284314
                            </p>
                        </div>
                        <div class="flex contact-us-details">
                            <img src="/assests/images/landline-icon.png" class="contact-us-icon"/>
                            <p class="contact-us-detail-p">+971 4 2275803
                            </p>
                        </div>
                        <div class="flex contact-us-details">
                            <img src="/assests/images/email-icon.png" class="contact-us-icon"/>
                            <p class="contact-us-detail-p">info@makitauae.com
                            </p>
                        </div>
                        <div class="flex contact-us-details">
                            <img src="/assests/images/location-icon.png" class="contact-us-icon"/>
                            <p class="contact-us-detail-p">Opp. Al Maktoum Hospital,<br/>P. O. Box 1825, Deira, Dubai.
                            </p>
                        </div>
                    </div>
                    <div class="footer-menu-links">
                        <p>CORDLESS</p>
                        <p>CORDED</p>
                        <p>GARDEN POWER TOOLS</p>
                        <p>ACCESSORIES</p>
                        <p>SUPPORT</p>
                    </div>
                    <div class="footer-menu-links">
                        <p>ABOUT US</p>
                        <p>CCONTACT US</p>
                        <p>CARRERS</p>
                        <p>BLOG</p>
                        <p>NEWS & UPDATES</p>
                    </div>
                    <div>
                    </div>
                </div>
            </div>
        </footer>
      `;
    }
  }
  
  customElements.define('footer-component', Footer);