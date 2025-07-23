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
    <section id="section-2" className="pt-">
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
              <div
                className={`card-grid-bloco px-4 col ${isAtivo ? "ativo" : ""}`}
                style={{
                  backgroundColor: isAtivo ? ativoBgColor : undefined,
                  color: modoHome ? "#000" : undefined,
                }}
                key={i}
              >
                <div className="d-flex pb-3 justify-content-between">
                  <div>
                    <h4>{item.title}</h4>
                  </div>
                  <div>
                    {modoHome ? (
                      <BsCheckCircle
                        size={30}
                        color={iconColor}
                        className="mb-3"
                      />
                    ) : (
                      <BsCheckCircleFill
                        size={30}
                        color={iconColor}
                        style={{
                          borderRadius: "50%",
                        }}
                        className="mb-3"
                      />
                    )}
                  </div>
                </div>
                <div>
                  {Array.isArray(item.text) ? (
                    <ol className="text-start ps-3 d-flex flex-column gap-2">
                      {item.text.map((line, idx) => (
                        <li key={idx}>{line}</li>
                      ))}
                    </ol>
                  ) : (
                    <span>{item.text}</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
