import React from "react";
import aplogo from './aplogo.png';

function Header() {
  return <>
    <header className="Header">
      <div className="logo">
        <img scr={aplogo} alt="logo"></img>
      </div>
      <h2 className="content-heading">React</h2>
      <nav>
        <ul>
          <li>
            <a href="#">Props</a>
           <div className="nav-line"></div>
          </li>
          <li>
            <a href="#">Hooks</a>
            <div className="nav-line"></div>
          </li>
          <li>
            <a href="#">Router</a>
            <div className="nav-line"></div>
          </li>
        </ul>
      </nav>
      <div className="borderLine"></div>
    </header>
    </>
}
export default Header;
