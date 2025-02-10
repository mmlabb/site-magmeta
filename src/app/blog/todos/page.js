"use client";
import { useRouter } from "next/navigation";
import { ArrowUpRight } from "react-feather";
import { useEffect, useState } from "react";
import { articles } from "@/data/articles";

const AllArticles = () => {
  const router = useRouter();
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const currentTheme = document.documentElement.classList.contains(
      "theme-dark"
    )
      ? "dark"
      : "light";
    setTheme(currentTheme);
  }, []);

  const goArticle = (slug) => {
    router.push(`/blog/${slug}`);
  };

  return (
    <div className="container box-artigos">
      <h2 className="text-center mb-5">Todos os Artigos</h2>
      <div className="row gy-4">
        {articles.map((article) => (
          <div
            className="col-md-4"
            key={article.id}
            onClick={() => goArticle(article.slug)}
            style={{ cursor: "pointer" }}
          >
            <div
              className={`card h-100 text-center d-flex justify-content-between p-3 shadow-sm ${
                theme === "dark" ? "card-dark" : "card-light"
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
    </div>
  );
};

export default AllArticles;
