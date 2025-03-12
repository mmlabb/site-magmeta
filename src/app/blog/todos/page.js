"use client";

import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { articles } from "@/data/articles";
import ArticleGrid from "@/components/ArticleGrid";
import "../blog.css";
import "../../app/globals.css";

const ArticlesContent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedTag, setSelectedTag] = useState(null);
  const [filteredArticles, setFilteredArticles] = useState(articles);

  // Captura a tag da URL de forma segura após o carregamento
  useEffect(() => {
    const tag = searchParams.get("tag");
    setSelectedTag(tag);

    if (tag) {
      setFilteredArticles(
        articles.filter((article) => article.tags.includes(tag))
      );
    } else {
      setFilteredArticles(articles);
    }
  }, [searchParams, setSelectedTag]);

  return (
    <>
      <h2 className="text-center">
        {selectedTag ? `Artigos sobre "${selectedTag}"` : "Todos os Artigos"}
      </h2>

      {selectedTag && (
        <div className="d-flex justify-content-center mt-3 mb-3">
          <button
            className="btn btn-primary"
            onClick={() => router.push("/blog/todos")}
          >
            Ver Todos
          </button>
        </div>
      )}

      <div className="row gy-4">
        <ArticleGrid articles={filteredArticles} />
      </div>
    </>
  );
};

const AllArticles = () => {
  return (
    <div className="container box-artigos">
      <Suspense fallback={<p>Carregando artigos...</p>}>
        <ArticlesContent />
      </Suspense>
    </div>
  );
};

export default AllArticles;
