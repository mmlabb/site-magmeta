"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useTheme } from "@/providers/ThemeProvider";

const Statistics = ({ data }) => {
  const [counters, setCounters] = useState(data.map(() => 0));
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  const { darkMode } = useTheme(); // pega o tema atual

  // Detectar visibilidade
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.5 }
    );

    const currentRef = ref.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  // Atualizar contadores
  useEffect(() => {
    let interval;

    if (isVisible) {
      interval = setInterval(() => {
        setCounters((prev) =>
          prev.map((value, index) =>
            value < data[index].target ? value + 1 : data[index].target
          )
        );
      }, 30);
    } else {
      setCounters(data.map(() => 0));
    }

    return () => clearInterval(interval);
  }, [isVisible, data]);

  return (
    <section className="statistics" ref={ref}>
      <div className="container">
        <div className="d-flex justify-content-center text-center gap-4 flex-wrap">
          {data.map((item, index) => (
            <div key={index} className="box-st col-md-3 col-sm-12">
              <div className="p-4 rounded">
                {/* Ícone */}
                <div className="mb-2">
                  <Image
                    src={item.icon}
                    alt={`Ícone ${index + 1}`}
                    width={40}
                    height={40}
                  />
                </div>

                {/* Número */}
                <h2
                  className="gradient-number"
                  style={{ color: darkMode ? "#fff" : "#000" }}
                >
                  +{counters[index]}
                  {index === 0 && " mil"}
                </h2>

                {/* Texto */}
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
