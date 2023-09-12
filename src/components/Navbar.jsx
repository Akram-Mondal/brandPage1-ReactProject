import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="navContainer">
        <div className="logo">
          <img src="./image/brand_logo.png" alt="brand_logo" />
        </div>
        <ul>
          <li href="#">MENU</li>
          <li href="#">LOCATINO</li>
          <li href="#">ABOUT</li>
          <li href="#">CONTACT</li>
        </ul>
        <button>LogIn</button>
      </nav>
    </>
  );
};

export default Navbar;
