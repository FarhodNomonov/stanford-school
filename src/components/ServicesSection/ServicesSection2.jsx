import React from "react";
import "./serviceSections.css";

const services = [
  {
    age: "2–5 лет",
    title: "Детский сад и подготовка к школе",
    description:
      "Развиваем речь, мышление и социальные навыки с помощью игр, творчества и заботы опытных педагогов.",
    color: "#FFF4DC",
    buttonColor: "#F4B400",
  },
  {
    age: "1–4 классы",
    title: "Начальное образование + английский",
    description:
      "Совмещаем базовые школьные предметы с ранним изучением английского языка и интерактивными занятиями.",
    color: "#E3F2FD",
    buttonColor: "#42A5F5",
  },
  {
    age: "5–7 классы",
    title: "IELTS и IT с 5 класса",
    description:
      "Начинаем подготовку к международному экзамену IELTS и изучаем основы программирования и цифровых технологий.",
    color: "#E8F5E9",
    buttonColor: "#66BB6A",
  },
  {
    age: "8–9 классы",
    title: "Углублённое обучение и проекты",
    description:
      "Развиваем критическое мышление, IT-навыки, медиа-грамотность и участвуем в образовательных хакатонах и проектах.",
    color: "#F3E5F5",
    buttonColor: "#AB47BC",
  },
];

export default function ServicesSection() {
  return (
    <section className="services-section">
      {services.map((item, index) => (
        <div
          className="service-card"
          key={index}
          style={{ backgroundColor: item.color }}
        >
          <p className="age">{item.age}</p>
          <h3 className="title">{item.title}</h3>
          <p className="description">{item.description}</p>
          <button
            className="learn-more"
            style={{ backgroundColor: item.buttonColor }}
            onClick={() => {
              const section = document.getElementById("contact");
              if (section) {
                section.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Узнать больше
          </button>
        </div>
      ))}
    </section>
  );
}
