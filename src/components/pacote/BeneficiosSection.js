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
  showLottie = true,
  compact = false,
}) {
  return (
    <div className={`container ${compact ? "" : "py-5"}`}>
      <div
        className={`row d-flex justify-content-center align-items-center ${
          compact ? "" : "py-5"
        }`}
      >
        {!compact && (
          <div className="d-flex justify-content-center py-5">
            <h3>{titulo}</h3>
          </div>
        )}

        {showLottie && (
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
        )}

        <div className={showLottie ? "col-md-6" : "col-12"}>
          {!compact && <p className="pb-3">{descricao}</p>}
          <ul className="list-unstyled mb-0 mt-0">
            {beneficios.map((item, index) => (
              <li key={index} className="d-flex align-items-start mb-2">
                <FaCheck
                  className="me-2 mt-1"
                  color={checkColor}
                  size={16}
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
