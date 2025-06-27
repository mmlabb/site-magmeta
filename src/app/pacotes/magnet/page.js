"use client";
import Image from "next/image";
import { Fire } from "react-bootstrap-icons";
import React from "react";
import SyncAccordionSlide from "@/components/SyncAccordionSlide";
import { FaCheck, FaCheckCircle } from "react-icons/fa";
import { BsCheckCircleFill } from "react-icons/bs";
import Lottie from "lottie-react";
import appAnimation from "@/../public/lotties/chat.json";

const beneficios = [
  "Sem dor de cabeça para implementação.",
  "Suporte.",
  "Crie fluxos inteligentes de conversa.",
  "Centralize seus atendimentos.",
  "Chatbots inteligentes 24h.",
  "Interface profissional e intuitiva.",
  "Gere leads, qualifique clientes e feche mais vendas.",
  "Automatize seu atendimento sem precisar de desenvolvedores ou processos complexos.",
];

const recursos = [
  { emoji: "🧑🏻‍⚕️", title: "Clínicas e consultórios médicos" },
  { emoji: "🍔", title: "Restaurantes, lanchonetes e delivery" },
  { emoji: "💇🏻‍♀️", title: "Salões de beleza, estética e bem-estar" },
  { emoji: "🛒", title: "E-commerce e lojas físicas" },
  { emoji: "💻", title: "Prestadores de serviço em geral" },
];

const passos = [
  {
    title: "Escolha seu plano",
    text: "Selecione o pacote que melhor atende seu negócio.",
  },
  {
    title: "Integração fácil",
    text: "Conectamos seu WhatsApp em minutos sem complicações.",
  },
  {
    title: "Crie mensagens",
    text: "Monte fluxos inteligentes para atender clientes 24h.",
  },
  {
    title: "Monitore resultados",
    text: "Acompanhe relatórios de desempenho em tempo real.",
  },
  {
    title: "Automatize tudo",
    text: "Deixe os chatbots cuidarem do trabalho repetitivo.",
  },
  {
    title: "Escale suas vendas",
    text: "Com mais eficiência e agilidade no atendimento.",
  },
];

const planos = [
  {
    nome: "ESSENCIAL",
    preco: "R$ 129,00/mês",
    descricao:
      "Microempresas, autônomos, pequenos negócios e quem está começando no atendimento automatizado.",
    beneficios: [
      "1 canal integrado (WhatsApp ou site)",
      "1 atendente humano",
      "Templates prontos (saúde, delivery, estética, etc.)",
      "Criação de fluxos básicos de atendimento",
      "Relatórios simples de atendimento e leads",
      "Suporte via e-mail e WhatsApp comercial",
      "Dashboard intuitivo",
      "Widget de chat para site",
      "Taxa de implantação única: R$ 150,00",
      "Implantação: Até 3 dias úteis",
    ],
  },
  {
    nome: "IMPULSO ",
    preco: "R$ 249,00/mês",
    etiqueta: "Mais procurado",
    descricao:
      "Para Empresas em expansão que precisam de mais canais, mais atendentes e maior controle sobre os atendimentos.",
    beneficios: [
      "Até 3 canais integrados (WhatsApp, Instagram e site)",
      "Até 3 atendentes humanos",
      "Templates prontos + possibilidade de personalização moderada",
      "Criação de fluxos avançados de atendimento",
      "Integração com CRM, API ou Webhooks",
      "Relatórios detalhados com métricas de desempenho",
      "Suporte prioritário via WhatsApp",
      "Dashboard completo e fácil de usar",
      "Widget de chat para site",
      "Taxa de implantação única: R$ 250,00",
      "Implantação: Até 2 dias úteis",
    ],
  },
  {
    nome: "PREMIUM ",
    preco: "Sob consulta",
    descricao:
      "Para Grandes empresas, redes de franquias, grupos empresariais ou negócios que precisam de um atendimento altamente personalizado e escalável.",
    beneficios: [
      "Até 3 canais integrados (WhatsApp, Instagram e site)",
      "Até 3 atendentes humanos",
      "Templates prontos + possibilidade de personalização moderada",
      "Criação de fluxos avançados de atendimento",
      "Integração com CRM, API ou Webhooks",
      "Relatórios detalhados com métricas de desempenho",
      "Suporte prioritário via WhatsApp",
      "Dashboard completo e fácil de usar",
      "Widget de chat para site",
      "Taxa de implantação única: R$ 250,00",
      "Implantação: Sob consulta",
    ],
  },
];

const Page = () => {
  return (
    <>
      {/* SECTION 1 */}
      <section id="section-1" className="pt-5 mt-5 pb-5">
        <div className="container c-txt-b py-5">
          <div className="row row-banner w-100 p-4 my-">
            <div className="col-md-6 py-4 col-12 d-flex justify-content-between flex-column">
              <div className="start-0 py-3  z-3">
                <Image
                  src="/assets/img/logo-magnet.png"
                  alt="Magnet Logo"
                  width={100}
                  height={100}
                  className="img-fluid"
                  sizes="100%"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </div>

              <div>
                <h3>Atendimento Inteligente</h3>
                <div className="pt-3">
                  <div>
                    <span>
                      Seu Atendimento 100% Automatizado Atenda. Converta.
                      Escale. O Magnet Chat é uma plataforma de atendimento
                      automatizado que transforma sua operação digital. Atenda
                      seus clientes de forma rápida, inteligente e 100%
                      automatizada, direto no WhatsApp, Instagram, Facebook e no
                      seu site.
                    </span>
                  </div>
                  <div className="d-flex pt-4 pb-2  gap-3 flex-wrap">
                    <a href="#" className="text-decoration-none text-white">
                      Digital Boost
                    </a>
                    <span className="px-2">|</span>
                    <a href="#" className="text-decoration-none text-white">
                      Digital Boost
                    </a>
                    <span className="px-2">|</span>
                    <a href="#" className="text-decoration-none text-white">
                      Digital Boost
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <div className="d-flex gap-3 pt-3 flex-wrap">
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-primary btn-banner rounded-pill px-4 py-2"
                  >
                    Ver Demonstração
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-primary btn-banner rounded-pill px-4 py-2"
                  >
                    Falar com um Especialista
                  </a>
                </div>
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
          <div className="container py-5">
            <div className="row align-items-center">
              <div className="d-flex justify-content-center py-3">
                <h4>O que é o Magnet Chat?</h4>
              </div>
              <div className="col-md-6 d-flex justify-content-center mb-4 mb-md-0">
                <Lottie
                  animationData={appAnimation}
                  loop={true}
                  className="w-100"
                  style={{ maxWidth: "74%", height: "100%" }}
                />
              </div>
              <div className="col-md-6">
                <ul className="list-unstyled">
                  {beneficios.map((item, index) => (
                    <li key={index} className="d-flex align-items-start mb-2">
                      <FaCheck
                        className="me-2 mt-1"
                        color="#0d6efd"
                        style={{ minWidth: "16px", minHeight: "16px" }}
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="row pt-5 pb-3 text-center">
            <h4>🎯 Para Quem É?</h4>
            <p className="py-3">
              O Magnet Chat é perfeito para empresas de todos os tamanhos e
              segmentos.
            </p>
          </div>

          <div className="row gap text-center mt-5">
            {recursos.map((item, index) => (
              <div className="col  tipo  " key={index}>
                <div className="p-3">
                  <div className="mb-2 fs-3">{item.emoji}</div>
                  <h6>{item.title}</h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2 */}
      <section id="section-2" className="py-5 my-5">
        <div className="container">
          <div className="row text-center py-4 mb-4">
            <h4>🔧 Como Funciona?</h4>
          </div>
          <div className="row d-flex row-cols-1 justify-conten-start row-cols-md-3 g-4">
            {passos.map((item, i) => {
              const isFirstRow = i < 3;
              const isMiddle = i === 1 || i === 4;
              const isAtivo =
                (isFirstRow && !isMiddle) || (!isFirstRow && isMiddle);

              return (
                <div className="col" key={i}>
                  <div className={`card-grid-bloco ${isAtivo ? "ativo" : ""}`}>
                    <BsCheckCircleFill
                      size={40}
                      color="#ffffff"
                      style={{
                        backgroundColor: "#367CFF",
                        borderRadius: "50%",
                      }}
                      className="mb-3"
                    />
                    <h4 className="mb-2">{item.title}</h4>
                    <p className="mb-0">{item.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 3 */}
      <section id="section-3" className="py-5 planos">
        <div className="container">
          <div className="row mb-4">
            <h4 className="text-center">Planos</h4>
          </div>
          <div className="row">
            {planos.map((plano, index) => (
              <div className="col-12 col-md-4 mb-4" key={index}>
                <div className="faixa-titulo">
                  <h5 className="titulo-plano m-0">{plano.nome}</h5>
                </div>
                <div
                  className={`plano-box border-white ${
                    plano.etiqueta ? "destaque" : ""
                  }`}
                >
                  {plano.etiqueta && (
                    <div className="etiqueta">{plano.etiqueta}</div>
                  )}

                  <div className="preco">{plano.preco}</div>
                  <div className="descricao">{plano.descricao}</div>
                  <ul className="beneficios">
                    {plano.beneficios.map((item, idx) => (
                      <li
                        key={idx}
                        className="d-flex align-items-start border-bottom pb-2 mb-2"
                      >
                        <FaCheckCircle
                          className="me-2 mt-1"
                          color="#0d6efd"
                          style={{ minWidth: "16px", minHeight: "16px" }}
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="text-center mt-3">
                    <button className="btn btn-outline-primary btn-banner">
                      Experimente grátis
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h4>Pronto para transformar sua comunicação?</h4>
            </div>
            <div className="col-md-6 text-md-end">
              <button className="btn btn-outline-primary rounded-pill px-4">
                Quero saber mais
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="row align-items-center mb-4">
            <div className="col-md-6">
              <p className="fs-4">
                <Fire className="text-danger me-2" /> Aproveite agora!
              </p>
            </div>
            <div className="col-md-6">
              <p className="text-muted">
                Confira nossos outros pacotes abaixo:
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ACCORDION */}
      <section className="pb-5">
        <div className="container">
          <SyncAccordionSlide />
        </div>
      </section>
    </>
  );
};

export default Page;
