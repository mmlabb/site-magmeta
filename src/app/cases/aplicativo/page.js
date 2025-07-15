import CaseLayout from "@/containers/cases/CaseLayout";

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

export default function Page() {
  return <CaseLayout data={data} />;
}
