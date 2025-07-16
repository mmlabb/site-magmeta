"use client";

import { CalendarCheck } from "react-bootstrap-icons";

export default function BtnRoxo({
  onClick,
  children = "Agendar sessão estratégica",
  icon = <CalendarCheck size={20} className="icon" />,
  className = "",
  style = {},
}) {
  return (
    <button
      className={`btn-purple ${className}`}
      onClick={onClick}
      style={style}
    >
      <span>{children}</span>
      {icon}
    </button>
  );
}
