import React, { useEffect, useState } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

function Nav() {
  const [show, handleShow] = useState(false);

  const navStyle = {
    color: "white",
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://i.pinimg.com/originals/9b/3f/9c/9b3f9c24d9fd5f297ae433eb33d93514.png"
        alt="Logo"
      />
      <ul className="nav_links">
        <Link style={navStyle} to="/categories">
          <li>Categories</li>
        </Link>
        <Link style={navStyle} to="/search">
          <li>Search</li>
        </Link>
      </ul>
    </div>
  );
}

export default Nav;
