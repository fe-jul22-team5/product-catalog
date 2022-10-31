import React from 'react';
import 'Header'

export const Header = React.memo(function Header() {
  return (
    <div className='Header'>
      бла
      <div className='Header__logo'>
        <img src="../src/components/Header/logo/Nice_Gadgets_full.png" alt="Logo_big" />
        <img src='./Finger.png' alt="Logo_small" />
      </div>

      <nav className='Header__menu'>
        <ul className='Header__menu-list'>
          <li className='Header-menu-item'>
            <a href="" className='Header-menu-link'>
              Home
            </a>
          </li>
          <li className='Header-menu-item'>
            <a href="" className='Header-menu-link'>
              Phones
            </a>
          </li>
          <li className='Header-menu-item'>
            <a href="" className='Header-menu-link'>
              Tablets
            </a>
          </li>
          <li className='Header-menu-item'>
            <a href="" className='Header-menu-link'>
              accessories
            </a>
          </li>
        </ul>
      </nav>

      <div className='Header__cart'>
        <img src="" alt="shopping_cart_icon" />
      </div>
      <h1>
      This is a header
      </h1>
    </div>
  );
});
