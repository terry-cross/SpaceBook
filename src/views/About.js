import React from "react";
import Menu from "../components/Menu";
// import { Link } from "react-router-dom";
// import { Navbar, Nav } from "react-bootstrap";

function About() {
  return (
    <div>
      <div>
        <Menu />
      </div>
      <h3 className="about-text">
        Welcome To SpaceBook! Where you can explore the wonders of the Universe
        on a site that loves and appreciates
        <p>
          astrology, with a community that loves astrology as much as you do.
        </p>
        <div>
          <p>
            -There is a supermassive black hole at the heart of every galaxy
          </p>
          <p>-The Universe has the same temperature everywhere</p>
          <p>-95% of the Universe is invisible</p>
          <p>
            -The first gravitational waves detected came from a binary black
            hole system nobody predicted
          </p>
          <p>-When you look into the night sky, you are looking back in time</p>
        </div>
      </h3>
    </div>
  );
}

export default About;
