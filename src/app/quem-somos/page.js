import Sobre from "./SobreClient";

export const metadata = {
  title: "Quem Somos | Magmeta",
  description:
    "Conheça a Magmeta, empresa especializada em soluções digitais e tecnologia para impulsionar o crescimento de negócios com inovação e estratégia.",
  keywords: [
    "Aplicativos mobile",
    "Android",
    "iOS",
    "Desenvolvimento personalizado de sistema",
    "Chat bot com IA",
    "Stacks modernas",
    "Suporte e desenho de projeto",
    "Acompanhamento e implantação",
    "Suporte dedicado",
    "Dashboard personalizado",
    "Relatórios personalizados",
    "Consultoria em softwares",
    "MVP",
    "Desenvolvimento de APIs",
    "SEO",
    "Otimização de sites",
    "Gestão de projetos ágeis",
    "Internet das Coisas (IoT)",
    "Cloud computing",
    "Design de Interface (UI)",
    "Experiência do Usuário (UX)",
    "Protótipos",
    "Metodologia ágil",
    "High-fidelity Design",
  ],
  openGraph: {
    title: "Quem Somos | Magmeta",
    description:
      "Conheça a Magmeta, empresa especializada em soluções digitais e tecnologia para impulsionar o crescimento de negócios com inovação e estratégia.",
    url: "https://magmeta.com.br/quem-somos",
    siteName: "Magmeta",
    images: [
      {
        url: "/assets/img/ad-thumb.png",
        width: 800,
        height: 600,
        alt: "Equipe Magmeta",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
};

export default function QuemSomosPage() {
  return <Sobre />;
}
