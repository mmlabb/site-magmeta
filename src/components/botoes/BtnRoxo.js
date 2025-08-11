"use client";

import { CalendarCheck } from "react-bootstrap-icons";

export default function BtnRoxo({
  children = "Agendar sessão estratégica",
  icon = <CalendarCheck size={16} className="icon" />,
  className = "",
  style = {},
  variant = "default",
}) {
  const gradients = {
    default: "linear-gradient(to right, #5B19A9 100%,  #9C5DD3 100%)",
    site: "linear-gradient(to right, #03d1e8 0%, #1197c3 50%, #005b81 100%)",
    chat: "linear-gradient(to right, #00c37e 0%, #1ac881 50%, #42d391 100%)",
  };

  return (
    <a
      href="https://wa.me/5585988756563?text=Olá%20equipe%20Magmeta,%20quero%20agendar%20uma%20reunião."
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-purple btn-sm ${className}`}
      style={{
        background: gradients[variant] || gradients.default,
        ...style,
      }}
    >
      <span>{children}</span>
    </a>
  );
}
