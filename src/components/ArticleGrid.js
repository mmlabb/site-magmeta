"use client";
import { useRouter } from "next/navigation";
import { ArrowUpRight } from "react-feather";
import { useTheme } from "@/providers/ThemeProvider";

const ArticleGrid = ({ articles, limit }) => {
  const router = useRouter();
  const { darkMode } = useTheme();

  const lista = !!limit ? articles.slice(0, limit) : articles;

  const goArticle = (slug) => {
    router.push(`/blog/${slug}`);
  };

  return (
    <div className="container box-artigos">
      <h2 className="text-center mb-5">Nossos Últimos Artigos</h2>
      <div className="row gy-4">
        {lista.map((article) => (
          <div
            className="col-md-4"
            key={article.id}
            onClick={() => goArticle(article.slug)}
            style={{ cursor: "pointer" }}
          >
            <div
              className={`card h-100 text-center d-flex justify-content-between p-3 shadow-sm ${
                darkMode ? "card-dark" : "card-light"
              }`}
            >
              <img
                src={article.cover}
                alt={article.title}
                className="card-img-top rounded mb-3"
              />
              <div className="d-flex justify-content-end">
                <ArrowUpRight />
              </div>
              <div className="gap-1 d-flex flex-column">
                <h4>{article.title}</h4>
                <span className="fs-5">{article.summary}</span>
              </div>
              <div className="d-flex gap-2 align-items-center">
                <div>
                  <img
                    src="/assets/img/logo-magmeta-p-black.svg"
                    alt="logo-mag"
                    width={40}
                    height={40}
                    className="rounded mb-3 img-fluid rounded logo"
                  />
                </div>
                <div>
                  <span className="fw-bold font-monospace">MAGMETA</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {!!limit ? (
        <div className="row pt-5 ">
          <div className="d-flex mt-4 justify-content-center">
            <a
              href="/quem-somos"
              className="btn-mobile-orcam texto-botao botao-nossa-ex btn-or botao-roxo"
              target="_blank"
            >
              <span id="txt-blog">MAIS ARTIGOS</span>
            </a>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ArticleGrid;
