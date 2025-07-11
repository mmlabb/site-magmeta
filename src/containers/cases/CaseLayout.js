"use client";
import PrimeiroC from "./PrimeiroC";
import SegundoC from "./SegundoC";
import TerceiroC from "./TerceiroC";
import QuartoC from "./QuartoC";
import QuintoCta from "./QuintoCta";

export default function CaseLayout({ data }) {
  return (
    <>
      <PrimeiroC {...data.banner} />
      <SegundoC {...data.destaques} />
      <TerceiroC {...data.imagemTexto} />
      <QuartoC {...data.listaImagem} />
      <QuintoCta {...data.cta} />
    </>
  );
}
