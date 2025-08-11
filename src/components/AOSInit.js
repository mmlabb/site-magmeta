"use client";

import { useEffect } from "react";
import AOS from "aos";

export default function AOSInit() {
  useEffect(() => {
    AOS.init({
      duration: 2000, // duração da animação
      once: false, // false = anima toda vez que entra na viewport
      offset: 50, // distância antes de disparar
    });

    // Recalcular posições quando o layout mudar ou imagens carregarem
    const refresh = () => AOS.refresh();
    window.addEventListener("load", refresh);
    window.addEventListener("resize", refresh);

    return () => {
      window.removeEventListener("load", refresh);
      window.removeEventListener("resize", refresh);
    };
  }, []);

  return null;
}
