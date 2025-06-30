"use client";
import Lottie from "lottie-react";

export default function FaqSection({ titulo, animationData, perguntas }) {
  return (
    <section className="mt-5 pt-5">
      <div className="container  faq-box">
        <div className="row mb-4 p-5">
          <div className="col-12 col-md-6">
            <span className="py-2">FAQ</span>
            <h3>{titulo}</h3>
            <div>
              <Lottie
                animationData={animationData}
                loop={true}
                className="w-100"
                style={{ maxWidth: "74%", height: "100%" }}
              />
            </div>
          </div>
          <div className="col-12 col-md-6 pt-4">
            {perguntas.map(({ pergunta, resposta }, index) => (
              <div key={index} className="border-bottom py-2">
                <h6>{pergunta}</h6>
                <p>{resposta}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
