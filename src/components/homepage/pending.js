import React from 'react';
import '../../styles/pending.css';
import { products } from '../../data/dummy';

const Pending = () => (
  <ul className="product__container">
    {products.map((product) => (
      <li key={product.id}>
        <img src={product.urls} alt={product.name} />
        <div className="product__details">
          <div className="product__name__size">
            <h2 className="product__name">{product.name}</h2>
            <span className="product__size"> 1kg </span>
          </div>
          <div className="product__price__status">
            <h3 className="product__price">$5.00</h3>
            <span className="product__status">status</span>
          </div>
        </div>
        <button type="button" className="">View Details</button>
      </li>
    ))}
  </ul>
);

export default Pending;
