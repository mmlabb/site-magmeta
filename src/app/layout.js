import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Navbar from "@/components/SiteNavbar";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { GoogleAnalytics } from "@next/third-parties/google";
import Image from "next/image";
import Footer from "@/components/Footer";
import SolucoesMagmeta from "@/components/SolucoesMagmeta";
import MetaPixel from "@/components/MetaPixel";
import PopupBlog from "@/components/PopupBlog";

export const metadata = {
  title: "Magmeta Soluções",
  description:
    "Tudo o que seu negócio precisa para dominar o digital! Ferramentas e estratégias otimizadas especialmente para o seu crescimento.",
  applicationName: "Magmeta Digital",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Magmeta",
    "Magmeta digital",
    "Magmeta tecnologia",
    "Software House",
    "Marketing Digital",
    "Next.js",
    "React",
    "Web Development",
    "SaaS",
    "Inbound Marketing",
    "Criação de Sites",
    "Automação de Marketing",
    "ERP",
    "CMS",
  ],
  authors: [{ name: "Magmeta", url: "https://magmeta.com.br" }],
  creator: "Magmeta",
  publisher: "Magmeta",
  openGraph: {
    title: "Magmeta Soluções",
    description:
      "Tudo o que seu negócio precisa para dominar o digital! Ferramentas e estratégias otimizadas especialmente para o seu crescimento.",
    url: "https://magmeta.com.br",
    siteName: "Magmeta",
    images: [
      {
        url: "https://magmeta.com.br/assets/img/ad-thumb.png",
        width: 1200,
        height: 630,
        alt: "Imagem de capa Magmeta",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Magmeta Soluções",
    description:
      "Tudo o que seu negócio precisa para dominar o digital! Ferramentas e estratégias otimizadas especialmente para o seu crescimento.",
    images: ["https://magmeta.com.br/assets/img/ad-thumb.jpg"],
    site: "@magmeta",
    creator: "@magmeta",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <MetaPixel />
      </head>
      <body>
        <ThemeProvider>
          <div id="app-theme" className="theme-dark">
            <Navbar />
            <a
              href="https://api.whatsapp.com/send?phone=+5561981689203&text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20quero%20saber%20mais%20sobre%20as%20Solu%C3%A7%C3%B5es%20Magmeta."
              target="_blank"
              className="botao-whatsapp"
              rel="noopener noreferrer"
            >
              <Image
                src="/assets/img/logo-wpp.svg"
                alt="Ícone WhatsApp"
                width={40}
                height={40}
                style={{ width: "auto", height: "auto" }}
              />
            </a>
            <main>{children}</main>
            <Footer />
            <PopupBlog />
          </div>
        </ThemeProvider>
        <GoogleAnalytics gaId="G-T8V8KCT7DP" />
      </body>
    </html>
  );
}
