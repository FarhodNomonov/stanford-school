import React from "react";
import "./programs.css";

const programs = [
  {
    title: "Основы программирования",
    age: "7 - 12 лет",
    description: "Детям даются базовые знания программирования через игры и практические задачи.",
    img: "/assets/images/coding.jpeg",
  },
  {
    title: "Робототехника",
    age: "8 - 14 лет",
    description: "Изучаем основы робототехники, программируем небольшие устройства и роботов.",
    img: "robotics.png",
  },
  {
    title: "Веб-разработка",
    age: "12 - 18 лет",
    description: "Создаём свои первые сайты с использованием HTML, CSS и JavaScript.",
    img: "webdev.png",
  },
  {
    title: "Кибербезопасность",
    age: "10 - 18 лет",
    description: "Изучаем, как защитить личные данные и безопасно работать в интернете.",
    img: "cybersecurity.png",
  },
  {
    title: "Искусственный интеллект",
    age: "12 - 18 лет",
    description: "Знакомство с основами машинного обучения и анализа данных.",
    img: "ai.png",
  },
  {
    title: "3D-моделирование",
    age: "10 - 16 лет",
    description: "Разработка 3D-моделей для игр, анимации и печати на 3D-принтере.",
    img: "3dmodel.png",
  },
];

function Programs() {
  return (
    <section className="programs">
      {programs.map((program, index) => (
        <div key={index} className="program-card">
          <img src={`${program.img}`} alt={program.title} />
          <div className="program-info">
            <h3>{program.title}</h3>
            <p className="age">{program.age}</p>
            <p>{program.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Programs;
