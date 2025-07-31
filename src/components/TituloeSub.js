"use client";

export default function TituloSecao({ titulo, subtitulo }) {
  return (
    <div className="d-flex justify-content-center flex-column gap-2">
      <h3>{titulo}</h3>
      {subtitulo && <h5 className="txt-escolha">{subtitulo}</h5>}
    </div>
  );
}
