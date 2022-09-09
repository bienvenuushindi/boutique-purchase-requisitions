import React from 'react';
import { products } from '../../data/dummy';

const Home = () => (
  <ul className="product__container">
    {products.map((product) => (
      <li key={product.id}>
        <img src={product.urls} alt={product.name} />
        <div className="product__details">
          <h2 className="product__name">{product.name}</h2>
          <span className="product__size">{product.size[0]}</span>
          <div className="product__price_&_status">
            <h3 className="product__price">$5.00</h3>
            <span className="product__status">status</span>
          </div>
        </div>
        <button type="button" className="">View Details</button>
      </li>
    ))}
  </ul>
);

export default Home;
