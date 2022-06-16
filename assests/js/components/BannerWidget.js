const widget_data = [
    {
    "image" : "/assests/images/widget-img-1.png",
    "title" : "ENERGIZE THE GRID",
    "description" : "SOLUTIONS FOR UTILITY INSTALLERS"
},
{
    "image" : "/assests/images/widget-img-2.png",
    "title" : "GET CORDED POWER",
    "description" : "WITH CORDLESS CONVENIENCE"
},
{
    "image" : "/assests/images/widget-img-3.png",
    "title" : "LASERS",
    "description" : "SELF-LEVELING MULTI-DIRECTIONAL LASERS"
},
{
    "image" : "/assests/images/widget-img-4.png",
    "title" : "RULE THE OUTDOORS",
    "description" : "CHAIN SAWS, BLOWERS, AND MORE"
}]

class BannerWidget extends HTMLElement {
    connectedCallback() {
        var content = ''; 

        widget_data.map((item) => {
            content += `
            <div class="banner-widget-item">
                <div class="banner-widget-item-img-wrapper">
                    <img src="${item.image}" />
                </div>
                <div class="banner-widget-item-content">
                    <h5>${item.title}</h5>
                    <p>${item.description}</p>
                </div>
            </div>
            `;
            })

        this.innerHTML = `
        <div class="banner-widget" >
            ${content}
        </div>
        `;
    }
  }
  
  customElements.define('banner-widget', BannerWidget);