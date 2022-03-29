import "../Experience/Experience.css";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Button from "react-bootstrap/Button";

function Experience() {
  function onClickWebsite(n) {
    if (n === 1) {
      window.open("https://danskeit.co.in/");
    }
  }

  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  return (
    <div id="experience">
      <h1 className="experience-header" data-aos="fade-up">
        <span>Experience</span>
      </h1>
      <div className="content-all" data-aos="fade-up">
        <div className="experience-1" data-aos="fade-up">
          <h2>
            <span>Danske IT</span>
          </h2>
          <p>Position: Intern</p>
          <p>From Jan 2022 To July 2022</p>
          <p>
            Operational from 2015, Danske It is a fully owned subsidiary of the
            Danske Bank group - the largest bank in Denmark and a leading bank
            In Northern Europe with a universal presence. All of us at Danske It
            Are committed to helping Danske Bank realise its vision of being the
            Most trusted financial partner.
          </p>
          <div className="website-button" data-aos="fade-up">
            <Button
              variant="dark"
              className="website-btn"
              onClick={() => onClickWebsite(1)}
            >
              Go To Company Website
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
