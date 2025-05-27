"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

const SyncAccordionSlide = () => {
  const [active_index, set_active_index] = useState(0);
  const [is_paused, set_is_paused] = useState(false);
  const pause_timeout_ref = useRef(null);
  const interval_ref = useRef(null);
  const progress_ref = useRef(null);

  const items = [
    {
      title: "Magnet chat",
      content:
        "rem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      image: "/black-blues.jpg",
    },

    {
      title: "Produto 2",
      content:
        "professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32",
      image: "/img2.jpg",
    },

    {
      title: "Produto 3",
      content:
        "professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32",
      image: "/img3.jpg",
    },
  ];

  useEffect(() => {
    start_auto_advance();
    return () => clearInterval(interval_ref.current);
  }, []);

  const start_auto_advance = () => {
    clearInterval(interval_ref.current);
    interval_ref.current = setInterval(() => {
      set_active_index((prev) => (prev + 1) % items.length);
    }, 5000);
  };

  const handle_click = (index) => {
    if (active_index === index) return;
    set_active_index(index);
    set_is_paused(true);
    clearTimeout(pause_timeout_ref.current);
    clearInterval(interval_ref.current);
    pause_timeout_ref.current = setTimeout(() => {
      set_is_paused(false);
      start_auto_advance();
    }, 5000);
  };

  useEffect(() => {
    if (progress_ref.current) {
      const progressPercent = ((active_index + 1) / items.length) * 100;
      progress_ref.current.style.height = `${progressPercent}%`;
    }
  }, [active_index, items.length]);

  return (
    <div className="container my-5">
      <div className="row">
        {/* Slide de imagem sincronizado */}
        <div
          className="col-md-6 position-relative overflow-hidden"
          style={{ height: "300px" }}
        >
          <div
            className="d-flex flex-column"
            style={{
              transform: `translateY(-${active_index * 100}%)`,
              transition: is_paused ? "none" : "transform 1s ease-in-out",
              height: `${items.length * 100}%`,
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
            }}
          >
            {items.map((item, index) => (
              <div
                key={index}
                className="d-flex justify-content-center align-items-center"
                style={{ height: "300px" }}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={250}
                  style={{ objectFit: "cover", borderRadius: "0.5rem" }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Accordion com títulos anteriores clicáveis */}
        <div className="col-md-6 position-relative">
          {/* Barra de progresso vertical */}
          <div
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              bottom: 0,
              width: "2px",
              backgroundColor: "#4f4b55",
              borderRadius: "10px",
              overflow: "hidden",
              zIndex: 1,
            }}
          >
            <div
              ref={progress_ref}
              style={{
                width: "100%",
                height: "0%", // começa em 0, vai crescer conforme active_index
                backgroundColor: "#6f42c1",
                borderRadius: "10px",
                transition: "height 0.5s ease",
              }}
            ></div>
          </div>
          <div className="my-accordion" id="syncAccordion">
            {items.map((item, index) => {
              const isActive = index === active_index;
              const isBefore = index < active_index;

              if (!isActive && !isBefore) return null;

              return (
                <div
                  key={index}
                  className="accordion-item"
                  onClick={() => {
                    if (!isActive) handle_click(index);
                  }}
                >
                  <h4
                    style={{
                      fontWeight: "600",
                      marginBottom: isActive ? "0.5rem" : 0,
                      color: "#fff",
                    }}
                  >
                    {item.title}
                  </h4>
                  {isActive && (
                    <p style={{ color: "#fff", fontWeight: "400" }}>
                      {item.content}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SyncAccordionSlide;
