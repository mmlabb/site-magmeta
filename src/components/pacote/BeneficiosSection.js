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
}) {
  return (
    <div className={`container ${compact ? "" : ""}`}>
      <div className="row d-flex justify-content-center align-items-center">
        {imagem && (
          <div className="col-md-5 d-flex justify-content-center mb-4 mb-md-0">
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

        <div className={imagem ? "col-md-6" : "col-12"} style={{ padding: 0 }}>
          {titulo && <h3>{titulo}</h3>}
          {descricao && <p>{descricao}</p>}
          {beneficios?.length > 0 && (
            <ul className="list-unstyled mb-0 mt-0">
              {beneficios.map((item, index) => (
                <li key={index} className="d-flex align-items-start mb-2">
                  <FaCheck className="me-4 mt-1" color={checkColor} size={16} />
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
