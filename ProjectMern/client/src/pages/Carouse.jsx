

import React, { useState } from "react";


import "../css/Carouse.css";

import img1 from "../Images/c1.jpg";
import img2 from "../Images/c3.jpg";
import img3 from "../Images/c3.jpg";

// import img1 from "../assets/img1.jpg";
// import img2 from "../assets/img2.jpg";
// import img3 from "../assets/img3.jpg";

const Carouse = () => {
  const [current, setCurrent] = useState(0);
  const images = [img1, img2, img3];

  const prevSlide = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  return (
    <div className="delightful-carousel-container">
      <div className="carousel-header">
        <h1>Delightful Experience</h1>
        <p>
          A taste of perfection in every dish –{" "}
          <span className="highlight">fine dining with a modern twist.</span>
        </p>
      </div>

      <div className="carousel-image-wrapper">
        <img src={images[current]} alt={`slide-${current}`} />
        <button className="nav-button left" onClick={prevSlide}>
          &#8249;
        </button>
        <button className="nav-button right" onClick={nextSlide}>
          &#8250;
        </button>
      </div>

      <div className="carousel-footer">
        <p>
          <span className="highlight">VISIT US :</span> Restaurant St,
          Delicious City, London 9578, UK <span className="star">★</span>{" "}
          <span className="highlight">WE ARE OPEN :</span> Daily • 8.00 am to
          10.00 pm
        </p>
      </div>
    </div>
  );
};

export default Carouse;
