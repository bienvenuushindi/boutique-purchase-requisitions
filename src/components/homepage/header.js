import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  <nav className="header__nav" style={{ display: 'flex', justifyContent: 'space-between' }}>
    <NavLink>
      <div className="pending">Pending</div>
    </NavLink>
    <NavLink>
      <div className="completed">Completed</div>
    </NavLink>
    <NavLink>
      <div className="uncompleted">Uncompleted</div>
    </NavLink>
  </nav>;
}

export default Header;
