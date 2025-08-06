"use client";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const logos = [
  { src: "/assets/img/us.svg", alt: "usados" },
  { src: "/assets/img/logo-klubi.svg", alt: "klubi" },
  { src: "/assets/img/mcl.svg", alt: "mc-love" },
  { src: "/assets/img/cadl.svg", alt: "logo-cadcam" },
  { src: "/assets/img/logo-snet.svg", alt: "logo-snet" },
  { src: "/assets/img/logo-disk-cirurgia.png", alt: "logo-disk-cirurgia" },
];

const LogosSlider = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [sliderLogos, setSliderLogos] = useState(logos);
  const [autoplay, setAutoplay] = useState(false);

  useEffect(() => {
    const updateSettings = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);

      if (mobile) {
        const shouldAutoplay = logos.length > 3;
        setAutoplay(shouldAutoplay);
        setSliderLogos([...logos, ...logos]); // duplica só no mobile
      } else {
        setAutoplay(false);
        setSliderLogos(logos);
      }
    };

    updateSettings();
    window.addEventListener("resize", updateSettings);
    return () => window.removeEventListener("resize", updateSettings);
  }, []);

  const settings = {
    slidesToShow: isMobile ? 2 : 5,
    slidesToScroll: 1,
    autoplay: autoplay,
    infinite: autoplay,
    autoplaySpeed: 0, // velocidade constante
    speed: 5000, // tempo de transição
    cssEase: "linear",
    arrows: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 6 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 2 },
      },
    ],
  };

  return (
    <Container fluid className="px-0">
      <Slider {...settings}>
        {sliderLogos.map((logo, index) => (
          <div
            key={index}
            className="d-flex justify-content-center align-items-center"
            style={{ height: "38px" }}
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              height={38}
              width={120}
              style={{ objectFit: "contain" }}
            />
          </div>
        ))}
      </Slider>
    </Container>
  );
};

export default LogosSlider;
