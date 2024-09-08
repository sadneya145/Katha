import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import all_products from '../Data/All_Prodcuts'; // Import the data
import Header from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';
import './ProductDetails.css'; // Import the CSS for ProductDetails component

const ProductDetails = () => {
  const { id } = useParams(); // Get the product ID from the URL parameters
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Debug: Check the ID and data
    console.log("Product ID from URL:", id);
    console.log("All Products Data:", all_products);

    // Ensure the ID is a string for comparison
    const productId = String(id);

    // Find the product with the given ID
    const foundProduct = all_products.find(product => String(product.id) === productId);
    console.log("Found Product:", foundProduct); // Debug: Check the found product

    setProduct(foundProduct);
  }, [id]);

  if (!product) {
    return <div>Loading...</div>; // Show a loading message while fetching the product
  }

  return (
    <div>
      <Header/>
      <div className="product-details-container">
        <div className="product-details-image">
          <img
            src={product.image}
            alt={product.name}
            style={{ height: 'auto', objectFit: 'cover' }}
          />
        </div>
        <div className="product-details-info">
          <h1>{product.name}</h1>
          <p className="price">New Price: ₹ {product.new_price.toFixed(2)}</p>
          {product.old_price && (
            <p className="old-price">Old Price: ₹ {product.old_price.toFixed(2)}</p>
          )}
          <p>{product.description}</p>
          <div className="reviews">
            <h2>Reviews (122)</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, quo.</p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default ProductDetails;
