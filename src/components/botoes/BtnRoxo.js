"use client";

import { CalendarCheck } from "react-bootstrap-icons";

export default function BtnRoxo({
  children = "Agendar sessão estratégica",
  icon = <CalendarCheck size={16} className="icon" />,
  className = "",
  style = {},
}) {
  return (
    <a
      href="https://wa.me/5585988756563?text=Olá%20equipe%20Magmeta,%20quero%20agendar%20uma%20reunião."
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-purple ${className}`}
      style={style}
    >
      <span>{children}</span>
      {icon}
    </a>
  );
}
