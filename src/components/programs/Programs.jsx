import React from "react";
import "./programs.css";

const programs = [
  {
    title: "Дошкольное развитие",
    age: "3 – 6 лет",
    description:
      "Обучение через игру, развитие мышления, речи и логики. Подготовка к школе с акцентом на внимание и моторику.",
    img: "/coding.jpeg",
  },
  {
    title: "Начальный английский",
    age: "6 – 10 лет",
    description:
      "Интерактивное обучение английскому с носителями и мультимедийными материалами. Формируем правильное произношение и базовую грамматику.",
    img: "/coding.jpeg",
  },
  {
    title: "Программирование для детей",
    age: "7 – 12 лет",
    description:
      "Первые шаги в программировании: Scratch, логика, алгоритмы. Обучение в форме игр и проектов.",
    img: "/coding.jpeg",
  },
  {
    title: "Frontend-разработка",
    age: "12 – 18 лет",
    description:
      "Создание сайтов с HTML, CSS и JavaScript. Практические проекты, адаптивная верстка и основы UI/UX.",
    img: "/coding.jpeg",
  },
  {
    title: "Подготовка к IELTS",
    age: "с 5 класса и старше",
    description:
      "Подготовка к международному экзамену IELTS с упором на Speaking, Writing и Listening. Педагоги с высоким баллом и опытом.",
    img: "/coding.jpeg",
  },
  {
    title: "IT и цифровая грамотность",
    age: "10 – 17 лет",
    description:
      "Работа с Canva, Excel, PowerPoint, Google-инструментами. Современные навыки, нужные каждому школьнику.",
    img: "/coding.jpeg",
  },
];

function Programs() {
  return (
    <section className="programs" id="programs">
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
