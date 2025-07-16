<button
  className="btn-ver-mais my-2 mx-4"
  onClick={() => router.push(`/pacotes/${item.slug}`)}
  onMouseOver={(e) => (e.target.style.backgroundColor = "#f1f1f1")}
  onMouseOut={(e) => (e.target.style.backgroundColor = "#fff")}
>
  Ver mais
</button>;
