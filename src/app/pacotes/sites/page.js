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
const beneficiosSite = [
  "Site totalmente responsivo",
  "Copywriting estratégico para vender",
  "Integração com WhatsApp, Google Meu Negócio",
  "Otimização para SEO local",
  "Entrega rápida",
  "Suporte e ajustes pós-entrega",
];

// PÚBLICO-ALVO
const recursosSite = [
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
const passosSite = [
  {
    title: "1. Mais confiança e autoridade no mercado",
    text: [
      "Selecione o pacote ideal para seu negócio.",
      "Seu negócio apresentado de forma profissional e moderna.",
      "A primeira impressão do seu cliente será de organização e seriedade.",
      "Você se destaca da concorrência que ainda usa redes sociais como única presença online.",
      "Cria uma marca forte que transmite segurança para novos clientes.",
    ],
  },
  {
    title: "2. Mais visitas se transformando em contatos no WhatsApp",
    text: [
      "Botões inteligentes para levar o visitante direto para seu WhatsApp.",
      "Conversão rápida: menos cliques, mais contatos no seu celular.",
      "Textos estratégicos guiando o cliente até a ação final.",
      "Captação de leads direto no seu WhatsApp sem precisar investir em ferramentas caras.",
    ],
  },
  {
    title: "3. Mais clientes locais encontrando você no Google",
    text: [
      "Escolha seu visual ou template.",
      "Conecte seus canais: WhatsApp, Instagram, localização.",
      "Ative o Magnet Chat (se desejar automatizar).",
      "Comece a divulgar e receba contatos de forma prática.",
    ],
  },
];

// PLANOS
const planosSite = [
  {
    nome: "ESSENCIAL",
    preco: "Presença Profissional",

    beneficios: [
      "Até 4 páginas (Home, Sobre, Serviços, Contato)",
      "Layout pronto personalizado com cores/marca do cliente",
      "Copy básica (texto padrão otimizado com informações do cliente)",
      "Integração com WhatsApp",
      "Otimização para Google Meu Negócio",
      "Instalação do site em domínio próprio",
      "Prazo de entrega: até 10 dias úteis",
      "1 rodada de ajustes simples pós-entrega",
    ],
  },
  {
    nome: "IMPULSO ",
    preco: "Para gerar mais contatos",
    etiqueta: "Mais procurado",

    beneficios: [
      "Até 6 páginas (Home, Sobre, Serviços, Contato, Página de Captura, Landing Page de Produto/Serviço)",
      "Layout semi-personalizado (adaptação de modelo com ajustes de estrutura)",
      "Copywriting estratégico (escrita persuasiva básica para conversão)",
      "Integração com WhatsApp, Formulários, Google Analytics e Pixel de Meta",
      "SEO Local básico: configuração de palavras-chave para região/local",
      "Integração com Google Meu Negócio",
      "Instalação e otimização básica de carregamento",
      "Prazo de entrega: até 15 dias úteis",
      "2 rodadas de ajustes",
    ],
  },
  {
    nome: "PREMIUM ",
    preco: "Autoridade Online",

    beneficios: [
      "Até 10 páginas (incluindo landing pages extras, blog, e páginas extras sob medida)",
      "Layout 100% personalizado (Figma ou construído do zero)",
      "Copywriting Profissional Completo (textos de alta conversão)",
      "Integração com WhatsApp, CRM (se usar), automações básicas",
      "SEO Estratégico: pesquisa de palavras-chave, textos otimizados, tags técnicas",
      "Otimização de performance e carregamento",
      "Instalação de Analytics avançado, Pixel, Hotjar (mapa de calor)",
      "Configuração inicial de campanhas Google Ads ou Meta Ads (1 campanha simples)",
      "Consultoria estratégica gratuita inicial para guiar a presença online",
      "Prazo de entrega: até 20 dias úteis",
      "3 rodadas de ajustes detalhados",
    ],
  },
];

// FAQ
const perguntasFaqSite = [
  {
    pergunta: "1. Preciso ter domínio e hospedagem?",
    resposta:
      "Sim. A hospedagem e o domínio são contratados diretamente pelo cliente. Nós ajudamos a escolher e configurar tudo sem custo extra.",
  },
  {
    pergunta: "2. O pagamento é à vista ou parcelado?",
    resposta:
      "Facilitamos o pagamento via PIX, boleto ou cartão, com possibilidade de parcelamento com juros da operadora.",
  },

  {
    pergunta: "3. Posso pedir alterações depois da entrega?",
    resposta:
      "Sim. Incluímos rodadas de ajustes conforme o pacote escolhido. Após o prazo de garantia você pode contratar manutenção opcional.",
  },

  {
    pergunta: "4. Vocês oferecem suporte?",
    resposta:
      "Sim. Após a entrega, oferecemos um pequeno período de suporte para garantir a operação do site, e após este período você pode contratar um pacote se suporte e manutenção do seu site.",
  },

  {
    pergunta: "5. Qual o valor para fazer um site com vocês?",
    resposta:
      "Temos diferentes pacotes pensados para necessidades e níveis de investimento variados. O ideal é entender seu negócio antes de apresentar o valor. Fale com a gente no WhatsApp e vamos te mostrar o que faz mais sentido para você.",
  },

  {
    pergunta: "6. Vocês atendem todo tipo de negócio?",
    resposta:
      "Atendemos especialmente negócios que querem se destacar no Google e atrair mais clientes. Se você vende serviços, produtos ou precisa mostrar autoridade, nós somos especialistas em te posicionar bem online.",
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
          beneficios={beneficiosSite}
          animationData={siteAnimation}
          checkColor="#03D1E8"
          lottieWidth="86%"
        />
      </div>

      <div className="container">
        <GridCard
          titulo="O que você ganha com nosso site:"
          passos={passosSite}
          iconColor="#03D1E8"
          ativoBgColor="rgba(3, 209, 232, 0.1)"
        />
      </div>

      <div className="py-5 my-5">
        <PublicoCarousel
          recursos={recursosSite}
          customClass="publico-mobile"
          corBase="#00000000"
          corBorda="#03D1E8"
          corIcone="#03D1E8"
        />
      </div>

      <div className="container">
        <PlanosSection
          planos={planosSite}
          destaqueBgColor="linear-gradient(to bottom, #03D1E8 0%, #027582 100%)"
          destaqueTextColor="#000"
          checkIconColor="#fff"
          checkIconColorNaoDestaque="#1C1C3C"
          destaqueBtnHoverColor="#000"
          corIconeFaixa="#03D1E8"
          corBotaoDestaque="#1C1C3C"
          destaqueBtnColor="#1C1C3C"
          corBotaoNaoDestaque="#03D1E8"
          corTextoBotaoNaoDestaque="#000000"
          iconeCor={"#03D1E8"}
        />

        <Duvidas
          backgroundImage="/assets/img/background-2.png"
          textos={["Quer consultar o pacote ideal?"]}
          botaoLabel="Falar com Especialista"
        />

        <div className="py-5">
          <FaqSection
            titulo="Perguntas e respostas mais frequentes"
            perguntas={perguntasFaqSite}
            animationData={faqAnimation}
            backgroundColor="rgba(3, 209, 232, 0.1)"
          />
        </div>
      </div>

      <section className="py-5 acc  ">
        <div className=" d-flex justify-content-center text-center py-4 flex-column gap-2">
          <h3>Nossas soluções</h3>
          <h5 className="txt-escolha">
            Escolha seu próximo passo para crescer com a Magmeta
          </h5>
        </div>
        <div className="container py-5">
          <SyncAccordionSlide />
        </div>
      </section>
    </>
  );
}
