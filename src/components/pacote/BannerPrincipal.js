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
    <section id="section-1" className="pt-5">
      <div className="container c-txt-b py-5">
        <div
          className="row-banner row p-0 pt-2"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "24px",
          }}
        >
          {/* Coluna da Esquerda */}
          <div className="col-12 col-md-6 d-flex flex-column justify-content-between p-4">
            <div className="py-3 z-3">
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

            <div>
              <h3 className="text-white">{titulo}</h3>
              <div className="pt-3">
                <span style={{ color: "#fff" }}>{descricao}</span>
              </div>
            </div>

            {/* Botões */}
            <div className="row pt-3 g-3">
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
    </section>
  );
}
