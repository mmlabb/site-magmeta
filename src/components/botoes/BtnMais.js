"use client";

export default function BtnMais({
  label = "Saber mais",
  onClick,
  customClass = "",
  ...props
}) {
  return (
    <button
      className={`btn btn-light text-black px-3 py-2 py-md-1 px-md-3 ${customClass}`}
      onClick={onClick}
      {...props}
    >
      {label}
    </button>
  );
}
