import React from 'react';
import Slider from "react-slick";
import { motion } from 'framer-motion';

function MySlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <motion.section
      className="slider"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Slider {...settings}>
        <div>
          <h3>Программа обучения</h3>
          <p>Наши учебные программы — это комбинация теории и практики.</p>
        </div>
        <div>
          <h3>Инновационные методы</h3>
          <p>Мы используем современные подходы к обучению, чтобы обеспечить лучший результат.</p>
        </div>
      </Slider>
    </motion.section>
  );
}

export default MySlider;
