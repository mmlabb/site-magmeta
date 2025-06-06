"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";

const images = [
  "/assets/img/pin.jpg",
  "/assets/img/pin.jpg",
  "/assets/img/pin.jpg",
  "/assets/img/pin.jpg",
  "/assets/img/pin.jpg",
  "/assets/img/pin.jpg",
  "/assets/img/pin.jpg",
  "/assets/img/pin.jpg",
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
    const scrollDelay = 40;
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
              className="col-12 col-sm-6 col-md-4 col-lg-3 rounded p-2"
              style={{ flex: "0 0 auto" }}
            >
              <div
                className="portfolio-card w-100 position-relative"
                style={{
                  height: "60vh",
                  overflow: "hidden",
                  borderRadius: "16px",
                }}
              >
                <Image
                  src={src}
                  alt={`Projeto ${index + 1}`}
                  fill
                  style={{ objectFit: "contain" }}
                  className="rounded"
                  draggable={false}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
