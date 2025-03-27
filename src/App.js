import './App.css';
import logo from './images/LoGo.webp';
import bgi from './images/mainbgimage.jpg';
import shirt1 from './images/shirts1.jpg';
import shirt2 from './images/shirts2.jpg';
import shirt3 from './images/shirts3.jpeg';
import shirt4 from './images/shirts4.jpeg';
import top1 from './images/topwear1.jpeg';
import top2 from './images/topwear2.jpeg';
import top3 from './images/topwear3.jpeg';
import top4 from './images/topwear4.jpeg';
import bottom1 from './images/bottomwear1.jpg';
import bottom2 from './images/bottomwear2.webp';
import bottom3 from './images/bottomwear3.jpeg';
import bottom4 from './images/bottomwear4.jpeg';
import shoes1 from './images/shoes1.jpeg';
import shoes2 from './images/shoes2.jpeg';
import shoes3 from './images/shoes3.webp';
import shoes4 from './images/shoes4.jpeg';
import React from 'react';
import { useState } from 'react';

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [searchText, setSearchText] = useState('');
  const [showCategoryMenu, setShowCategoryMenu] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  let scrollTimer = null;

  const handleScroll = (e) => {
    setIsScrolling(true);
    if (scrollTimer) {
      clearTimeout(scrollTimer);
    }
    scrollTimer = setTimeout(() => {
      setIsScrolling(false);
    }, 1000);
  };

  return (
    <div className="App" style={{
      backgroundImage: `url(${bgi})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      minHeight: '100vh'
    }}>
      <div className="announcement-bar">
      </div>
      <div className="top-container">
        <nav className="navbar">
          <div className="logo" style={{ margin: 0, border: 'none', padding: 0, boxShadow: 'none' }}>
            <img 
              src={logo} 
              alt="StyleHaven Logo" 
              className="logo-image" 
              style={{ 
                width: "60%", 
                height: "60%",
                backgroundColor: "transparent",
                border: 'none',
                boxShadow: 'none'
              }} 
            />
          </div>
          <div className="search-container">
            <input 
              type="text" 
              placeholder="Search items..." 
              className="search-input"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            {searchText && (
              <button className="search-button">
                <i className="fas fa-search"></i>
              </button>
            )}
          </div>
          <ul className="nav-links">
            <li>Home</li>
            <li className="divider">|</li>
            <li className="dropdown" onMouseEnter={() => setShowCategoryMenu(true)} onMouseLeave={() => setShowCategoryMenu(false)}>
              Collections
              {showCategoryMenu && (
                <div className="dropdown-content">
                  <a href="#">New Arrivals</a>
                  <a href="#">Luxury Edit</a>
                  <a href="#">Sustainable Fashion</a>
                  <a href="#">Designer Picks</a>
                </div>
              )}
            </li>
            <li className="divider">|</li>
            <li>Sale</li>
            <li className="divider">|</li>
            <li className="cart-icon" style={{ position: 'relative' }}>
              <i className="fas fa-shopping-bag"></i>
              {cartCount > 0 && <span className="cart-count" style={{
                position: 'absolute',
                top: '-5px',
                right: '-10px',
                backgroundColor: 'red',
                color: 'white',
                borderRadius: '100%',
                padding: '1px 1px',
                fontSize: '6px',
                minWidth: '15px',
                textAlign: 'center',
                lineHeight: '15px'
              }}>{cartCount}</span>}
            </li>
            <li className="auth-buttons">
              <button className="login-btn">Sign In</button>
              <button className="register-btn">Join Us</button>
            </li>
          </ul>
        </nav>
      </div>

      <main>
        <div className="main-content-grid">
          <div className="side-by-side-container">
            <aside className="categories-section">
              <h2>Shop by Category</h2>
              <div className="category-buttons">
                <button className="category-btn">Women</button>
                <button className="category-btn">Men</button>
                <button className="category-btn">Kids</button>
                <button className="category-btn">Accessories</button>
              </div>
            </aside>
            {/* Removed image-scroll-container */}
          </div>

          <div className="main-content">
            <section className="featured-products">
              <div className="category-columns">
                <div className="category-column">
                  <h3>Bottom Wears</h3>
                  <div className="product-list" style={{ 
                                display: 'grid',
                                gridTemplateColumns: 'repeat(2, 1fr)',
                                gap: '10px',
                                padding: '10px',
                                maxHeight: '400px',
                                overflowY: 'auto'
                              }}>
                                <div className="product-card" style={{ 
                                  width: '100%',
                                  height: '100%',
                                  margin: '0',
                                  flex: '0 0 auto',
                                  display: 'flex',
                                  flexDirection: 'column'
                                }}>
                      <img src={bottom1} alt="Bottom 1" style={{ width: '100%', height: 'auto' }} />
                      <div className="product-info">
                        <h4 style={{ fontSize: '14px' }}>Casual Jeans</h4>
                        <p style={{ fontSize: '12px' }}>₹69.99</p>
                        <button onClick={() => setCartCount(cartCount + 1)} style={{ fontSize: '12px', padding: '5px' }}>Add to Cart</button>
                      </div>
                    </div>
                    <div className="product-card" style={{ width: '150px', margin: '5px', flex: '0 0 auto' }}>
                      <img src={bottom2} alt="Bottom 2" style={{ width: '100%', height: 'auto' }} />
                      <div className="product-info">
                        <h4 style={{ fontSize: '14px' }}>Slim Fit Pants</h4>
                        <p style={{ fontSize: '12px' }}>₹74.99</p>
                        <button onClick={() => setCartCount(cartCount + 1)} style={{ fontSize: '12px', padding: '5px' }}>Add to Cart</button>
                      </div>
                    </div>
                    <div className="product-card" style={{ width: '150px', margin: '5px', flex: '0 0 auto' }}>
                      <img src={bottom3} alt="Bottom 3" style={{ width: '100%', height: 'auto' }} />
                      <div className="product-info">
                        <h4 style={{ fontSize: '14px' }}>Cargo Pants</h4>
                        <p style={{ fontSize: '12px' }}>₹64.99</p>
                        <button onClick={() => setCartCount(cartCount + 1)} style={{ fontSize: '12px', padding: '5px' }}>Add to Cart</button>
                      </div>
                    </div>
                    <div className="product-card" style={{ width: '150px', margin: '5px', flex: '0 0 auto' }}>
                      <img src={bottom4} alt="Bottom 4" style={{ width: '100%', height: 'auto' }} />
                      <div className="product-info">
                        <h4 style={{ fontSize: '14px' }}>Formal Trousers</h4>
                        <p style={{ fontSize: '12px' }}>₹79.99</p>
                        <button onClick={() => setCartCount(cartCount + 1)} style={{ fontSize: '12px', padding: '5px' }}>Add to Cart</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="category-column">
                  <h3>Tops</h3>
                  <div className="product-list" style={{ 
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '10px',
                    padding: '10px',
                    maxHeight: '400px',
                    overflowY: 'auto'
                  }}>
                    <div className="product-card" style={{ 
                      width: '100%',
                      height: '100%',
                      margin: '0',
                      flex: '0 0 auto',
                      display: 'flex',
                      flexDirection: 'column'
                    }}>
                      <img src={top1} alt="Top 1" style={{ width: '100%', height: 'auto' }} />
                      <div className="product-info">
                        <h4 style={{ fontSize: '14px' }}>Casual Top</h4>
                        <p style={{ fontSize: '12px' }}>₹39.99</p>
                        <button onClick={() => setCartCount(cartCount + 1)} style={{ fontSize: '12px', padding: '5px' }}>Add to Cart</button>
                      </div>
                    </div>
                    <div className="product-card" style={{ width: '150px', margin: '5px', flex: '0 0 auto' }}>
                      <img src={top2} alt="Top 2" style={{ width: '100%', height: 'auto' }} />
                      <div className="product-info">
                        <h4 style={{ fontSize: '14px' }}>Summer Top</h4>
                        <p style={{ fontSize: '12px' }}>₹34.99</p>
                        <button onClick={() => setCartCount(cartCount + 1)} style={{ fontSize: '12px', padding: '5px' }}>Add to Cart</button>
                      </div>
                    </div>
                    <div className="product-card" style={{ width: '150px', margin: '5px', flex: '0 0 auto' }}>
                      <img src={top3} alt="Top 3" style={{ width: '100%', height: 'auto' }} />
                      <div className="product-info">
                        <h4 style={{ fontSize: '14px' }}>Trendy Top</h4>
                        <p style={{ fontSize: '12px' }}>₹44.99</p>
                        <button onClick={() => setCartCount(cartCount + 1)} style={{ fontSize: '12px', padding: '5px' }}>Add to Cart</button>
                      </div>
                    </div>
                    <div className="product-card" style={{ width: '150px', margin: '5px', flex: '0 0 auto' }}>
                      <img src={top4} alt="Top 4" style={{ width: '100%', height: 'auto' }} />
                      <div className="product-info">
                        <h4 style={{ fontSize: '14px' }}>Fashion Top</h4>
                        <p style={{ fontSize: '12px' }}>₹49.99</p>
                        <button onClick={() => setCartCount(cartCount + 1)} style={{ fontSize: '12px', padding: '5px' }}>Add to Cart</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="category-column">
                  <h3>Shoes</h3>
                  <div className="product-list" style={{ 
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '10px',
                    padding: '10px',
                    maxHeight: '400px',
                    overflowY: 'auto'
                  }}>
                    <div className="product-card" style={{ 
                      width: '100%',
                      height: '100%',
                      margin: '0',
                      flex: '0 0 auto',
                      display: 'flex',
                      flexDirection: 'column'
                    }}>
                      <img src={shoes1} alt="Shoes 1" style={{ width: '100%', height: 'auto' }} />
                      <div className="product-info">
                        <h4 style={{ fontSize: '14px' }}>Casual Sneakers</h4>
                        <p style={{ fontSize: '12px' }}>₹79.99</p>
                        <button onClick={() => setCartCount(cartCount + 1)} style={{ fontSize: '12px', padding: '5px' }}>Add to Cart</button>
                      </div>
                    </div>
                    <div className="product-card" style={{ width: '150px', margin: '5px', flex: '0 0 auto' }}>
                      <img src={shoes2} alt="Shoes 2" style={{ width: '100%', height: 'auto' }} />
                      <div className="product-info">
                        <h4 style={{ fontSize: '14px' }}>Sport Shoes</h4>
                        <p style={{ fontSize: '12px' }}>₹89.99</p>
                        <button onClick={() => setCartCount(cartCount + 1)} style={{ fontSize: '12px', padding: '5px' }}>Add to Cart</button>
                      </div>
                    </div>
                    <div className="product-card" style={{ width: '150px', margin: '5px', flex: '0 0 auto' }}>
                      <img src={shoes3} alt="Shoes 3" style={{ width: '100%', height: 'auto' }} />
                      <div className="product-info">
                        <h4 style={{ fontSize: '14px' }}>Formal Shoes</h4>
                        <p style={{ fontSize: '12px' }}>₹99.99</p>
                        <button onClick={() => setCartCount(cartCount + 1)} style={{ fontSize: '12px', padding: '5px' }}>Add to Cart</button>
                      </div>
                    </div>
                    <div className="product-card" style={{ width: '150px', margin: '5px', flex: '0 0 auto' }}>
                      <img src={shoes4} alt="Shoes 4" style={{ width: '100%', height: 'auto' }} />
                      <div className="product-info">
                        <h4 style={{ fontSize: '14px' }}>Running Shoes</h4>
                        <p style={{ fontSize: '12px' }}>₹84.99</p>
                        <button onClick={() => setCartCount(cartCount + 1)} style={{ fontSize: '12px', padding: '5px' }}>Add to Cart</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="category-column">
                  <h3>Shirts</h3>
                  <div className="product-list" style={{ 
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '10px',
                    padding: '10px',
                    maxHeight: '400px',
                    overflowY: 'auto'
                  }}>
                    <div className="product-card" style={{ 
                      width: '100%',
                      height: '100%',
                      margin: '0',
                      flex: '0 0 auto',
                      display: 'flex',
                      flexDirection: 'column'
                    }}>
                      <img src={shirt1} alt="Shirt 1" style={{ width: '100%', height: 'auto' }} />
                      <div className="product-info">
                        <h4 style={{ fontSize: '14px' }}>Classic Shirt</h4>
                        <p style={{ fontSize: '12px' }}>₹49.99</p>
                        <button onClick={() => setCartCount(cartCount + 1)} style={{ fontSize: '12px', padding: '5px' }}>Add to Cart</button>
                      </div>
                    </div>
                    <div className="product-card" style={{ width: '150px', margin: '5px' }}>
                      <img src={shirt2} alt="Shirt 2" style={{ width: '100%', height: 'auto' }} />
                      <div className="product-info">
                        <h4 style={{ fontSize: '14px' }}>Casual Shirt</h4>
                        <p style={{ fontSize: '12px' }}>₹45.99</p>
                        <button onClick={() => setCartCount(cartCount + 1)} style={{ fontSize: '12px', padding: '5px' }}>Add to Cart</button>
                      </div>
                    </div>
                    <div className="product-card" style={{ width: '150px', margin: '5px' }}>
                      <img src={shirt3} alt="Shirt 3" style={{ width: '100%', height: 'auto' }} />
                      <div className="product-info">
                        <h4 style={{ fontSize: '14px' }}>Formal Shirt</h4>
                        <p style={{ fontSize: '12px' }}>₹59.99</p>
                        <button onClick={() => setCartCount(cartCount + 1)} style={{ fontSize: '12px', padding: '5px' }}>Add to Cart</button>
                      </div>
                    </div>
                    <div className="product-card" style={{ width: '150px', margin: '5px' }}>
                      <img src={shirt4} alt="Shirt 4" style={{ width: '100%', height: 'auto' }} />
                      <div className="product-info">
                        <h4 style={{ fontSize: '14px' }}>Printed Shirt</h4>
                        <p style={{ fontSize: '12px' }}>₹54.99</p>
                        <button onClick={() => setCartCount(cartCount + 1)} style={{ fontSize: '12px', padding: '5px' }}>Add to Cart</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-grid">
                {/* Product cards will be added here */}
              </div>
            </section>
          </div>
        </div>
      </main>

      <footer>
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
    </div>
  );
}

export default App;
