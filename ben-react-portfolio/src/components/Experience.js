import React, { useEffect, useState } from "react";
import "./Experience.css";

function Experience() {
  const [scrollY, setScrollY] = useState({ y: 0 });
  useEffect(() => {
    console.log(window.scrollY);
    let temp = window.scrollY;
    setScrollY({ y: temp });
    console.log(scrollY);
  }, [scrollY]);
  return (
    <div className="experience">
      <a id="Experience">
        <div className="service-head1 text-center">
          <h2>
            {" "}
            Resume
            <div className="comment1"> </div>
          </h2>
          <h3>
            {" "}
            <span className="line1">
              {" "}
              <div className="border1"></div>
            </span>
          </h3>
        </div>
      </a>
      <span id="divider" />
      {scrollY.y >= 1525 ? <span id="bob" /> : ""}
      <div class="container2">
        <div class="container-md">
          <div class="card1">
            <div class="card-body">
              <div class="row">
                <div class="d-flex justify-content-flex-start col-md-8 col-lg-6">
                  <h1>
                    {" "}
                    <u1>Work Experience - </u1>
                  </h1>
                </div>
                <div class="d-flex justify-content-center flex-column  col-md-8 col-lg-6">
                  <h1>Foreign Language Instructor</h1>
                  <h3>
                    Rainier Valley Leadership Academy - Seattle, WA 2019 to
                    present
                  </h3>
                  <li>
                    <p1>
                      Taught and mentored differentiated levels of high school
                      Spanish as well as leadership-centered classes.
                    </p1>
                  </li>
                  <li>
                    <p1>
                      Instructs multiple levels of learners on a created Spanish
                      curriculum, adhering to specified practices and
                      methodologies while including cultiral ties within
                      lessons.
                    </p1>
                  </li>
                  <li>
                    <p1>
                      Organizes and plans school-wide events while developing
                      meaningful content for leaderships style classes.
                    </p1>
                  </li>
                  <br></br>
                </div>
                <div class="row">
                  <div class="d-flex justify-content-flex-start col-md-12 col-lg-6"></div>
                  <div class="d-flex justify-content-center flex-column  col-md-12 col-lg-6">
                    <h1>Foreign Language Instructor</h1>
                    <h3>Nebraska Lutheran High School - Waco, NE 2017-2019</h3>

                    <li>
                      <p1>
                        Taught all secondary levels of Spanish learning up to
                        Spanish AP 5, managed school dormitory functions, and
                        fulfilled multiple roles as an educator, volunteer, and
                        coach.
                      </p1>
                    </li>
                    <li>
                      <p1>
                        Instruct a personalized established foreign language
                        curriculum, adhering to specified methodologies,
                        standards, and practices.
                      </p1>
                    </li>
                    <li>
                      <p1>
                        Scheduled overview and communicated supervision of
                        dormitory residents through following of set
                        desciplinary practices
                      </p1>
                    </li>
                  </div>
                </div>
              </div>
              <br></br>
              <div class="row">
                <div class="d-flex justify-content-flex-start col-md-12 col-lg-6">
                  <h1>
                    <u1>Education -</u1>{" "}
                  </h1>
                </div>
                <div class="d-flex justify-content-center flex-column  col-md-12 col-lg-6">
                  <h1>UW Coding Bootcamp</h1>
                  <h3>November 2019 - May 2020</h3>
                  <p1>
                    Full-stack development course highlighting multiple areas of
                    programming and responsive web design. Learned languages
                    include HTML, CSS, JavaScript, React.js, and more. Project
                    based learning opportunites, focusing on refining learned
                    skills and group collaboration.
                  </p1>
                  <br></br>
                </div>
              </div>
              <div class="row">
                <div class="d-flex justify-content-flex-start col-md-12 col-lg-6"></div>
                <div class="d-flex justify-content-center flex-column  col-md-12 col-lg-6">
                  <h1>
                    Bachelor of Education / Bachelor of Foreign Language Studies
                  </h1>
                  <h3>August 2011 - May 2017</h3>
                  <p1>3.5 GPA cum laude</p1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
