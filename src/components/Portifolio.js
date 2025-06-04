// components/Portifolio.jsx
"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

const Portifolio = () => {
  return (
    <>
      {/* Desktop */}
      <div className="container-fluid" id="portifolio-desktop" data-aos="fade">
        <div className="d-flex flex-wrap portifolio">
          <div
            className="box-portifolio text-center"
            id="container-portifolio-1"
          >
            <div className="container-portifolio">
              <div className="d-flex flex-column gap-4">
                <div className="texto-portifolio">
                  <h6 className="texto-h6-port">Clube de vantagens</h6>
                  <h4 className="texto-h4-port">Aplicativo mobile</h4>
                </div>
                <div>
                  <Image
                    src="/assets/img/mockup-net.png"
                    alt="Mockup Net"
                    width={0}
                    height={0}
                    sizes="100%"
                    style={{ width: "auto", height: "auto" }}
                  />
                </div>
              </div>
              <div className="box-texto-p1">
                <p>
                  Nossa solução de UI/UX Design para Clube de Vantagens white
                  label é personalizável e pronta para uso, com foco em uma
                  experiência intuitiva e eficiente. Entre em contato para
                  adquiri-la!
                </p>
                <a
                  href="https://wa.me/5561999999999?text=Olá,%20equipe Magmeta%20vim pelo site e%20gostaria de fazer um orçamento%20com vocês."
                  id="btn-port"
                  className="btn botao-portifolio white-space text-nowrap btn-outline-primary"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  QUERO ESSA IDEIA <ArrowRight />
                </a>
              </div>
            </div>
          </div>

          <div
            className="box-portifolio text-center"
            id="container-portifolio-2"
          >
            <div className="container-portifolio">
              <div className="d-flex flex-column gap-4">
                <div className="texto-portifolio">
                  <h6 className="texto-h6-port">NFT Marketplace</h6>
                  <h4 className="texto-h4-port">Ui/Ux Design</h4>
                </div>
                <div>
                  <Image
                    src="/assets/img/mockup-funil.png"
                    alt="Mockup Funil"
                    width={0}
                    height={0}
                    sizes="100%"
                    style={{ width: "auto", height: "auto" }}
                  />
                </div>
              </div>
              <div className="box-texto-p1">
                <p>
                  Nosso Funil de Captação de Leads oferece um design intuitivo e
                  uma experiência fluida, maximizando conversões. Com automação
                  de marketing e integrações, otimizamos a geração de leads
                  qualificados de forma eficiente.
                </p>
                <a
                  href="https://wa.me/5561999999999?text=Olá,%20equipe Magmeta%20vim pelo site e%20gostaria de fazer um orçamento%20com vocês."
                  id="btn-port"
                  className="btn botao-portifolio white-space text-nowrap btn-outline-primary"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  QUERO VENDER <ArrowRight />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="container-fluid" id="portifolio-mobile">
        <div className="d-flex flex-wrap portifolio">
          <div className="box-portifolio" id="container-portifolio-1">
            <div className="container-portifolio">
              <div className="d-flex flex-column gap-4">
                <div className="texto-portifolio">
                  <h6 className="texto-h6-port">Clube de vantagens</h6>
                  <h4 className="texto-h4-port">Aplicativo mobile</h4>
                </div>
                <Image
                  src="/assets/img/mockup-net.png"
                  alt="Mockup Net"
                  width={0}
                  height={0}
                  sizes="100%"
                  style={{ width: "auto", height: "auto" }}
                />
              </div>
              <div className="box-texto-p1">
                <p>
                  Nossa solução de UI/UX Design para Clube de Vantagens white
                  label é personalizável e pronta para uso, com foco em uma
                  experiência intuitiva e eficiente. Entre em contato para
                  adquiri-la!
                </p>
                <a
                  href="https://onboarding.magmeta.com.br/onboarding/lead"
                  id="btn-port"
                  className="btn botao-portifolio white-space text-nowrap btn-outline-primary"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  QUERO ESSA IDEIA <ArrowRight />
                </a>
              </div>
            </div>
          </div>

          <div className="box-portifolio" id="container-portifolio-2">
            <div className="container-portifolio">
              <div className="d-flex flex-column gap-4">
                <div className="texto-portifolio">
                  <h6 className="texto-h6-port">NFT Marketplace</h6>
                  <h4 className="texto-h4-port">Ui/Ux Design</h4>
                </div>
                <Image
                  src="/assets/img/mockup-funil.png"
                  alt="Mockup Funil"
                  width={0}
                  height={0}
                  sizes="100%"
                  style={{ width: "auto", height: "auto" }}
                />
              </div>
              <div className="box-texto-p1">
                <p>
                  Nosso Funil de Captação de Leads oferece um design intuitivo e
                  uma experiência fluida, maximizando conversões. Com automação
                  de marketing e integrações, otimizamos a geração de leads
                  qualificados de forma eficiente.
                </p>
                <a
                  href="https://onboarding.magmeta.com.br/onboarding/lead"
                  id="btn-port"
                  className="btn botao-portifolio white-space text-nowrap btn-outline-primary"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  QUERO VENDER <ArrowRight />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portifolio;
