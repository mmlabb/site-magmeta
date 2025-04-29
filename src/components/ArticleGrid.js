"use client";
import { useRouter } from "next/navigation";
import { ArrowUpRight } from "react-feather";
import { useTheme } from "@/providers/ThemeProvider";
import Image from "next/image";
import Link from "next/link";

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
    <div id="grid-artigos" className="container box-artigos ">
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
                <div className="d-flex justify-content-start flex-column">
                  <Image
                    src={article.cover}
                    alt={article.title}
                    className="card-img-top rounded mb-3 img-capa"
                    width={0}
                    height={0}
                    sizes="100%"
                    style={{ width: "auto", height: "auto" }} // optional
                  />
                  <div className="d-flex justify-content-end">
                    <ArrowUpRight />
                  </div>
                  <div className="gap-1 d-flex flex-column text-start">
                    <h4>{article.title}</h4>
                    <small>{article.summary}</small>
                  </div>
                  <div className="d-flex gap-2 flex-wrap mt-3 mb-3">
                    {article.tags.map((tag) => (
                      <small key={tag} className="badge bg-primary">
                        {tag}
                      </small>
                    ))}
                  </div>
                </div>
                <div className="d-flex gap-2 align-items-start mt-3">
                  <div>
                    <Image
                      src={
                        darkMode
                          ? "/assets/img/logo-magmeta-p-white.svg"
                          : "/assets/img/logo-magmeta-p-black.svg"
                      }
                      alt="logo-mag"
                      width={40}
                      height={40}
                      className="rounded img-fluid logo"
                      sizes="100%"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">Nenhum artigo encontrado para essa tag.</p>
        )}
      </div>
      {!!limit && filteredArticles.length >= limit ? (
        <div className="row pt-5">
          <div className="d-flex mt-4 justify-content-center">
            <Link
              href="/blog/todos"
              className="btn-mobile-orcam texto-botao botao-nossa-ex btn-or botao-roxo"
            >
              <span id="txt-blog">VER TODOS</span>
            </Link>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ArticleGrid;
