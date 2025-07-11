import CaseLayout from "@/containers/cases/CaseLayout";

const data = {
  banner: {
    title: "Sites profissionais e otimizados",
    subtitle:
      "Desenvolvemos sites rápidos, responsivos e com foco em conversão.",
    image: "/img/banner-sites.png",
  },
  destaques: {
    title: "Benefícios dos nossos sites",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    items: ["Layout 100% responsivo", "SEO otimizado", "Carregamento rápido"],
    features: [
      { title: "Performance", description: "Sites que carregam em segundos." },
      { title: "Design", description: "Visual profissional e personalizado." },
      { title: "Conversão", description: "Foco em resultados para o cliente." },
    ],
    image: "/img/destaques-sites.png",
  },
  imagemTexto: {
    title: "Experiência do Usuário",
    description:
      "Oferecemos uma navegação fluida e intuitiva em todos os dispositivos.",
    image: "/img/interface-sites.png",
  },
  listaImagem: {
    list: [
      "Blog integrado",
      "Formulário de contato",
      "Galeria de imagens",
      "Animações leves",
      "Analytics configurado",
      "Hospedagem otimizada",
      "Integração com redes sociais",
      "Painel de edição",
      "Certificado SSL grátis",
    ],
    image: "/img/funcionalidades-sites.png",
    feedback: {
      title: "Clientes satisfeitos",
      text: "Mais de 80 projetos entregues com excelência.",
    },
  },
  cta: {
    left: {
      title: "Crie seu site com a gente",
      text: "Solicite seu orçamento e surpreenda-se com o resultado.",
      button: "Solicitar orçamento",
    },
    right: {
      title: "Veja nossos cases de sites",
      text: "Inspire-se com o que já fizemos.",
      button: "Ver projetos",
    },
  },
};

export default function Page() {
  return <CaseLayout data={data} />;
}
