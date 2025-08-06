"use client";

import Lottie from "lottie-react";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FaqSection({
  titulo,
  animationData,
  perguntas,
  backgroundColor,
}) {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleIndex = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div
      className="container faq-box cp"
      style={{
        backgroundColor,
        borderRadius: "24px",
        padding: "12px",
        boxShadow: "0 0 28px rgba(0, 0, 0, 0.29)",
      }}
    >
      <div className="row row-faq gy-4 flex-lg-row flex-column" id="row-faq">
        {/* Accordion - sempre em cima no mobile/tablet */}
        <div className="col-12 col-lg-6 d-flex flex-column justify-content-center">
          <div className="px-3 pt-2 pt-md-4">
            <span className="pb-2 d-block">FAQ</span>
            <h4>{titulo}</h4>
          </div>

          <div
            className="accordion d-flex pt-3 flex-column gap-4"
            id="faqAccordion"
            style={{
              maxHeight: "70vh",
              overflowY: "auto",
              paddingRight: "8px",
            }}
          >
            {perguntas.map(({ pergunta, resposta }, index) => {
              const isActive = index === activeIndex;

              return (
                <div
                  className="accordion-item mb-0 d-flex flex-column gap-2"
                  key={index}
                >
                  <h4 className="accordion-header">
                    <button
                      className={`accordion-button py-1 px-2 ${
                        isActive ? "" : "collapsed"
                      }`}
                      type="button"
                      onClick={() => toggleIndex(index)}
                    >
                      <h5 className="mb-0 fw-bold">{pergunta}</h5>
                    </button>
                  </h4>

                  <AnimatePresence mode="wait" initial={false}>
                    {isActive && (
                      <motion.div
                        key="resposta"
                        initial={{ height: 0, opacity: 0, y: 20 }}
                        animate={{ height: "auto", opacity: 1, y: 0 }}
                        exit={{ height: 0, opacity: 0, y: 20 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        style={{ overflow: "hidden" }}
                      >
                        <div className="accordion-body py-1 px-2">
                          {resposta}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

        {/* Lottie - sempre abaixo no mobile/tablet */}
        <div className="col-12 col-lg-6">
          <div className="d-flex justify-content-center justify-content-lg-end">
            <Lottie
              animationData={animationData}
              loop={true}
              className="w-100"
              style={{
                maxWidth: "100%",
                height: "auto",
                aspectRatio: "1 / 1",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
