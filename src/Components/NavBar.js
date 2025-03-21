import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./NavBarComp/Home/Home";
import SupportChat from "./NavBarComp/chat";
import ContactUs from "./NavBarComp/ContactUs";
import AboutUs from "./NavBarComp/AboutUs";
import "./NavBar.css";

function NavBar() {
  return (
    <Router>
      <nav className="NavBar">
        <div className="nav-links">
          <Link className="links" to="/">
            Home
          </Link>

          <Link className="links" to="/contact">
            Contact Us
          </Link>
          <Link className="links" to="/chat">
            Customer Support (Chat)
          </Link>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <button>Search</button>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/contact" element={<ContactUs />} />
        <Route path="/chat" element={<SupportChat />} />
      </Routes>
    </Router>
  );
}

export default NavBar;
