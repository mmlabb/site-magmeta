"use client";

import { useTheme } from "@/providers/ThemeProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobileScreenButton,
  faTableCellsLarge,
  faCommentDots,
  faChartColumn,
} from "@fortawesome/free-solid-svg-icons";

export default function StatsBox() {
  const { darkMode } = useTheme();

  const stats = [
    {
      icon: faMobileScreenButton,
      title: "+62%",
      subtitle: "de contatos via WhatsApp",
    },
    {
      icon: faTableCellsLarge,
      title: "+3x",
      subtitle: "mais visualizações na vitrine de produtos",
    },
    {
      icon: faCommentDots,
      title: "Redução",
      subtitle: "de perguntas repetitivas",
    },
    {
      icon: faChartColumn,
      title: "Aumento",
      subtitle: "da percepção de profissionalismo da marca",
    },
  ];

  return (
    <div className="container rounded">
      <div className="row text-center py-4">
        {stats.map((item, index) => (
          <div key={index} className="col-12 col-md-3 mb-4 mb-md-0">
            {/* Ícone + Número responsivo */}
            <div className="d-flex flex-column flex-md-row align-items-center justify-content-center gap-2 mb-1">
              <FontAwesomeIcon
                icon={item.icon}
                size="lg"
                style={{ color: darkMode ? "#fff" : "#000" }}
              />
              <h5
                className="fw-bold m-0"
                style={{ color: darkMode ? "#fff" : "#000" }}
              >
                {item.title}
              </h5>
            </div>

            {/* Subtítulo */}
            <small
              style={{
                color: darkMode ? "rgba(255,255,255,0.5)" : "rgba(0,0,0,0.5)",
                display: "block",
                maxWidth: "220px",
                margin: "0 auto",
                lineHeight: "1.3",
              }}
            >
              {item.subtitle}
            </small>
          </div>
        ))}
      </div>
    </div>
  );
}
