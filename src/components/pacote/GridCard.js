"use client";
import { BsCheckCircleFill, BsCheckCircle } from "react-icons/bs";

export default function GridCard({
  titulo,
  passos,
  ativoBgColor,
  iconColor,
  modoHome = false,
}) {
  return (
    <section id="section-2" className="pt-5 my-5">
      <div className="container">
        <div className="row text-center py-3 mb-4">
          <h3>{titulo}</h3>
        </div>
        <div className="row d-flex row-cols-1 justify-conten-start row-cols-md-3 g-4">
          {passos.map((item, i) => {
            const isFirstRow = i < 3;
            const isMiddle = i === 1 || i === 4;
            const isAtivo =
              modoHome ||
              (isFirstRow && !isMiddle) ||
              (!isFirstRow && isMiddle);

            return (
              <div className="col" key={i}>
                <div
                  className={`card-grid-bloco ${isAtivo ? "ativo" : ""}`}
                  style={{
                    backgroundColor: isAtivo ? ativoBgColor : undefined,
                    color: modoHome ? "#000" : undefined,
                  }}
                >
                  {modoHome ? (
                    <BsCheckCircle
                      size={40}
                      color={iconColor}
                      className="mb-3"
                    />
                  ) : (
                    <BsCheckCircleFill
                      size={40}
                      color={iconColor}
                      style={{
                        backgroundColor: "#ffffff",
                        borderRadius: "50%",
                      }}
                      className="mb-3"
                    />
                  )}
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
