import React, { useContext } from "react";
import "./Gallery.css";
import { CartContext } from "../context/CartContext"; // ✅ Added

const artworks = [
  {
    id: 1,
    title: "Mona Lisa",
    artist: "Leonardo da Vinci",
    price: "$1,000,000",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Mona_Lisa.jpg",
  },
  {
    id: 2,
    title: "Grace",
    artist: "Raja Ravi Varma",
    price: "$850,000",
    image: "https://mapacademy.io/wp-content/uploads/2022/04/raja-ravi-varma-maharashtrian-lady-oil-painting-1s.jpg",
  },
  {
    id: 3,
    title: "The Persistence of Memory",
    artist: "Salvador Dalí",
    price: "$620,000",
    image: "https://upload.wikimedia.org/wikipedia/en/d/dd/The_Persistence_of_Memory.jpg",
  },
  {
    id: 4,
    title: "Girl with a Pearl Earring",
    artist: "Johannes Vermeer",
    price: "$740,000",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Meisje_met_de_parel.jpg",
  },
  {
    id: 5,
    title: "Starry Night",
    artist: "Vincent van Gogh",
    price: "$900,000",
    image: "https://i.etsystatic.com/26627125/r/il/e3041b/4618949521/il_1080xN.4618949521_ti1n.jpg",
  },
  {
    id: 6,
    title: "Water Lilies",
    artist: "Claude Monet",
    price: "$780,000",
    image: "https://livedoor.blogimg.jp/meigakan/imgs/4/6/46e3ce53.jpg",
  },
  {
    id: 7,
    title: "The Weeping Woman",
    artist: "Pablo Picasso",
    price: "$690,000",
    image: "https://sothebys-md.brightspotcdn.com/webnative/images/2e/fe/0cef4f4b41bbaec6aeabdad9c518/pf2235-cj94c-t3-01.jpg",
  },
  {
    id: 8,
    title: "The Kiss",
    artist: "Gustav Klimt",
    price: "$880,000",
    image: "https://daily-norm.com/wp-content/uploads/2012/02/klimt-ref-zoom.jpg",
  },
  {
    id: 9,
    title: "The Scream",
    artist: "Edvard Munch",
    price: "$950,000",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f4/The_Scream.jpg",
  },
  {
    id: 10,
    title: "The Two Fridas",
    artist: "Frida Kahlo",
    price: "$720,000",
    image: "https://www.fridakahlo.org/assets/img/paintings/the-two-fridas.jpg",
  },
  {
    id: 11,
    title: "Impression, Sunrise",
    artist: "Claude Monet",
    price: "$670,000",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/54/Claude_Monet%2C_Impression%2C_soleil_levant.jpg",
  },
  {
    id: 12,
    title: "Guernica",
    artist: "Pablo Picasso",
    price: "$1,200,000",
    image: "https://upload.wikimedia.org/wikipedia/en/7/74/PicassoGuernica.jpg",
  },
  {
    id: 13,
    title: "Sunflowers",
    artist: "Vincent van Gogh",
    price: "$830,000",
    image: "https://uploads7.wikiart.org/images/vincent-van-gogh/still-life-vase-with-twelve-sunflowers.jpg",
  },
  {
    id: 14,
    title: "The Birth of Venus",
    artist: "Sandro Botticelli",
    price: "$1,100,000",
    image: "https://i.etsystatic.com/28120423/r/il/b7c254/3039865765/il_fullxfull.3039865765_ax49.jpg",
  },
  {
    id: 15,
    title: "Shakuntala",
    artist: "Raja Ravi Varma",
    price: "$780,000",
    image: "https://i.etsystatic.com/19820675/r/il/d90db6/1994290191/il_1140xN.1994290191_dbxw.jpg",
  },
  {
    id: 16,
    title: "Lady with Fruit",
    artist: "Amrita Sher-Gil",
    price: "$640,000",
    image: "https://www.tallengestore.com/cdn/shop/products/RestingFruitSellers-AmritaSher-Gil-IndianArtPainting_0f25038d-a77b-4b93-a5c2-7e25b2a64468.jpg?v=1619410195",
  },
  {
    id: 17,
    title: "Bharat Mata",
    artist: "Abanindranath Tagore",
    price: "$700,000",
    image: "https://smarthistory.org/wp-content/uploads/2024/02/top.jpg",
  },
];

function Gallery() {
  const { addToCart } = useContext(CartContext); // ✅ Using global cart

  const handleBuy = (title) => {
    alert(`You purchased "${title}"`);
  };

  const handleAddToCart = (art) => {
    addToCart(art); // ✅ Changed here
    alert(`${art.title} added to cart`);
  };

  return (
    <div className="gallery-container">
      <h1 className="gallery-title">Premium Art Collection</h1>

      <div className="gallery-grid">
        {artworks.map((art) => (
          <div key={art.id} className="art-card">
            <img src={art.image} alt={art.title} />
            <h3>{art.title}</h3>
            <p>{art.artist}</p>
            <h4 className="price">{art.price}</h4>

            <button onClick={() => handleBuy(art.title)}>
              Buy Now
            </button>

            <button onClick={() => handleAddToCart(art)}>
              Add to Cart
            </button>

          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;