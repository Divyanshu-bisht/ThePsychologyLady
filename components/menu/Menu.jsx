import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./menu.css";

function Menu() {
  const [shrink, setShrink] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShrink(true); // user scrolled -> shrink margin
      } else {
        setShrink(false); // user at top -> normal margin
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ul className={`menu ${shrink ? "shrink" : ""}`}>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>`cursor-hover ${isActive ? "active" : ""}`}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>`cursor-hover ${isActive ? "active" : ""}`}
        >
          About Me
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/services"
          className={({ isActive }) =>`cursor-hover ${isActive ? "active" : ""}`}
        >
          My Services
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contactus"
          className={({ isActive }) =>`cursor-hover ${isActive ? "active" : ""}`}
        >
          Contact Us
        </NavLink>
      </li>
    </ul>
  );
}

export default Menu;
