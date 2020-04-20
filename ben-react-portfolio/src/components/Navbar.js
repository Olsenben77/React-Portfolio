import React from "react";
import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.css";
import Cancun from "./Cancun.jpeg";
//commented code adds route functionality
// import{ Link } from 'react-router-dom';

function Nav() {
  return (
    <header>
      <div className="page-info">
        <ul id="nav">
          {/* Links for navigation: */}
          {/* <Link to="/Navbar"> */}
          <li>
            <a href="#About_Me">About</a>
          </li>
          {/* </Link> */}
          {/* <Link to="/Projects">*/}
          <li>
            <a href="#Projects">Projects</a>
          </li>
          {/* </Link>  */}
          {/* <Link to="/Experience">*/}
          <li>
            <a href="#Experience">Experience</a>
          </li>
          {/* </Link> */}
          {/* <Link to="/Contact">*/}
          <li>
            <a href="#Contact">Contact</a>
          </li>
          {/* </Link> */}
        </ul>
      </div>
      <a id="About_Me">
        <div className="service-head text-center">
          <h2>
            {" "}
            About Me
            <div className="comment"> </div>
          </h2>
          <h3>
            {" "}
            <span className="line">
              {" "}
              <div className="border"></div>
            </span>
          </h3>
        </div>
      </a>
      <div className="card mb-3">
        <div className="row no-gutters">
          <div className="col-md-4">
            <img
              src={Cancun}
              alt="Cancun"
              style={{ width: "240px", height: "365px" }}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <p2 className="card-text">
                &nbsp; &nbsp; &nbsp; &nbsp;Motivated Web Developer, boasting
                multiple years of extensive bilingual training to support a
                well-rounded &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;online experience.
                In the process of completing a Full Stack Development course
                from the University of Washington, highlighting knowledge of
                front-end and back-end technologies. A focused and
                detail-oriented professional, aspiring meaningful opportunities
                in web design as well as mobile-applications. With each task, my
                development goal centers on solid design structure, promoting
                high levels of user engagement and responsiveness. Enthusiastic
                to apply these skills and more to begin a quality career.
                <a
                  className="btn btn-info"
                  href="https://github.com/Olsenben77/Resume/blob/master/my%20resume.pdf"
                  role="button"
                >
                  View Resume <i className="far fa-file"></i>
                </a>
              </p2>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Nav;

/* <div className="card">
        <div className="col-md-2 header-left">
          <img src={Cancun} alt="Cancun" />
        </div>
        <div className="col-md-10 header-right">
          <p>
            &nbsp; &nbsp; &nbsp; &nbsp;Motivated Web Developer, boasting
            multiple years of extensive bilingual training to support a
            well-rounded online experience. In the process of completing a Full
            Stack Development course from the University of Washington,
            highlighting knowledge of front-end and back-end technologies. A
            focused and detail-oriented professional, aspiring meaningful
            opportunities in web design as well as mobile-applications. With
            each task, my development goal centers on solid design structure,
            promoting high levels of user engagement and responsiveness.
            Enthusiastic to apply these skills and more to begin a quality
            career creating purposeful web content.
          </p>
          <a
            className="btn btn-info"
            href="https://github.com/Olsenben77/Resume/blob/master/my%20resume.pdf"
            role="button"
          >
            View Resume <i className="far fa-file"></i>
          </a>
        </div>
      </div> */
