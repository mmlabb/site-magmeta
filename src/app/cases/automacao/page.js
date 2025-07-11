import CaseLayout from "@/containers/cases/CaseLayout";

const data = {
  banner: {
    title: "Automação Digital Inteligente",
    subtitle: "Automatize processos e ganhe produtividade com nossas soluções.",
    image: "/img/banner-automacao.png",
  },
  destaques: {
    title: "O que oferecemos em automação",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    items: [
      "Integração com CRMs",
      "Envio automático de mensagens",
      "Fluxos personalizados",
    ],
    features: [
      { title: "Eficiência", description: "Economize tempo e recursos." },
      { title: "Precisão", description: "Reduza erros operacionais." },
      {
        title: "Escala",
        description: "Automatize grandes volumes facilmente.",
      },
    ],
    image: "/img/destaques-automacao.png",
  },
  imagemTexto: {
    title: "Fluxos automatizados sob medida",
    description:
      "Desenhamos soluções personalizadas com base na necessidade de cada negócio.",
    image: "/img/interface-automacao.png",
  },
  listaImagem: {
    list: [
      "Envio automático de e-mails",
      "Mensagens no WhatsApp",
      "Integração com RD Station",
      "Leads classificados",
      "Funis de vendas automatizados",
      "Acompanhamento em tempo real",
      "Gatilhos inteligentes",
      "Análise de performance",
      "Personalização por comportamento",
    ],
    image: "/img/funcionalidades-automacao.png",
    feedback: {
      title: "Resultados comprovados",
      text: "Nossos fluxos automatizados aumentam a conversão em até 30%.",
    },
  },
  cta: {
    left: {
      title: "Quer automatizar seu negócio?",
      text: "Converse com nossos especialistas e otimize seu processo.",
      button: "Falar com consultor",
    },
    right: {
      title: "Veja automações em ação",
      text: "Conheça projetos que trouxeram eficiência real.",
      button: "Ver exemplos",
    },
  },
};

export default function Page() {
  return <CaseLayout data={data} />;
}
