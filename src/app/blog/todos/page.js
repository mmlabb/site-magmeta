"use client";

import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { articles } from "@/data/articles";
import ArticleGrid from "@/components/ArticleGrid";
import "../blog.css";
import TagFilter from "@/components/TagFilter";

const ArticlesContent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedTag, setSelectedTag] = useState(null);
  const [filteredArticles, setFilteredArticles] = useState(articles);

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
  }, [searchParams]);

  // Extração das tags únicas de artigos com uma única tag
  const singleTagArticles = articles.filter(
    (article) => article.tags.length === 1
  );

  const allTags = [
    ...new Set(singleTagArticles.flatMap((article) => article.tags)),
  ];

  return (
    <>
      {/* Título */}
      <h2 className="text-center titulo-todos-art">
        {selectedTag ? `Artigos sobre "${selectedTag}"` : "Todos os Artigos"}
      </h2>

      {/* Aqui o box-tags (TagFilter) ficará logo abaixo do título */}
      <div className="pt-4">
        <TagFilter tags={allTags} selectedTag={selectedTag} />
      </div>

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

      {/* Grid dos artigos */}
      <div className="row gy-4">
        <ArticleGrid articles={filteredArticles} />
      </div>

      <div className="row pt-2">
        <div className="d-flex mt-4 justify-content-center">
          <a
            href="/blog"
            className="btn-mobile-orcam texto-botao botao-nossa-ex btn-or botao-roxo"
            target="_blank"
          >
            <span id="txt-blog">VOLTAR PARA BLOG</span>
          </a>
        </div>
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
