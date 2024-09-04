import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Navbar from "@/components/SiteNavbar";
import { ThemeProvider } from "@/providers/ThemeProvider";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        {/* <BgSquare /> */}
        <ThemeProvider>
          <div id="app-theme" className="theme-dark">
            <canvas
              id="3d"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100vh",
                pointerEvents: "none",
                zIndex: 1000,
              }}
              className="d-none d-md-block"
            ></canvas>
            <Navbar />

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
                  <div className="col d-flex justify-content-center">
                    <div className="mx-2 my-2">
                      <img
                        src="/assets/img/logo-behance-white.svg"
                        alt="logo-behance"
                        className="logo"
                      />
                    </div>
                    <div className="mx-2 my-2">
                      <img
                        src="/assets/img/logo-bolinha-white.svg"
                        alt="logo-bolinha"
                        className="logo"
                      />
                    </div>
                    <div className="mx-2 my-2">
                      <img
                        src="/assets/img/logo-instagram-white.svg"
                        alt="logo-instagram"
                        className="logo"
                      />
                    </div>
                  </div>
                </div>

                <div className="row pt-5">
                  <div className="col-md-6 d-flex justify-content-center justify-content-md-start p-0">
                    <small id="texto-localizacao">
                      Brasília - DF 04.704.383/0001-30
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
    </html>
  );
}