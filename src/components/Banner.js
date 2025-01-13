import Link from "next/link";
import { ArrowDownUp, ArrowUpLeft } from "react-bootstrap-icons";
import { ArrowDown, ArrowDownLeft, ArrowDownRight, ArrowUpRight } from "react-feather";


const Banner = () => {
  return (
    <div className="container container-banner">
      <div className="row align-items-center p-5 ">
        <div className="col-md-6 box-artigo-principal">
          <h2>Aprenda React do Zero</h2>
          <p id="txt-blog">
            Domine os fundamentos de React e comece a criar aplicações incríveis
            com nosso guia detalhado.
          </p>
          <div className="d-flex box-btn-blog">
            <a
              href="https://wa.me/5561994561273?text=Olá,%20equipe Magmeta%20vim pelo site e%20gostaria de fazer um orçamento%20com vocês."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-light rounded-pill btn-blog-roxo"
            >
              Artigo Completo
              <ArrowUpRight/>
            </a>
          </div>
        </div>
        <div className="col-md-6 d-flex">
          <img
            src="/images/react-banner.jpg"
            alt="React"
            className="img-fluid rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
