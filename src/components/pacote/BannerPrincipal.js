"use client";
import Image from "next/image";

export default function BannerPrincipal({
  logo,
  titulo,
  descricao,
  links,
  botoes,
  backgroundImage,
  imagemCol,
}) {
  return (
    <div
      className="container c-txt-b p-5"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "24px",
      }}
    >
      <div className="row-banner row p-0">
        {/* Coluna da Esquerda */}
        <div className="col-12 col-md-6 d-flex flex-column gap-4 justify-content-between ">
          {/* Logo com espaçamento */}
          <div className="z-3">
            <Image
              src={logo}
              alt="Logo"
              width={100}
              height={100}
              className="img-fluid"
              sizes="100%"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
          <div className="d-flex flex-column gap-3">
            <h3 id="text-b-sites">{titulo}</h3>
            <div>
              <span style={{ color: "#fff" }}>{descricao}</span>
            </div>
          </div>

          {/* Botões */}
          <div className="row">
            {botoes.map((btn, index) => (
              <div key={index} className="col-12 col-md-auto">
                <a
                  href={btn.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-primary btn-banner rounded-pill px-4 py-2 w-100"
                >
                  {btn.label}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Coluna da Direita */}
        <div
          className="col-12 col-md-6"
          style={{
            borderRadius: "12px",
            height: "100%",
            overflow: "hidden",
          }}
        >
          <Image
            src={imagemCol}
            alt="Imagem da Direita"
            width={500}
            height={500}
            sizes="100%"
            className="img-fluid"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
      </div>
    </div>
  );
}
