import React from "react";
import "./about.css"; // Подключаем стили
import myImage from "./image.jpg";

const About = () => {
 
  return (
    <section className="about" id="about">
      <div className="about-content">
        <h2 className="about-title">Добро пожаловать в школу будущего — Stanford!</h2>
        <p className="about-text">
         Мы объединили лучшие традиции образования с инновационными методиками. Уже с первого класса дети изучают английский язык, программирование и учатся мыслить как создатели. Наши ученики не просто учатся — они развиваются, создают и становятся уверенными в себе.
        </p>
      </div>
      <div className="about-image">
        <img src={myImage} alt="Наша школа" />
      </div>
    </section>
    
  );
};

export default About;
