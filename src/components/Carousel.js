import React, { Component } from 'react'
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import img1 from '../images/slideshow1.jpg';
import img2 from "../images/slideshow2.jpg";
import img3 from "../images/slideshow3.jpg";
import img4 from "../images/slideshow4.jpg";
import img5 from "../images/slideshow5.jpg";

import Banner from './Banner';

export default class Slideshow extends Component {
    render() {
        return (
          <div className="slideshow">
            <Carousel
              infiniteLoop={true}
              showThumbs={false}
              showStatus={false}
              dynamicHeight={true}
              /* autoPlay={true} */
              useKeyboardArrows={true}
            >
              <div>
                <img src={img4} className="slideshow-img" />
                <p className="legend">One of the best perks of these rooms are the beautiful views of the ocean, mountain, and cities.</p>
              </div>
              <div>
                <img src={img2} className="slideshow-img" />
              </div>
              <div>
                <img src={img1} className="slideshow-img" />
              </div>
              <div>
                <img src={img3} className="slideshow-img" />
              </div>
              <div>
                <img src={img5} className="slideshow-img" />
              </div>
            </Carousel>
          </div>
        );
    }
}
