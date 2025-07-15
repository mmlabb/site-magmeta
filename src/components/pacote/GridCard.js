"use client";
import { BsCheckCircleFill } from "react-icons/bs";

export default function GridCard({ titulo, passos, ativoBgColor, iconColor }) {
  return (
    <section id="section-2" className="py-5 my-5">
      <div className="container">
        <div className="row text-center py-5 mb-4">
          <h4>{titulo}</h4>
        </div>
        <div className="row d-flex row-cols-1 justify-conten-start row-cols-md-3 g-4">
          {passos.map((item, i) => {
            const isFirstRow = i < 3;
            const isMiddle = i === 1 || i === 4;
            const isAtivo =
              (isFirstRow && !isMiddle) || (!isFirstRow && isMiddle);

            return (
              <div className="col" key={i}>
                <div
                  className={`card-grid-bloco ${isAtivo ? "ativo" : ""}`}
                  style={
                    isAtivo ? { backgroundColor: ativoBgColor } : undefined
                  }
                >
                  <BsCheckCircleFill
                    size={40}
                    color={iconColor}
                    style={{
                      backgroundColor: "#ffffff",
                      borderRadius: "50%",
                    }}
                    className="mb-3"
                  />
                  <h4 className="mb-2">{item.title}</h4>
                  <p className="mb-0">{item.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
