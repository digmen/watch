import React, { useState } from 'react';
import './navbar.css';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const [showTooltip, setShowTooltip] = useState(false); // создаем состояние для отображения всплывающего окна

  const handleMouseEnter = () => {
    setShowTooltip(true); // показываем всплывающее окно при наведении
  };

  const handleMouseLeave = () => {
    setShowTooltip(false); // скрываем всплывающее окно при уходе курсора
  };
  return (
    <>
      <header className="watch container">
        <Link to={'/'} className="watch-title">
          WATCHBOX
        </Link>
      </header>
      <nav className="nav-watch container">
        <Link className="nav-title" to="/allwatch">
          ALL WATCHES
        </Link>
        <Link
          onMouseOver={handleMouseEnter}
          onMouseOut={handleMouseLeave}
          className="nav-title"
        >
          BRANDS
        </Link>
        <Link className="nav-title" to="/login">
          LOGIN
        </Link>
      </nav>
      {showTooltip && (
        <div
          onMouseOver={handleMouseEnter}
          onMouseOut={handleMouseLeave}
          className="nav-dropdown"
        >
          <div className="brand-title">
            <h2>BRANDS A-Z</h2>
            <Link to="#">View All Brands</Link>
          </div>
          <div className="brand-featured">
            <div className="brand-title-one">
              <span>FEATURED BRANDS</span>
              <Link to="#">Rolex</Link>
              <Link to="#">De Bethune</Link>
              <Link to="#">Cartier</Link>
            </div>
            <div className="brand-title-two">
              <Link to="#">Patek Philippe</Link>
              <Link to="#">Omega</Link>
              <Link to="#">Tudor</Link>
            </div>
            <div className="brand-title-three">
              <Link to="#">Jacob&co</Link>
              <Link to="#">Richard mille</Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
