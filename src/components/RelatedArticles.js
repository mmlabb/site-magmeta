"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { articles } from "@/data/articles";
import Image from "next/image";

const RelatedArticles = ({ currentArticle }) => {
  const router = useRouter();

  // Filtra artigos relacionados de forma case-insensitive
  let relatedArticles = articles.filter((article) => {
    if (article.slug === currentArticle.slug) return false;

    const currentTags = currentArticle.tags.map((t) => t.toLowerCase());
    const articleTags = article.tags.map((t) => t.toLowerCase());
    return articleTags.some((tag) => currentTags.includes(tag));
  });

  // Se forem encontrados menos de 3 artigos relacionados, adiciona outros artigos para completar
  if (relatedArticles.length < 3) {
    const additionalArticles = articles.filter(
      (article) =>
        article.slug !== currentArticle.slug &&
        !relatedArticles.some((ra) => ra.slug === article.slug)
    );
    relatedArticles = [...relatedArticles, ...additionalArticles].slice(0, 3);
  }

  if (relatedArticles.length === 0) return null;

  return (
    <div className="container pt-5 pb-5 mb-5">
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
              <Image
                src={article.cover}
                alt={article.title}
                className="card-img-top rounded"
                width={0}
                height={0}
                sizes="100%"
                style={{ width: "auto", height: "auto" }}
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
