import React from "react";
import "./serviceSections.css";

const services = [
  {
    age: "0–13 Months",
    title: "Infant & Baby",
    description:
      "Give them the best start in life with parent/child classes that explore the senses and support visual and auditory development.",
    color: "#FFEBD9",
    buttonColor: "#FC9400",
  },
  {
    age: "14–36 Months",
    title: "Toddler",
    description:
      "Support growth, build self-esteem and encourage communication skills with classes that build strength through play.",
    color: "#ECF8EC",
    buttonColor: "#82B366",
  },
  {
    age: "2–4 Years",
    title: "Preschool",
    description:
      "Let your little learners develop problem-solving skills through interactive games, play and music.",
    color: "#E5F6E0",
    buttonColor: "#49B649",
  },
  {
    age: "5+ Years",
    title: "And Beyond",
    description:
      "Teaches kids the skills they'll need to start Preschool and Kindergarten — with plenty of time for play and creativity.",
    color: "#F6E6F6",
    buttonColor: "#A259C5",
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
          >
            Learn More
          </button>
        </div>
      ))}
    </section>
  );
}
