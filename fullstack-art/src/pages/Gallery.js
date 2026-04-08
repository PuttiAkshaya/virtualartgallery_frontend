import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Gallery.css";
import { CartContext } from "../context/CartContext";
import { RoleContext } from "../context/RoleContext";
import { ArtContext } from "../context/ArtContext";

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
  {
    id: 18,
    title: "The Great Wave off Kanagawa",
    artist: "Hokusai",
    price: "$2,500,000",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Great_Wave_off_Kanagawa2.jpg",
  },
  {
    id: 19,
    title: "Cafe Terrace at Night",
    artist: "Vincent van Gogh",
    price: "$1,850,000",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/21/Vincent_Willem_van_Gogh_015.jpg",
  },
  {
    id: 20,
    title: "Wanderer above the Sea of Fog",
    artist: "Caspar David Friedrich",
    price: "$980,000",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Caspar_David_Friedrich_-_Wanderer_above_the_sea_of_fog.jpg",
  },
  {
    id: 21,
    title: "Hamsa Damayanti",
    artist: "Raja Ravi Varma",
    price: "$1,200,000",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/1d/Raja_Ravi_Varma%2C_Hamsa_Damayanthi.jpg",
  },
  {
    id: 22,
    title: "The Last Supper",
    artist: "Leonardo da Vinci",
    price: "$8,000,000",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Última_Cena_-_Da_Vinci_5.jpg",
  },
  {
    id: 23,
    title: "American Gothic",
    artist: "Grant Wood",
    price: "$1,300,000",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Grant_Wood_-_American_Gothic_-_Google_Art_Project.jpg",
  },
  {
    id: 24,
    title: "Nighthawks",
    artist: "Edward Hopper",
    price: "$2,100,000",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Nighthawks_by_Edward_Hopper_1942.jpg",
  }
];

function Gallery() {
  const { addToCart } = useContext(CartContext); // ✅ Using global cart
  const { isLoggedIn } = useContext(RoleContext);
  const { artworks: contextArtworks } = useContext(ArtContext);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const navigate = useNavigate();

  // Combine classic artworks with explicitly approved ones from Curator
  const displayArtworks = [
    ...artworks,
    ...(contextArtworks ? contextArtworks.filter(a => a.approved) : [])
  ];

  const handleBuy = (title) => {
    alert(`You purchased "${title}"`);
  };

  const handleAddToCart = (art) => {
    if (!isLoggedIn && localStorage.getItem("isLoggedIn") !== "true") {
      setShowAuthModal(true);
      return;
    }
    addToCart(art); // ✅ Changed here
    alert(`${art.title} added to cart`);
  };

  return (
    <div className="gallery-container">
      <h1 className="gallery-title">Premium Art Collection</h1>

      <div className="gallery-grid">
        {displayArtworks.map((art, index) => (
          <div key={art.id || `ctx-${index}`} className="art-card">
            <img src={art.image} alt={art.title} />
            <h3>{art.title}</h3>
            <p>{art.artist || "Independent Artist"}</p>
            <h4 className="price">{art.price.toString().startsWith('$') ? art.price : `$${Number(art.price).toLocaleString()}`}</h4>

            <div className="button-group">
              <button onClick={() => handleBuy(art.title)}>
                Buy Now
              </button>
              <button onClick={() => handleAddToCart(art)}>
                Add to Cart
              </button>
            </div>

          </div>
        ))}
      </div>

      {showAuthModal && (
        <div className="modal-overlay" onClick={() => setShowAuthModal(false)}>
          <div className="modal-content glass" onClick={(e) => e.stopPropagation()}>
            <h2 style={{ marginBottom: '1rem', fontSize: '1.8rem', color: '#fff' }}>Join ArtGallery</h2>
            <p style={{ marginBottom: '2.5rem', opacity: 0.8, color: '#e2e8f0' }}>
              Please login or create an account to start collecting limited edition masterpieces and completing your gallery.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexDirection: 'column' }}>
              <button onClick={() => navigate('/login')} style={{ width: '100%', padding: '1rem' }}>
                Login
              </button>
              <button
                onClick={() => navigate('/signup')}
                style={{ width: '100%', padding: '1rem', background: 'transparent', border: '1px solid #3b82f6', color: '#3b82f6' }}
              >
                Sign Up
              </button>
              <button
                onClick={() => setShowAuthModal(false)}
                style={{ width: '100%', padding: '1rem', background: 'transparent', border: '1px solid rgba(255,255,255,0.4)', color: 'white', marginTop: '0.5rem' }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;