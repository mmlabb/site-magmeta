"use client";

const BtnColorido = ({ gradient }) => {
  const defaultGradient =
    "linear-gradient(to right, #9c5dd3 0%, #6221a2 33%, #03d1e8 100%)";

  return (
    <div className="btn-wrapper">
      <a
        href={`https://wa.me/5561981689203?text=${encodeURIComponent(
          "Olá, vim pelo site e gostaria de saber mais!"
        )}`}
        className="btn-colorido"
        style={{
          background: gradient || defaultGradient,
        }}
        target="_blank"
        rel="noopener noreferrer"
        data-content="Quero começar agora!"
      >
        <span data-content></span>
      </a>
    </div>
  );
};

export default BtnColorido;
