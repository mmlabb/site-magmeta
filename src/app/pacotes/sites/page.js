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
import siteAnimation from "@/../public/lotties/pc.json";
import faqAnimation from "@/../public/lotties/faq-2.json";
import PublicoCarousel from "@/components/pacote/PublicoCarousel";

// BENEFÍCIOS
const beneficiosMagnet = [
  "Site totalmente responsivo",
  "Copywriting estratégico para vender",
  "Integração com WhatsApp, Google Meu Negócio",
  "Otimização para SEO local",
  "Entrega rápida",
  "Suporte e ajustes pós-entrega",
];

// PÚBLICO-ALVO
const recursosChat = [
  { emoji: "🧑🏻‍⚕️", title: "Clínicas e consultórios médicos" },
  { emoji: "🍔", title: "Restaurantes, lanchonetes e delivery" },
  { emoji: "💇🏻‍♀️", title: "Salões de beleza, estética e bem-estar" },
  { emoji: "🛒", title: "E-commerce e lojas físicas" },
  { emoji: "💻", title: "Prestadores de serviço em geral" },
];

// ETAPAS / PASSOS
const passosMagnet = [
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
  return (
    <>
      <div className="container py-5">
        <BannerPrincipal
          logo="/assets/img/logo-site.png"
          titulo="Seu Site Precisa Gerar Clientes, Não Só Existir"
          descricao="Criamos sites profissionais que transformam visitas em contatos no WhatsApp. Mais autoridade, mais vendas."
          botoes={[{ label: "Quero um Site Que Vende", href: "#" }]}
          backgroundImage="/assets/img/bgsite.png"
          imagemCol="/assets/img/bgsit.png"
        />

        <BeneficiosSection
          titulo="O que está incluso"
          descricao="Tudo o que seu negócio precisa para ter presença digital que realmente gera vendas:"
          beneficios={beneficiosMagnet}
          animationData={siteAnimation}
          checkColor="#03D1E8"
          lottieWidth="86%"
        />
      </div>

      <PublicoCarousel
        recursos={recursosChat}
        customClass="publico-mobile"
        corBase="#03D1E8"
      />

      <div className="container">
        <GridCard
          titulo="🔧 Como Funciona?"
          passos={passosMagnet}
          iconColor="#03D1E8"
          ativoBgColor="rgba(3, 209, 232, 0.1)"
        />

        <PlanosSection
          planos={planosMagnet}
          destaqueBgColor="linear-gradient(to bottom, #03D1E8 0%, #027582 100%)"
          destaqueTextColor="#000"
          checkIconColor="#000"
          checkIconColorNaoDestaque="#fff"
          destaqueBtnHoverColor="#000"
        />

        <div className="py-5">
          <FaqSection
            titulo="Perguntas e respostas mais frequentes"
            perguntas={perguntasFaqMagnet}
            animationData={faqAnimation}
            backgroundColor="rgba(3, 209, 232, 0.1)"
          />
        </div>

        <Duvidas
          backgroundImage="/assets/img/background-2.png"
          textos={["Ficou com alguma dúvida sobre nossos planos?"]}
          botaoLabel="Falar com Especialista"
        />

        <CtaAcao
          titulo="Pronto para automatizar seu atendimento? 🚀"
          descricao="Automatize seu atendimento, gere mais negócios e aumente suas conversões. Tenha seu chat funcionando em poucos dias."
          botaoPrimario={{ label: "Quero saber mais" }}
          botaoSecundario={{
            titulo: "🔥 Comece agora!",
            label: "Assinar plano",
          }}
        />
      </div>

      <section className="py-5 acc  my-5">
        <div className="container">
          <SyncAccordionSlide />
        </div>
      </section>
    </>
  );
}
