"use client";
import { Container } from "react-bootstrap";
import Image from "next/image";

const logos = [
  { src: "/assets/img/us.svg", alt: "usados" },
  { src: "/assets/img/logo-klubi.svg", alt: "klubi" },
  { src: "/assets/img/mcl.svg", alt: "mc-love" },
  { src: "/assets/img/cadl.svg", alt: "logo-cadcam" },
  { src: "/assets/img/logo-snet.svg", alt: "logo-snet" },
  { src: "/assets/img/logo-disk-cirurgia.png", alt: "logo-disk-cirurgia" },
];

export default function LogosSlider() {
  const duplicatedLogos = [...logos, ...logos]; // duplicado para rotação contínua

  const sliderWrapperStyle = {
    overflow: "hidden",
    width: "100%",
  };

  const sliderTrackStyle = {
    display: "flex",
    width: "max-content",
    animation: "scroll 30s linear infinite",
  };

  const slideStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "0 34px",
    height: "38px",
    flexShrink: 0,
  };

  return (
    <>
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      <Container fluid className="px-0">
        <div style={sliderWrapperStyle}>
          <div style={sliderTrackStyle}>
            {duplicatedLogos.map((logo, index) => (
              <div style={slideStyle} key={index}>
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  height={38}
                  width={120}
                  style={{ objectFit: "contain" }}
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
}
