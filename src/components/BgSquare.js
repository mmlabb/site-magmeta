"use client";

import { useEffect, useRef, useState } from "react";

export default function BgSquare() {
  const [firstRender, setFirstRender] = useState(true);
  const canvasRef = useRef(null);
  const gridSize = 32;
  const duration = 10000; // Duração da transição em ms

  useEffect(() => {
    // if (typeof window !== "undefined") {
    //   console.log("🚀 ~ useEffect ~ window:", window);
    //   loadModel(document);
    // }

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width, height;

    function resizeCanvas() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }

    function drawGrid() {
      ctx.clearRect(0, 0, width, height);
      ctx.strokeStyle = "rgba(100,100,100,.05)";
      ctx.lineWidth = 0.5;
      for (let x = 0; x < width; x += gridSize) {
        for (let y = 0; y < height; y += gridSize) {
          ctx.strokeRect(x, y, gridSize, gridSize);
        }
      }
    }
    // function redrawGrid() {
    //   ctx.clearRect(0, 0, width, height);
    //   ctx.strokeStyle = "black";
    //   ctx.lineWidth = 1;
    // }

    function fadeSquare(x, y) {
      // ctx.clearRect(0, 0, width, height);
      const startTime = Date.now();

      function animate() {
        const elapsed = Date.now() - startTime;
        let alpha = Math.min(elapsed / duration, 1);

        const color = `rgba(93, 46, 154, ${alpha})`;

        ctx.fillStyle = color;
        ctx.fillRect(x, y, gridSize, gridSize);

        if (elapsed < duration && !firstRender) {
          requestAnimationFrame(animate);
        } else {
          setFirstRender(false);
          setTimeout(() => {
            fadeOutSquare(x, y);
          }, 1000);
        }
      }
      animate();
    }

    function fadeOutSquare(x, y) {
      // ctx.clearRect(0, 0, width, height);

      const startTime = Date.now();

      function animate() {
        const elapsed = Date.now() - startTime;
        let alpha = Math.max(0.05 - elapsed / duration, 0);
        const color = `rgba(93, 46, 154, ${alpha})`;

        ctx.fillStyle = color;
        ctx.fillRect(x, y, gridSize, gridSize);

        if (elapsed < duration) {
          requestAnimationFrame(animate);
        }
      }
      animate();
    }

    function getRandomSquare() {
      const x = Math.floor(Math.random() * (width / gridSize)) * gridSize;
      const y = Math.floor(Math.random() * (height / gridSize)) * gridSize;
      return { x, y };
    }

    function update() {
      drawGrid();
      // const { x, y } = getRandomSquare();
      // fadeSquare(x, y);

      requestAnimationFrame(update);
    }

    update();

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    // const interval = setInterval(update, 1);

    // return () => {
    //   clearInterval(interval);
    //   window.removeEventListener("resize", resizeCanvas);
    // };
  }, [firstRender]);

  return (
    <canvas
      style={{
        position: "absolute",
        zIndex: 0,
        width: "100%",
        height: "100vh",
      }}
      ref={canvasRef}
    />
  );
}
