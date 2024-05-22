// components/ProductCard.js
// import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <>
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">{product.description}</p>
        <div className="card-footer">
          <span className="price">${product.price}</span>
        </div>
      </div>
    </div>
    </>
  );
};

export default ProductCard;
