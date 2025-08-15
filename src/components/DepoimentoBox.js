import React from "react";

export default function DepoimentoBox({ titulo, subtitulo, children }) {
  return (
    <div className="depoimento-box d-flex flex-column gap-3">
      <div>
        <h3 className="depoimento-titulo text-white">{titulo}</h3>
        <span className="depoimento-subtitulo">{subtitulo}</span>
      </div>
      <div className="depoimento-conteudo">{children}</div>
    </div>
  );
}
