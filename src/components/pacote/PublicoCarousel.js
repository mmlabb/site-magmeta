"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function PublicoCarousel({ recursos, corBase, customClass }) {
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
    <div className={`container-fluid justify-content-center px-0 ${customClass}`}>
      <Slider {...settings}>
        {recursos.map((item, index) => (
          <div key={index} className="px-2">
            <div
              className="text-center p-3"
              style={{
                backgroundColor: `${corBase}1A`, // 10% opacity
                border: `1px solid ${corBase}`,
                borderRadius: "16px",
                minHeight: "180px",
              }}
            >
              <div className="mb-2 fs-3">{item.emoji}</div>
              <h6 className="item-t m-0">{item.title}</h6>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
