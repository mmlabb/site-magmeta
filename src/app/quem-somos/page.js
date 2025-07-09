"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Clientes from "@/containers/Customers";
import "./sobre.css";
import CardsSection from "@/containers/sobre/CardsSection";
import PopupBlog from "@/components/PopupBlog";
import Lottie from "lottie-react";

const CheckIcon = () => {
  return (
    <Image
      src="/assets/img/icone-check-white.svg"
      alt=""
      width={0}
      height={0}
      sizes="100%"
      style={{ width: "auto", height: "auto" }}
    />
  );
};

export default function Sobre() {
  const [animationData, setAnimationData] = useState(null);
  const [team2, setTeam2] = useState(null);
  const [talkk, setTalkk] = useState(null);

  useEffect(() => {
    fetch("/lotties/team1.json")
      .then((res) => res.json())
      .then(setAnimationData)
      .catch((err) => console.error("Erro ao carregar o Lottie:", err));
  }, []);

  useEffect(() => {
    fetch("/lotties/team.json")
      .then((res) => res.json())
      .then(setTeam2)
      .catch((err) => console.error("Erro ao carregar team2:", err));
  }, []);

  useEffect(() => {
    fetch("/lotties/talkk.json")
      .then((res) => res.json())
      .then(setTalkk)
      .catch((err) => console.error("Erro ao carregar talk:", err));
  }, []);
  return (
    <>
      <section className="mt-4 pt-5">
        <div className="container box-1 pb-5 my-5">
          <div
            className="row gap-4 gap-lg-0 align-items-center"
            data-aos="zoom-in-up"
            data-aos-duration="3000"
          >
            <div className="box-texto-somos-magmeta col-md-12 col-lg-6">
              <div className="d-flex box-texto-sobre flex-column">
                <div className="txt-1">
                  <h2  className="text-bold txt-s">
                    Sobre Nós
                  </h2>
                </div>
                <div id="txt-sobre-2">
                  <h6 className="text-center text-lg-start pe-5">
                    A Magmeta nasceu para impulsionar o crescimento de negócios!
                    Aqui solucionamos problemas e transformamos nossa realidade
                    com tecnologia, unindo o conhecimento de especialistas e
                    mentes visionárias para desenvolver ferramentas e produtos
                    para empresas de diversos ramos.
                    <br />
                    Através de cada solução formamos um campo magnético capaz de
                    atrair pessoas e oportunidades de sucesso. Então se chegou
                    aqui é sinal de que estamos prestes a conhecer mais uma!
                    Isso é Magmeta!
                  </h6>
                </div>
              </div>
            </div>

            <div className="col-md-12 col-lg-6 d-flex justify-content-center mascot-magmeta align-items-center">
              {animationData ? (
                <Lottie
                  animationData={animationData}
                  loop
                  style={{ width: "100%", height: "auto" }}
                />
              ) : (
                <p>Carregando animação...</p>
              )}
            </div>
          </div>
        </div>
      </section>

      <CardsSection />

      <section className="py-5 my-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-3 col-md-4 logos-checks d-flex flex-column gap-3">
              <div
                className="d-flex align-items-center gap-2"
                data-aos="fade-down"
              >
                <CheckIcon />
                <p className="m-0">Aplicativos mobile (android e iOS)</p>
              </div>

              <div
                className="d-flex align-items-center gap-2"
                data-aos="fade-down"
                data-aos-delay="300"
              >
                <CheckIcon />
                <p className="m-0">Desenvolvimento personalizado de sistema</p>
              </div>

              <div
                className="d-flex align-items-center gap-2"
                data-aos="fade-down"
                data-aos-delay="300"
              >
                <CheckIcon />
                <p className="m-0">Chat bot com I.A</p>
              </div>

              <div
                className="d-flex align-items-center gap-2"
                data-aos="fade-down"
                data-aos-delay="400"
              >
                <CheckIcon />
                <p className="m-0">Uso de stacks modernas</p>
              </div>

              <div
                className="d-flex align-items-center gap-2"
                data-aos="fade-down"
                data-aos-delay="500"
              >
                <CheckIcon />
                <p className="m-0">Suporte e desenho de projeto</p>
              </div>

              <div
                className="d-flex align-items-center gap-2"
                data-aos="fade-down"
                data-aos-delay="300"
              >
                <CheckIcon />
                <p className="m-0">Acompanhamento e implantação</p>
              </div>

              <div
                className="d-flex align-items-center gap-2"
                data-aos="fade-down"
                data-aos-delay="300"
              >
                <CheckIcon />
                <p className="m-0">Suporte dedicado</p>
              </div>

              <div
                className="d-flex align-items-center gap-2"
                data-aos="fade-down"
              >
                <CheckIcon />
                <p className="m-0">Dashboard e relatórios personalizados</p>
              </div>

              <div
                className="d-flex align-items-center gap-2"
                data-aos="fade-down"
                data-aos-delay="400"
              >
                <CheckIcon />
                <p className="m-0">Consultoria para construção de softwares</p>
              </div>

              <div
                className="d-flex align-items-center gap-2"
                data-aos="fade-down"
              >
                <CheckIcon />
                <p className="m-0">MVP</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 logos-checks d-flex flex-column gap-3">
              <div
                className="d-flex align-items-center gap-2"
                data-aos="fade-down"
              >
                <CheckIcon />
                <p className="m-0">Desenvolvimento de APIs</p>
              </div>

              <div
                className="d-flex align-items-center gap-2"
                data-aos="fade-down"
              >
                <CheckIcon />
                <p className="m-0">SEO e Otimização de Sites</p>
              </div>

              <div
                className="d-flex align-items-center gap-2"
                data-aos="fade-down"
              >
                <CheckIcon />
                <p className="m-0">Gestão de Projetos Ágeis</p>
              </div>

              <div
                className="d-flex align-items-center gap-2"
                data-aos="fade-down"
              >
                <CheckIcon />
                <p className="m-0">IOTs -Internet das coisas</p>
              </div>

              <div
                className="d-flex align-items-center gap-2"
                data-aos="fade-down"
                data-aos-delay="300"
              >
                <CheckIcon />
                <p className="m-0">Cloud computing</p>
              </div>

              <div
                className="d-flex align-items-center gap-2"
                data-aos="fade-down"
                data-aos-delay="400"
              >
                <CheckIcon />
                <p className="m-0">Design de Interface (UI)</p>
              </div>

              <div
                className="d-flex align-items-center gap-2"
                data-aos="fade-down"
                data-aos-delay="400"
              >
                <CheckIcon />
                <p className="m-0">Experiência do Usuário (UX)</p>
              </div>

              <div
                className="d-flex align-items-center gap-2"
                data-aos="fade-down"
                data-aos-delay="500"
              >
                <CheckIcon />
                <p className="m-0">Protótipos</p>
              </div>

              <div
                className="d-flex align-items-center gap-2"
                data-aos="fade-down"
                data-aos-delay="300"
              >
                <CheckIcon />
                <p className="m-0">Metodologia ágil</p>
              </div>

              <div
                className="d-flex align-items-center gap-2"
                data-aos="fade-down"
                data-aos-delay="300"
              >
                <CheckIcon />
                <p className="m-0">High-fidelity Design</p>
              </div>

              <div
                className="d-flex align-items-center gap-2"
                data-aos="fade-down"
                data-aos-delay="400"
              >
                <CheckIcon />
                <p className="m-0">
                  Consultoria para construção <br />
                  de softwares
                </p>
              </div>
            </div>

            {/* <div className="col-lg-3 col-md-4 box-yes-we justify-content-center align-items-center d-flex">
              <Lottie
                animationData={team2}
                loop
                style={{ width: "100%", maxWidth: "400px", height: "auto" }}
              />
            </div> */}
          </div>
        </div>
      </section>

      <Clientes />
      <PopupBlog />

      <section>
        <div className="container text-center">
          <Image
            src="/assets/img/about_mag.png"
            alt=""
            width={0}
            height={0}
            sizes="100%"
            id="mascote-magmeta"
            style={{ width: "50%", height: "auto" }}
          />
        </div>
      </section>

      <section>
        <div className="container text-center">
          <div className="row pt-md-5 pb-md-5">
            <div className="col-sm-12 col-md-6 mt-5 mb-5">
              <div className="box-texto-caminho">
                <h1 className="texto-c  text-right txt-s">
                  Tem um Projeto?
                  <br />
                  Vamos conversar!
                </h1>

                <div className="d-flex pb-2 pt-2 btn-or">
                  <div className="botao-roxo botao-nossa-ex btn-or">
                    <a
                      href="https://api.whatsapp.com/send?phone=+5561981689203&text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20quero%20saber%20mais%20sobre%20as%20Solu%C3%A7%C3%B5es%20Magmeta."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-mobile-orcam texto-botao"
                    >
                      <span className="txt-b-or">Vamos Conversar</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-md-6 d-flex img-vamos-conversar">
              <div>
                <Lottie
                  animationData={talkk}
                  loop
                  style={{ width: "100%", maxWidth: "400px", height: "auto" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
