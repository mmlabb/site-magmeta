"use client";
import Image from "next/image";

export default function BannerPrincipal({
  logo,
  titulo,
  descricao,
  links,
  botoes,
  backgroundImage,
}) {
  return (
    <section id="section-1" className="pt-5 mt-5 ">
      <div className="container  c-txt-b py-5">
        <div
          className="row row-banner w-100 p-4 my-"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "24px",
          }}
        >
          <div className="col-md-6 py-4 col-12 d-flex justify-content-between flex-column">
            <div className="start-0 py-3 z-3">
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
              <h3>{titulo}</h3>
              <div className="pt-3">
                <div>
                  <span>{descricao}</span>
                </div>
                <div className="d-flex pt-4 pb-2 gap-3 flex-wrap"></div>
              </div>
            </div>

            <div className="d-flex gap-3 pt-3 flex-wrap">
              {botoes.map((btn, index) => (
                <a
                  key={index}
                  href={btn.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-primary btn-banner rounded-pill px-4 py-2"
                >
                  {btn.label}
                </a>
              ))}
            </div>
          </div>

          <div
            className="col-12 col-md-6"
            style={{
              borderRadius: "12px",
              height: "100%",
              overflow: "hidden",
            }}
          ></div>
        </div>
      </div>
    </section>
  );
}
