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
import { FaCheck, FaCheckCircle } from "react-icons/fa";
import GridCard from "@/components/pacote/GridCard";
import BtnColorido from "@/components/botoes/BtnColor";
import BtnRoxo from "@/components/botoes/BtnRoxo";
import LogosSlider from "@/containers/sobre/LogosSlider";
import BeneficiosSection from "@/components/pacote/BeneficiosSection";
import RedesSociais from "@/components/RedesSociais";
import TituloSecao from "@/components/TituloeSub";

export default function Home() {
  const beneficios = [
    "Atrair mais clientes certos",
    "Automatizar o atendimento e ganhar tempo",
    "Vender com consistência, mesmo fora do horário comercial",
    "Ter clareza do que está funcionando e onde investir",
  ];
  // ETAPAS / PASSOS
  const passos = [
    {
      title: "1. Diagnóstico personalizado",
      text: "Você agenda uma Sessão Estratégica gratuita com nosso time. Entendemos seu momento e objetivos.",
    },
    {
      title: "2. Ativação da solução",
      text: "Montamos uma estrutura sob medida: landing page, automação, campanhas, funis, tudo o que for necessário para atrair e converter.",
    },
    {
      title: "3. Acompanhamento e evolução",
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

  const { theme } = useTheme(); // retorna 'light' ou 'dark'

  const corBgCardHome = theme === "dark" ? "rgba(229,229,229,0.16)" : "#fff";

  return (
    <>
      <section
        className="pc"
        id="primeira-sessao"
        style={{ position: "relative", zIndex: 1 }}
      >
        <div className="container cp box-1">
          <div className="row align-items-center">
            <div className="d-flex align-items-center col-md-12 col-lg-6">
              <div
                className="text-center  texto1 d-flex text-lg-start gap-4 flex-column"
                data-aos="fade-right"
              >
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
                <div className="d-flex row btn-or position-relative">
                  <div className="botao-nossa-ex col-12 col-lg-6">
                    <BtnColorido />
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-md-12 col-lg-6 d-flex justify-content-end container-img-app-magmeta"
              data-aos="fade-left"
            >
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

          <RedesSociais />
        </div>
      </section>

      <LogosSlider />
      <section className="pc" id="segunda-sessao">
        <div className="container cp ">
          <div className="row d-flex justify-content-between">
            <div
              className="col-md-6 col-12 d-md-flex d-none justify-content-center align-items-center"
              data-aos="fade-right"
            >
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

            <div
              className="col-md-6 col-12 d-flex justify-content-center"
              data-aos="fade-left"
            >
              <div className="box-texto-caminho d-flex flex-column gap-4 justify-content-center">
                <TituloSecao
                  titulo="Crescimento de verdade, com tecnologia aplicada ao seu negócio"
                  subtitulo="Desenhamos soluções personalizadas para que o seu negócio
                  local consiga:"
                />

                <BeneficiosSection
                  beneficios={beneficios}
                  checkColor="#5B19A9"
                  animationData={null}
                  showLottie={false}
                  isMagnet={false}
                  compact={true}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pc">
        <div className="container cp gap-css">
          <div className="text-center px-0">
            <TituloSecao titulo="Como Funciona?" />
          </div>
          <GridCard
            passos={passos}
            iconColor={darkMode ? "#fff" : "#000"}
            ativoBgColor={darkMode ? "rgba(229,229,229,0.16)" : "#fff"}
            modoHome={true}
          />

          <div className="d-flex row justify-content-center">
            <div className="col-12 col-lg-3 position-relative">
              <BtnColorido />
            </div>
          </div>
        </div>
      </section>

      <section className="pc">
        <div className="container cp">
          <div className="flex-row gap-css flex-column  align-items-center">
            <div className="text-center px-0" data-aos="zoom-out-up">
              <TituloSecao
                titulo="Nossas soluções"
                subtitulo="Escolha seu próximo passo para crescer com a Magmeta"
              />
            </div>
            <SyncAccordionSlide />
          </div>
        </div>
      </section>

      <section className="pc">
        <div id="cases" className="gap-css cp">
          <div
            className="flex-row  flex-column text-center px-0 align-items-center"
            data-aos="zoom-out-up"
          >
            <TituloSecao titulo="Cases" />
          </div>
          <PortifolioProjetos />
        </div>
      </section>

      <section className="pc">
        <div className="container cp" data-aos="fade-down">
          <div className="row gap-css d-flex d-flex text-center flex-column align-items-center ">
            <div className="col-12 col-lg-6">
              <TituloSecao
                titulo="Tem uma ideia?"
                subtitulo="Faça o orçamento dela agora!"
              />
            </div>

            <div className="col-12 col-lg-3 position-relative">
              <BtnColorido />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
