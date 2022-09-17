import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/footer.css';

const Footer = () => (
  <div className="footer__container">
    <div className="row">
      {/* Column one */}
      <div className="col">
        <NavLink to="/">
          <h3>Home</h3>
        </NavLink>
      </div>
      {/* Column two */}
      <div className="col">
        <NavLink to="/products">
          <h3>Products</h3>
        </NavLink>
      </div>
      {/* Column three */}
      <div className="col">
        <NavLink to="/suppliers">
          <h3>Suppliers</h3>
        </NavLink>
      </div>
      {/* Column four */}
      <div className="col">
        <NavLink to="/requisitions">
          <h3>Requisitions</h3>
        </NavLink>
      </div>
    </div>
    <hr />
    <div className="row">
      <p>
        &copy;
        {new Date().getFullYear}
        All rigth reverved | Privacy
      </p>
    </div>
  </div>
);

export default Footer;
