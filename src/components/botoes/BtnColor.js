const BtnColorido = () => {
  return (
    <div className="btn-wrapper">
      <a
        href={`https://wa.me/5561981689203?text=${encodeURIComponent(
          "Olá, vim pelo site e gostaria de saber mais!"
        )}`}
        className="btn-colorido"
        target="_blank"
        rel="noopener noreferrer"
        data-content="Quero começar agora!"
      >
        <span className="txt-botao-conversar"></span>
      </a>
    </div>
  );
};

export default BtnColorido;
