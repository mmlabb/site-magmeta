"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Arrow90degRight } from "react-bootstrap-icons";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowRightCircle,
} from "react-feather";
import {
  ArrowRightFromLine,
  ArrowRightIcon,
  ArrowUpRightIcon,
} from "lucide-react";

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
        "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      image: "/assets/img/test1.png",
    },
    {
      title: "Vitrinne",
      content:
        "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      image: "/assets/img/test2.png",
    },
    {
      title: "Aplicativos",
      content:
        "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      image: "/assets/img/test3.png",
    },
  ];

  // useCallback para não recriar a função a cada render
  const start_auto_advance = useCallback(() => {
    if (interval_ref.current) clearInterval(interval_ref.current);
    interval_ref.current = setInterval(() => {
      set_active_index((prev) => (prev + 1) % items.length);
    }, 5000);
  }, [items.length]);

  // Inicia ou retoma o autoplay quando não estiver pausado
  useEffect(() => {
    if (!is_paused) {
      start_auto_advance();
    }
    return () => {
      if (interval_ref.current) clearInterval(interval_ref.current);
    };
  }, [is_paused, start_auto_advance]);

  const handle_click = (index) => {
    if (active_index === index) return;
    set_active_index(index);
    set_is_paused(true);
    if (pause_timeout_ref.current) clearTimeout(pause_timeout_ref.current);
    if (interval_ref.current) clearInterval(interval_ref.current);

    pause_timeout_ref.current = setTimeout(() => {
      set_is_paused(false);
    }, 5000);
  };

  // Ajusta a barra de progresso para ficar ao lado do item ativo
  useEffect(() => {
    if (progress_ref.current && container_ref.current) {
      const activeItem = container_ref.current.querySelector(
        `.accordion-item[data-index='${active_index}']`
      );
      if (!activeItem) return;

      const offsetTop = activeItem.offsetTop;
      const height = activeItem.offsetHeight;

      progress_ref.current.style.transition = "none";
      progress_ref.current.style.top = `${offsetTop}px`;
      progress_ref.current.style.height = "0px";

      // Força reflow para aplicar transição em seguida
      void progress_ref.current.offsetHeight;

      progress_ref.current.style.transition =
        "height 4.5s linear, top 0.5s ease";
      progress_ref.current.style.height = `${height}px`;
    }
  }, [active_index]);

  return (
    <div className="container-fluid  justify-content-between">
      <div className="row gx-5">
        {/*Accordion*/}
        <div className="col-md-5 col-sm-12 position-relative">
          {/* Barra de progresso vertical fixa */}
          <div
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: "2px",
              height: "100%",
              backgroundColor: "#4f4b55",
              borderRadius: "10px",

              zIndex: 1,
            }}
          >
            <div
              ref={progress_ref}
              style={{
                position: "absolute",
                width: "100%",
                height: "0px",
                top: "0px",
                backgroundColor: "#6f42c1",
                borderRadius: "10px",
                transition: "height 4.5s linear, top 0.5s ease",
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
                  <h3
                    style={{
                      fontWeight: "600",
                      color: isActive ? "#fff" : "#e9d9ffe3",
                      paddingTop: "12px",
                    }}
                  >
                    {item.title} <ArrowDown size={16} />
                  </h3>
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

        <div className="col-md-7 col-sm-12 position-relative  d-flex justify-content-center align-items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={active_index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
              className="position-absolute"
            >
              <div id="box-img-accord">
                <Image
                  src={items[active_index].image}
                  alt={items[active_index].title}
                  width={0}
                  height={0}
                  style={{
                    objectFit: "cover",
                    borderRadius: "1rem",
                    width: "100%",
                    height: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default SyncAccordionSlide;
