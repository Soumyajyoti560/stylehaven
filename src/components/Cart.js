import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../images/LoGo.webp';
import { FaHome, FaShoppingCart } from 'react-icons/fa';  // Updated import

function Cart({ cartItems, setCartItems, setCartCount }) {
  const navigate = useNavigate();

  // Group identical items and count their quantities
  const groupedItems = cartItems.reduce((acc, item) => {
    const existingItem = acc.find(i => i.id === item.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      acc.push({ ...item, quantity: 1 });
    }
    return acc;
  }, []);

  const updateQuantity = (itemId, change) => {
    const newCartItems = [...cartItems];
    if (change === 1) {
      newCartItems.push(cartItems.find(item => item.id === itemId));
    } else {
      const index = newCartItems.findIndex(item => item.id === itemId);
      if (index !== -1) {
        newCartItems.splice(index, 1);
      }
    }
    setCartItems(newCartItems);
    setCartCount(newCartItems.length);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <>
      <div className="cart-container" style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={logo} alt="StyleHaven Logo" style={{ height: '70px' }} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <FaHome 
              onClick={() => navigate('/')} 
              style={{ fontSize: '24px', cursor: 'pointer' }}
            />
            <button className="login-btn">Sign In</button>
            <button className="register-btn">Join Us</button>
          </div>
        </div>
        <h2 style={{ textAlign: 'center', marginBottom: '20px', fontSize: '2rem' }}>
          My Cart {cartItems.length > 0 && `[${cartItems.length} items]`}
        </h2>
        
        {cartItems.length === 0 ? (
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center',
            marginTop: '50px'
          }}>
            <FaShoppingCart style={{ 
              fontSize: '100px', 
              opacity: '0.3',
              marginBottom: '20px'
            }} />
            <p style={{ 
              fontWeight: 'bold', 
              opacity: '0.5',
              fontSize: '20px'
            }}>Your cart is empty!</p>
          </div>
        ) : (
          <>
            <div className="cart-items" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {groupedItems.map((item) => (
                <div key={item.id} style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  padding: '10px',
                  border: '1px solid #ddd',
                  borderRadius: '8px'
                }}>
                  <img src={item.image} alt={item.name} style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
                  <div style={{ marginLeft: '20px', flex: 1 }}>
                    <h3>{item.name}</h3>
                    <p>₹{item.price}</p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <button 
                      onClick={() => updateQuantity(item.id, -1)}
                      style={{ padding: '5px 10px' }}
                    >-</button>
                    <span>{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, 1)}
                      style={{ padding: '5px 10px' }}
                    >+</button>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: '20px', textAlign: 'right' }}>
              <h3>Total: ₹{getTotalPrice()}</h3>
              <button style={{ padding: '10px 20px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px' }}>
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
      <footer style={{ marginTop: '27.5px' }}>
        <div className="footer-content">
          <div className="footer-section">
            <h3>About StyleHaven</h3>
            <p>Curating luxury fashion for the discerning customer</p>
          </div>
          <div className="footer-section">
            <h3>Customer Service</h3>
            <ul>
              <li>Shipping Information</li>
              <li>Returns & Exchanges</li>
              <li>Size Guide</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Connect With Us</h3>
            <div className="social-links">
              <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
              <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
              <a href="#" className="social-icon"><i className="fab fa-facebook"></i></a>
              <a href="#" className="social-icon"><i className="fab fa-pinterest"></i></a>
            </div>
          </div>
          <div className="footer-section">
            <h3>Newsletter</h3>
            <p>Subscribe to receive updates on new arrivals and exclusive offers</p>
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Cart;