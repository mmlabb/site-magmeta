"use client";

import BannerPrincipal from "@/components/pacote/BannerPrincipal";
import BeneficiosSection from "@/components/pacote/BeneficiosSection";
import DepoimentoBox from "@/components/DepoimentoBox";
import Counter from "@/components/Counter";
import TituloSecao from "@/components/TituloeSub";
import PortifolioProjetos from "@/components/PortifolioProjetos";
import RelatedArticles from "@/components/RelatedArticles";
import { articles } from "@/data/articles";
const statsData = [
  {
    target: 21,
    text: "Visualizações mensais",
    icon: "/assets/icons/guia.svg",
  },
  {
    target: 70,
    text: "Comércios parceiros",
    icon: "/assets/icons/empresas.svg",
  },
  {
    target: 200,
    text: "Usuários ativos no app",
    icon: "/assets/icons/pessoas.svg",
  },
];

const data = {
  banner: {
    title: "Aplicativos sob medida",
    subtitle: "Transformamos sua ideia em um app funcional e bonito.",
    image: "/assets/img/banner-app.png",
  },
  destaques: {
    title: "Por que escolher nossos apps?",
    description: "Lorem ipsum dolor sit amet...",
    items: ["Design moderno", "Performance otimizada", "Suporte contínuo"],
    features: [
      { title: "Velocidade", description: "Apps rápidos e fluidos." },
      { title: "UX", description: "Foco na experiência do usuário." },
      { title: "Escalabilidade", description: "Seu app cresce com você." },
    ],
    image: "/assets/img/destaques-app.png",
  },
  imagemTexto: {
    title: "Interface intuitiva",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    image: "/assets/img/interface-app.png",
  },
  listaImagem: {
    list: [
      "Login com redes sociais",
      "Notificações push",
      "Painel administrativo",
      "Analytics integrado",
      "Dark mode",
      "Atualizações automáticas",
      "Alta segurança",
      "Offline mode",
      "APIs externas",
    ],
    image: "/assets/img/funcionalidades-app.png",
    feedback: {
      title: "Clientes satisfeitos",
      text: "Mais de 100 empresas confiam nos nossos aplicativos.",
    },
  },
  cta: {
    left: {
      title: "Pronto para começar?",
      text: "Fale com a gente e tire seu projeto do papel.",
      button: "Fale conosco",
    },
    right: {
      title: "Quer ver nossos cases?",
      text: "Conheça nossos projetos já lançados.",
      button: "Ver portfólio",
    },
  },
};
// BENEFÍCIOS
const beneficiosApps = [
  "Sem dor de cabeça para implementação.",
  "Suporte.",
  "Crie fluxos inteligentes de conversa.",
  "Centralize seus atendimentos.",
  "Chatbots inteligentes 24h.",
  "Interface profissional e intuitiva.",
  "Gere leads, qualifique clientes e feche mais vendas.",
  "Automatize seu atendimento sem precisar de desenvolvedores ou processos complexos.",
];

export default function Page() {
  return (
    <>
      <section
        className="w-100 text-center"
        style={{
          backgroundImage: "url(/assets/img/bg-snet.png)",
          width: "100%",
          height: "60vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <BannerPrincipal />
      </section>

      <section className="pc">
        <BeneficiosSection
          titulo="O que é o Magnet Chat?"
          descricao="Sua plataforma de atendimento automatizado com muitos benefícios:"
          beneficios={beneficiosApps}
          checkColor="#25D366"
          imagem="/assets/img/mockup-snet2.png"
          invertDesktop={true}
        />
      </section>

      <section>
        <Counter data={statsData} />
      </section>

      <section className="pc">
        <div className="container">
          <BeneficiosSection
            titulo="Conheça nossos diferenciais"
            descricao="A escolha certa para sua empresa."
            imagem="/assets/img/mockup-snet1.png"
            invertDesktop={false}
          ></BeneficiosSection>
        </div>
      </section>

      <section className="pc">
        <div className="container">
          <BeneficiosSection
            beneficios={beneficiosApps}
            checkColor="#000"
            imagem="/assets/img/pc-cadcam.png"
            invertDesktop={true}
          />
        </div>
      </section>

      <section className="pc px-0">
        <div id="cases" className="gap-css cp">
          <div
            className="flex-row  flex-column text-center px-0 align-items-center"
            data-aos="zoom-out-up"
          >
            <TituloSecao titulo="Mais cases de Sucesso" />
          </div>
        </div>
        <PortifolioProjetos />
      </section>

      <section className="pc">
        <RelatedArticles customArticles={articles.slice(0, 3)} />
      </section>
    </>
  );
}
