"use client";
import WordAnimation from "@/components/WordAnimation";
import Clientes from "@/containers/Customers";
import Image from "next/image";
import { useEffect } from "react";
import SyncAccordionSlide from "@/components/SyncAccordionSlide";
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
import { useTheme } from "@/providers/ThemeProvider";
import PortifolioProjetos from "@/components/PortifolioProjetos";
import { FaCheck } from "react-icons/fa";
import GridCard from "@/components/pacote/GridCard";
import BtnColor from "@/components/botoes/BtnColor";
import BtnColorido from "@/components/botoes/BtnColor";
import BtnRoxo from "@/components/botoes/BtnRoxo";
import CtaAcao from "@/components/pacote/CtaAcao";

export default function Home() {
  // ETAPAS / PASSOS
  const passosMagnet = [
    {
      title: "Diagnóstico personalizado",
      text: "Você agenda uma Sessão Estratégica gratuita com nosso time. Entendemos seu momento e objetivos.",
    },
    {
      title: "Ativação da solução",
      text: "Montamos uma estrutura sob medida: landing page, automação, campanhas, funis, tudo o que for necessário para atrair e converter.",
    },
    {
      title: "Acompanhamento e evolução",
      text: "Medimos resultados, otimizamos estratégias e escalamos o que funciona. Com foco no crescimento.",
    },
  ];

  const { darkMode } = useTheme();
  const lista = [
    "Atrair mais clientes certos",
    "Automatizar o atendimento e ganhar tempo",
    "Vender com consistência, mesmo fora do horário comercial",
    "Ter clareza do que está funcionando e onde investir",
  ];

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
      <section id="primeira-sessao" style={{ position: "relative", zIndex: 1 }}>
        <div className="container box-1">
          <div className="row gx-5 linha-1 align-items-center">
            <div className="box-texto-magmetize col-md-12 col-lg-6">
              <div className="text-center texto1 d-flex text-lg-start gap-4 flex-column">
                <div className="">
                  <h1 className="texto-magnetize-metas">
                    Transformamos seu negócio em uma máquina de vendas com
                  </h1>
                  <WordAnimation />
                  {/* <p className="mt-2">
                    Seu negócio merece uma atenção especial, com ferramentas
                    otimizadas especialmente para o seu crescimento.
                  </p> */}
                  <div className="justify-content-center">
                    <p className="">
                      A Magmeta conecta estratégia, tecnologia e inteligência
                      digital para negócios locais crescerem com consistência
                    </p>
                  </div>
                </div>
                <div className="d-flex  btn-or position-relative">
                  <div className=" botao-nossa-ex">
                    <BtnColorido />
                  </div>
                </div>
              </div>
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
                  style={{ width: "auto", height: "auto" }}
                />

                <div className="pop-up" id="pop-up-1">
                  <div className="d-flex  flex-column pop-up-content pop-up-1">
                    <div className="d-flex justify-content-between">
                      <span className="txt-pop-up">Funil inteligente</span>
                      <FunnelFill
                        className="icon-pop"
                        weight="fill"
                        color={darkMode ? "#fff" : "#000"}
                      />
                    </div>
                    <p className="d-none d-md-block txt-up">
                      Leads certos, mensagens certeiras e vendas acontecendo no
                      tempo certo.
                    </p>
                  </div>
                </div>

                <div className="pop-up" id="pop-up-2">
                  <div className="d-flex  flex-column pop-up-content">
                    <div className="d-flex justify-content-between">
                      <span className="txt-pop-up">Estratégia aplicada</span>
                      <LightbulbFill
                        className=" icon-pop"
                        weight="fill"
                        color={darkMode ? "#fff" : "#000"}
                      />
                    </div>
                    <p className="d-none d-md-block">
                      Criamos o caminho que leva o cliente certo até você, do
                      interesse ao pagamento.
                    </p>
                  </div>
                </div>
                <div className="pop-up" id="pop-up-3">
                  <div className="d-flex justify-content-between flex-column">
                    <span className="txt-pop-up">
                      Estrutura de Vendas
                      <RocketFill
                        className="icon-pop"
                        weight="fill"
                        color={darkMode ? "#fff" : "#000"}
                      />
                    </span>
                    <p className="d-none d-md-block">
                      Sua operação digital vendendo 24h com acompanhamento,
                      dados e otimização constante
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row ">
            <div className="d-none d-md-block">
              <ul className="d-flex">
                <li className=" my-2">
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
            </div>
          </div>
        </div>
      </section>

      <Clientes />
      <section id="terceira-sessao" className="pb-5">
        <div className="container">
          <div className="row py-5">
            <div className="col-md-6 d-md-flex d-none justify-content-center align-items-center pe-5">
              <Image
                className="img-fluid"
                src="/assets/img/img-sabemos-cam.svg"
                alt=""
                width={0}
                height={0}
                sizes="100%"
                style={{ width: "100%", height: "auto" }}
              />
            </div>

            <div className="col-md-6 ps-5">
              <div className="box-texto-caminho d-flex flex-column gap-3  align-items-center align-items-md-start">
                <h2 className="texto1 text-right">
                  Crescimento de verdade, com tecnologia aplicada ao seu negócio
                </h2>
                <p>
                  Desenhamos soluções personalizadas para que o seu negócio
                  local consiga:
                </p>
                <ul className="list-unstyled">
                  {lista.map((item, index) => (
                    <li key={index} className="d-flex align-items-start mb-2">
                      <FaCheck
                        style={{
                          color: "#5B19A9",
                          marginRight: "0.5rem",
                          marginTop: "0.25rem",
                        }}
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p>
                  Tudo isso sem complicações, promessas vazias ou pacotes
                  engessados.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <GridCard
        titulo="🔧 Como Funciona?"
        passos={passosMagnet}
        iconColor="#000"
        ativoBgColor="#E5E5E5"
        modoHome={true}
      />

      <div className="d-flex justify-content-center">
        <BtnRoxo />
      </div>

      <div className="container py-5 ">
        <div className="py-5 row">
          <div className=" d-flex justify-content-center text-center py-5 flex-column">
            <h3>Nossas soluções</h3>
            <p>Escolha seu próximo passo para crescer com a Magmeta</p>
          </div>
          <SyncAccordionSlide />
        </div>
      </div>

      <div className="pt-5 mt-5">
        <div className=" d-flex justify-content-center text-center py-5 flex-column">
          <h3>Cases</h3>
        </div>
        <PortifolioProjetos />
      </div>

      <section>
        <div className="col p-5  pb-5 d-flex text-center justify-content-center">
          {/* <section>
        <div className="col p-5  pb-5 d-flex text-center justify-content-center">
          <h2>Cases De Sucesso </h2>
        </div>
        <div>
          <PortifolioProjetos />
        </div>
      </section>*/}
        </div>
      </section>
      <CtaAcao
        titulo="Está em busca da solução ideal? 🚀"
        descricao="Descubra como podemos acelerar seu negócio com soluções inteligentes, prontas para escalar e fáceis de implementar.
Fale com a gente e descubra qual solução pronta é ideal pro seu negócio."
        botaoCustomPrimario={
          <button
            className="btn-colorido"
            data-content="Quero saber mais"
          ></button>
        }
        botaoCustomSecundario={
          <>
            <h3>Tem uma ideia? Faça o orçamento dela agora!</h3>
            <div>
              <button className="btn-purple">Fazer orçamento</button>
            </div>
          </>
        }
      />
    </>
  );
}
