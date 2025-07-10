"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Clientes from "@/containers/Customers";
import "./sobre.css";
import CardsSection from "@/containers/sobre/CardsSection";
import PopupBlog from "@/components/PopupBlog";
import Lottie from "lottie-react";
import LogosSlider from "@/containers/sobre/LogosSlider";

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
                  <h2 className="text-bold txt-s">Sobre Nós</h2>
                </div>
                <div id="txt-sobre-2">
                  <p className="text-center text-lg-start pe-3">
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
                  </p>
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

      <LogosSlider />
      <PopupBlog />

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
