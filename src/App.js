import React, { Component } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Resume from "./components/Resume";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import resumeData from "./resumeData";

import "font-awesome/css/font-awesome.min.css";
import Recomendation from "./components/Recomendation";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header resumeData={resumeData} />
        <About resumeData={resumeData} />
        <Resume resumeData={resumeData} />
        <Skills resumeData={resumeData} />
        <Work resumeData={resumeData} />
        <Portfolio resumeData={resumeData} />
        <Recomendation />
        <Contact resumeData={resumeData} />
        <Footer resumeData={resumeData} />
      </div>
    );
  }
}

export default App;
