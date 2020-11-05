import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [show, handleShow] = useState(false);

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
    <header>
      <div className={`inner-content ${show && "inner-content-bg"}`}>
        <div className="brand">
          <Link to="/">Movie Rental DB</Link>
        </div>

        <ul className="nav-links">
          <li>
            <Link to="/">
              <i className="fa-fw fas fa-home"></i>
            </Link>
          </li>

          <li>
            <Link to="/watchlist">
              <i className="fa-fw far fa-heart"></i>
            </Link>
          </li>

          <li>
            <Link to="/cart">
              <i className="fa-fw fa fa-shopping-cart"></i>
            </Link>
          </li>

          <li>
            <Link to="/add" className="btn btn-main">
              <i className="fa-fw fa fa-search"></i>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};
