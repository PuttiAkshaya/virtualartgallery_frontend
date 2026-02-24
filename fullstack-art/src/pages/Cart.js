import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);

  const handleBuyNow = () => {
    if (cartItems.length === 0) {
      alert("Cart is empty!");
      return;
    }

    alert("Purchase Successful!");
    clearCart();
  };

  return (
    <div className="gallery-container">
      <h1>Your Cart</h1>

      {cartItems.length === 0 ? (
        <p>No items added.</p>
      ) : (
        <>
          {cartItems.map((item, index) => (
            <div key={index} className="art-card">
              {item.image && (
                <img
                  src={item.image}
                  alt={item.title}
                  className="art-image"
                />
              )}

              <h3>{item.title}</h3>
              <p>{item.artist}</p>
              <p>{item.price}</p>

              <button onClick={() => removeFromCart(index)}>
                Remove
              </button>
            </div>
          ))}

          <button
            style={{ marginTop: "20px" }}
            onClick={handleBuyNow}
          >
            Buy Now
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;