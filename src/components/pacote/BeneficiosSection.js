"use client";
import { FaCheck } from "react-icons/fa";
import Image from "next/image";

export default function BeneficiosSection({
  titulo,
  descricao,
  beneficios,
  imagem,
  checkColor,
  isMagnet,
  compact = false,
  invertDesktop = false,
  children, 
}) {
  return (
    <div className={`container ${compact ? "" : ""} cp`}>
      <div className="row d-flex gap-4 align-items-center justify-content-center">
        {/* Coluna da imagem */}
        {imagem && (
          <div
            className={`col-md-5 d-flex justify-content-center mb-4 mb-md-0 
              ${invertDesktop ? "order-md-2" : "order-md-1"}`}
            data-aos="zoom-in-up"
          >
            <Image
              src={imagem}
              alt="Imagem ilustrativa"
              width={0}
              height={0}
              sizes="100%"
              className={`${isMagnet ? "box-lottie" : ""} img-fluid`}
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "24px",
                objectFit: "contain",
              }}
            />
          </div>
        )}

        {/* Coluna do conteúdo */}
        <div
          data-aos="fade-left"
          className={`${
            imagem ? "col-md-6" : "col-12"
          } d-flex flex-column gap-3 p-0 
            ${invertDesktop ? "order-md-1" : "order-md-2"}`}
        >
          {titulo && <h3>{titulo}</h3>}
          {descricao && <p>{descricao}</p>}

          {/* Se children for passado, renderiza ele; se não, usa a lista padrão */}
          {children
            ? children
            : beneficios?.length > 0 && (
                <ul className="list-unstyled mb-0 mt-0">
                  {beneficios.map((item, index) => (
                    <li key={index} className="d-flex align-items-start mb-2">
                      <FaCheck
                        className="me-4 mt-1"
                        color={checkColor}
                        size={16}
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
        </div>
      </div>
    </div>
  );
}
