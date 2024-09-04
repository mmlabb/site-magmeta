"use client";
import WordAnimation from "@/components/WordAnimation";
import { useTheme } from "@/providers/ThemeProvider";
import loadModel from "@/utils/3dAnimation.js";
import { useEffect, useRef } from "react";

export default function Home() {
  const { darkMode } = useTheme();

  useEffect(() => {
    if (typeof window !== "undefined") {
      loadModel(darkMode);
    }
  }, [darkMode]);

  return (
    <>
      {/* <div id="loading-wrapper">
  <div className="loading">
    <div className="wave"></div>
    <img
      src="/assets/img/logo-magmeta-white.svg"
      alt="logo-magmeta"
      height="32px"
      data-aos="fade"
      data-aos-delay="2000"
    />
  </div>
</div> */}
      <a
        href="https://api.whatsapp.com/send?phone=SEU_NÚMERO_DE_TELEFONE&text=Olá equipe Magmeta%20vim pelo site e gostaria de orçar meu projeto com vocês!"
        target="_blank"
        className="botao-whatsapp"
      >
        <img src="/assets/img/logo-wpp.svg" alt="IconeWpp" />
      </a>

      <section id="primeira-sessao" style={{ position: "relative", zIndex: 1 }}>
        <div className="container box-1">
          <div className="row linha-1 align-items-center">
            <div className="box-texto-magmetize col-sm-12 col-md-6">
              <div className="texto1 d-flex">
                <div className="texto-center">
                  <h1 className="texto-magnetize-metas">
                    Magnetize as metas do seu negócio com
                  </h1>
                  <WordAnimation />
                  <p className="mt-2">
                    Seu negócio merece uma atenção especial, com ferramentas
                    otimizadas especialmente para o seu crescimento.
                  </p>
                </div>
              </div>

              <div className="d-none d-md-block">
                <ul className="d-flex">
                  <li className="mx-2 my-2">
                    <img
                      src="/assets/img/logo-instagram-white.svg"
                      alt="LogoInsta"
                      className="img-fluid mr-3 logo"
                    />
                  </li>

                  <li className="mx-2 my-2">
                    <img
                      src="/assets/img/logo-bolinha-white.svg"
                      alt="LogoBolinha"
                      className="img-fluid mr-3 logo"
                    />
                  </li>

                  <li className="mx-2 my-2 logo-behance">
                    <img
                      src="/assets/img/logo-behance-white.svg"
                      alt="LogoBehance"
                      className="img-fluid mr-3 logo"
                    />
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-sm-12 col-md-6 d-flex justify-content-end container-img-app-magmeta">
              <div className="img-app-magmeta d-md-none">
                <img
                  className="app-magmeta"
                  src="/assets/img/img-app-magmeta.png"
                  alt=""
                  data-aos="zoom-in"
                />

                <img
                  className="pop-up"
                  src="/assets/img/pop-uiux.png"
                  id="pop-up-1"
                  data-aos="fade-up"
                  alt=""
                />
                <img
                  className="pop-up"
                  src="/assets/img/pop-brand.png"
                  id="pop-up-2"
                  data-aos="fade-up"
                  alt=""
                />
                <img
                  className="pop-up"
                  src="/assets/img/pop-web.png"
                  id="pop-up-3"
                  data-aos="fade-up"
                  alt=""
                />
                <img
                  className="pop-up"
                  src="/assets/img/pop-app.png"
                  id="pop-up-4"
                  data-aos="fade-up"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="segunda-sessao">
        <div className="container" id="texto-projetos">
          <div className="row text-center" id="linha-txt-projetos">
            <h2>Projetos selecionados</h2>
          </div>
          <div className="row gx-2 gy-2 tag-portifolio">
            <div className="col">
              <div className="tag" data-aos="fade-up">
                <h5>Aplicativo mobile</h5>
              </div>
            </div>
            <div className="col">
              <div className="tag" data-aos="fade-up" data-aos-delay="200">
                <h5>UI/UX Design</h5>
              </div>
            </div>
            <div className="col">
              <div className="tag" data-aos="fade-up" data-aos-delay="400">
                <h5>Ilustrações</h5>
              </div>
            </div>
            <div className="col">
              <div className="tag" data-aos="fade-up" data-aos-delay="600">
                <h5>Branding</h5>
              </div>
            </div>
            <div className="col">
              <div className="tag" data-aos="fade-up" data-aos-delay="800">
                <h5>Sites</h5>
              </div>
            </div>
            <div className="col">
              <div className="tag" data-aos="fade-up" data-aos-delay="100">
                <h5>Aplicativo mobile</h5>
              </div>
            </div>
          </div>
        </div>

        <div
          className="container-fluid"
          id="portifolio-desktop"
          data-aos="fade"
        >
          <div className="d-flex flex-wrap portifolio align-items-center">
            <div
              className="box-portifolio"
              id="container-portifolio-1"
              width=""
            >
              <div className="container-portifolio">
                <div className="texto-portifolio">
                  <h6 className="texto-h6-port">V Tel</h6>
                  <h4 className="texto-h4-port">Aplicativo</h4>
                </div>

                <img src="/assets/img/app-oak.png" alt="" />

                <div className="box-texto-p1">
                  <p>
                    Somos a revolução da internet com qualidade e confiabilidade
                    no Brasil.
                  </p>

                  <button
                    type="button"
                    className="btn botao-portifolio white-space text-nowrap btn-outline-light"
                  >
                    Explorar
                    <img src="/assets/img/setinha-portifolio.svg" alt="" />
                  </button>
                </div>
              </div>
            </div>
            <div
              className="box-portifolio"
              id="container-portifolio-2"
              width=""
            >
              <div className="container-portifolio">
                <div className="texto-portifolio">
                  <h6 className="texto-h6-port">NFT Marketplace</h6>
                  <h4 className="texto-h4-port">Ui/Ux Design</h4>
                </div>

                <img src="/assets/img/app-nft.png" alt="" />

                <div className="box-texto-p1">
                  <p>
                    Somos a revolução da internet com qualidade e confiabilidade
                    no Brasil.
                  </p>

                  <button
                    type="button"
                    className="btn botao-portifolio white-space text-nowrap btn-outline-light"
                  >
                    Explorar
                    <img src="/assets/img/setinha-portifolio.svg" alt="" />
                  </button>
                </div>
              </div>
            </div>

            <div
              className="box-portifolio"
              id="container-portifolio-3"
              width=""
            >
              <div className="container-portifolio">
                <div className="texto-portifolio">
                  <h6 className="texto-h6-port">McLovs Barbearia</h6>
                  <h4 className="texto-h4-port">Branding</h4>
                </div>

                <img src="/assets/img/app-mclove.png" alt="" />

                <div className="box-texto-p1">
                  <p>
                    Somos a revolução da internet com qualidade e confiabilidade
                    no Brasil.
                  </p>
                  <button
                    type="button"
                    className="btn botao-portifolio white-space text-nowrap btn-outline-light"
                  >
                    Explorar
                    <img src="/assets/img/setinha-portifolio.svg" alt="" />
                  </button>
                </div>
              </div>
            </div>

            <div
              className="box-portifolio"
              id="container-portifolio-4"
              width=""
            >
              <div className="container-portifolio">
                <div className="texto-portifolio">
                  <h6 className="texto-h6-port">Klubi</h6>
                  <h4 className="texto-h4-port">Website/Blog</h4>
                </div>

                <img src="/assets/img/site-klubi.png" alt="" />

                <div className="box-texto-p1">
                  <p>
                    Somos a revolução da internet com qualidade e confiabilidade
                    no Brasil.
                  </p>
                  <button
                    type="button"
                    className="btn botao-portifolio white-space text-nowrap btn-outline-light"
                  >
                    Explorar
                    <img src="/assets/img/setinha-portifolio.svg" alt="" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid" id="portifolio-mobile">
          <div className="d-flex portifolio align-items-center">
            <div className="box-portifolio" id="container-portifolio-1">
              <div className="container-portifolio">
                <div className="texto-portifolio">
                  <h6 className="texto-h6-port">V Telecom</h6>
                  <h4 className="texto-h4-port">Aplicativo</h4>
                </div>

                <img src="/assets/img/app-oak.png" alt="" />

                <div className="box-texto-p1">
                  <p>
                    Somos a revolução da internet com qualidade e confiabilidade
                    no Brasil.
                  </p>

                  <button
                    type="button"
                    className="btn botao-portifolio white-space text-nowrap btn-outline-light"
                  >
                    Explorar
                    <img src="/assets/img/setinha-portifolio.svg" alt="" />
                  </button>
                </div>
              </div>
            </div>
            <div
              className="box-portifolio"
              id="container-portifolio-2"
              width=""
            >
              <div className="container-portifolio">
                <div className="texto-portifolio">
                  <h6 className="texto-h6-port">NFT Marketplace</h6>
                  <h4 className="texto-h4-port">Ui/Ux Design</h4>
                </div>

                <img src="/assets/img/app-nft.png" alt="" />

                <div className="d-flex box-texto-p1 text justify-content-between">
                  <p>
                    Somos a revolução da internet com qualidade e confiabilidade
                    no Brasil.
                  </p>

                  <button
                    type="button"
                    className="btn botao-portifolio white-space text-nowrap btn-outline-light"
                  >
                    Explorar
                    <img src="/assets/img/setinha-portifolio.svg" alt="" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="d-flex portifolio align-items-center">
            <div
              className="box-portifolio"
              id="container-portifolio-3"
              width=""
            >
              <div className="container-portifolio">
                <div className="texto-portifolio">
                  <h6 className="texto-h6-port">V Telecom</h6>
                  <h4 className="texto-h4-port">Aplicativo</h4>
                </div>

                <img src="/assets/img/app-mclove.png" alt="" />

                <div className="box-texto-p1">
                  <p>
                    Somos a revolução da internet com qualidade e confiabilidade
                    no Brasil.
                  </p>

                  <button
                    type="button"
                    className="btn botao-portifolio white-space text-nowrap btn-outline-light"
                  >
                    Explorar
                    <img src="/assets/img/setinha-portifolio.svg" alt="" />
                  </button>
                </div>
              </div>
            </div>
            <div
              className="box-portifolio"
              id="container-portifolio-4"
              width=""
            >
              <div className="container-portifolio">
                <div className="texto-portifolio">
                  <h6 className="texto-h6-port">NFT Marketplace</h6>
                  <h4 className="texto-h4-port">Ui/Ux Design</h4>
                </div>

                <img src="/assets/img/site-klubi.png" alt="" />

                <div className="d-flex box-texto-p1 text justify-content-between">
                  <p>
                    Somos a revolução da internet com qualidade e confiabilidade
                    no Brasil.
                  </p>

                  <button
                    type="button"
                    className="btn botao-portifolio white-space text-nowrap btn-outline-light"
                  >
                    Explorar
                    <img src="/assets/img/setinha-portifolio.svg" alt="" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="terceira-sessao" className="pb-5">
        <div className="container">
          <div className="row">
            <div className="d-flex pt-5 botao-nossa-ex">
              <button className="botao-roxo botao-nossa-ex">
                <h5 className="texto-botao">
                  Nossa expertise
                  <img
                    src="/assets/img/seta-botao.svg"
                    className="seta-botao-ex"
                    alt=""
                  />
                </h5>
              </button>
            </div>
          </div>

          <div className="row pt-5 pb-5 mt-5 ">
            <div className="col-md-6 d-sm-flex d-md-none justify-content-end align-items-center">
              <img
                className="img-fluid"
                src="/assets/img/img-caminho.png"
                alt=""
              />
            </div>

            <div className="col-md-6">
              <div className="box-texto-caminho d-flex flex-column gap-3 align-items-center align-items-md-start">
                <h1 className="texto1 text-right">
                  Sabemos o caminho para dar vida à sua ideia
                </h1>
                <h6>
                  Validamos a ideia, construímos do zero ou evoluímos produtos
                  já existentes.
                  <br />
                  Estamos prontos para ajudar em qualquer etapa do ciclo de vida
                  de seu produto.
                </h6>
                <button className="botao-roxo botao-nossa-ex">
                  <h5 className="texto-botao">
                    Nossa expertise
                    <img
                      src="/assets/img/seta-botao.svg"
                      className="seta-botao-ex"
                      alt=""
                    />
                  </h5>
                </button>
              </div>
            </div>

            <div className="col-md-6 d-md-flex d-none justify-content-end align-items-center">
              <img
                className="img-fluid"
                src="/assets/img/img-caminho.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <section id="quarta-sessao" className="pt-5">
        <div className="container text-center">
          <div className="row texto-construimos-juntos ">
            <div className="col mb-5">
              <h2>Já construímos juntos com:</h2>
            </div>
          </div>
          <div className="row linha-logos mb-5 pb-3 align-items-center justify-content-center">
            <div className="col-md-4 col-6">
              <img
                src="/assets/img/logo-cadcam-white.svg"
                alt="logo-usados-cad"
                className="logo-marca logo"
              />
            </div>
            <div className="col-md-4 col-6">
              <img
                src="/assets/img/logo-mclove-white.svg"
                alt="logo-mclove"
                className="logo-marca logo"
              />
            </div>
            <div className="col-md-4 col-6">
              <img
                src="/assets/img/logo-klubi-white.svg"
                alt="logo-klubi"
                className="logo-marca logo"
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6">
              <div>
                <img
                  className="img-fluid"
                  src="/assets/img/MagmetaImg.png"
                  id="img-mag"
                  width="100%"
                  alt=""
                />
              </div>
            </div>

            <div className="col-sm-12 col-md-6 col-lg-6 mt-5 pt-5 mb-5">
              <div className="box-sobre-nos d-flex flex-column gap-3">
                <h1 className="texto-sobre-nos-1">Sobre nós</h1>
                <div className="d-flex justify-content-between">
                  <div className="d-flex align-items-center gap-2">
                    <img
                      src="/assets/img/icone-check-white.svg"
                      className="logo-check-1"
                      alt=""
                    />
                    <h4 className="logo-check m-0">Design</h4>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <img
                      src="/assets/img/icone-check-white.svg"
                      className="logo-check-2"
                      alt=""
                    />
                    <h4 className="logo-check m-0">Dev</h4>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <img
                      src="/assets/img/icone-check-white.svg"
                      className="logo-check-3"
                      alt=""
                    />
                    <h4 className="logo-check m-0">Valores</h4>
                  </div>
                </div>

                <h6 className="">
                  Unimos pessoas que amam o que fazem e estão alinhadas numa
                  mesma meta, dispostas a enfrentar grandes desafios e
                  desenvolver soluções e produtos inovadores que vão além de uma
                  entrega, mas impactam vidas positivamente. E com estas mentes
                  formamos a Magmeta.
                </h6>

                <div className="d-flex pt-1 botao-nossa-ex">
                  <button className="botao-roxo">
                    <h5 className="texto-botao">
                      Nossa expertise
                      <img
                        src="/assets/img/seta-botao.svg"
                        className="seta-botao-ex"
                        alt=""
                      />
                    </h5>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="quinta-sessao">
        <div className="container text-center">
          <div className="row pt-5 pb-5">
            <div className="col-sm-12 col-md-6 mt-5 mb-5">
              <div className="box-texto-caminho">
                <h1 className="texto1 text-right">
                  Tem uma ideia?
                  <br />
                  Vamos conversar!
                </h1>

                <button className="botao-roxo botao-nossa-ex">
                  <h5 className="texto-botao">Vamos conversar</h5>
                </button>
              </div>
            </div>

            <div className="col-sm-12 col-md-6 d-flex img-vamos-conversar">
              <div>
                <img
                  className="img-fluid pb-5rem"
                  src="/assets/img/desenho magmeta 1 1.png"
                  width="400px"
                  id="mascote-magmeta"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
