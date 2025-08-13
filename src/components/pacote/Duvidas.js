"use client";
import { BsWhatsapp } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";

export default function Duvidas({ backgroundImage, textos, botaoLabel }) {
  return (
    <div
      className="container"
      data-aos="flip-up"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "24px",
      }}
    >
      <div className="row align-items-center text-white p-5">
        {/* Coluna de textos */}
        <div className="col-md-7  mb-md-0 px-5">
          <div className="d-flex flex-column gap-2">
            <div className="d-flex justify-content-start ">
              <FaWhatsapp size={54} color="#25D366" className="mb-2" />
            </div>
            {textos.map((texto, index) => (
              <h4
                id="txt-cta-wpp"
                key={index}
                className="mb-3 duvidas-section text-cta fw-bold"
                style={{ color: "#fff" }}
              >
                {texto}
              </h4>
            ))}
            <p id="txt-envie" style={{ color: "#fff" }}>
              Envie uma mensagem e converse com nosso time agora mesmo!
            </p>
          </div>
        </div>

        {/* Coluna do botão */}
        <div id="btn-wp" className="col-md-5  text-center ">
          <a
            href="#"
            className="btn btn-success btn-succe d-inline-flex align-items-center gap-2 px-4 py-2 rounded-pill"
          >
            <BsWhatsapp size={20} />
            {botaoLabel}
          </a>
        </div>
      </div>
    </div>
  );
}
