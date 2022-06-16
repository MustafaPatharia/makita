const category = [
  {
      "image" : "/assests/images/80V.png",
      "title" : "50+ PRODUCTS",
      "description" : "The XGT® System is a new 40V | 80V max system of cordless equipment and tools"
  },
  {
      "image" : "/assests/images/36V.png",
      "title" : "275+ PRODUCTS",
      "description" : "The LXT® System is the world’s largest compatible 18V slide-style battery system"
  },
  {
      "image" : "/assests/images/12V.png",
      "title" : "70+ PRODUCTS",
      "description" : "The CXT® System provides the most compact solution with superior comfort and capacity."
  }
]
var wrapper = document.getElementById("category-content");

var myHTML = '';

category.map((item) => {
  myHTML += `
    <div class="grid-item relative category-content-item">
        <div >
        <img class="category-content-item-img" src="${item.image}" >
        <div class="absolute category-img-content">
          <h3 class="category-title">${item.title}</h3>
          <p class="category-description">${item.description}</p>
          <button class="primary-btn flex">
              <p>
                  WHERE TO BUY
              </p>
              <img class="primary-btn-img" src="/assests/images/location.svg" >
          </button>
        </div>
        </div>
        
    </div>
  `;
  })

  wrapper.innerHTML = myHTML