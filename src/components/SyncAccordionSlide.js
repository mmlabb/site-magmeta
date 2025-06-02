"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

const SyncAccordionSlide = () => {
  const [active_index, set_active_index] = useState(0);
  const [is_paused, set_is_paused] = useState(false);
  const pause_timeout_ref = useRef(null);
  const interval_ref = useRef(null);
  const progress_ref = useRef(null);
  const container_ref = useRef(null);

  const items = [
    {
      title: "Magnet chat",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      image: "assets/img/test.png",
    },
    {
      title: "Produto 2",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      image: "assets/img/test.png",
    },
    {
      title: "Produto 3",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      image: "assets/img/test.png",
    },
  ];

  useEffect(() => {
    start_auto_advance();
    return () => clearInterval(interval_ref.current);
  },);

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
    if (progress_ref.current && container_ref.current) {
      const containerHeight = container_ref.current.clientHeight;
      const activeItem = container_ref.current.querySelector(
        `.accordion-item[data-index='${active_index}']`
      );
      if (activeItem) {
        const offsetTop = activeItem.offsetTop;
        const height = activeItem.offsetHeight;
        const progressTop = offsetTop;
        const progressHeight = height;

        progress_ref.current.style.top = `${progressTop}px`;
        progress_ref.current.style.height = `20%`;

        const timeout1 = setTimeout(() => {
          progress_ref.current.style.height = `50%`;
        }, 1500);

        const timeout2 = setTimeout(() => {
          progress_ref.current.style.height = `${progressHeight}px`;
        }, 4000);

        return () => {
          clearTimeout(timeout1);
          clearTimeout(timeout2);
        };
      }
    }
  }, [active_index]);

  return (
    <div className="container my-5">
      <div className="row">
        <div
          className="col-md-6 position-relative overflow-hidden"
          style={{ height: "300px" }}
        >
          <div
            className="d-flex flex-column"
            style={{
              transform:
                active_index === 2
                  ? `translateY(${(items.length - 1 - active_index) * 100}%)`
                  : `translateY(-${active_index * 100}%)`,
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
                style={{
                  height: "300px",
                  transition: "opacity 0.8s ease-in-out",
                }}
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

        <div className="col-md-6 position-relative">
          <div
            style={{
              position: "absolute",
              left: 0,
              height: "100%",
              top: 0,
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
                position: "absolute",
                width: "100%",
                height: "0%",
                backgroundColor: "#6f42c1",
                borderRadius: "10px",
                transition: "height 0.5s ease, top 0.5s ease",
              }}
            ></div>
          </div>
          <div
            className="my-accordion position-relative"
            id="syncAccordion"
            ref={container_ref}
          >
            {items.map((item, index) => {
              const isActive = index === active_index;
              const isMagnetChatMoved = active_index === 2 && index === 0;
              return (
                <div
                  key={index}
                  className="accordion-item"
                  data-index={index}
                  onClick={() => handle_click(index)}
                  style={{
                    cursor: "pointer",
                    transition: "all 0.6s ease",
                  }}
                >
                  <h4
                    style={{
                      fontWeight: "600",
                      color: isActive ? "#fff" : "#aaa",
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
