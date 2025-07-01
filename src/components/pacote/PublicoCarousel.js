"use client";
import { useEffect } from "react";

export default function PublicoCarousel({ recursos, customClass, corBase }) {
  useEffect(() => {
    const interval = setInterval(() => {
      const carousel = document.querySelector("#carouselRecursos");
      if (carousel) {
        const items = carousel.querySelectorAll(".carousel-item");
        let activeIndex = Array.from(items).findIndex((item) =>
          item.classList.contains("active")
        );
        items[activeIndex].classList.remove("active");
        activeIndex = (activeIndex + 1) % items.length;
        items[activeIndex].classList.add("active");
      }
    }, 3000); // autoplay a cada 3s

    return () => clearInterval(interval);
  }, []);

  // Gera os slides de 2 em 2
  const grupos = [];
  for (let i = 0; i < recursos.length; i += 2) {
    grupos.push(recursos.slice(i, i + 2));
  }

  return (
    <div className={`container-fluid px-0 ${customClass}`}>
      <div
        id="carouselRecursos"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="false"
      >
        <div className="carousel-inner">
          {grupos.map((grupo, index) => (
            <div
              className={`carousel-item ${index === 0 ? "active" : ""}`}
              key={index}
            >
              <div className="row g-0 justify-content-center">
                {grupo.map((item, idx) => (
                  <div
                    className="col-6 text-center d-flex justify-content-center"
                    key={idx}
                  >
                    <div
                      className="p-3 m-2 w-100 rounded"
                      style={{
                        backgroundColor: `${corBase}1A`, // 10% opacity
                        border: `1px solid ${corBase}`,
                        borderRadius: "16px",
                      }}
                    >
                      <div className="mb-2 fs-3">{item.emoji}</div>
                      <h6 className="item-t">{item.title}</h6>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
