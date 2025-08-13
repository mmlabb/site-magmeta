"use client";

import BannerPrincipal from "@/components/pacote/BannerPrincipal";
import BeneficiosSection from "@/components/pacote/BeneficiosSection";
import PublicoAlvoSection from "@/components/pacote/PublicoAlvoSection";
import GridCard from "@/components/pacote/GridCard";
import PlanosSection from "@/components/pacote/PlanosSection";
import FaqSection from "@/components/pacote/FaqSection";
import CtaAcao from "@/components/pacote/CtaAcao";
import SyncAccordionSlide from "@/components/SyncAccordionSlide";
import Duvidas from "@/components/pacote/Duvidas";
import appAnimation from "@/../public/lotties/chat.json";
import faqAnimation from "@/../public/lotties/faq-2.json";
import PublicoCarousel from "@/components/pacote/PublicoCarousel";
import TituloSecao from "@/components/TituloeSub";
import { useTheme } from "@/providers/ThemeProvider";
import BtnColorido from "@/components/botoes/BtnColor";

// BENEFÍCIOS
const beneficiosMagnet = [
  "Sem dor de cabeça para implementação.",
  "Suporte.",
  "Crie fluxos inteligentes de conversa.",
  "Centralize seus atendimentos.",
  "Chatbots inteligentes 24h.",
  "Interface profissional e intuitiva.",
  "Gere leads, qualifique clientes e feche mais vendas.",
  "Automatize seu atendimento sem precisar de desenvolvedores ou processos complexos.",
];

// PÚBLICO-ALVO
const recursosChat = [
  { nome: "Clínicas e Consultórios", icone: "stethoscope" },
  { nome: "Escritórios de Advocacia", icone: "gavel" },
  { nome: "Imobiliárias", icone: "home" },
  { nome: "Salões de Beleza e Barbearias", icone: "cut" },
  { nome: "Restaurantes e Cafeterias", icone: "utensils" },
  { nome: "Construtoras e Arquitetos", icone: "drafting-compass" },
  { nome: "Autoescolas", icone: "car-side" },
  { nome: "Academias e Personal Trainers", icone: "dumbbell" },
  { nome: "Clínicas Veterinárias e Petshops", icone: "paw" },
  { nome: "Fotógrafos e Filmagens", icone: "camera-retro" },
];

// ETAPAS / PASSOS
const wppChat = [
  {
    title: "Crie mensagens",
    text: "Monte fluxos inteligentes para atender clientes 24h.",
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

// PLANOS
const planosMagnet = [
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

// FAQ
const perguntasFaqMagnet = [
  {
    pergunta: "1. O que é o magnet chat?",
    resposta:
      "O Magnet Chat é uma plataforma de atendimento inteligente e automatizado que conecta sua empresa com seus clientes via WhatsApp, Instagram, site e outros canais. É uma solução pronta, fácil de configurar e usar, sem necessidade de desenvolvimento.",
  },
  {
    pergunta: "2. Como funciona a integração?",
    resposta:
      "A integração é feita em poucos minutos, sem necessidade de conhecimento técnico.",
  },
  {
    pergunta: "3. Posso personalizar os fluxos?",
    resposta:
      "Sim, você pode montar fluxos inteligentes e personalizados para seu atendimento.",
  },
];

export default function Page() {
  const { darkMode } = useTheme();
  const { theme } = useTheme();
  return (
    <>
      <section className="pc cp">
        <BannerPrincipal
          logo="/assets/img/logo-atend.svg"
          titulo="Atendimento Inteligente"
          descricao="Seu Atendimento 100% Automatizado Atenda. Converta. Escale. O Magnet Chat é uma plataforma de atendimento automatizado que transforma sua operação digital. Atenda seus clientes de forma rápida, inteligente e 100% automatizada, direto no WhatsApp, Instagram, Facebook e no seu site."
          botoes={[{ label: "Falar com um Especialista", href: "#" }]}
          backgroundImage="/assets/img/bg-atend.png"
          imagemCol="/assets/img/wpp-24h.png"
        />
      </section>

      <section className="pc">
        <div className=" text-center">
          <TituloSecao
            titulo="Para quem é?"
            subtitulo="Somos parceiros de empresas que querem escalar suas vendas em ramos como:"
          />
        </div>
        <PublicoCarousel
          recursos={recursosChat}
          customClass="publico-mobile"
          corBase="#00000000"
          corBorda="#25D366"
          corIcone="#25D366"
        />
      </section>

      <section className="pc ">
        <div className="container cp">
          <BeneficiosSection
            titulo="Transforme seu Atendimento com um Atendente Inteligente 24/7"
            descricao="Nossa solução usa tecnologia avançada de IA para automatizar seu atendimento no WhatsApp, oferecendo respostas personalizadas 24/7 sem perder o toque humano."
            beneficios={beneficiosMagnet}
            checkColor="#25D366"
            isMagnet={true}
            imagem="/assets/img/wpp-24h.png"
            lottieWidth="100%"
          />
        </div>
      </section>

      <section className="pc cp">
        <div className=" text-center">
          <TituloSecao titulo="O que você ganha com nosso site" />
        </div>
        <div className="container">
          <GridCard
            passos={wppChat}
            ativoBgColor={darkMode ? "rgba(229,229,229,0.16)" : "#fff"}
            modoHome="true"
          />
        </div>
        <div className="d-flex row justify-content-center">
          <div className="col-12 col-lg-3 position-relative">
            <BtnColorido gradient="#25D366" />
          </div>
        </div>
      </section>

      <section className="pc">
        <div className=" text-center">
          <TituloSecao
            titulo="Escolha o Plano Ideal para seu Negócio"
            subtitulo="Planos flexíveis para atender às necessidades de qualquer infoprodutor, do iniciante ao avançado."
          />
        </div>
        <PlanosSection
          planos={planosMagnet}
          destaqueBorderColor="#25D366"
          destaqueTextColor={darkMode ? "#fff" : "#1C1C3C"}
          checkIconColor="#25D366"
          destaqueBtnColor="#1C1C3C"
          corBotaoNaoDestaque="#25D366"
          corTextoBotaoNaoDestaque="#000000"
          iconeCor="#fff"
          faixaDestaqueBgColor="#25D366"
          iconeDestaqueCor="#fff"
        />
      </section>

      <section className="pt-3 cp">
        {" "}
        <Duvidas
          backgroundImage="/assets/img/bgWpp.png"
          textos={["Quer consultar o pacote ideal?"]}
          botaoLabel="Falar com Especialista"
        />
      </section>

      <section className="pc cp">
        <FaqSection
          titulo="Perguntas e respostas mais frequentes"
          perguntas={perguntasFaqMagnet}
          animationData={faqAnimation}
          backgroundColor="rgba(37, 211, 102, 0.1)"
        />
      </section>

      <section className="pc cp">
        <div className="container cp">
          <div className="flex-row gap-css flex-column  align-items-center">
            <div className="text-center px-0">
              <TituloSecao
                titulo="Nossas soluções"
                subtitulo="Escolha seu próximo passo para crescer com a Magmeta"
              />
            </div>
            <SyncAccordionSlide variant="chat" />
          </div>
        </div>
      </section>

      <section className="pc">
        <div className="container cp " data-aos="fade-down">
          <div className="row gap-css d-flex d-flex text-center flex-column align-items-center ">
            <div className="col-12 col-lg-6">
              <TituloSecao
                titulo="Tem uma ideia?"
                subtitulo="Faça o orçamento dela agora!"
              />
            </div>

            <div className="col-12 col-lg-3 position-relative">
              <BtnColorido gradient="#25D366" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
