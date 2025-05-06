"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { articles } from "@/data/articles";
import Image from "next/image";

const RelatedArticles = ({ currentArticle }) => {
  const router = useRouter();

  const currentTags = currentArticle.tags.map((t) => t.toLowerCase());

  // Filtra artigos relacionados com pelo menos 1 tag em comum
  let relatedArticles = articles.filter((article) => {
    if (article.slug === currentArticle.slug) return false;

    const articleTags = article.tags.map((t) => t.toLowerCase());
    const hasCommonTag = articleTags.some((tag) => currentTags.includes(tag));

    return hasCommonTag;
  });

  // Limita a no máximo 3 artigos diretamente relacionados
  relatedArticles = relatedArticles.slice(0, 3);

  // Se tiver menos de 3, adiciona outros aleatórios (não relacionados) para completar
  

  if (relatedArticles.length === 0) return null;

  return (
    <div className="container pt-5 pb-5 mb-5">
      <h3 className="mb-4 d-flex justify-content-center">Artigos Relacionados</h3>
      <div className="row d-flex row-artigos-relacionados">
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
                style={{ width: "100%", height: "auto", objectFit: "cover", aspectRatio: "16 / 9", }}
                
              />
              <div className="card-body">
                <h5 className="card-title">{article.title}</h5>
                <p className="card-text">{article.summary}</p>
                <div className="d-flex flex-wrap gap-2 mt-3 mb-3 ">
                  {article.tags.map((tag) => (
                    <small key={tag} className="badge bg-primary">
                      {tag}
                    </small>
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
