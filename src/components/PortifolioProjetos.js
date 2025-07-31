"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import BtnMais from "./botoes/BtnMais";

const images = [
  "/assets/img/capa-cad.png",
  "/assets/img/cad.png",
  "/assets/img/snet.png",
  "/assets/img/cad.png",
  "/assets/img/snet.png",
  "/assets/img/cad.png",
  "/assets/img/snet.png",
  "/assets/img/cad.png",
];

export default function PortifolioProjetos() {
  const carouselRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min");
  }, []);

  useEffect(() => {
    const carousel = carouselRef.current;
    let isDragging = false;
    let startX;
    let scrollLeft;

    const mouseDown = (e) => {
      isDragging = true;
      startX = e.pageX - carousel.offsetLeft;
      scrollLeft = carousel.scrollLeft;
      carousel.classList.add("dragging");
    };

    const mouseMove = (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - carousel.offsetLeft;
      const walk = x - startX;
      carousel.scrollLeft = scrollLeft - walk;
    };

    const mouseUpOrLeave = () => {
      isDragging = false;
      carousel.classList.remove("dragging");
    };

    carousel.addEventListener("mousedown", mouseDown);
    carousel.addEventListener("mousemove", mouseMove);
    carousel.addEventListener("mouseup", mouseUpOrLeave);
    carousel.addEventListener("mouseleave", mouseUpOrLeave);

    return () => {
      carousel.removeEventListener("mousedown", mouseDown);
      carousel.removeEventListener("mousemove", mouseMove);
      carousel.removeEventListener("mouseup", mouseUpOrLeave);
      carousel.removeEventListener("mouseleave", mouseUpOrLeave);
    };
  }, []);

  useEffect(() => {
    const carousel = carouselRef.current;
    const scrollStep = 1;
    const scrollDelay = 20;
    let intervalId;

    const startAutoplay = () => {
      intervalId = setInterval(() => {
        if (!isHovered && carousel) {
          carousel.scrollLeft += scrollStep;
          if (
            carousel.scrollLeft + carousel.offsetWidth >=
            carousel.scrollWidth
          ) {
            carousel.scrollLeft = 0;
          }
        }
      }, scrollDelay);
    };

    startAutoplay();
    return () => clearInterval(intervalId);
  }, [isHovered]);

  return (
    <div
      id="carouselPortfolio"
      className="carousel slide"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ height: "100%" }}
    >
      <div className="carousel-inner">
        <div
          className="carousel-item active"
          ref={carouselRef}
          style={{
            overflowX: "auto",
            display: "flex",
            scrollbarWidth: "none", // Firefox
            msOverflowStyle: "none", // IE
          }}
        >
          {images.map((src, index) => (
            <div
              key={index}
              className="col-12 col-sm-6 col-md-4 col-lg-3 p-2"
              style={{ flex: "0 0 auto" }}
            >
              <div
                className="w-100 position-relative rounded overflow-hidden"
                style={{ height: "70vh" }}
              >
                {/* Imagem de fundo */}
                <Image
                  src={src}
                  alt={`Projeto ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded"
                  draggable={false}
                />

                {/* Gradiente leve no rodapé */}
                <div
                  className="position-absolute bottom-0 start-0 w-100"
                  style={{
                    height: "30%",
                    background:
                      "linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.05) 40%, rgba(0, 0, 0, 0) 100%)",
                    zIndex: 1,
                  }}
                />

                {/* Logo no topo esquerdo */}
                <div
                  className="position-absolute top-0 start-0 m-3"
                  style={{ zIndex: 2 }}
                >
                  <Image
                    src="/assets/img/logo-snet.svg"
                    alt="Logo"
                    width={100}
                    height={30}
                  />
                </div>

                {/* Rodapé com texto e botão alinhados */}
                <div
                  className="position-absolute bottom-0 start-0 w-100 p-3 text-white d-flex justify-content-between align-items-center"
                  style={{ zIndex: 2 }}
                >
                  <h6 className="mb-0">Nome do Projeto</h6>
                  <BtnMais
                    label="Ver mais"
                    customClass="ms-2"
                    onClick={() => router.push("/pagina")}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
