// import "slick-carousel";
// import "slick-carousel";

import React, { Component } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

export default class SportCarousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div>
            <Slide src="http://calliescaninecollege.co.uk/wp-content/uploads/2017/03/Bath-Somersetdog-training-agilitycourse1-1024x819.jpg" />
          </div>
          <div>
            <Slide src="https://usercontent1.hubstatic.com/8285960_f1024.jpg" />
          </div>
        </Slider>
      </div>
    );
  }
}
const Slide = styled.img`
  height: 62vh;
  width: 80%;
`;
