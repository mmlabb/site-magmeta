import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Navbar from "@/components/SiteNavbar";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { GoogleAnalytics } from "@next/third-parties/google";

// Metadados para ranqueamento de pesquisa & SEO
export const metadata = {
  title: "Magmeta digital",
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
              href="https://api.whatsapp.com/send?phone=+5561994561273&text=Olá equipe Magmeta%20vim pelo site e gostaria de orçar meu projeto com vocês!"
              target="_blank"
              className="botao-whatsapp"
            >
              <img src="/assets/img/logo-wpp.svg" alt="IconeWpp" />
            </a>
            <main>{children}</main>

            <footer>
              <div className="container text-center rodape">
                <div className="d-flex linha-rodape flex-wrap justify-content-between">
                  <div className="col-md-2" id="logo-rodape">
                    <img
                      src="/assets/img/logo-magmeta-white.svg"
                      alt="logo-rodape"
                      className="logo img-fluid"
                      style={{ height: "3rem" }}
                    />
                  </div>

                  <div className="col-md-2" id="seta-rodape">
                    <a
                      href="#"
                      id="btn-scroll-top"
                      className="back-to-top"
                      title="Voltar ao topo"
                    >
                      <img
                        src="/assets/img/logo-seta-rodape-white.svg"
                        alt="seta-rodape"
                        className="logo"
                      />
                    </a>
                  </div>
                </div>
                <div className="row pt-4">
                  <div className="col d-flex justify-content-center  align-items-center">
                    <div className="mx-2 my-2 d-flex">
                      <a href="https://www.facebook.com/profile.php?id=100089418330403">
                        <img
                          src="/assets/img/icon-face-white.svg"
                          alt="logo-instagram"
                          className="logo"
                        />
                      </a>
                    </div>
                    <div className="mx-2 my-2">
                      <a href="https://www.instagram.com/magmetadigital">
                        <img
                          src="/assets/img/logo-instagram-white.svg"
                          alt="logo-instagram"
                          className="logo"
                          width="24px"
                        />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="row pt-5">
                  <div className="col-md-6 d-flex justify-content-center justify-content-md-start aling-items-center p-0">
                    <small id="texto-localizacao">
                      Brasília - DF
                    </small>
                  </div>
                  <div className="col-md-6 d-flex justify-content-center justify-content-md-end opacity-50">
                    <small id="copyright">
                      © &nbsp;<span id="ano-atual"></span>&nbsp; Magmeta
                      Tecnologia - Todos os direitos reservados
                    </small>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
      <GoogleAnalytics gaId="G-T8V8KCT7DP" />
    </html>
  );
}
