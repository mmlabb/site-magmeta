"use client";
import { FaCheck } from "react-icons/fa";
import Lottie from "lottie-react";

export default function BeneficiosSection({
  titulo,
  descricao,
  beneficios,
  animationData,
  checkColor,
  isMagnet,
  lottieWidth = "100%",
}) {
  return (
    <div className="container py-5">
      <div className="row d-flex justify-content-center align-items-center">
        <div className="d-flex justify-content-center py-5">
          <h4>{titulo}</h4>
        </div>

        <div className="col-md-5 d-flex justify-content-center mb-4 mb-md-0">
          <Lottie
            animationData={animationData}
            loop={true}
            className={` ${isMagnet ? "box-lottie" : ""}`}
            style={{
              width: lottieWidth,
              height: "100%",
              borderRadius: "24px",
              overflow: "hidden",
            }}
          />
        </div>

        <div className="col-md-6">
          <p className="pb-3">{descricao}</p>
          <ul className="list-unstyled">
            {beneficios.map((item, index) => (
              <li key={index} className="d-flex align-items-start mb-2">
                <FaCheck
                  className="me-2 mt-1"
                  color={checkColor}
                  style={{ minWidth: "16px", minHeight: "16px" }}
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
