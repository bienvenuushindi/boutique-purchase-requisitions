import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <nav
      className="header__nav"
      style={{ display: 'flex', justifyContent: 'center', gap: '1em' }}
    >
      <NavLink to="/pending">
        <div className="pending">Pending</div>
      </NavLink>
      <NavLink to="/completed">
        <div className="completed">Completed</div>
      </NavLink>
      <NavLink to="/uncompleted">
        <div className="uncompleted">Uncompleted</div>
      </NavLink>
    </nav>
  );
}

export default Header;
