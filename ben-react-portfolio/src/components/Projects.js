import React from "react";
import Burger from "./BurgerSpot.png";
import Github from "./Github.png";
import Manager from "./EmployeeManager.png";
import Directory from "./EmployeeDirectory.png";
import Scheduler from "./Scheduler.png";
import NiteOwl from "./NiteOwl.png";
import "./Projects.css";

function Projects() {
  return (
    <div id="projects">
      <h2>Projects</h2>
      <div className="row">
        <div className="d-flex justify-content-center col-sm-6 col-md-12 col-lg-6">
          <div className="container2">
            <img
              className="img-fluid port-image"
              src={Burger}
              alt=""
              width="450"
            />
            <div className="overlay">
              <div className="text">
                <h4>Express-handlebars generated server </h4>
                <a
                  className="centered nav-link"
                  href="https://github.com/Olsenben77/MVC-Express-Handlebars---Burger"
                >
                  {" "}
                  Github
                </a>
                <a className="centered nav-link" href="google.com">
                  {" "}
                  Deployed{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center col-sm-6 col-md-12 col-lg-6">
          <div className="container2">
            <img
              className="img-fluid port-image"
              src={Github}
              alt=""
              width="450"
            />
            <div className="overlay">
              <div className="text">
                <h4>Express-handlebars generated server </h4>
                <a
                  className="centered nav-link"
                  href="https://github.com/Olsenben77/MVC-Express-Handlebars---Burger"
                >
                  {" "}
                  github
                </a>
                <a className="centered nav-link" href="google.com">
                  {" "}
                  deployed{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="d-flex justify-content-center col-sm-6 col-md-12 col-lg-6">
          <div className="container2">
            <img
              className="img-fluid port-image"
              src={Manager}
              alt=""
              width="450"
            />
            <div className="overlay">
              <div className="text">
                <h4>Express-handlebars generated server </h4>
                <a
                  className="centered nav-link"
                  href="https://github.com/Olsenben77/MVC-Express-Handlebars---Burger"
                >
                  {" "}
                  github
                </a>
                <a className="centered nav-link" href="google.com">
                  {" "}
                  deployed{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center col-sm-6 col-md-12 col-lg-6">
          <div className="container2">
            <img
              className="img-fluid port-image"
              src={Directory}
              alt=""
              width="450"
            />
            <div className="overlay">
              <div className="text">
                <h4>Express-handlebars generated server </h4>
                <a
                  className="centered nav-link"
                  href="https://github.com/Olsenben77/MVC-Express-Handlebars---Burger"
                >
                  {" "}
                  github
                </a>
                <a className="centered nav-link" href="google.com">
                  {" "}
                  deployed{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="d-flex justify-content-center col-sm-6 col-md-12 col-lg-6">
          <div className="container2">
            <img
              className="img-fluid port-image"
              src={Scheduler}
              alt=""
              width="450"
            />
            <div className="overlay">
              <div className="text">
                <h4>Express-handlebars generated server </h4>
                <a
                  className="centered nav-link"
                  href="https://github.com/Olsenben77/MVC-Express-Handlebars---Burger"
                >
                  {" "}
                  github
                </a>
                <a className="centered nav-link" href="google.com">
                  {" "}
                  deployed{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center col-sm-6 col-md-12 col-lg-6">
          <div className="container2">
            <img
              className="img-fluid port-image"
              src={NiteOwl}
              alt=""
              width="450"
            />
            <div className="overlay">
              <div className="text">
                <h4>Express-handlebars generated server </h4>
                <a
                  className="centered nav-link"
                  href="https://github.com/Olsenben77/MVC-Express-Handlebars---Burger"
                >
                  {" "}
                  github
                </a>
                <a className="centered nav-link" href="google.com">
                  {" "}
                  deployed{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
