"use client";

export default function CtaAcao({
  titulo,
  descricao,
  botaoPrimario,
  botaoSecundario,
}) {
  return (
    <section className="py-3">
      <div className="container py-5 mt-5">
        <div className="row align-items-center">
          {/* Coluna da esquerda */}
          <div className="col-md-6">
            <div className="py-4 box-ct">
              <h3>{titulo}</h3>
              <p className="text-break">{descricao}</p>
              {botaoPrimario && (
                <button className="btn btn-banner btn-outline-primary rounded-pill px-4 mt-3">
                  {botaoPrimario.label}
                </button>
              )}
            </div>
          </div>

          {/* Coluna da direita */}
          <div className="col-md-5">
            <div className="pt-4 box-ct text-md-end">
              {botaoSecundario && (
                <>
                  <h3>{botaoSecundario.titulo}</h3>
                  <button className="btn btn-banner my-3 btn-outline-primary rounded-pill px-4 mt-3">
                    {botaoSecundario.label}
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
