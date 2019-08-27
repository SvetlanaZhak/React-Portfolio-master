import React, { Component } from 'react';
export default class About extends Component {
   render() {
      let resumeData = this.props.resumeData;
      return (
         <section id="about">
            <div className="row">

               <div className="three columns">

                  <img className="profile-pic" src="images/linkedin-pic.JPG" alt="MainPic" />

               </div>

               <div className="nine columns main-col">

                  <h2>About Me</h2>
                  <p>
                     {
                        resumeData.aboutme
                     }
                  </p>

                  {/*
                  <div className="row">
                     <div className="columns contact-details">
                        <p className="address">
                           <a href={resumeData.cv} target='_blank' rel="noopener noreferrer" style={{ textAlign: "center", width: "10px" }}  ><img alt="CV" src="images/CV.jpg" /></a>
                        </p>
                     </div>
                  </div>
                      */}
               </div>
            </div>
         </section>
      );
   }
}