"use client";
import Lottie from "lottie-react";
import { useState } from "react";

export default function FaqSection({
  titulo,
  animationData,
  perguntas,
  backgroundColor,
}) {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleIndex = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      className="my-5 pt-5"
      style={{ backgroundColor, borderRadius: "24px" }}
    >
      <div className="container faq-box">
        <div id="row-faq" className="row  p-5">
          <div className="col-12 col-md-6">
            <div className="px-3 pt-4">
              <span className="pb-4">FAQ</span>
              <h3>{titulo}</h3>
            </div>
            <div
              className="accordion d-flex pt-4 flex-column "
              id="faqAccordion"
            >
              {perguntas.map(({ pergunta, resposta }, index) => (
                <div
                  className="accordion-item"
                  key={index}
                  style={{ backgroundColor: "transparent" }}
                >
                  <h2 className="accordion-header">
                    <button
                      className={`accordion-button ${
                        activeIndex === index ? "" : "collapsed"
                      }`}
                      type="button"
                      onClick={() => toggleIndex(index)}
                    >
                      <h4 className="mb-0">{pergunta}</h4>
                    </button>
                  </h2>
                  <div
                    className={`accordion-collapse collapse ${
                      activeIndex === index ? "show" : ""
                    }`}
                  >
                    <div className="accordion-body">{resposta}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-12 col-md-6 col-lot">
            <div className="d-flex box-lott justify-content-end">
              <Lottie
                animationData={animationData}
                loop={true}
                className="w-100 lott"
                style={{ maxWidth: "68%", height: "100%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
