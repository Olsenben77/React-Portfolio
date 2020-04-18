import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <nav>
      <div className="top-line">
        <h1>
          <u>Employee Directory</u>
        </h1>
      </div>
      <div className="bottom-line">
        <p>
          Click on carrots to filter by heading or use the search bar to narrow
          your results.
        </p>
      </div>
    </nav>
  );
}

export default Footer;
