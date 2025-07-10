"use client";
import { Container } from "react-bootstrap";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const logos = [
  { src: "/assets/img/logo-mclove-white.svg", alt: "mc-love" },
  { src: "/assets/img/logo-klubi-white.svg", alt: "Nubank" },
  { src: "/assets/img/logo-cadcam-white.svg", alt: "Reserva" },
  { src: "/assets/img/Airbnb.svg", alt: "Airbnb" },
  { src: "/assets/img/Petlove.svg", alt: "Petlove" },
  { src: "/assets/img/Magalu.svg", alt: "Magalu" },
  { src: "/assets/img/Smartfit.svg", alt: "Smartfit" },
  { src: "/assets/img/ifood.svg", alt: "iFood" },
];

const repeatedLogos = [...logos, ...logos]; // Duplica para suavizar o loop

const LogosSlider = () => {
  const settings = {
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10,
    speed: 6000,
    cssEase: "linear",
    infinite: true,
    arrows: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 375,
        settings: { slidesToShow: 2 },
      },
    ],
  };

  return (
    <Container fluid className="py-5 my-5 px-0">
      <Slider {...settings}>
        {repeatedLogos.map((logo, index) => (
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
