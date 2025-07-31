"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Clientes from "@/containers/Customers";
import "./sobre.css";
import CardsSection from "@/containers/sobre/CardsSection";
import PopupBlog from "@/components/PopupBlog";
import Lottie from "lottie-react";
import LogosSlider from "@/containers/sobre/LogosSlider";
import GridCard from "@/components/pacote/GridCard";
import { useTheme } from "@/providers/ThemeProvider";
import BtnColorido from "@/components/botoes/BtnColor";

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
  const passos = [
    {
      title: "Customização",
      text: "Nossa abordagem personalizada garante que cada solução seja ajustada às necessidades específicas, criando uma experiência única e satisfatória",
    },

    {
      title: "Soluções integradas",
      text: "Através de cada solução conseguimos formar um campo magnético de unir oportunidades e pessoas de sucesso.",
    },

    {
      title: "Inovação contínua",
      text: " Nossos produtos contam com as melhores tecnologias do mercado. Com pessoas apaixonadas por inovar, estamos sempre atualizados das melhores soluções para escalar.",
    },
  ];

  const { darkMode } = useTheme();

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
      <section className="pc">
        <div className="container cp box-1">
          <div
            className="row gap-4 gap-lg-0 align-items-center"
            data-aos="zoom-in-up"
            data-aos-duration="3000"
          >
            <div className="box-texto-somos-magmeta col-md-12 col-lg-6">
              <div className="d-flex box-texto-sobre gap-3 flex-column">
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

      <div className="py-4">
        <LogosSlider />
      </div>
      <PopupBlog />

      <section className="pc">
        <div className="container cp d-flex flex-column gap-css">
          <GridCard
            passos={passos}
            iconColor={darkMode ? "#fff" : "#000"}
            ativoBgColor={darkMode ? "rgba(229,229,229,0.16)" : "#E5E5E5"}
            modoHome={true}
          />
        </div>
      </section>

      <section className="pc">
        <div className="container cp text-center ">
          <div className="row d-flex align-items-center">
            <div className="col-sm-12 col-md-6 ">
              <div className="box-texto-caminho d-flex flex-column gap-css">
                <h2 className="texto-c  text-right txt-s">
                  Tem um Projeto?
                  <br />
                  Vamos conversar!
                </h2>

                <div className="d-flex row justify-content-start">
                  <div className="col-12 col-lg-6 position-relative">
                    <BtnColorido />
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
