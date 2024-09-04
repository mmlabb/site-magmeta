import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./wordAnimation.css"; // Import CSS for styling and animation
const words = [
  "#SaaS",
  "#Automação",
  "#Funil",
  "#Aplicativo",
  "#CRM",
  "#ERP",
  "#Blog",
  "#Cloud",
  "#ui/ux",
];

const colors = [
  "#FF5733", // Cor para #SaaS
  "#33FF57", // Cor para #Automação
  "#3357FF", // Cor para #Funil
  "#FF33A1", // Cor para #Aplicativo
  "#33FFF5", // Cor para #CRM
  "#ffd333", // Cor para #ERP
  "#A133FF", // Cor para #Blog
  "#FF8633", // Cor para #Cloud
  "#33FF86", // Cor para #ui/ux
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
