import React, {Component} from 'react';

// Array of products
const productData = [
  {
    name: "Leather Belt",
    price: {
      base: 35,
      sale: 28
    },
    image: {
      url: "https://res.cloudinary.com/materialsandbox/image/upload/w_300,h_300,c_lpad,f_auto,q_auto/v1510871140/598ddfff937c5e00104d1062/ccfswlzcdsskq6ip9qtg.jpg"
    },
    options: true,
    link: {
      url: "https://www.volusion.com"
    },
    sku: "leather-belt"
  }, {
    name: "Canvas Belt",
    price: {
      base: 25,
      sale: 18
    },
    image: {
      url: "https://res.cloudinary.com/materialsandbox/image/upload/w_300,h_300,c_lpad,f_auto,q_auto/v1510871021/598ddfff937c5e00104d1062/kkaibs0wyimiiiupzald.jpg"
    },
    options: false,
    link: {
      url: "https://www.volusion.com"
    },
    sku: "canvas-belt"
  }, {
    name: "Braided Leather Belt",
    price: {
      base: 30,
      sale: null
    },
    image: {
      url: "https://res.cloudinary.com/materialsandbox/image/upload/w_300,h_300,c_lpad,f_auto,q_auto/v1510870932/598ddfff937c5e00104d1062/v5bdr22hep2udbjktgkh.jpg"
    },
    options: true,
    link: {
      url: "https://www.volusion.com"
    },
    sku: "braided-leather-belt"
  }, {
    name: "Travel Bag",
    price: {
      base: 18,
      sale: null
    },
    image: {
      url: "https://res.cloudinary.com/materialsandbox/image/upload/w_300,h_300,c_lpad,f_auto,q_auto/v1510870695/598ddfff937c5e00104d1062/cvpw60nfqyh0cwvyeo7g.jpg"
    },
    options: true,
    link: {
      url: "https://www.volusion.com"
    },
    sku: "travel-bag"
  }, {
    name: "Canvas Bag",
    price: {
      base: 45
    },
    image: {
      url: "https://res.cloudinary.com/materialsandbox/image/upload/w_300,h_300,c_lpad,f_auto,q_auto/v1510870612/598ddfff937c5e00104d1062/ofngcvfty7tck036mb7o.jpg"
    },
    options: true,
    link: {
      url: "https://www.volusion.com"
    },
    sku: "canvas-multi-purpose"
  }, {
    name: "Backpack",
    price: {
      base: 20
    },
    image: {
      url: "https://res.cloudinary.com/materialsandbox/image/upload/w_300,h_300,c_lpad,f_auto,q_auto/v1510870306/598ddfff937c5e00104d1062/fmbt3wmhuizqzdh1meo4.jpg"
    },
    options: null,
    link: {
      url: "https://www.volusion.com"
    },
    sku: "backpack"
  }, {
    name: "Townsend Sunglasses",
    price: {
      base: 180,
      sale: 175
    },
    image: {
      url: "https://res.cloudinary.com/materialsandbox/image/upload/w_300,h_300,c_lpad,f_auto,q_auto/v1510871872/598ddfff937c5e00104d1062/rdqyipz1iwkviiou0myh.jpg"
    },
    options: true,
    link: {
      url: "https://www.volusion.com"
    },
    sku: "townsend-sunglasses"
  }, {
    name: "Radiator Sunglasses",
    price: {
      base: 180,
      sale: null
    },
    image: {
      url: "https://res.cloudinary.com/materialsandbox/image/upload/w_300,h_300,c_lpad,f_auto,q_auto/v1510871843/598ddfff937c5e00104d1062/anv93570youaa5l5v4df.jpg"
    },
    options: null,
    link: {
      url: "https://www.volusion.com"
    },
    sku: "radiator-sunglasses"
  }, {
    name: "Aviator Sunglassess",
    price: {
      base: 180,
      sale: 175
    },
    image: {
      url: "https://res.cloudinary.com/materialsandbox/image/upload/w_300,h_300,c_lpad,f_auto,q_auto/v1510871812/598ddfff937c5e00104d1062/o5kddxdjs2x8xnmqjdbr.jpg"
    },
    options: null,
    link: {
      url: "https://www.volusion.com"
    },
    sku: "aviator-sunglassess"
  }, {
    name: "Wide Frames",
    price: {
      base: 110,
      sale: null
    },
    image: {
      url: "https://res.cloudinary.com/materialsandbox/image/upload/w_300,h_300,c_lpad,f_auto,q_auto/v1510871775/598ddfff937c5e00104d1062/q5dlgf1crgmbqse7yqg6.jpg"
    },
    options: null,
    link: {
      url: "https://www.volusion.com"
    },
    sku: "wide-frames"
  }, {
    name: "Two-Toned Frames",
    price: {
      base: 95
    },
    image: {
      url: "https://res.cloudinary.com/materialsandbox/image/upload/w_300,h_300,c_lpad,f_auto,q_auto/v1510871706/598ddfff937c5e00104d1062/kbvz8omxkg3vjsb3iuum.jpg"
    },
    options: true,
    link: {
      url: "https://www.volusion.com"
    },
    sku: "two-toned-frames"
  }, {
    name: "Retro Frames",
    price: {
      base: 110,
      sale: null
    },
    image: {
      url: "https://res.cloudinary.com/materialsandbox/image/upload/w_300,h_300,c_lpad,f_auto,q_auto/v1510871547/598ddfff937c5e00104d1062/s063kcuijj0ipavdlp9r.jpg"
    },
    options: null,
    link: {
      url: "https://www.volusion.com"
    },
    sku: "retro-peepers"
  }
];

class ProductList extends Component {
  render() {
    // map array in jsx
    console.log(productData)
    const listProducts = productData.map((data) =>
      <div className="col-xs-3 productDiv" key={data.name}>
        <img src={data.image.url}/>
          {data.name}
      </div>
    );
    return (
      <div className="productList row">
        {listProducts}
      </div>
    )
  }
}

export default ProductList
