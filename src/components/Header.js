import React, { Component } from "react";
import Typist from "react-typist";
export default class Header extends Component {
  componentDidMount() {
    const resumeData = this.props.resumeData;
    resumeData.socialLinks.forEach(item => {
      setTimeout(() => {
        document.getElementById(item.name).style.visibility = "visible";
      }, item.delay);
    });
    setTimeout(() => {
      document.getElementById("nav").style.visibility = "visible";
      document.getElementById("scrolldown").style.visibility = "visible";
    }, 4500);
  }
  render() {
    const resumeData = this.props.resumeData;
    return (
      <React.Fragment>
        <header id="home">
          <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
              Show navigation
            </a>
            <a className="mobile-btn" href="#" title="Hide navigation">
              Hide navigation
            </a>
            <ul id="nav" className="nav" style={{ visibility: "hidden" }}>
              <li className="current">
                <a className="smoothscroll" href="#home">
                  Home
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#resume">
                  Education
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#skills">
                  Skills
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#work">
                  Work Experience
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#portfolio">
                  Projects
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#recommendation">
                  Recommendations
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          <div className="row banner">
            <div className="banner-text">
              <h1 className="responsive-headline">
                <Typist>{resumeData.name}</Typist>{" "}
              </h1>

              <h2 style={{ color: "#fff", fontFamily: "sans-serif " }}>
                {" "}
                <Typist>
                  <Typist.Delay ms={1500} />
                  {resumeData.role}
                </Typist>
              </h2>

              <ul className="social">
                {resumeData.socialLinks &&
                  resumeData.socialLinks.map(item => {
                    return (
                      <li key={item.name} id={item.name}>
                        <a
                          href={item.url}
                          target="_blank "
                          rel="noopener noreferrer"
                        >
                          <i className={item.className} />
                        </a>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>

          <p
            className="scrolldown"
            id="scrolldown"
            style={{ visibility: "hidden" }}
          >
            <a className="smoothscroll" href="#about">
              <i className="fa fa-chevron-circle-down fa-lg" />
            </a>
          </p>
        </header>
      </React.Fragment>
    );
  }
}
