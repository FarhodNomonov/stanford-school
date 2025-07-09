import React from "react";
import "./about.css"; // Подключаем стили
import myImage from "./image.jpg";

const About = () => {
 
  return (
    <section className="about" id="about">
      <div className="about-content">
        <h2 className="about-title">Добро пожаловать в Stanford!</h2>
        <p className="about-text">
          Мы — инновационная частная школа, которая делает обучение интересным и
          эффективным. Наши ученики изучают программирование, робототехнику и
          современные технологии.
        </p>
        <button className="about-btn">Подробнее</button>
      </div>
      <div className="about-image">
        <img src={myImage} alt="Наша школа" />
      </div>
    </section>
  );
};

export default About;
