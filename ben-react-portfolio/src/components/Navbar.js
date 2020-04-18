import React from "react";
import "./Navbar.css";
import Seattle from "./Seattle.jpg";

function Nav() {
  return (
    <header>
      <div className="page-info">
        <ul id="nav">
          <li>
            <a className="smoothscroll" href="#About">
              {" "}
              About{" "}
            </a>{" "}
          </li>
          <li>
            <a className="smoothscroll" href="#Projects">
              {" "}
              Projects{" "}
            </a>{" "}
          </li>
          <li>
            <a className="smoothscroll" href="#Experience">
              {" "}
              Experience{" "}
            </a>{" "}
          </li>
          <li>
            <a className="smoothscroll" href="#Contact">
              {" "}
              Contact{" "}
            </a>{" "}
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Nav;
