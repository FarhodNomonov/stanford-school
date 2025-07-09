import { useState } from "react";
import "./Header.css"; // Assuming you have a CSS file for styling

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header className="header">
      <div className="logo">
        <a href="#">Stanford School</a>
      </div>

      <nav className={`nav-links ${isOpen ? "active" : ""}`}>
        <ul>
          <li>
            <a href="#">Главная</a>
          </li>
          <li>
            <a href="#programs">Курсы</a>
          </li>
          <li>
            <a href="#about">О нас</a>
          </li>
          <li>
            <a href="#teachers">Учителя</a>
          </li>
          <li>
            <a href="#contact">Контакты</a>
          </li>
        </ul>
      </nav>

      <div className="burger" onClick={toggleMenu}>
        <span className={isOpen ? "open" : ""}></span>
        <span className={isOpen ? "open" : ""}></span>
        <span className={isOpen ? "open" : ""}></span>
      </div>
    </header>
  );
};

export default Header;
