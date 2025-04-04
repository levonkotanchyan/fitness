import { useState } from "react";
import "./hamburgerMenu.scss";
import { FaBars, FaTimes } from "react-icons/fa";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="hamburger-container">
      <button className="hamburger-toggle" onClick={() => setIsOpen(p => !p)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
      <div className={`hamburger ${isOpen ? "open" : ""}`}>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/">Programs</a></li>
          <li><a href="/">Coaching</a></li>
          <li><a href="/">Membership</a></li>
          <li><a href="/">About Us</a></li>
          <li><a href="/">Login</a></li>
          <li><a href="/">Sign up</a></li>
        </ul>
      </div>
    </div>
  );
};

export default HamburgerMenu;
