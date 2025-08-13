export default function BtnRoxo({
  children = "Agendar sessão estratégica",
  className = "",
  style = {},
  variant = "default",
}) {
  const gradients = {
    default: "linear-gradient(to right, #5B19A9 100%,  #9C5DD3 100%)",
    site: "linear-gradient(to right, #03d1e8 0%, #1197c3 50%, #005b81 100%)",
    chat: "linear-gradient(to right, #00c37e 0%, #1ac881 50%, #42d391 100%)",
    app: "linear-gradient(to right, #C900A4 0%, #9A007F 100%)",
  };

  return (
    <button
      className={`btn-purple btn-sm ${className}`}
      style={{
        background: gradients[variant] || gradients.default,
        ...style,
      }}
    >
      {children}
    </button>
  );
}
