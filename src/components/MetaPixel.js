"use client";

// components/MetaPixel.jsx
import { useEffect } from "react";

const MetaPixel = () => {
  useEffect(() => {
    // Evita inserir o script mais de uma vez
    if (window.fbq) return;

    // Define o fbq no window
    !(function (f, b, e, v, n, t, s) {
      if (f.fbq) return;
      n = f.fbq = function () {
        n.callMethod
          ? n.callMethod.apply(n, arguments)
          : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = true;
      n.version = "2.0";
      n.queue = [];
      t = b.createElement(e);
      t.async = true;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(
      window,
      document,
      "script",
      "https://connect.facebook.net/en_US/fbevents.js"
    );

    // Inicializa o pixel com seu ID
    fbq("init", "1043388424414934");
    fbq("track", "PageView");
  }, []);

  return (
    <noscript>
      <img
        height="1"
        width="1"
        style={{ display: "none" }}
        src="https://www.facebook.com/tr?id=1043388424414934&ev=PageView&noscript=1"
        alt="fb pixel"
      />
    </noscript>
  );
};

export default MetaPixel;
