import React, { Component } from 'react';
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1><span>Projects</span></h1>
            <br />
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              {
                resumeData.portfolio && resumeData.portfolio.map((item, index) => {
                  return (
                    <div className="rows portfolio-item" key={index}>
                      <div className="item-wrap" onClick={() => window.open(item.url ? item.url : item.imgurl, "_blank")} >
                        <img src={`${item.imgurl}`} alt="Project" className="item-img" />
                        <div className="overlay">
                          <div className="portfolio-item-meta">
                            <h5>{item.name}</h5>
                            <p>{item.description}</p>
                          </div>
                        </div>
                      </div>

                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </section>
    );
  }
}