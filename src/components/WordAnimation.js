import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./wordAnimation.css"; // Import CSS for styling and animation
const words = [
  "#Tecnologia",
  "#Automação",
  "#Marketing",
  "#A.I",
  "#Tecnologia",
  "#Automação",
  "#Marketing",
  "#A.I",
];

const colors = [
  "#03d1e89", // Cor para #Tecnologia
  "#00F6FF", // Cor para #Automação
  "#9c5dd3 ",
  "#00F6FF", // Cor para #Aplicativo
  "##03d1e8",
  "#5B19A9", // Cor para #Tecnologia
  "#00F6FF", // Cor para #Automação
  "#9c5dd3 ",
  "#00F6FF", // Cor para #Aplicativo
  "#03d1e8", // Cor para #Marketing
  "#00F6FF",
];

const WordSlider = ({}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000); // Change word every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider-container d-flex justify-content-center justify-content-lg-start">
      <div className="slider-content">
        {words.map((word, index) => {
          return index === currentIndex ? (
            <div
              key={word}
              className="word texto-magnetize-metas"
              style={{ color: colors[index] }}
            >
              {word.split("").map((el, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="letter"
                  transition={{
                    duration: 0.25,
                    delay: i / 10,
                  }}
                >
                  {el}
                </motion.div>
              ))}
            </div>
          ) : null;
        })}
      </div>
    </div>
  );
};

export default WordSlider;
