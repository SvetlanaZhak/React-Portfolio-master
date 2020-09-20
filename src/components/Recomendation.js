import React, { Component } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import testimonial1 from "./testimonial1.jpg";
import testimonial2 from "./testimonial2.jpg";
export default class Recomendation extends Component {
  render() {
    return (
      <section id="recommendation">
        <h1>
          <span>Recomendations</span>
        </h1>
        <AliceCarousel autoPlay autoPlayInterval="3000">
          <img src={testimonial1} alt="GoGocar" width="50%" />
          <img src={testimonial2} alt="elisa" width="50%" />
        </AliceCarousel>
      </section>
    );
  }
}
