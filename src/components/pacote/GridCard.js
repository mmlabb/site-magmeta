"use client";

import { BsCheckCircleFill } from "react-icons/bs";
import { useTheme } from "@/providers/ThemeProvider";

export default function GridCard({
  titulo,
  passos,
  ativoBgColor,
  iconColor,
  modoHome = true,
}) {
  const { darkMode } = useTheme();

  return (
    <div className="d-flex flex-column text-center flex-md-row gap-2">
      {passos.map((item, i) => {
        const isFirstRow = i < 3;
        const isMiddle = i === 1 || i === 4;
        const isAtivo =
          modoHome || (isFirstRow && !isMiddle) || (!isFirstRow && isMiddle);

        return (
          <div
            className="col m-0"
            key={i}
            data-aos="fade-down" // animação do AOS
            data-aos-delay={i * 200} // delay progressivo (0ms, 200ms, 400ms...)
          >
            <div
              className={`card-grid-bloco h-100 p-4 d-flex gap-3 flex-column ${
                isAtivo ? "ativo" : ""
              }`}
              style={{
                backgroundColor: isAtivo ? ativoBgColor : undefined,
                color: modoHome ? (darkMode ? "#fff" : "#000") : undefined,
                boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div className="d-flex gap-2 justify-content-between">
                <div className="flex-grow-1">
                  <h4
                    id="txt-title-card"
                    style={{
                      whiteSpace: "normal",
                      wordBreak: "break-word",
                      overflowWrap: "break-word",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {item.title}
                  </h4>
                </div>
                {!modoHome && (
                  <div>
                    <BsCheckCircleFill
                      size={30}
                      color={iconColor}
                      style={{ borderRadius: "50%" }}
                      className="mb-3"
                    />
                  </div>
                )}
              </div>

              <p style={{ marginBottom: 0 }}>
                {Array.isArray(item.text) ? item.text.join(" ") : item.text}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
