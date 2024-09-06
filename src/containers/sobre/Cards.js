"use client";

import Lottie from "lottie-react";
import mission from "@/assets/lottie/mission.json";
import system from "@/assets/lottie/system.json";
import dynamics from "@/assets/lottie/dynamics.json";

export default function Cards() {
  return (
    <>
      <section>
        <div className="container" id="boxs-sobre">
          <div className="row gx-2 gy-2 linha-box-sobre">
            <div className="col flex-1">
              <div
                id="box-sobre-1"
                data-aos="fade-up"
                data-aos-delay="200"
                className="overflow-hidden"
              >
                <span className="p-5 text-center text-white">
                  Nossa abordagem personalizada garante que cada solução seja
                  ajustada às necessidades específicas, criando uma experiência
                  única e satisfatória.
                </span>
                <div className="">
                  <Lottie
                    animationData={mission}
                    className="flex justify-center items-center"
                    loop={true}
                  />
                </div>
              </div>
            </div>
            <div className="col flex-1">
              <div
                id="box-sobre-2"
                data-aos="fade-up"
                data-aos-delay="300"
                className="overflow-hidden"
              >
                <span className="p-5 text-center text-white">
                  Através de cada solução conseguimos formar um campo magnético
                  capaz de unir oportunidades e pessoas de sucesso.
                </span>
                <div className="">
                  <Lottie
                    animationData={system}
                    className="flex justify-center items-center"
                    loop={true}
                    speed={0.4}
                  />
                </div>
              </div>
            </div>
            <div className="col flex-1">
              <div
                id="box-sobre-3"
                data-aos="fade-up"
                data-aos-delay="400"
                className="overflow-hidden"
              >
                <span className="p-5 text-center text-white">
                  Unimos pessoas apaixonadas por transformar o mundo, superando
                  desafios e criando soluções inovadoras que impactam
                  positivamente a sociedade
                </span>
                <div className="">
                  <Lottie
                    animationData={dynamics}
                    className="flex justify-center items-center"
                    loop={true}
                    speed={0.25}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
