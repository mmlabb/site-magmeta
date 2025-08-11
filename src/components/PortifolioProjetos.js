"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import BtnMais from "./botoes/BtnMais";
import { useRouter } from "next/navigation";

const projetos = [
  {
    imagem: "/assets/img/cad.png",
    logo: "/assets/img/us.svg",
    nome: "Marketplace",
    link: "/projetos/cad",
  },
  {
    imagem: "/assets/img/snet.png",
    logo: "/assets/img/logo-snet.svg",
    nome: "Aplicativo",
    link: "/projetos/snet",
  },
  {
    imagem: "/assets/img/mockup-marq.png",
    logo: "/assets/img/cadl.svg",
    nome: "Aplicativo",
    link: "/projetos/marq",
  },
  {
    imagem: "/assets/img/cad.png",
    logo: "/assets/img/us.svg",
    nome: "Marketplace",
    link: "/projetos/cad2",
  },
  {
    imagem: "/assets/img/snet.png",
    logo: "/assets/img/logo-snet.svg",
    nome: "Aplicativo",
    link: "/projetos/snet2",
  },
  {
    imagem: "/assets/img/mockup-marq.png",
    logo: "/assets/img/cadl.svg",
    nome: "Aplicativo",
    link: "/projetos/marq2",
  },
];

export default function PortifolioProjetos() {
  const carouselRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();

  const projetosDuplicados = [...projetos, ...projetos];

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min");
  }, []);

  // Drag manual
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
      carousel.style.scrollBehavior = "auto";
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
      carousel.style.scrollBehavior = "smooth";
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

  // Autoplay infinito
  useEffect(() => {
    const carousel = carouselRef.current;
    const scrollStep = 1;
    const scrollDelay = 12;
    let intervalId;

    const startAutoplay = () => {
      intervalId = setInterval(() => {
        if (!isHovered && carousel) {
          carousel.scrollLeft += scrollStep;

          if (carousel.scrollLeft >= carousel.scrollWidth / 2) {
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
            overflowY: "hidden", // evita barra vertical fantasma
            display: "flex",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            whiteSpace: "nowrap",
          }}
        >
          {projetosDuplicados.map((projeto, index) => (
            <div
              key={index}
              className="col-12 col-sm-6 col-md-4 col-lg-3 p-2"
              style={{ flex: "0 0 auto" }}
              data-aos="fade-up"
              data-aos-delay={index * 300}
            >
              <div
                className="w-100 position-relative rounded"
                style={{
                  height: "70vh",
                  overflow: "hidden", // impede corte na imagem com AOS
                }}
              >
                <Image
                  src={projeto.imagem}
                  alt={`Projeto ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded"
                  draggable={false}
                />

                <div
                  className="position-absolute bottom-0 start-0 w-100"
                  style={{
                    height: "30%",
                    background:
                      "linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.05) 40%, rgba(0, 0, 0, 0) 100%)",
                    zIndex: 1,
                  }}
                />

                <div
                  className="position-absolute top-0 start-0 m-3"
                  style={{ zIndex: 2 }}
                >
                  <Image
                    src={projeto.logo}
                    alt={`Logo ${index + 1}`}
                    width={100}
                    height={60}
                  />
                </div>

                <div
                  className="position-absolute bottom-0 start-0 w-100 p-3 text-white d-flex justify-content-between align-items-center"
                  style={{ zIndex: 2 }}
                >
                  <h6 className="mb-0">{projeto.nome}</h6>
                  <BtnMais
                    className="d-none"
                    label="Ver mais"
                    customClass="ms-2"
                    onClick={() => router.push(projeto.link)}
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
