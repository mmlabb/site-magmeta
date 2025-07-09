"use client";

import Lottie from "lottie-react";
import mission from "@/assets/lottie/mission.json";
import system from "@/assets/lottie/system.json";
import dynamics from "@/assets/lottie/dynamics.json";

export default function CardsSection() {
  return (
    <>
      <section className="py-5">
        <div className="container" id="boxs-sobre">
          <div className="row gx-2 gy-2 linha-box-sobre">
            <div className="col flex-1">
              <div
                data-aos="fade-up"
                data-aos-delay="400"
                className="overflow-hidden box-sobre-q"
              >
                <span className="p-5 text-center text-white">
                  <h3 className="txt-s">Customização</h3>
                  Nossa abordagem personalizada garante que cada solução seja
                  ajustada às necessidades específicas, criando uma experiência
                  única e satisfatória
                </span>
              </div>
            </div>

            <div className="col flex-1">
              <div
                data-aos="fade-up"
                data-aos-delay="300"
                className="overflow-hidden box-sobre-q"
              >
                <span className="p-5 text-center text-white">
                  <h3 className="txt-s">Soluções integradas</h3>
                  Através de cada solução conseguimos formar um campo magnético
                  capaz de unir oportunidades e pessoas de sucesso.
                </span>
              </div>
            </div>
            <div className="col flex-1">
              <div
                data-aos="fade-up"
                data-aos-delay="200"
                className="overflow-hidden box-sobre-q"
              >
                <span className="p-5 text-center text-white">
                  <h3 className="txt-s">Inovação contínua</h3>
                  Nossos produtos contam com as melhores tecnologias do mercado.
                  Com pessoas apaixonadas por inovar, estamos sempre atualizados
                  das melhores soluções para escalar.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
