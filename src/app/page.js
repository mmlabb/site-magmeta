"use client";
import WordAnimation from "@/components/WordAnimation";
import Clientes from "@/containers/Customers";

import { useEffect } from "react";
import {
  CircleFill,
  FunnelFill,
  Lightbulb,
  LightbulbFill,
  Rocket,
  RocketFill,
} from "react-bootstrap-icons";

export default function Home() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    // loadModel();

    const portfolioBoxes = document.querySelectorAll(".box-portifolio");

    portfolioBoxes.forEach((box) => {
      box.addEventListener("mouseover", () => {
        expandBox(box);
      });

      box.addEventListener("mouseout", () => {
        resetBoxes();
      });
    });

    function expandBox(box) {
      portfolioBoxes.forEach((otherBox) => {
        if (otherBox !== box) {
          otherBox.style.width = "50%";
        }
      });

      box.style.width = "50%";
    }

    function resetBoxes() {
      portfolioBoxes.forEach((box) => {
        if (window.innerWidth > 800) {
          box.style.width = "50%"; // Set width to 25% for smaller screens
        } else {
          box.style.width = "50%"; // Keep the original width for tablets and larger
        }
      });
    }
  }, []);

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
      {/*<canvas
        id="3d"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          pointerEvents: "none",
          zIndex: 1000,
        }}
        className="d-none d-lg-block"
      ></canvas>*/}

      <section id="primeira-sessao" style={{ position: "relative", zIndex: 1 }}>
        <div className="container box-1">
          <div className="row linha-1 align-items-center">
            <div className="box-texto-magmetize col-md-12 col-lg-6">
              <div className="texto1 d-flex">
                <div className="text-center text-lg-start">
                  <h1 className="texto-magnetize-metas">
                    Magnetize as metas
                    <br /> do seu negócio com
                  </h1>
                  <WordAnimation />
                  {/* <p className="mt-2">
                    Seu negócio merece uma atenção especial, com ferramentas
                    otimizadas especialmente para o seu crescimento.
                  </p> */}
                  <div className="justify-content-center">
                    <p className="">
                      Estratégia e ferramentas que trabalham especialmente para
                      o seu <br />
                      crescimento.
                    </p>
                  </div>
                  <div className="d-flex pb-2 pt-2 btn-or">
                    <div className="botao-roxo botao-nossa-ex btn-or">
                      <a
                        href="https://onboarding.magmeta.com.br/onboarding/lead"
                        className="btn-mobile-orcam texto-botao"
                      >
                        <span>ORÇAMENTO RÁPIDO</span>
                      </a>{" "}
                    </div>
                  </div>
                </div>
              </div>

              {/*<div className="d-none d-md-block">
                <ul className="d-flex">
                  <li className="mx-2 my-2">
                    <a href="https://www.instagram.com/magmetadigital">
                      <img
                        src="/assets/img/logo-instagram-white.svg"
                        alt="LogoInsta"
                        className="img-fluid mr-3 logo"
                      />
                    </a>
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
              </div>*/}
            </div>

            <div className="col-md-12 col-lg-6 d-flex justify-content-end container-img-app-magmeta">
              <div className="img-app-magmeta">
                <img
                  className="app-magmeta"
                  src="/assets/img/meta-faça-magmeta.svg"
                  alt=""
                  data-aos="zoom-in"
                />

                <div className="pop-up" id="pop-up-1">
                  <div className="d-flex  flex-column pop-up-content pop-up-1">
                    <div className="d-flex justify-content-between">
                      <h6 className="txt-pop-up">Velocidade</h6>
                      <RocketFill className=" icon-pop" />
                    </div>
                    <p className="d-none d-md-block">
                      Ganhe tempo com a tecnologia trabalhando a seu favor
                    </p>
                  </div>
                </div>

                <div className="pop-up" id="pop-up-2">
                  <div className="d-flex  flex-column pop-up-content">
                    <div className="d-flex justify-content-between">
                      <h6 className="txt-pop-up">Estratégia</h6>
                      <RocketFill className=" icon-pop" />
                    </div>
                    <p className="d-none d-md-block">
                      Ganhe tempo com a tecnologia trabalhando a seu favor
                    </p>
                  </div>
                </div>
                <div className="pop-up" id="pop-up-3">
                  <div className="d-flex justify-content-between flex-column">
                    <h6 className="txt-pop-up">
                      Fidelização <FunnelFill className="icon-pop" />
                    </h6>
                    <p className="d-none d-md-block">
                      Experiência dos clientes elevada garantindo fidelidade
                    </p>
                  </div>
                </div>
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
          <div className="d-flex flex-wrap portifolio ">
            <div
              className="box-portifolio"
              id="container-portifolio-1"
              width=""
            >
              <div className="container-portifolio">
                <div className="d-flex flex-column gap-4">
                  <div className="texto-portifolio">
                    <h6 className="texto-h6-port">Clube de vantagens</h6>
                    <h4 className="texto-h4-port">Aplicativo mobile</h4>
                  </div>

                  <img src="/assets/img/mockup-net.png" alt="" />
                </div>

                <div className="box-texto-p1">
                  <p>
                    Nossa solução de UI/UX Design para Clube de Vantagens white
                    label é personalizável e pronta para uso, com foco em uma
                    experiência intuitiva e eficiente. Entre em contato para
                    adquiri-la!
                  </p>

                  <button
                    type="button"
                    className="btn botao-portifolio white-space text-nowrap btn-outline-light"
                  >
                    QUERO ESSA IDEIA
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
                <div className="d-flex flex-column gap-4">
                  <div className="texto-portifolio">
                    <h6 className="texto-h6-port">NFT Marketplace</h6>
                    <h4 className="texto-h4-port">Ui/Ux Design</h4>
                  </div>

                  <img src="/assets/img/mockup-funil.png" alt="" />
                </div>
                <div className="box-texto-p1">
                  <p>
                    Nosso Funil de Captação de Leads oferece um design intuitivo
                    e uma experiência fluida, maximizando conversões. Com
                    automação de marketing e integrações, otimizamos a geração
                    de leads qualificados de forma eficiente.
                  </p>

                  <button
                    type="button"
                    className="btn botao-portifolio white-space text-nowrap btn-outline-light"
                  >
                    QUERO VENDER
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

                <img
                  src="/assets/img/mockup-net.png"
                  alt=""
                  className="img-fluid"
                />

                <div className="box-texto-p1">
                  <p>
                    Desenvolvido para facilitar a vida dos clientes de empresas
                    provedoras de internet. Com ele fica muito mais fácil pagar
                    faturas, alterar planos e acompanhar consumo.
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

                <img
                  src="/assets/img/mockup-funil.png"
                  alt=""
                  className="img-fluid"
                />

                <div className="d-flex box-texto-p1 text justify-content-between">
                  <p>
                    Oferecemos soluções completas para e-commerces, desde a
                    criação de plataformas intuitivas até a otimização de
                    processos de vendas e pagamentos. Nosso objetivo é garantir
                    que sua loja virtual seja eficiente, segura e preparada para
                    crescer junto com o seu negócio.
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

          {/*<div className="d-flex portifolio align-items-center">
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
                    Para agilizar seus atendimentos e focar no que mais importa,
                    criamos ferramentas de gestão para seu negócio.
                  </p>

                  {/* <button
                    type="button"
                    className="btn botao-portifolio white-space text-nowrap btn-outline-light"
                  >
                    Explorar
                    <img src="/assets/img/setinha-portifolio.svg" alt="" />
                  </button> */}
          {/*</div>
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

                <img src="/assets/img/blog-klubi.png" alt="" />

                <div className="d-flex box-texto-p1 text justify-content-between">
                  <p></p>

                  {/* <button
                    type="button"
                    className="btn botao-portifolio white-space text-nowrap btn-outline-light"
                  >
                    Explorar
                    <img src="/assets/img/setinha-portifolio.svg" alt="" />
                  </button> 
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </section>
      <Clientes />
      <section id="terceira-sessao" className="pb-5">
        <div className="container">
          <div className="row  pt-5 pb-5 mb-5">
            <div className="col-12 d-flex pt-5 pb-5 justify-content-center text-center">
              <h2>O que nossos clientes dizem</h2>
            </div>
            <div className="d-flex linha-depoimentos gap-2">
              <div className="col-sm-12 col-md-4 col-lg-4  depoimento depoimento-1">
                <div class="d-flex justify-content-center align-items-center ">
                  <div>
                    <div className="d-flex justify-content-between flex-column pt-4 pb-4  align-items-center">
                      <CircleFill size={36} />
                      <h3 className="text-center">Magmeta</h3>
                      <small className="d-flex justify-content-center">
                        lorem
                      </small>
                    </div>
                    <p className="pb-3 px-3 text-center">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      look even slightly believable.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-sm-12 col-md-4 col-lg-4 flex-direction: column depoimento depoimento-2">
                <div class="d-flex justify-content-center align-items-center ">
                  <div>
                    <div className="d-flex justify-content-between flex-column pt-4 pb-4  align-items-center">
                      <CircleFill size={36} />
                      <h3 className="text-center">Magmeta</h3>
                      <small className="d-flex justify-content-center">
                        lorem
                      </small>
                    </div>
                    <p className="pb-3 px-3 text-center">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      look even slightly believable.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-sm-12 col-md-4 col-lg-4 flex-direction: column depoimento depoimento-3">
                <div class="d-flex justify-content-center align-items-center ">
                  <div>
                    <div className="d-flex justify-content-between flex-column pt-4 pb-4  align-items-center">
                      <CircleFill size={36} />
                      <h3 className="text-center">Magmeta</h3>
                      <small className="d-flex justify-content-center">
                        lorem
                      </small>
                    </div>
                    <p className="pb-3 px-3 text-center">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      look even slightly believable.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row pt-5 pb-5 mt-5  ">
            <div className="col-md-6 d-md-flex d-none justify-content-start align-items-center">
              <img
                className="img-fluid"
                src="/assets/img/sabemos-caminho.svg"
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
                <div className="botao-roxo botao-nossa-ex justify-content-center btn-or  btn-r">
                  <a
                    className="texto-botao"
                    href="https://onboarding.magmeta.com.br/onboarding/lead"
                    // Para manter a aparência do botão
                  >
                    <span>QUERO UMA AVALIAÇÃO GRATUITA</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6">
              <div>
                <img
                  className="img-fluid logo"
                  src="/assets/img/img-neon-white.svg"
                  id="img-mag"
                  width="100%"
                  alt=""
                />
              </div>
            </div>

            <div className="col-sm-12 col-md-6 col-lg-6 mt-5 pt-5 mb-5">
              <div className="box-sobre-nos d-flex flex-column gap-3">
                <h1 className="texto-sobre-nos-1">Sobre nós</h1>
                <div className="d-flex justify-content-between valores">
                  <div className="d-flex align-items-center gap-2">
                    <img
                      src="/assets/img/icone-check-white.svg"
                      className="logo-check-1"
                      alt=""
                    />
                    <h4 className="logo-check m-0">Estratégia</h4>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <img
                      src="/assets/img/icone-check-white.svg"
                      className="logo-check-2"
                      alt=""
                    />
                    <h4 className="logo-check m-0">Velocidade</h4>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <img
                      src="/assets/img/icone-check-white.svg"
                      className="logo-check-3"
                      alt=""
                    />
                    <h4 className="logo-check m-0">Fidelização</h4>
                  </div>
                </div>

                <h6 className="">
                  Unimos pessoas que amam o que fazem e estão alinhadas numa
                  mesma meta, dispostas a enfrentar grandes desafios e
                  desenvolver soluções e produtos inovadores que vão além de uma
                  entrega, mas impactam vidas positivamente. E com estas mentes
                  formamos a Magmeta.
                </h6>
                <div className="btn-or d-flex">
                  <div className="botao-roxo botao-nossa-ex btn-or ">
                    <a
                      href="/quem-somos"
                      className="btn-mobile-orcam texto-botao"
                    >
                      <span>NOSSA EXPETISE</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*<div className="row">
            <div className="col-sm-12 col-md-4 col-lg-4 flex-direction: column">
              <div class="d-flex justify-content-center align-items-center ">
                <div>
                  <img
                    className="img-fluid"
                    src="/assets/img/MagmetaImg.png"
                    id="img-mag"
                    width="100%"
                    alt=""
                  />
                </div>
                <div>
                  <h6>lorem</h6>
                  <h3>lorem</h3>
                </div>
                <div>
                  <img src="/assets/img/icone-check-white.svg" />
                  <h6>lorem</h6>
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-md-4 col-lg-4">
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

            <div className="col-sm-12 col-md-4 col-lg-4">
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
          </div>*/}
        </div>
      </section>

      <section id="quinta-sessao" className="pt-5 mt-5 pb-5">
        <div className="container text-center">
          <div className="row align-items-center gap-5 gap-md-0">
            <div className="col-sm-12 col-md-6 d-flex align-items-center justify-content-center">
              <img
                className="img-fluid"
                src="/assets/img/img-ideia.svg"
                width="400px"
                alt=""
              />
            </div>

            <div className="col-sm-12 col-md-6 ">
              <div className="box-texto-caminho">
                <h1 className=" ">
                  Tem uma ideia?
                  <br />
                  Vamos conversar!
                </h1>

                <div className="btn-or d-flex">
                  <div className="botao-roxo botao-nossa-ex justify-content-center  btn-r">
                    <a
                      className="texto-botao"
                      href="https://onboarding.magmeta.com.br/onboarding/lead"
                    >
                      <span>QUERO UMA AVALIÇÃO GRATUITA</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
