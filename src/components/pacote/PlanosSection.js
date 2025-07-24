"use client";
import { FaCheckCircle } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMedal, faTrophy, faGem } from "@fortawesome/free-solid-svg-icons";

export default function PlanosSection({
  planos,
  destaqueBgColor,
  destaqueTextColor,
  checkIconColor,
  checkIconColorNaoDestaque,
  destaqueBtnColor,
  iconeCor,
  corBotaoNaoDestaque,
  corTextoBotaoNaoDestaque
}) {
  const icons = [faMedal, faTrophy, faGem]; // essencial, impulso, premium

  return (
    <section id="section-3" className="py-5 planos">
      <div className="container py-5">
        <div className="row mb-4">
          <h3 className="text-center">Planos</h3>
        </div>
        <div className="row r-gap">
          {planos.map((plano, index) => {
            const isDestaque = index === 1;
            const Icone = icons[index];

            return (
              <div className="col-12 col-md-4 mb-4" key={index}>
                <div className="faixa-titulo d-flex align-items-center justify-content-center gap-2">
                  <FontAwesomeIcon icon={Icone} color={iconeCor} size="lg" />
                  <h5 id="txt-plan" className="titulo-plano m-0">
                    {plano.nome}
                  </h5>
                </div>
                <div
                  className={`plano-box ${isDestaque ? "plano-destaque" : ""}`}
                  style={
                    isDestaque
                      ? {
                          background: destaqueBgColor,
                          color: destaqueTextColor,
                        }
                      : undefined
                  }
                >
                  <div>
                    {plano.etiqueta && (
                      <div className="etiqueta">{plano.etiqueta}</div>
                    )}
                    <div id="text-plano" className="preco pt-4">
                      {plano.preco}
                    </div>
                    <div className="descricao">{plano.descricao}</div>
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
                                  : checkIconColorNaoDestaque
                              }
                              style={{ minWidth: "16px", minHeight: "16px" }}
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
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
    </section>
  );
}
