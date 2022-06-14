const products = [
    {
        "image" : "/assests/images/product-1.png",
        "title" : "Top Handle Chain Saw",
        "description" : "18V LXT® Brushless 12” Top Handle Chain Saw"
    },
    {
        "image" : "/assests/images/product-2.png",
        "title" : "Top Handle Chain Saw",
        "description" : "18V LXT® Brushless 12” Top Handle Chain Saw"
    },
    {
        "image" : "/assests/images/product-3.png",
        "title" : "Top Handle Chain Saw",
        "description" : "18V LXT® Brushless 12” Top Handle Chain Saw"
    },
    {
        "image" : "/assests/images/product-4.png",
        "title" : "Top Handle Chain Saw",
        "description" : "18V LXT® Brushless 12” Top Handle Chain Saw"
    },
    {
        "image" : "/assests/images/product-1.png",
        "title" : "Top Handle Chain Saw",
        "description" : "18V LXT® Brushless 12” Top Handle Chain Saw"
    },
    {
        "image" : "/assests/images/product-2.png",
        "title" : "Top Handle Chain Saw",
        "description" : "18V LXT® Brushless 12” Top Handle Chain Saw"
    },
    {
        "image" : "/assests/images/product-3.png",
        "title" : "Top Handle Chain Saw",
        "description" : "18V LXT® Brushless 12” Top Handle Chain Saw"
    },
    {
        "image" : "/assests/images/product-4.png",
        "title" : "Top Handle Chain Saw",
        "description" : "18V LXT® Brushless 12” Top Handle Chain Saw"
    },
  ]

  
  var feature = document.getElementById("product-feed");
  var new_arrival = document.getElementById("new-arrival-feed");
  var myHTML = '';
  
  products.map((item) => {
    myHTML += `
      <div class="grid-item product-feed-item">
          <img class="product-item-img" src="${item.image}" >
            <h4 class="product-title">${item.title}</h4>
            <p class="product-description">${item.description}</p>
            <button class="primary-btn flex m-auto">
                <p>
                    PRODUCT DETAILS
                </p>
                <img class="primary-btn-img" src="/assests/images/info.svg" >
            </button>
               
      </div>
    `;
    })
  
   feature.innerHTML = myHTML
   new_arrival.innerHTML = myHTML