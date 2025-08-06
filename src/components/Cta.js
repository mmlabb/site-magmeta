import Link from "next/link";
import { Arrow90degRight, ArrowRightShort, ArrowRightSquare } from "react-bootstrap-icons";
import { ArrowDown, ArrowDownLeft, ArrowDownRight, ArrowLeft, ArrowRight, ArrowUpRight } from "react-feather";
const CTA = () => {
  return (
    <div className="container box-cta p-5 text-center d-flex flex-colunm gap-5">
      <h3>Transforme ideias em soluções tecnológicas que geram resultados. Fale com a Magmeta Soluções e leve seu negócio para o próximo nível.</h3>
      <div className="d-flex justify-content-center">
        <a
          href="https://onboarding.magmeta.com.br/onboarding/lead"
          className="btn-mobile-orcam texto-botao botao-nossa-ex btn-or botao-roxo"
          target="_blank"
        >
          <span id="txt-blog">ORÇAMENTO RÁPIDO</span>
          <ArrowRight/>
        </a>
      </div>
    </div>
  );
};

export default CTA;
