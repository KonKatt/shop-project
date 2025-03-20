export class Product{
  id;
  image;
  name;
  rating;
  price;
  keywords;

  constructor(productDetails){
    this.id = productDetails.id;
    this.image = productDetails.image;
    this.name = productDetails.name;
    this.rating = {
      stars: productDetails.rating_stars,
      count: productDetails.rating_count};
    this.price = productDetails.price;
    this.keywords = productDetails.keywords;
  }

  getImgUrl(){
    return `images/products/${this.image}`;
  }
  
  getStarsUrl(){
    return `images/ratings/rating-${this.rating.stars * 10}.png`;
  }

  extraInfoHTML(){
    return ``;
  }

} 

export class Clothing extends Product{
  size;

  constructor(productDetails){
    super(productDetails);
    this.size = productDetails.size;
  }

  extraInfoHTML(){
    return `
      Размер: ${this.size}
    `;
  }
}

export class Appliance extends Product{
  warrantyPeriod;

  constructor(productDetails){
    super(productDetails);
    this.warrantyPeriod = productDetails.warranty_period;
  }

  extraInfoHTML(){
    return `
      Гарантийный срок: ${this.warrantyPeriod}

    `;
  }
}



export let products = [];
export function loadProductsFetch(){
  
  const promise = fetch(
    './backend/config.php'
    ).then((response) => {
    return (response.json());})
      .then((productsData) => {
        products = productsData.map((productDetails) => {
          if (productDetails.type === 'clothing'){
            return new Clothing(productDetails);
          }
            else if (productDetails.type === 'appliance'){
              return new Appliance(productDetails);
            }
                else { 
                return new Product(productDetails);
              }
        });
        
      });
      return promise;
}


/*
export const products = [ 
  {id: "39f55601-9dd0-420d-8ed4-390fc8749a1b",
  image: "athletic-cotton-socks-6-pairs.jpg",
  name: "Носки высокие набор",
  rating: {
    stars: 4.5,
    count: 87
  },
  price: 500,
  keywords: [
    "носки",
    "спорт",
    "одежда"
  ],
  type: "clothing",
  size: 36}, 
    {
      id: "17f2af35-dc86-4a43-9a72-b992268eafeb",
      image: "intermediate-composite-basketball.jpg",
      name: "Баскетбольный мяч",
      rating: {
        stars: 4,
        count: 127
      },
      price: 600,
      keywords: [
        "спорт",
        "баскетболл"
      ]
    },
    {
      id: "148c712b-70a1-42ac-93a4-0dbc61e5e9b4",
      image: "adults-plain-cotton-tshirt-2-pack-teal.jpg",
      name: "Рубашки мужские взрослые - 2 в наборе",
      rating: {
        stars: 4.5,
        count: 56
      },
      price: 799,
      keywords: [
        "футболка",
        "одежда",
        "мужское"
      ],
      type: "clothing",
      size: "41"
    },
    {
      id: "80f1b9be-440a-4938-8ff0-a2e3449e6668",
      image: "vacuum_cleaner.png",
      name: "Бытовой пылесос 2000 Series XB2042",
      rating: {
        stars: 5,
        count: 2197
      },
      price: 6899,
      keywords: [
        "пылесос",
        "для дома",
        "техника"
      ],
      type: 'appliance',
      warrantyPeriod: '5 лет'
    },
    {
      id: "01bbeee3-4d0c-4c42-89f6-305dd305abca",
      image: "adults-plain-cotton-tshirt-2-pack-red.jpg",
      name: "Рубашки мужские взрослые - 2 в наборе",
      rating: {
        stars: 4.5,
        count: 56
      },
      price: 799,
      keywords: [
        "футболка",
        "одежда",
        "мужское"
      ],
      type: "clothing",
      size: "45"
    },
      { id: "fd782da2-8ada-4742-9cc2-475792f145fc",
        image: "men-cozy-fleece-zip-up-hoodie-black.jpg",
        name: "Толстовка черная мужская взрослая",
        rating: {
          stars: 3.5,
          count: 56
        },
        price: 1099,
        keywords: [
          "толстовка",
          "свитшот",
          "одежда",
          "мужское",
          "худи"
        ],
        type: "clothing",
        size: "60"
      },
    {
      id: "b880acff-ebb7-4614-831b-bf7d9fa21fd5",
      image: "plain-hooded-fleece-sweatshirt-teal.jpg",
      name: "Толстовка женская зеленая",
      rating: {
        stars: 4.5,
        count: 317
      },
      price: 1200,
      keywords: [
        "худи",
        "толстовка",
        "одежда",
        "женское",
        "свитшот"
      ],
      type: "clothing",
      size: "60"
    },
    {
      id: "77919bbe-0e56-475b-adde-4f24dfed3a04",
      image: "cotton-bath-towels-gray.png",
      name: "Роскошный набор полотенец - Графитовый серый",
      rating: {
        stars: 4.5,
        count: 144
      },
      price: 249,
      keywords: [
        "ванная",
        "полотенце"
      ]
    },
    {
      id: "3fdfe8d6-9a15-4979-b459-585b0d0545b9",
      image: "liquid-laundry-detergent-plain.jpg",
      name: "Жидкое моющее средство для стирки",
      rating: {
        stars: 4.5,
        count: 305
      },
      price: 549,
      keywords: [
        "ванная",
        "уборка",
        "моющее средство"
      ]
    },
    {
      id: "58b4fc92-e98c-42aa-8c55-b6b79996769a",
      image: "knit-athletic-sneakers-gray.jpg",
      name: "Водонепроницаемые спортивные кроссовки",
      rating: {
        stars: 4,
        count: 89
      },
      price: 4390,
      keywords: [
        "ботинки",
        "спорт",
        "обувь"
      ],
      type: "clothing",
      size: "39"
    },
    {
      id: "aad29d11-ea98-41ee-9285-b916638cac4a",
      image: "round-sunglasses-black.jpg",
      name: "Очки солнечные",
      rating: {
        stars: 4.5,
        count: 30
      },
      price: 1560,
      keywords: [
        "очки",
        "аксессуары",
        "пляж"
      ]
    },
    {
      id: "04701903-bc79-49c6-bc11-1af7e3651358",
      image: "women-beach-sandals.jpg",
      name: "Женские сандали - бежевые",
      rating: {
        stars: 4.5,
        count: 562
      },
      price: 2499,
      keywords: [
        "обувь",
        "сандали",
        "женское",
        "пляж",
        "лето"
      ],
      type: "clothing",
      size: 34
    },
    {
      id: "901eb2ca-386d-432e-82f0-6fb1ee7bf969",
      image: "blackout-curtains-black.jpg",
      name: "Комплект затемняющих штор, 4 шт",
      rating: {
        stars: 4.5,
        count: 232
      },
      price: 4599,
      keywords: [
        "спальня",
        "шторы",
        "дом"
      ]
    },
    {
      id: "82bb68d7-ebc9-476a-989c-c78a40ee5cd9",
      image: "umbrella.jpg",
      name: "Зонт темно-зеленый дождевой",
      rating: {
        stars: 4,
        count: 160
      },
      price: 699,
      keywords: [
        "аксессуары",
        "дождь"
      ]
    },
    {
      id: "c2a82c5e-aff4-435f-9975-517cfaba2ece",
      image: "electric-glass-and-steel-hot-water-kettle.webp",
      name: "Электрический чайник для заваривания чая из стекла",
      rating: {
        stars: 5,
        count: 846
      },
      price: 3074,
      keywords: [
      "бытовая техника",
      "кухня"
      ],
      type: 'appliance',
      warrantyPeriod: '1 год'
    },
    {
      id: "a82c6bac-3067-4e68-a5ba-d827ac0be010",
      image: "straw-sunhat.webp",
      name: "Соломенная шляпа",
      rating: {
        stars: 4,
        count: 215
      },
      price: 2200,
      keywords: [
        "шляпки",
        "соломенная шляпа",
        "лето"
      ]
    }
  ].map((productDetails) => {
      if (productDetails.type === 'clothing'){
        return new Clothing(productDetails);
      }
        else if (productDetails.type === 'appliance'){
          return new Appliance(productDetails);
        }
            else { 
            return new Product(productDetails);
          }
    });
*/
export function getProduct(productId){
  let matchingProduct;
  for (const product of products){
      if (product.id === productId){
          matchingProduct = product;
          break;
      }
    }
  return matchingProduct;
}