import React from 'react';
import '../../styles/footer.css';

const Footer = () => (
  <div className="footer__container">
    <div className="row">
      {/* Column one */}
      <div className="col">
        <h3>Home</h3>
      </div>
      {/* Column two */}
      <div className="col">
        <h3>Products</h3>
      </div>
      {/* Column three */}
      <div className="col">
        <h3>Suppliers</h3>
      </div>
      {/* Column four */}
      <div className="col">
        <h3>Requisitions</h3>
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
