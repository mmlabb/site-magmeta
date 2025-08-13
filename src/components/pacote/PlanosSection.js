"use client";
import { FaCheckCircle } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMedal, faTrophy, faGem } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "@/providers/ThemeProvider";

export default function PlanosSection({
  planos,
  destaqueTextColor,
  checkIconColor,
  destaqueBtnColor,
  iconeCor,
  iconeDestaqueCor,
  corBotaoNaoDestaque,
  corTextoBotaoNaoDestaque,
  destaqueBorderColor,
  faixaDestaqueBgColor,
}) {
  const { darkMode, theme } = useTheme(); // pega do ThemeProvider
  const icons = [faMedal, faTrophy, faGem]; // essencial, impulso, premium

  return (
    <div className="container">
      <div className="row r-gap">
        {planos.map((plano, index) => {
          const isDestaque = index === 1;
          const Icone = icons[index];

          return (
            <div className="col-12 col-md-4 mb-4" key={index}>
              {/* Faixa título */}
              <div
                className="faixa-titulo d-flex align-items-center justify-content-center gap-2"
                style={
                  isDestaque
                    ? { backgroundColor: faixaDestaqueBgColor }
                    : undefined
                }
              >
                <FontAwesomeIcon
                  icon={Icone}
                  color={isDestaque ? iconeDestaqueCor : iconeCor}
                  size="lg"
                />
                <h5 id="txt-plan" className="titulo-plano m-0">
                  {plano.nome}
                </h5>
              </div>

              {/* Box do plano */}
              <div
                className={`plano-box ${isDestaque ? "plano-destaque" : ""}`}
                style={
                  isDestaque
                    ? {
                        color: destaqueTextColor,
                        border: `1px solid ${destaqueBorderColor}`,
                        background: "transparent",
                      }
                    : undefined
                }
              >
                <div>
                  {/* Etiqueta sempre presente */}
                  <div
                    className="etiqueta"
                    style={
                      isDestaque
                        ? {}
                        : {
                            backgroundColor: "transparent",
                            color: "transparent",
                            border: "none",
                          }
                    }
                  >
                    {plano.etiqueta || "\u00A0"}
                  </div>

                  {/* Preço e descrição */}
                  <div id="text-plano" className="preco pt-4">
                    {plano.preco}
                  </div>
                  <div className="descricao">{plano.descricao}</div>

                  {/* Lista de benefícios */}
                  <div className="d-flex flex-column justify-content-between">
                    <ul className="beneficios">
                      {plano.beneficios.map((item, idx) => (
                        <li
                          key={idx}
                          className="d-flex align-items-start border-bottom pb-2 mb-2"
                        >
                          <FaCheckCircle
                            className="me-2 mt-1"
                            color={
                              isDestaque
                                ? checkIconColor
                                : darkMode
                                ? "#fff" // branco no dark
                                : "#000" // preto no light
                            }
                            style={{ minWidth: "16px", minHeight: "16px" }}
                          />
                          <span
                            style={{
                              color: isDestaque ? destaqueTextColor : "inherit",
                            }}
                          >
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Botão */}
                <div className="text-center mt-3">
                  <button
                    className="btn btn-outline-primary btn-white btn-succe"
                    style={
                      isDestaque
                        ? {
                            backgroundColor: destaqueBtnColor,
                            color: "#fff",
                            border: "none",
                          }
                        : {
                            backgroundColor: corBotaoNaoDestaque,
                            color: corTextoBotaoNaoDestaque,
                            border: "1px solid #000",
                          }
                    }
                  >
                    Experimente grátis
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
