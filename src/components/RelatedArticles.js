"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { articles } from "@/data/articles";

const RelatedArticles = ({ currentArticle }) => {
  const router = useRouter();

  // Filtra artigos com pelo menos uma tag em comum, excluindo o atual
  const relatedArticles = articles.filter(
    (article) =>
      article.slug !== currentArticle.slug &&
      article.tags.some((tag) => currentArticle.tags.includes(tag))
  );

  if (relatedArticles.length === 0) return null;

  return (
    <div className="container mt-5">
      <h3 className="mb-4">Artigos Relacionados</h3>
      <div className="row">
        {relatedArticles.map((article) => (
          <div
            key={article.slug}
            className="col-md-4"
            style={{ cursor: "pointer" }}
            onClick={() => router.push(`/blog/${article.slug}`)}
          >
            <div className="card h-100 shadow-sm">
              <img
                src={article.cover}
                alt={article.title}
                className="card-img-top rounded"
              />
              <div className="card-body">
                <h5 className="card-title">{article.title}</h5>
                <p className="card-text">{article.summary}</p>
                <div className="d-flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <span key={tag} className="badge bg-primary">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedArticles;
