import React from "react";
import kidImg from "../../assets/images/coding.jpeg"; // путь к твоему изображению
import "./services.css";

const ServicesSection = () => {
  return (
    <section className="services-section">
      <div className="services-image">
        <img src={kidImg} alt="Ребёнок на занятии" />
      </div>
      <div className="services-text">
        <h4>О нашей школе</h4>
        <h2>
          Современная среда <br />
          для обучения и вдохновения
        </h2>
        <p>
          Stanford School — это частная школа нового поколения, где обучение
          становится увлекательным путешествием. Мы создаём комфортную и
          технологичную среду, в которой дети развиваются, изучают английский
          язык, программирование, а также учатся работать в команде и мыслить
          креативно. У нас каждый ребёнок чувствует себя уверенно и
          раскрывает свой потенциал.
        </p>
      </div>
    </section>
  );
};

export default ServicesSection;
