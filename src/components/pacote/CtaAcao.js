"use client";

export default function CtaAcao({
  titulo,
  descricao,
  botaoPrimario,
  botaoSecundario,
  botaoCustomPrimario,
  botaoCustomSecundario,
}) {
  return (
    <section className="py-3">
      <div className="container py-5 co-cta mt-5">
        <div className="row align-items-center">
          {/* Coluna da esquerda */}
          <div className="col-md-6">
            <div className=" gap-2 d-flex  flex-column box-ct">
              <h3>{titulo}</h3>
              <p className="text-break">{descricao}</p>

              <div>
                {botaoCustomPrimario ? (
                  botaoCustomPrimario
                ) : botaoPrimario ? (
                  <button
                    className={`btn btn-banner btn-outline-primary rounded-pill px-4 mt-3 ${
                      botaoPrimario.className || ""
                    }`}
                  >
                    {botaoPrimario.label}
                  </button>
                ) : null}
              </div>
            </div>
          </div>

          {/* Coluna da direita */}
          <div className="col-md-6">
            <div className="box-ct d-flex flex-column gap-5 px-4 text-md-end">
              {botaoCustomSecundario ? (
                botaoCustomSecundario
              ) : botaoSecundario ? (
                <>
                  <h3>{botaoSecundario.titulo}</h3>
                  <div>
                    <button
                      className={`btn btn-banner my-3 btn-outline-primary rounded-pill px-4 mt-3 ${
                        botaoSecundario.className || ""
                      }`}
                    >
                      {botaoSecundario.label}
                    </button>
                  </div>
                </>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
