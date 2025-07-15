"use client";
import { BsWhatsapp } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";

export default function Duvidas({ backgroundImage, textos, botaoLabel }) {
  return (
    <section
      className="mt-5"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "24px",
      }}
    >
      <div className="container">
        <div className="row align-items-center text-white py-5">
          {/* Coluna de textos */}
          <div className="col-md-6 mb-4 mb-md-0 px-5">
            <div className="d-flex justify-content-start ">
              <FaWhatsapp size={54} color="#25D366" className="mb-2" />
            </div>
            {textos.map((texto, index) => (
              <h3 key={index} className="mb-3 fw-bold">
                {texto}
              </h3>
            ))}
            <p className="mt-2">
              Envie uma mensagem e converse com uma pessoa real.
            </p>
          </div>

          {/* Coluna do botão */}
          <div id="btn-wp" className="col-md-6 text-md-end text-center  p-5">
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
    </section>
  );
}
