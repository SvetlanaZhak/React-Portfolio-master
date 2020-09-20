import React, { Component } from "react";
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img
              className="profile-pic"
              src="images/main_pic.jpeg"
              alt="MainPic"
            />
          </div>

          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>{resumeData.aboutme}</p>
          </div>
        </div>
      </section>
    );
  }
}
