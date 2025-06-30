"use client";

const recursos = [
  { emoji: "🧑🏻‍⚕️", title: "Clínicas e consultórios médicos" },
  { emoji: "🍔", title: "Restaurantes, lanchonetes e delivery" },
  { emoji: "💇🏻‍♀️", title: "Salões de beleza, estética e bem-estar" },
  { emoji: "🛒", title: "E-commerce e lojas físicas" },
  { emoji: "💻", title: "Prestadores de serviço em geral" },
];

export default function PublicoAlvoSection({
  titulo,
  descricao,
  recursos,
  customClass,
}) {
  return (
    <div className="container pt-5 c-txt-b">
      <div className="row pt-5 pb-3 text-center">
        <h4>{titulo}</h4>
        <p className="py-3">{descricao}</p>
      </div>

      <div className="row gap text-center mt-5">
        {recursos.map((item, index) => (
          <div className={`col tipo ${customClass}`} key={index}>
            <div className="p-3">
              <div className="mb-2 fs-3">{item.emoji}</div>
              <h6 className="item-t">{item.title}</h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
