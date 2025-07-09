import React from "react";
import kidImg from "../../assets/images/coding.jpeg"; // замени на путь к своему изображению
import "./services.css";

const ServicesSection = () => {
  return (
    <section className="services-section">
      <div className="services-image">
        <img src={kidImg} alt="Happy child" />
      </div>
      <div className="services-text">
        <h4>Our Locations</h4>
        <h2>
          State-of-the-art <br />
          Environment Built for Fun
        </h2>
        <p>
          NY Kids Club is NYC’s premier space for families throughout early
          childhood. We offer immersive learning through classes, camps,
          birthday parties and more. With custom-built locations, we provide a
          nurturing and age-appropriate environment to foster fun, connection,
          and lifelong growth.
        </p>
      </div>
    </section>
  );
};

export default ServicesSection;
