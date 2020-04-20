import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div class id="Footer">
      <a id="Contact">
        <div className="d-flex justify-content-center">
          <a className="nav-link" target="_blank" style={{ color: "white" }}>
            {" "}
            <h4 style={{ margin: "-7px" }}>
              <u>Contact me:</u>
            </h4>
          </a>
          <a
            className="nav-link"
            target="_blank"
            style={{ color: "white" }}
            href="https://www.linkedin.com/in/benjamin-olsen-2782a9178/"
          >
            <p>
              {" "}
              <i className="fab fa-linkedin"></i> LinkedIn
            </p>
          </a>
          <a
            className="nav-link"
            target="_blank"
            style={{ color: "white" }}
            href="https://github.com/Olsenben77"
          >
            <p>
              {" "}
              <i className="fab fa-github"></i> Github
            </p>
          </a>
          <a
            className="nav-link"
            target="_blank"
            style={{ color: "white" }}
            href="https://gmail.com"
          >
            <p>
              {" "}
              <i className="fas fa-envelope fa-lg"></i>olsenben1992@gmail.com
            </p>
          </a>
        </div>
      </a>
    </div>
  );
}
export default Footer;
