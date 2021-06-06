import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <nav className='nav-bar'>
      <div className='search-div'>
        <a data-testid="logo" href="/#">
          <img src="https://res.cloudinary.com/dltwds8yr/image/upload/v1622994784/pngjoy.com_react-logo-react-js-logo-svg-transparent-png_9766605_vzsziy.png" width="40" alt="react-logo" />
        </a>
        <input className='search-input' data-testid="search" placeholder="Search homes" type="text" />
      </div>
      <div className='menu-nav' data-testid="menu">
        <a href='/#'>BECOME A HOST</a>
        <a href='/#'>HELP</a>
        <a href='/#'>SIGN UP</a>
        <a href='/#'>LOG IN</a>
      </div>
    </nav>
  );
}
