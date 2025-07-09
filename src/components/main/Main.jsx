import React, { useState } from "react";
import { motion } from "framer-motion";
import "./main.css";

const slides = [
  {
    id: 1,
    text: "Welcome to your new neighborhood buy & sell",
    img: "slide1.webp",
  },
  { id: 2, text: "Find great deals on items near you", img: "slide2.webp" },
  {
    id: 3,
    text: "Join a trusted community of buyers and sellers",
    img: "slide3.webp",
  },
];

function Main() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleSwipe = (direction) => {
    if (isAnimating) return;
    setIsAnimating(true);
    if (direction === "left") {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    } else {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? slides.length - 1 : prevIndex - 1
      );
    }
  };

  return (
    <section className="slider">
      {slides.map((slide, index) => (
        <motion.div
          key={slide.id}
          className="slide"
          style={{ backgroundImage: `url(${slide.img})` }}
          initial={{ opacity: index === currentIndex ? 1 : 0 }}
          animate={{ opacity: index === currentIndex ? 1 : 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={(event, info) => {
            if (info.offset.x < -50) {
              handleSwipe("left");
            } else if (info.offset.x > 50) {
              handleSwipe("right");
            }
          }}
          onAnimationComplete={() => setIsAnimating(false)}
        >
          <div className="overlay">
            <h2>{slide.text}</h2>
          </div>
        </motion.div>
      ))}

     
      <button className="slider-arrow prev" onClick={() => handleSwipe("right")}>‹</button>
      <button className="slider-arrow next" onClick={() => handleSwipe("left")}>›</button>
    </section>
  );
}

export default Main;
