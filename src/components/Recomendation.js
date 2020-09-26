import React, { Component } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import recommendation1 from "./recommendation1.JPG";
import recommendation2 from "./recommendation2.jpg";
export default class Recomendation extends Component {
  render() {
    return (
      <section id="recommendation">
        <h1>
          <span>Recomendations</span>
        </h1>
        <AliceCarousel>
          <img src={recommendation1} alt="GoGocar" width="50%" />
          <img src={recommendation2} alt="elisa" width="50%" />
        </AliceCarousel>
      </section>
    );
  }
}
