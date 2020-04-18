import React, { useEffect, useState } from "react";
import "./Experience.css";

function Experience() {
  const [scrollY, setScrollY] = useState({ y: 0 });

  const handleScroll = () => {
    console.log(window.scrollY);
    let temp = window.scrollY;
    setScrollY({ y: temp });
    console.log(scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="experience">
      <span id="divider" />
      {scrollY.y >= 1375 ? <span id="bob" /> : ""}
    </div>
  );
}

export default Experience;
