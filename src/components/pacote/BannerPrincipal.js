"use client";
import Image from "next/image";
import AOSInit from "../AOSInit";

export default function BannerPrincipal({
  logo,
  titulo,
  descricao,
  links,
  botoes,
  backgroundImage,
  imagemCol,
}) {
  const somenteImagem = imagemCol && !logo && !titulo && !descricao && !botoes;

  return (
    <div
      className="container c-txt-b p-5"
      data-aos="flip-up"
      data-aos-duration="2000"
      style={{
        backgroundImage: backgroundImage
          ? `url(${backgroundImage})`
          : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "24px",
      }}
    >
      <div className="row-banner row p-0">
        {/* Coluna da Esquerda - só renderiza se NÃO for somente imagem */}
        {!somenteImagem && (
          <div className="col-12 col-md-6 d-flex flex-column gap-4 justify-content-between ">
            {logo && (
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
            )}

            {(titulo || descricao) && (
              <div className="d-flex flex-column gap-3">
                {titulo && <h3 id="text-b-sites">{titulo}</h3>}
                {descricao && (
                  <span style={{ color: "#fff" }}>{descricao}</span>
                )}
              </div>
            )}

            {botoes && botoes.length > 0 && (
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
            )}
          </div>
        )}

        {/* Coluna da Direita */}
        <div
          className={somenteImagem ? "col-12" : "col-12 col-md-6"}
          style={{
            borderRadius: "12px",
            height: "100%",
            overflow: "hidden",
          }}
        >
          {imagemCol && (
            <Image
              src={imagemCol}
              alt="Imagem da Direita"
              width={500}
              height={500}
              sizes="100%"
              className="img-fluid"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
