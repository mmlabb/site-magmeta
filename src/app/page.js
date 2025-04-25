"use client";
import WordAnimation from "@/components/WordAnimation";
import Clientes from "@/containers/Customers";
import Image from "next/image";
import { useEffect } from "react";
import {
  ArrowLeftSquareFill,
  ArrowRight,
  ArrowRightSquareFill,
  Check2Circle,
  CheckCircleFill,
  CircleFill,
  FunnelFill,
  Lightbulb,
  LightbulbFill,
  Rocket,
  RocketFill,
} from "react-bootstrap-icons";
import { Zap } from "react-feather";

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
              <div className="text-center texto1 d-flex text-lg-start flex-column">
                <h1 className="texto-magnetize-metas">
                  Magnetize as metas do seu negócio com
                </h1>
                <WordAnimation />
                {/* <p className="mt-2">
                    Seu negócio merece uma atenção especial, com ferramentas
                    otimizadas especialmente para o seu crescimento.
                  </p> */}
                <div className="justify-content-center">
                  <p className="">
                    Estratégia e ferramentas que trabalham especialmente para o
                    seu crescimento.
                  </p>
                </div>
                <div className="d-flex pb-2 pt-2 btn-or">
                  <div className=" botao-nossa-ex btn-or">
                    <a
                      href="https://onboarding.magmeta.com.br/onboarding/lead"
                      className="btn-mobile-orcam texto-botao botao-roxo"
                      target="_blank" // Abre o link em uma nova aba
                      rel="noopener noreferrer" // Boa prática para segurança
                    >
                      <span className="txt-b-or">ORÇAMENTO RÁPIDO</span>
                    </a>{" "}
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
                <Image
                  className="app-magmeta"
                  src="/assets/img/meta-faça-magmeta.svg"
                  data-aos="zoom-in"
                  alt=""
                  width={0}
                  height={0}
                  sizes="100%"
                  style={{ width: "auto", height: "auto" }} // optional
                />

                <div className="pop-up" id="pop-up-1">
                  <div className="d-flex  flex-column pop-up-content pop-up-1">
                    <div className="d-flex justify-content-between">
                      <h6 className="txt-pop-up">Velocidade</h6>
                      <RocketFill className=" icon-pop" />
                    </div>
                    <p className="d-none d-md-block txt-up">
                      Ganhe tempo com a tecnologia trabalhando a seu favor
                    </p>
                  </div>
                </div>

                <div className="pop-up" id="pop-up-2">
                  <div className="d-flex  flex-column pop-up-content">
                    <div className="d-flex justify-content-between">
                      <h6 className="txt-pop-up">Estratégia</h6>
                      <LightbulbFill className=" icon-pop" />
                    </div>
                    <p className="d-none d-md-block">
                      Esteja a frente no mercado
                    </p>
                  </div>
                </div>
                <div className="pop-up" id="pop-up-3">
                  <div className="d-flex justify-content-between flex-column">
                    <h6 className="txt-pop-up">
                      Fidelização
                      <FunnelFill className="icon-pop" />
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
            <h3>Soluções Magmeta</h3>
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
                <h5>Produto white label</h5>
              </div>
            </div>
            <div className="col">
              <div className="tag" data-aos="fade-up" data-aos-delay="800">
                <h5>Sites</h5>
              </div>
            </div>
            <div className="col">
              <div className="tag" data-aos="fade-up" data-aos-delay="100">
                <h5>Página de vendas</h5>
              </div>
            </div>
            <div className="col">
              <div className="tag" data-aos="fade-up" data-aos-delay="600">
                <h5>MVP</h5>
              </div>
            </div>
          </div>
        </div>

        <div className="container solucoes-magmeta py-5">
          <div className="row g-4">
            <div className="col-12 col-md-6 box-solu">
              <div className="p-4 rounded card-solu text-white h-100">
                <div className="d-flex  flex-colunm">
                  <Image
                    src="/assets/img/icon-chat.png"
                    alt="Ícone Chat"
                    width={64}
                    height={64}
                    className=""
                  />
                  <div className="d-flex flex-column ms-3">
                    <p className="mb-0 d-flex align-items-center small">
                      Atendimento & captação de leads
                    </p>
                    <h5 className="fw-light">Magnet Chat</h5>
                  </div>
                </div>

                <div>
                  <p
                    className="mb-4 pt-3"
                    style={{ color: "rgba(255, 255, 255, 0.7)" }}
                  >
                    Automatize e simplifique o contato com seus clientes com um
                    ChatBot capaz... Nam in elementum libero. Vivamus tristique
                    justo ornare, pretium quam et, condimentum libero. Nam
                    vulputate magna non ligula molestie, a sagittis felis
                    vulputate.
                  </p>
                </div>
                <div>
                  <a
                    href="https://api.whatsapp.com/send?phone=+5561981689203&text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20quero%20saber%20mais%20sobre%20as%20Solu%C3%A7%C3%B5es%20Magmeta."
                    className="btn btn-light w-100 fw-bold"
                  >
                    APLICAR NO MEU NEGÓCIO <Zap size={18} />
                  </a>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 box-solu">
              <div className="p-4 rounded card-solu text-white h-100">
                <div className="d-flex  flex-colunm">
                  <Image
                    src="/assets/img/logo_midia_indoor.png"
                    alt="Ícone Chat"
                    width={64}
                    height={64}
                    className="rounded-3"
                  />
                  <div className="d-flex flex-column ms-3">
                    <p className="mb-0 d-flex align-items-center small">
                      Propaganda e Checkout
                    </p>
                    <h5 className="fw-light">Mídia indoor</h5>
                  </div>
                </div>

                <div>
                  <p
                    className="mb-4 pt-3"
                    style={{ color: "rgba(255, 255, 255, 0.7)" }}
                  >
                    Leve sua mensagem direto ao seu público! Com a mídia indoor,
                    sua marca ganha visibilidade em locais estratégicos do dia a
                    dia das pessoas. Impacte seu cliente no momento certo, em
                    ambientes relevantes e com alto poder de atenção.
                  </p>
                </div>
                <div>
                  <a
                    href="https://api.whatsapp.com/send?phone=+5561981689203&text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20quero%20saber%20mais%20sobre%20as%20Solu%C3%A7%C3%B5es%20Magmeta."
                    className="btn btn-light w-100 fw-bold"
                  >
                    APLICAR NO MEU NEGÓCIO <Zap size={18} />
                  </a>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 box-solu">
              <div className="p-4 rounded card-solu text-white h-100">
                <div className="d-flex  flex-colunm">
                  <Image
                    src="/assets/img/icon-chat.png"
                    alt="Ícone Chat"
                    width={64}
                    height={64}
                    className=""
                  />
                  <div className="d-flex flex-column ms-3">
                    <p className="mb-0 d-flex align-items-center small">
                      Comece por aqui!
                    </p>
                    <h5 className="fw-light">Digital Boost</h5>
                  </div>
                </div>

                <div>
                  <p
                    className="mb-4 pt-3"
                    style={{ color: "rgba(255, 255, 255, 0.7)" }}
                  >
                    Com o Digital Boost, analisamos sua operação e identificamos
                    oportunidades para tornar seu negócio mais eficiente com
                    tecnologia. Nosso objetivo é ajudar você a simplificar o dia
                    a dia, melhorar a experiência do cliente e abrir novas
                    possibilidades de crescimento.
                  </p>
                </div>
                <div>
                  <a
                    href="https://api.whatsapp.com/send?phone=+5561981689203&text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20quero%20saber%20mais%20sobre%20as%20Solu%C3%A7%C3%B5es%20Magmeta."
                    className="btn btn-light w-100 fw-bold"
                  >
                    APLICAR NO MEU NEGÓCIO <Zap size={18} />
                  </a>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 box-solu">
              <div className="p-4 rounded card-solu text-white h-100">
                <div className="d-flex  flex-colunm">
                  <Image
                    src="/assets/img/icon-chat.png"
                    alt="Ícone Chat"
                    width={64}
                    height={64}
                    className=""
                  />
                  <div className="d-flex flex-column ms-3">
                    <p className="mb-0 d-flex align-items-center small">
                      Valide sua ideia agora!
                    </p>
                    <h5 className="fw-light">Lançamento MVP </h5>
                  </div>
                </div>

                <div>
                  <p
                    className="mb-4 pt-3"
                    style={{ color: "rgba(255, 255, 255, 0.7)" }}
                  >
                    Desenvolva sua ideia com agilidade e foco! Criamos MVPs
                    (Mínimo Produto Viável) sob medida para validar seu conceito
                    no mercado. Lance sua solução inicial rapidamente, colete
                    feedback valioso e itere com inteligência
                  </p>
                </div>
                <div>
                  <a
                    href="https://api.whatsapp.com/send?phone=+5561981689203&text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20quero%20saber%20mais%20sobre%20as%20Solu%C3%A7%C3%B5es%20Magmeta."
                    className="btn btn-light w-100 fw-bold"
                  >
                    APLICAR NO MEU NEGÓCIO <Zap size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*<div
          className="container-fluid"
          id="portifolio-desktop"
          data-aos="fade"
        >
          <div className="d-flex flex-wrap portifolio">
            <div
              className="box-portifolio text-center"
              id="container-portifolio-1"
              width=""
            >
              <div className="container-portifolio">
                <div className="d-flex flex-column gap-4">
                  <div className="texto-portifolio">
                    <h6 className="texto-h6-port">Clube de vantagens</h6>
                    <h4 className="texto-h4-port">Aplicativo mobile</h4>
                  </div>

                  <div>
                    <Image
                      src="/assets/img/mockup-net.png"
                      alt=""
                      width={0}
                      height={0}
                      sizes="100%"
                      style={{ width: "auto", height: "auto" }} // optional
                    />
                  </div>
                </div>

                <div className="box-texto-p1">
                  <p>
                    Nossa solução de UI/UX Design para Clube de Vantagens white
                    label é personalizável e pronta para uso, com foco em uma
                    experiência intuitiva e eficiente. Entre em contato para
                    adquiri-la!
                  </p>

                  <a
                    href="https://wa.me/5561981689203?text=Olá,%20equipe Magmeta%20vim pelo site e%20gostaria de fazer um orçamento%20com vocês."
                    id="btn-port"
                    className="btn botao-portifolio white-space text-nowrap btn-outline-primary"
                    width="100%"
                    rel="noopener noreferrer" // Segurança adicional para links externos
                    target="_blank"
                  >
                    QUERO ESSA IDEIA
                    <ArrowRight />
                  </a>
                </div>
              </div>
            </div>
            <div
              className="box-portifolio text-center"
              id="container-portifolio-2"
              width=""
            >
              <div className="container-portifolio">
                <div className="d-flex flex-column gap-4">
                  <div className="texto-portifolio">
                    <h6 className="texto-h6-port">NFT Marketplace</h6>
                    <h4 className="texto-h4-port">Ui/Ux Design</h4>
                  </div>

                  <div>
                    <Image
                      src="/assets/img/mockup-funil.png"
                      alt=""
                      width={0}
                      height={0}
                      sizes="100%"
                      style={{ width: "auto", height: "auto" }} // optional
                    />
                  </div>
                </div>
                <div className="box-texto-p1">
                  <p>
                    Nosso Funil de Captação de Leads oferece um design intuitivo
                    e uma experiência fluida, maximizando conversões. Com
                    automação de marketing e integrações, otimizamos a geração
                    de leads qualificados de forma eficiente.
                  </p>

                  <a
                    href="https://wa.me/5561981689203?text=Olá,%20equipe Magmeta%20vim pelo site e%20gostaria de fazer um orçamento%20com vocês."
                    id="btn-port"
                    className="btn botao-portifolio white-space text-nowrap btn-outline-primary"
                    width="100%"
                    rel="noopener noreferrer" // Segurança adicional para links externos
                    target="_blank"
                  >
                    QUERO VENDER
                    <ArrowRight />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid" id="portifolio-mobile">
          <div className="d-flex flex-wrap portifolio">
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

                  <Image
                    src="/assets/img/mockup-net.png"
                    alt=""
                    width={0}
                    height={0}
                    sizes="100%"
                    style={{ width: "auto", height: "auto" }} // optional
                  />
                </div>

                <div className="box-texto-p1">
                  <p>
                    Nossa solução de UI/UX Design para Clube de Vantagens white
                    label é personalizável e pronta para uso, com foco em uma
                    experiência intuitiva e eficiente. Entre em contato para
                    adquiri-la!
                  </p>

                  <a
                    href="https://onboarding.magmeta.com.br/onboarding/lead"
                    id="btn-port"
                    className="btn botao-portifolio white-space text-nowrap btn-outline-primary"
                    width="100%"
                    rel="noopener noreferrer" // Segurança adicional para links externos
                    target="_blank"
                  >
                    QUERO ESSA IDEIA
                    <ArrowRight />
                  </a>
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

                  <Image
                    src="/assets/img/mockup-funil.png"
                    alt=""
                    width={0}
                    height={0}
                    sizes="100%"
                    style={{ width: "auto", height: "auto" }} // optional
                  />
                </div>
                <div className="box-texto-p1">
                  <p>
                    Nosso Funil de Captação de Leads oferece um design intuitivo
                    e uma experiência fluida, maximizando conversões. Com
                    automação de marketing e integrações, otimizamos a geração
                    de leads qualificados de forma eficiente.
                  </p>

                  <a
                    href="https://onboarding.magmeta.com.br/onboarding/lead"
                    id="btn-port"
                    className="btn botao-portifolio white-space text-nowrap btn-outline-primary"
                    width="100%"
                    rel="noopener noreferrer" // Segurança adicional para links externos
                    target="_blank"
                  >
                    QUERO VENDER
                    <ArrowRight />
                  </a>
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
          </div> 
        </div>*/}
      </section>
      <Clientes />
      <section id="terceira-sessao" className="pb-5">
        <div className="container">
          <div className="row  pt-5 pb-5 mb-5 d-none">
            <div className="col-12 d-flex pt-5 pb-5 justify-content-center text-center">
              <h2>O que nossos clientes dizem</h2>
            </div>
            <div className="d-flex linha-depoimentos text-white gap-2">
              <div className="col-sm-12 col-md-4 col-lg-4  depoimento depoimento-1">
                <div className="d-flex justify-content-center align-items-center ">
                  <div>
                    <div className="d-flex justify-content-between flex-column pt-4 pb-4  align-items-center">
                      <div className="circle-image icon-dep">
                        <Image
                          src="/assets/img/perfil1.jpg"
                          alt=""
                          className="logo"
                          width={0}
                          height={0}
                          sizes="100%"
                          style={{ width: "100%", height: "100%" }} // optional
                        />
                      </div>
                      <h4 className="text-center">E-commerce de Moda</h4>
                      <small className="d-flex justify-content-center">
                        Ana S.
                      </small>
                    </div>
                    <p className="pb-3 px-3 text-center">
                      &quot;Com a automação desenvolvida pela equipe, nosso
                      atendimento ficou muito mais rápido e eficiente.
                      Conseguimos focar no que importa: nossos clientes!&quot;
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-sm-12 col-md-4 col-lg-4 flex-direction: column depoimento depoimento-2">
                <div className="d-flex justify-content-center align-items-center ">
                  <div>
                    <div className="d-flex justify-content-between flex-column pt-4 pb-4  align-items-center">
                      <div className="circle-image icon-dep">
                        <Image
                          src="/assets/img/perfil3.jpg"
                          alt=""
                          className="logo"
                          width={0}
                          height={0}
                          sizes="100%"
                          style={{ width: "100%", height: "100%" }} // optional
                        />
                      </div>
                      <h4 className="text-center">Startup de Tecnologia</h4>
                      <small className="d-flex justify-content-center">
                        Lucas M.
                      </small>
                    </div>
                    <p className="pb-3 px-3 text-center">
                      &quot;O app desenvolvido pela Magmeta transformou nossa
                      operação! A solução foi personalizada e fácil de usar, e
                      agora nossos clientes têm acesso direto aos nossos
                      serviços na palma da mão. Resultado: mais engajamento e
                      aumento de vendas!&quot;
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-sm-12 col-md-4 col-lg-4 flex-direction: column depoimento depoimento-3">
                <div className="d-flex justify-content-center align-items-center ">
                  <div>
                    <div className="d-flex justify-content-between flex-column pt-4 pb-4  align-items-center">
                      <div className="circle-image icon-dep">
                        <Image
                          src="/assets/img/perfil2.jpg"
                          alt=""
                          className="logo"
                          width={0}
                          height={0}
                          sizes="100%"
                          style={{ width: "100%", height: "100%" }} // optional
                        />
                      </div>
                      <h4 className="text-center">Empreendedor de Serviços</h4>
                      <small className="d-flex justify-content-center">
                        Rafael T.
                      </small>
                    </div>
                    <p className="pb-3 px-3 text-center">
                      &quot;A Magmeta entendeu exatamente o que precisávamos e
                      criou um protótipo funcional que atraiu nossos primeiros
                      clientes. A equipe é incrível!&quot;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row pt-5 pb-5 mt-5  ">
            <div className="col-md-6 d-md-flex d-none justify-content-start align-items-center">
              <Image
                className="img-fluid"
                src="/assets/img/sabemos-caminho.svg"
                alt=""
                width={0}
                height={0}
                sizes="100%"
                style={{ width: "auto", height: "auto" }} // optional
              />
            </div>

            <div className="col-md-6">
              <div className="box-texto-caminho d-flex flex-column gap-3 pt-5 align-items-center align-items-md-start">
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
                <div className="botao-nossa-ex justify-content-center btn-or  btn-r">
                  <a
                    className="texto-botao botao-roxo"
                    href="https://onboarding.magmeta.com.br/onboarding/lead"
                    target="_blank" // Abre o link em uma nova aba
                    rel="noopener noreferrer" // Boa prática para segurança
                  >
                    <span className="txt-b-or">ORÇAMENTO RÁPIDO</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6 mt-5 pt-5 mb-5">
              <div className="box-sobre-nos pt-5 mt-4 d-flex flex-column gap-3">
                <h1 className="texto-sobre-nos-1">Sobre nós</h1>
                <div className="d-flex justify-content-between gap-4 valores">
                  <div className="d-flex align-items-center gap-2">
                    <CheckCircleFill size={24} />
                    <h4 className="logo-check m-0">Estratégia</h4>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <CheckCircleFill size={24} />
                    <h4 className="logo-check m-0">Velocidade</h4>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <CheckCircleFill size={24} />
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
                  <div className=" botao-nossa-ex btn-or ">
                    <a
                      href="/quem-somos"
                      className="btn-mobile-orcam texto-botao botao-nossa-ex btn-or botao-roxo"
                      target="_blank"
                    >
                      <span className="txt-b-or">NOSSA EXPETISE</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-md-6 col-lg-6">
              <div>
                <Image
                  className="img-fluid logo"
                  alt=""
                  src="/assets/img/img-neon-white.svg"
                  id="img-mag"
                  width={0}
                  height={0}
                  sizes="100%"
                  style={{ width: "auto", height: "auto" }} // optional
                />
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
        <div className="container box-t-ideia text-center">
          <div className="row align-items-center gap-5 gap-md-0">
            <div className="col-sm-12 col-md-6 d-flex align-items-center justify-content-center">
              <Image
                className="img-fluid"
                src="/assets/img/img-ideia.svg"
                alt=""
                width={0}
                height={0}
                sizes="100%"
                style={{ width: "auto", height: "auto" }} // optional
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
                  <div className=" justify-content-center">
                    <a
                      className="texto-botao botao-nossa-ex botao-roxo btn-r"
                      href="https://api.whatsapp.com/send?phone=+5561981689203&text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20quero%20saber%20mais%20sobre%20as%20Solu%C3%A7%C3%B5es%20Magmeta."
                      target="_blank"
                    >
                      <span className="txt-b-or">
                        QUERO UMA AVALIÇÃO GRATUITA
                      </span>
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
