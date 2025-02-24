"use client";
import { useRouter } from "next/navigation";
import { ArrowUpRight } from "react-feather";
import { useTheme } from "@/providers/ThemeProvider";

const ArticleGrid = ({ articles, limit, selectedTag }) => {
  const router = useRouter();
  const { darkMode } = useTheme();

  // Filtrando artigos pela tag selecionada
  const filteredArticles = selectedTag
    ? articles.filter((article) => article.tags.includes(selectedTag))
    : articles;

  const lista = !!limit ? filteredArticles.slice(0, limit) : filteredArticles;

  const goArticle = (slug) => {
    router.push(`/blog/${slug}`);
  };

  return (
    <div className="container box-artigos">
      <h2 className="text-center mb-5">Nossos Últimos Artigos</h2>
      <div className="row gy-4">
        {lista.length > 0 ? (
          lista.map((article) => (
            <div
              className="col-md-4"
              key={article.slug}
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
                <div className="d-flex gap-2 flex-wrap mt-2">
                  {article.tags.map((tag) => (
                    <span key={tag} className="badge bg-primary">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="d-flex gap-2 align-items-center mt-3">
                  <div>
                    <img
                      src="/assets/img/logo-magmeta-p-black.svg"
                      alt="logo-mag"
                      width={40}
                      height={40}
                      className="rounded img-fluid logo"
                    />
                  </div>
                  <div>
                    <span className="fw-bold font-monospace">MAGMETA</span>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">Nenhum artigo encontrado para essa tag.</p>
        )}
      </div>
      {!!limit && filteredArticles.length > limit ? (
        <div className="row pt-5">
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
