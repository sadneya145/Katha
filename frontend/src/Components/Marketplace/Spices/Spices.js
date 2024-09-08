import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Handicrafts/Handicraft.css'; // Import the CSS for the Handicrafts component
import all_products from '../Data/All_Prodcuts'; // Import the data
import Header from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';

const Spices = () => {
  const navigate = useNavigate();

  // Filter products based on the "spices" category
  const handicraftsProducts = all_products.filter(
    (product) => product.category === 'spices'
  );

  // Function to handle product click
  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div>
      <Header/>
      <div className="handicrafts-container">
        <h1>Spices</h1>
        <div className="product-list">
          {handicraftsProducts.map((product) => (
            <div 
              key={product.id} 
              className="product-card"
            >
              <img
                src={product.image}
                alt={product.name}
                style={{height: '240px', objectFit: 'cover' }}
              />
              <h2>{product.name}</h2>
              <p className="new-price">₹{product.new_price.toFixed(2)}</p>
              {product.old_price && (
                <p className="old-price">Old Price: ₹ {product.old_price.toFixed(2)}</p>
              )}
              <button onClick={() => handleProductClick(product.id)}>View Details</button>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Spices;
