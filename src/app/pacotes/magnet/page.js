"use client";
import Image from "next/image";
import { Fire } from "react-bootstrap-icons";
import React from "react";
import SyncAccordionSlide from "@/components/SyncAccordionSlide";
import { FaCheck } from "react-icons/fa";

const beneficios = [
  "Sem dor de cabeça para implementação.",
  "Suporte.",
  "Crie fluxos inteligentes de conversa.",
  "Centralize seus atendimentos.",
  "Chatbots inteligentes 24h.",
  "Interface profissional e intuitiva.",
  "Gere leads, qualifique clientes e feche mais vendas.",
  "Automatize seu atendimento sem precisar de desenvolvedores ou processos complexos.",
];

const Page = () => {
  return (
    <>
      {/* SECTION 1 */}
      <section id="section-1" className="pt-5 mt-5 pb-5">
        <div className="container">
          <div className="w-100 py-5 my-2" style={{ height: "60vh" }}>
            <div
              style={{
                borderRadius: "12px",
                height: "100%", // garante que a imagem respeite os 60vh
                overflow: "hidden",
              }}
            >
              <Image
                src="/assets/img/magnet.png"
                alt="Magnet"
                className="img-fluid rounded"
                width={0}
                height={0}
                sizes="100%"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="container py-5">
            <div className="row align-items-center">
              <div className="d-flex justify-content-center py-3">
                <h4>O que é o Magnet Chat?</h4>
              </div>
              <div className="col-md-6 mb-4 mb-md-0">
                <Image
                  src="/assets/img/img-chat.png"
                  alt="Magnet"
                  className="img-fluid rounded"
                  width={600}
                  height={400}
                />
              </div>
              <div className="col-md-6">
                <ul className="list-unstyled">
                  {beneficios.map((item, index) => (
                    <li key={index} className="d-flex align-items-start mb-2">
                      <FaCheck
                        className="me-2 mt-1"
                        color="#0d6efd"
                        style={{ minWidth: "16px", minHeight: "16px" }}
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="row text-center mt-5">
            {[...Array(5)].map((_, i) => (
              <div className="col" key={i}>
                <div
                  className="p-3"
                  style={{
                    border: "1px solid #003366",
                    background: "rgba(255,255,255,0.1)",
                    borderRadius: "12px",
                    backdropFilter: "blur(4px)",
                    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
                  }}
                >
                  🚗
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2 */}
      <section id="section-2" className="py-5">
        <div className="container">
          <div className="row row-cols-1 row-cols-md-3 row-cols-lg-3 g-4">
            {[...Array(6)].map((_, i) => (
              <div className="col" key={i}>
                <div className="p-4 border rounded text-center shadow-sm">
                  <p>Bloco {i + 1}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 */}
      <section id="section-3" className="py-5">
        <div className="container">
          <div className="row mb-4">
            <h2 className="text-center">Outros Benefícios</h2>
          </div>
          <div className="row">
            {[...Array(3)].map((_, i) => (
              <div className="col-12 col-md-4 mb-4" key={i}>
                <div className="p-3 border rounded shadow-sm h-100">
                  <p>Coluna {i + 1}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h4>Pronto para transformar sua comunicação?</h4>
            </div>
            <div className="col-md-6 text-md-end">
              <button className="btn btn-outline-primary rounded-pill px-4">
                Quero saber mais
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="row align-items-center mb-4">
            <div className="col-md-6">
              <p className="fs-4">
                <Fire className="text-danger me-2" /> Aproveite agora!
              </p>
            </div>
            <div className="col-md-6">
              <p className="text-muted">
                Confira nossos outros pacotes abaixo:
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ACCORDION */}
      <section className="pb-5">
        <div className="container">
          <SyncAccordionSlide />
        </div>
      </section>
    </>
  );
};

export default Page;
