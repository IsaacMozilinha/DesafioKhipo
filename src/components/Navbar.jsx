import { useState } from "react";
import "./Navbar.css"; 
import logo from "../assets/logo.png"

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="navbar">
          <div className="navbar-container">
            <img src={logo} alt="logo"></img>
    
           
            <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
              <li><a href="#">User</a></li>
              <li><a href="#">Exit</a></li>
            </ul>
    
          
            <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
              ☰
            </button>
          </div>
        </nav>
      );
    };
    
    export default Navbar;