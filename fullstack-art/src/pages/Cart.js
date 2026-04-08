import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);
  const [showInvoice, setShowInvoice] = useState(false);
  const [invoiceData, setInvoiceData] = useState(null);

  const parsePrice = (priceStr) => {
    if (!priceStr) return 0;
    return parseInt(priceStr.replace(/[^0-9]/g, ''), 10);
  };

  const currentTotal = cartItems.reduce((acc, item) => acc + parsePrice(item.price), 0);

  const handleBuyNow = () => {
    if (cartItems.length === 0) {
      alert("Cart is empty!");
      return;
    }

    setInvoiceData({
      items: [...cartItems],
      total: currentTotal,
      date: new Date().toLocaleDateString(),
      invoiceId: "INV-" + Math.floor(100000 + Math.random() * 900000)
    });

    setShowInvoice(true);
  };

  return (
    <div className="gallery-container">
      <h1 className="gallery-title">Your Collection Cart</h1>

      {cartItems.length === 0 ? (
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <p style={{ color: '#a1a1aa', fontSize: '1.2rem', marginBottom: '2rem' }}>No masterpieces in your cart yet.</p>
        </div>
      ) : (
        <>
          <div className="gallery-grid">
            {cartItems.map((item, index) => (
              <div key={index} className="art-card">
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.title}
                  />
                )}
                <h3>{item.title}</h3>
                <p>{item.artist}</p>
                <div style={{ padding: '0 20px', marginBottom: '10px' }}>
                  <div className="price">{item.price}</div>
                </div>
                <div className="button-group">
                  <button onClick={() => removeFromCart(index)}>
                    Remove from Cart
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <button
              style={{ padding: "16px 40px", fontSize: "1.2rem", borderRadius: "16px", background: "linear-gradient(135deg, #10b981, #059669)" }}
              onClick={handleBuyNow}
            >
              Complete Purchase (${currentTotal.toLocaleString()})
            </button>
          </div>
        </>
      )}

      {/* Invoice Modal */}
      {showInvoice && invoiceData && (
        <div className="modal-overlay" onClick={() => setShowInvoice(false)}>
          <div className="modal-content glass" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '550px', textAlign: 'left', padding: '40px' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem', background: 'linear-gradient(to right, #10b981, #3b82f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>ArtGallery Invoice</h2>
              <p style={{ color: '#a1a1aa' }}>Purchase Successful! Thank you for collecting.</p>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem', paddingBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
              <div>
                <div style={{ color: '#a1a1aa', fontSize: '0.9rem' }}>Invoice Number</div>
                <div style={{ fontWeight: '600', fontSize: '1.1rem' }}>{invoiceData.invoiceId}</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ color: '#a1a1aa', fontSize: '0.9rem' }}>Date</div>
                <div style={{ fontWeight: '600', fontSize: '1.1rem' }}>{invoiceData.date}</div>
              </div>
            </div>

            <div style={{ marginBottom: '2rem', maxHeight: '30vh', overflowY: 'auto', paddingRight: '10px' }}>
              {invoiceData.items.map((item, index) => (
                <div key={index} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                  <div>
                    <div style={{ fontWeight: '500' }}>{item.title}</div>
                    <div style={{ color: '#a1a1aa', fontSize: '0.9rem' }}>{item.artist}</div>
                  </div>
                  <div style={{ color: '#a5b4fc', fontWeight: 'bold' }}>{item.price}</div>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(59,130,246,0.1)', padding: '1.5rem', borderRadius: '12px', marginBottom: '2rem', border: '1px solid rgba(59,130,246,0.2)' }}>
              <span style={{ fontSize: '1.1rem', fontWeight: '500' }}>Total Paid</span>
              <span style={{ color: '#60a5fa', fontSize: '1.5rem', fontWeight: 'bold' }}>${invoiceData.total.toLocaleString()}</span>
            </div>

            <button onClick={() => setShowInvoice(false)} style={{ width: '100%', padding: '1rem', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)' }}>
              Close Invoice
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;