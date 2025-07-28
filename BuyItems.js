import React from 'react';
import './BuyItems.css';

const BuyItems = () => {
  const products = [
    { id: 1, name: 'Wireless Headphones', price: '$99', image: 'https://via.placeholder.com/200' },
    { id: 2, name: 'Smartphone', price: '$499', image: 'https://via.placeholder.com/200' },
    { id: 3, name: 'Laptop', price: '$999', image: 'https://via.placeholder.com/200' },
  ];

  return (
    <div className="buy-items-page">
      <div className="buy-items-container">
        <h1>Shop Your Favorites</h1>
        <div className="product-list">
          {products.map(product => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.price}</p>
              <button>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BuyItems;