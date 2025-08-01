"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icones } from "@/components/icons/iconsMap";
import { useTheme } from "@/providers/ThemeProvider";

export default function PublicoCarousel({
  recursos,
  corBase,
  customClass,
  corBorda,
  corIcone,
}) {
  const { darkMode } = useTheme();

  const settings = {
    infinite: true,
    speed: 4000,
    slidesToShow: 5, // desktop
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2, // mobile
        },
      },
    ],
  };

  return (
    <div
      className={`container-fluid justify-content-center pt-5 px-0 ${customClass}`}
    >
      <Slider {...settings}>
        {recursos.map((item, index) => (
          <div key={index} className="px-2">
            <div
              className="text-center p-3"
              style={{
                backgroundColor: `${corBase}1A`,
                border: `1px solid ${corBorda}`,
                borderRadius: "16px",
                minHeight: "180px",
                color: corIcone,
              }}
            >
              <div className="mb-2 fs-3">
                <FontAwesomeIcon
                  icon={icones[item.icone]}
                  style={{ fontSize: "28px", color: corIcone }}
                />
              </div>
              <h6 className="item-t p-2">{item.nome}</h6>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
