const category_products = [
    {
        "image" : "/assests/images/DEMOLITION HAMMER KIT.png",
        "title" : "DEMOLITION HAMMER KIT",
        "subtitle" : "GMH02PM",
        "description" : "80V max (40V max X2) XGT® Brushless 28 lb. AVT® Demolition Hammer Kit, accepts SDS-MAX bits, AWS® Capable (4.0Ah)"
    },
    {
        "image" : "/assests/images/Dust Extractor Kit.png",
        "title" : "Dust Extractor Kit",
        "subtitle" : "XCV21PTX",
        "description" : "36V (18V X2) LXT® Brushless 2.1 Gallon HEPA Filter Dry Dust Extractor Kit"
    },
    {
        "image" : "/assests/images/DEMOLITION HAMMER KIT.png",
        "title" : "DEMOLITION HAMMER KIT",
        "subtitle" : "GMH02PM",
        "description" : "80V max (40V max X2) XGT® Brushless 28 lb. AVT® Demolition Hammer Kit, accepts SDS-MAX bits, AWS® Capable (4.0Ah)"
    },
    {
        "image" : "/assests/images/Angle Grinder Kit.png",
        "title" : "Angle Grinder Kit",
        'subtitle' : "GAG03M1",
        "description" : "40V max XGT® Brushless Cordless 4-1/2” / 5” Paddle Switch Angle Grinder Kit, with Electric Brake (4.0Ah)."
    },
    {
        "image" : "/assests/images/Compound Miter Saw Kit.png",
        "title" : "Compound Miter Saw Kit",
        'subtitle' : "XSL06PM",
        "description" : "36V (18V X2) LXT® Brushless 10” Dual-Bevel Sliding Compound Miter Saw Kit"
    },
    {
        "image" : "/assests/images/Angle Grinder Kit.png",
        "title" : "Angle Grinder Kit",
        'subtitle' : "GAG03M1",
        "description" : "40V max XGT® Brushless Cordless 4-1/2” / 5” Paddle Switch Angle Grinder Kit, with Electric Brake (4.0Ah)."
    }
  ]
  var wrapper = document.getElementById("category-product-feed");
  
  var myHTML = '';
  
  category_products.map((item) => {
    myHTML += `
      <div class="grid-item flex category-product-feed-item">
          <img src="${item.image}" >
          <div class="category-product-details">
            <h4 class="category-product-title">${item.title}</h4>
            <p class="category-product-subtitle">${item.subtitle}</p>
            <p class="category-product-description">${item.description}</p>
            <div class="flex">
                <button class="primary-btn flex">
                    <p>
                        QUICK VIEW
                    </p>
                    <img class="primary-btn-img" src="/assests/images/view.svg" >
                </button>
                <button class="primary-btn flex">
                    <p>
                       PRODUCT DETAILS
                    </p>
                    <img class="primary-btn-img" src="/assests/images/info.svg" >
                </button>
            </div>
            
          </div>
      </div>
    `;
    })
  
    wrapper.innerHTML = myHTML