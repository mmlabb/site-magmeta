"use client";

import { useMemo } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function PublicoCarousel({ recursos, customClass, corBase }) {
  const grupos = useMemo(() => {
    const g = [];
    for (let i = 0; i < recursos.length; i += 2) {
      g.push(recursos.slice(i, i + 2));
    }
    return [...g, ...g]; // duplica para loop suave
  }, [recursos]);

  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 6000,
    cssEase: "linear",
    infinite: true,
    arrows: false,
    pauseOnHover: false,
  };

  return (
    <div className={`container-fluid px-0 publico-carousel ${customClass}`}>
      <Slider {...settings}>
        {grupos.map((grupo, index) => (
          <div key={index} className="d-flex justify-content-center">
            {grupo.map((item, idx) => (
              <div
                key={idx}
                className="d-flex flex-column justify-content-center align-items-center px-2"
                style={{
                  width: "50%", // garante dois por slide
                  maxWidth: "300px", // controla o tamanho
                  padding: "1rem 0",
                }}
              >
                <div
                  className="w-100 h-100 d-flex flex-column justify-content-center align-items-center text-center"
                  style={{
                    backgroundColor: `${corBase}1A`,
                    border: `1px solid ${corBase}`,
                    borderRadius: "16px",
                    padding: "1rem",
                    minHeight: "180px",
                  }}
                >
                  <div className="mb-2 fs-3">{item.emoji}</div>
                  <h6 className="item-t m-0">{item.title}</h6>
                </div>
              </div>
            ))}
          </div>
        ))}
      </Slider>
    </div>
  );
}
