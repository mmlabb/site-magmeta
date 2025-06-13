"use client"; // Garantindo que o arquivo use recursos do cliente

import { useTheme } from "@/providers/ThemeProvider"; // Importando corretamente o useTheme
import Image from "next/image";
import "../app/globals.css";

export default function Footer() {
  const { darkMode } = useTheme(); // Acessando o estado do darkMode do contexto

  return (
    <footer
      style={{
        backgroundColor: darkMode ? "#000000" : "#fff",
        transition: "background-color 0.3s ease",
      }}
    >
      <div className="container text-center rodape">
        <div className="d-flex linha-rodape flex-wrap justify-content-between">
          <div className="col-md-2" id="logo-rodape">
            <Image
              src="/assets/img/logo-magmeta-white.svg"
              alt="logo-rodape"
              width={100}
              height={100}
              sizes="100%"
              className="logo img-fluid"
            />
          </div>

          <div className="col-md-2" id="seta-rodape">
            <a
              href="#"
              id="btn-scroll-top"
              className="back-to-top"
              title="Voltar ao topo"
            >
              <Image
                src="/assets/img/logo-seta-rodape-white.svg"
                alt="seta-rodape"
                className="logo"
                width={0}
                height={0}
                sizes="100%"
                style={{ width: "auto", height: "auto" }}
              />
            </a>
          </div>
        </div>

        <div className="row pt-4">
          <div className="col d-flex justify-content-center align-items-center">
            <div className="mx-2 my-2 d-flex">
              <a href="https://www.facebook.com/profile.php?id=100089418330403">
                <Image
                  src="/assets/img/icon-face-white.svg"
                  alt="logo-facebook"
                  className="logo"
                  width={0}
                  height={0}
                  sizes="100%"
                  style={{ width: "auto", height: "auto" }}
                />
              </a>
            </div>
            <div className="mx-2 my-2">
              <a href="https://www.instagram.com/magmetadigital">
                <Image
                  src="/assets/img/logo-instagram-white.svg"
                  alt="logo-instagram"
                  className="logo"
                  width={0}
                  height={0}
                  sizes="100%"
                  style={{ width: "auto", height: "auto" }}
                />
              </a>
            </div>
          </div>
        </div>

        <div className="row pt-5">
          <div className="col-md-6 d-flex justify-content-center justify-content-md-start aling-items-center p-0">
            <small id="texto-localizacao">Brasília - DF</small>
          </div>
          <div className="col-md-6 d-flex justify-content-center justify-content-md-end opacity-50">
            <small id="copyright">
              © &nbsp;<span id="ano-atual"></span>&nbsp; Magmeta Tecnologia -
              Todos os direitos reservados
            </small>
          </div>
        </div>
      </div>
    </footer>
  );
}
