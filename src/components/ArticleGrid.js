"use client";
import { useRouter } from "next/navigation";
import { ArrowUpRight } from "react-feather";

const ArticleGrid = ({ articles }) => {
  const router = useRouter();

  const goArticle = (slug) => {
    console.log("🚀 ~ goArticle ~ slug:", slug)
    router.push(`/blog/${slug}`);
  };

  return (
    <div className="container box-artigos">
      <h2 className="text-center mb-5">Nossos Últimos Artigos</h2>
      <div className="row gy-4">
        {articles.map((article) => (
          <div
            className="col-md-4"
            key={article.id}
            onClick={() => goArticle(article.slug)}
            style={{ cursor: "pointer" }}
          >
            <div className="card h-100 text-center p-3 shadow-sm">
              <div className="d-flex justify-content-between">
                <img
                  src="/assets/img/logo-magmeta-p-black.svg"
                  alt="logo-mag"
                  width={40}
                  height={40}
                  className="rounded mb-3 img-fluid rounded"
                />
                <ArrowUpRight />
              </div>
              <img
                src={article.cover}
                alt={article.title}
                className="card-img-top rounded mb-3"
              />
              <div className="gap-1 d-flex flex-column">
                <h4>{article.slug}</h4>
                <span className="fs-5">{article.summary}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticleGrid;
