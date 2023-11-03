import React, { useState } from "react";
import "./navbar.css";
import { navItems as data } from "/src/data.jsx";

const navbarItem = data.map((item, index) => (
  <a key={index} href="#" className="navbar_item">
    {item}
  </a>
));

export default function Navbar() {
  const [open, setOpen] = useState(false);
  console.log(open);
  return (
    <div className="navbar">
      <div className="navbar_logo"></div>
      <div className="navbar_items">{navbarItem}</div>

      <div
        className="navbar_mobile"
      >
        <img
          style={{ display: !open ? "block" : "none" }}
          onClick={() => setOpen((prev) => !prev)}
          src="/images/icon-menu.svg"
          alt="Menu"
          className="navbar_menu"
        />
        <div className="navbar_items_mobile" style={{ display: open ? "flex" : "none" }}>
            <img
            style={{ display: open ? "block" : "none" }}
            onClick={() => setOpen((prev) => !prev)}
            src="/images/icon-menu-close.svg"
            alt="Close"
            className="navbar_close"
            />
            {navbarItem}
        </div>
      </div>
    </div>
  );
}
