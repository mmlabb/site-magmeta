import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section id="primeira-sessao">
        <div class="container box-1">
          <div
            class="row pt-5 mt-md-5"
            data-aos="zoom-in-up"
            data-aos-duration="3000"
          >
            <div class="col-sm-12 col-md-5 d-flex justify-content-end mascot-magmeta">
              <div class="img-magmeta text-sm-center">
                <img
                  class="mas-magmeta img-fluid"
                  src="./src/img/img-magmeta-atualizado.png"
                  alt=""
                  data-aos="zoom-in"
                />
              </div>
            </div>

            <div class="box-texto-somos-magmeta col-sm-12 col-md-7">
              <div class="d-flex box-texto-sobre">
                <div class="txt-1">
                  <h1 id="texto-somos">Olá,</h1>
                  <h2>somos a Magmeta!</h2>
                </div>
                <div id="txt-sobre-2">
                  <h6>
                    A Magmeta nasceu com a meta de transformar nossas vidas.
                    Acreditamos no poder digital de levar pessoas a descobrirem
                    e se conectar ao seu propósito, e através disto magnetizar
                    toda força necessária para realizar.
                    <h6>
                      Assim encontramos e unimos pessoas que amam o que fazem e
                      estão alinhadas numa mesma meta, dispostas a enfrentar
                      grandes desafios e desenvolver soluções e produtos
                      inovadores que vão além de uma entrega, mas impactam vidas
                      positivamente. E com estas mentes formamos a Magmeta.
                    </h6>
                  </h6>
                </div>
              </div>
            </div>
          </div>

          <div class="row align-items-end pt-5 pb-5">
            <a
              href="https://api.whatsapp.com/send?phone=SEU_NÚMERO_DE_TELEFONE&text=Olá equipe Magmeta%20vim pelo site e gostaria de orçar meu projeto com vocês!"
              target="_blank"
              class="botao-whatsapp d-flex justify-content-end col-3"
            >
              <img src="./src/img/logo-wpp.svg" alt="IconeWpp" />
            </a>
          </div>
        </div>
      </section>

      <section id="segunda-sessao">
        <div class="container" id="boxs-sobre">
          <div class="row gx-2 gy-2 linha-box-sobre">
            <div class="col">
              <div id="box-sobre-1" data-aos="fade-up" data-aos-delay="200">
                <div class="box-img-sobre">
                  <img src="./src/img/MissãoLogo.svg" width="50%" alt="" />
                </div>
                <div class="box-txt-sobre">
                  <h2 class="txt-h2">Missão</h2>

                  <small>
                    Somos parceiros de empresas que desejam permanecer
                    competitivas, adotar uma mentalidade digital e abraçar os
                    poderes
                  </small>
                </div>
              </div>
            </div>
            <div class="col">
              <div id="box-sobre-2" data-aos="fade-up" data-aos-delay="300">
                <div class="box-img-sobre">
                  <img src="./src/img/VisãoLogo.svg" width="60%" alt="" />
                </div>
                <div class="box-txt-sobre">
                  <h2 class="txt-h2">Visão</h2>

                  <small>
                    Somos parceiros de empresas que desejam permanecer
                    competitivas, adotar uma mentalidade digital e abraçar os
                    poderes
                  </small>
                </div>
              </div>
            </div>
            <div class="col">
              <div id="box-sobre-3" data-aos="fade-up" data-aos-delay="400">
                <div class="box-img-sobre">
                  <img src="./src/img/ValoresLogo.svg" width="50%" alt="" />
                </div>
                <div class="box-txt-sobre">
                  <h2 class="txt-h2">Valores</h2>
                  <small>
                    Valorizamos a honestidade e transparência em nos comprometer
                    apenas o que podemos realmente entregar.
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="terceira-sessao">
        <div class="container">
          <div class="row pt-5 pb-5 justify-content-around">
            <div class="col-md-4 logos-checks d-flex align-items-center">
              <div class="d-md-flex align-items-start flex-column logos-checks">
                <div class="pb-2" data-aos="fade-down">
                  <img src="./src/img/icone-check-white.svg" alt="" />
                  <small>Aplicativos android / IOS</small>
                </div>

                <div class="pb-2" data-aos="fade-down" data-aos-delay="300">
                  <img src="./src/img/icone-check-white.svg" alt="" />
                  <small>
                    Desenvolvimento personalizado <br />
                    de sistema
                  </small>
                </div>

                <div class="pb-2" data-aos="fade-down" data-aos-delay="400">
                  <img src="./src/img/icone-check-white.svg" alt="" />
                  <small>Uso de stacks modernas</small>
                </div>

                <div class="pb-2" data-aos="fade-down" data-aos-delay="500">
                  <img src="./src/img/icone-check-white.svg" alt="" />
                  <small>Suporte e desenho de projeto</small>
                </div>

                <div class="pb-2" data-aos="fade-down" data-aos-delay="300">
                  <img src="./src/img/icone-check-white.svg" alt="" />
                  <small>Acompanhamento e implantação</small>
                </div>

                <div class="pb-2" data-aos="fade-down" data-aos-delay="300">
                  <img src="./src/img/icone-check-white.svg" alt="" />
                  <small>Suporte dedicado</small>
                </div>

                <div class="pb-2" data-aos="fade-down">
                  <img src="./src/img/icone-check-white.svg" alt="" />
                  <small>Medições e relatórios personalizados</small>
                </div>

                <div class="pb-2" data-aos="fade-down" data-aos-delay="400">
                  <img src="./src/img/icone-check-white.svg" alt="" />
                  <small>
                    Consultoria para construção <br />
                    de softwares
                  </small>
                </div>
              </div>
            </div>

            <div class="col-md-4 logos-checks d-flex align-items-center">
              <div class="d-md-flex align-items-start flex-column logos-checks">
                <div class="pb-2" data-aos="fade-down">
                  <img src="./src/img/icone-check-white.svg" alt="" />
                  <small>Aplicativos android / IOS</small>
                </div>

                <div class="pb-2" data-aos="fade-down" data-aos-delay="300">
                  <img src="./src/img/icone-check-white.svg" alt="" />
                  <small>
                    Desenvolvimento personalizado <br />
                    de sistema
                  </small>
                </div>

                <div class="pb-2" data-aos="fade-down" data-aos-delay="400">
                  <img src="./src/img/icone-check-white.svg" alt="" />
                  <small>Uso de stacks modernas</small>
                </div>

                <div class="pb-2" data-aos="fade-down" data-aos-delay="500">
                  <img src="./src/img/icone-check-white.svg" alt="" />
                  <small>Suporte e desenho de projeto</small>
                </div>

                <div class="pb-2" data-aos="fade-down" data-aos-delay="300">
                  <img src="./src/img/icone-check-white.svg" alt="" />
                  <small>Acompanhamento e implantação</small>
                </div>

                <div class="pb-2" data-aos="fade-down" data-aos-delay="300">
                  <img src="./src/img/icone-check-white.svg" alt="" />
                  <small>Suporte dedicado</small>
                </div>

                <div class="pb-2" data-aos="fade-down">
                  <img src="./src/img/icone-check-white.svg" alt="" />
                  <small>Medições e relatórios personalizados</small>
                </div>

                <div class="pb-2" data-aos="fade-down" data-aos-delay="400">
                  <img src="./src/img/icone-check-white.svg" alt="" />
                  <small>
                    Consultoria para construção <br />
                    de softwares
                  </small>
                </div>
              </div>
            </div>

            <div class="col-md-4 box-yes-we justify-content-end d-flex">
              <div
                id="box-img-yes justify-content-center align-items-center"
                data-aos="zoom-in"
                data-aos-duration="3000"
              >
                <img src="./src/img/img-yes.png" width="58%" alt="" />
              </div>
            </div>
          </div>
        </div>

        <div class="container-fluid pt-5 text-center">
          <div class="row gy-3">
            <div class="col-md-12">
              <img
                src="./src/img/img-equipe-magmeta.png"
                class="img-fluid"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <section id="quarta-sessao">
        <div class="container text-center mt-5">
          <div class="row texto-construimos-juntos">
            <h2>Já construímos juntos com:</h2>
          </div>
          <div class="row linha-logos mb-md-5 pb-md-3">
            <div class="col">
              <img
                src="./src/img/logo-cadcam-white.svg"
                alt="logo-usados-cad"
                class="logo-marca logo"
              />
            </div>
            <div class="col">
              <img
                src="./src/img/logo-mclove-white.svg"
                alt="logo-mclove"
                class="logo-marca logo"
              />
            </div>
            <div class="col">
              <img
                src="./src/img/logo-klubi-white.svg"
                alt="logo-klubi"
                class="logo-marca logo"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="quinta-sessao">
        <div class="container text-center">
          <div class="row pt-md-5 pb-md-5">
            <div class="col-sm-12 col-md-6 mt-5 mb-5">
              <div class="box-texto-caminho">
                <h1 class="texto1 text-right">
                  Tem um Projeto?
                  <br />
                  Vamos conversar!
                </h1>

                <button class="botao-roxo botao-nossa-ex">
                  <h5 class="texto-botao">Vamos conversar</h5>
                </button>
              </div>
            </div>

            <div class="col-sm-12 col-md-6 d-flex img-vamos-conversar">
              <div>
                <img
                  class="img-fluid pb-5rem"
                  src="./src/img/img-vamos-conversar.png"
                  width="400px"
                  id="mascote-magmeta"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
