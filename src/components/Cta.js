import Link from "next/link";
import { Arrow90degRight, ArrowRightShort, ArrowRightSquare } from "react-bootstrap-icons";
import { ArrowDown, ArrowDownLeft, ArrowDownRight, ArrowLeft, ArrowRight, ArrowUpRight } from "react-feather";
const CTA = () => {
  return (
    <div className=" container box-cta py-5 text-center">
      <h3>Aprenda programação do zero e DE GRAÇA!</h3>
      <div className="d-flex mt-4 justify-content-center">
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
