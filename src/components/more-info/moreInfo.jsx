import React from "react";
import "./moreInfo.css"; // Подключаем стили

function moreInfo() {
  return (
    <>
      <section className="more-info" id="more-info">
        <div className="container">
          <h3>О нашей школе</h3>
          <p>
            В Stanford мы верим, что обучение должно быть не только полезным, но
            и вдохновляющим. Наши преподаватели — это опытные специалисты,
            которые помогают детям раскрыть потенциал с помощью современных
            технологий и практических задач.
          </p>
          <p>
            Мы предлагаем курсы программирования, робототехники, дизайна и
            предпринимательства с раннего возраста.
          </p>
        </div>
      </section>
    </>
  );
}

export default moreInfo;
