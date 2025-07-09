import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./teachersSection.css";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const teachers = [
  {
    name: "Umarova Ivilina",
    role: "UI/UX Designer",
    description:
      "Alice has a passion for creating beautiful and functional user interfaces.",
    image:
      "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },

  {
    name: "Xajibayeva Malohat",
    role: "Russian teacher",
    description:
      "Jane has a deep understanding of databases and server-side development.",
    image:
      "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },

  {
    name: "Isakova Ruhsora",
    role: "Full-stack Developer",
    description:
      "Bob is experienced in both front and back-end technologies, including Node.js and React.",
    image:
      "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

const TeachersSection = () => {
  return (
    <div
      className="w-full max-w-6xl mx-auto p-4 my-12 teachers-container"
      id="teachers"
    >
      <h2 className="text-3xl font-semibold text-center mb-8">
        Meet Our Teachers
      </h2>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative"
      >
        <Slider {...settings}>
          {teachers.map((teacher, index) => (
            <div key={index} className="px-4 teachers_card">
              <motion.div
                className="teacher-card bg-white p-6 rounded-lg shadow-xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="teacher-image-container">
                  <img
                    src={teacher.image}
                    alt={teacher.name}
                    className="teacher-image"
                  />
                </div>
                <h3 className="teacher-name">{teacher.name}</h3>
                <p className="teacher-role">{teacher.role}</p>
                <p className="teacher-description">{teacher.description}</p>
              </motion.div>
            </div>
          ))}
        </Slider>
      </motion.div>
    </div>
  );
};

export default TeachersSection;
