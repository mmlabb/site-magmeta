import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Navbar from "@/components/SiteNavbar";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { GoogleAnalytics } from "@next/third-parties/google";
import Image from "next/image";
import Footer from "@/components/Footer";
import SolucoesMagmeta from '@/components/SolucoesMagmeta'

export const metadata = {
  title: "Magmeta Soluções",
  description:
    "Tudo o que seu negócio precisa para dominar o digital! Ferramentas e estratégias otimizadas especialmente para o seu crescimento.",
  applicationName: "Magmeta digital",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Magmeta",
    "Magmeta digital",
    "Magmeta tecnologia",
    "Magmeta tech",
    "Software House",
    "Fábrica de Software",
    "Digital Marketing",
    "Next.js",
    "React",
    "JavaScript",
    "UI/UX Design",
    "Web Development",
    "SEO",
    "Content Marketing",
    "Front-end Development",
    "Back-end Development",
    "E-commerce Solutions",
    "Business Growth",
    "Tech Solutions",
    "Marketing Automation",
    "Social Media Marketing",
    "Custom Software",
    "Desenvolvimento de Software",
    "Marketing Digital",
    "Criação de Sites",
    "Gestão de Mídias Sociais",
    "Automação de Marketing",
    "Lojas Virtuais",
    "Design Responsivo",
    "Desenvolvimento Front-end",
    "Desenvolvimento Back-end",
    "Transformação Digital",
    "Aplicações Web",
    "Growth Marketing",
    "Consultoria de TI",
    "Inbound Marketing",
    "Funil de Vendas",
    "Geração de Leads",
    "Conversão",
    "Nutrição de Leads",
    "Anúncios Pagos",
    "Google Ads",
    "Facebook Ads",
    "Engajamento",
    "E-mail Marketing",
    "Remarketing",
    "Otimização de Conversão",
    "Análise de Dados",
    "Retenção de Clientes",
    "Criação de Landing Pages",
    "ERP",
    "CMS",
    "Blog",
    "SaaS",
  ],
  thumbnail: "https://magmeta.com.br/assets/img/ad-thumb.jpg",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <ThemeProvider>
          <div id="app-theme" className="theme-dark">
            <Navbar />
            <a
              href="https://api.whatsapp.com/send?phone=+5561981689203&text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20quero%20saber%20mais%20sobre%20as%20Solu%C3%A7%C3%B5es%20Magmeta."
              target="_blank"
              className="botao-whatsapp"
            >
              <Image
                src="/assets/img/logo-wpp.svg"
                alt="IconeWpp"
                width={0}
                height={0}
                sizes="100%"
                style={{ width: "auto", height: "auto" }} // optional
              />
            </a>
            <main>{children}</main> {/* O conteúdo principal aqui */}
            <Footer /> {/* Agora o Footer está dentro do ThemeProvider */}
          </div>
        </ThemeProvider>
        <GoogleAnalytics gaId="G-T8V8KCT7DP" />
      </body>
    </html>
  );
}
