import React from 'react';
import './Marketplace.css';
import Header from '../Navbar/Navbar.js';
import Footer from '../Footer/Footer.js';
import all_products from './Data/All_Prodcuts.js';  // Import the data

const Marketplace = () => {
  const categories = Array.from(new Set(all_products.map(p => p.category)));  // Extract unique categories

  return (
    <div>
      <Header/>

      <div className="marketplace-container">
        {categories.map(category => (
          <div key={category} className="category-section">
            <div className='mb-2 d-flex justify-content-between px-3'>
              <h2 className='mb-3'>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
              <button className='moreBtn'><h6>See more </h6></button>
            </div>
            <div className="product-list">
              {all_products
                .filter(product => product.category === category)
                .map(product => (
                  <div key={product.id} className="product-card">
                    <img
                        src={product.image}
                        alt={product.name}
                        style={{ height: '240px', objectFit: 'cover' }} // Adjust these values as needed
                    />
                    <h3>{product.name}</h3>
                    <p>Price: ₹ {product.new_price.toFixed(2)}</p>
                    <p className="old-price">Old Price: ₹ {product.old_price.toFixed(2)}</p>
                    <button>View Details</button>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default Marketplace;
