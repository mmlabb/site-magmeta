"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { articles } from "@/data/articles";
import ArticleGrid from "@/components/ArticleGrid";
import { useTheme } from "@/providers/ThemeProvider";
import "../blog.css";

const AllArticles = () => {
  const router = useRouter();
  const { darkMode } = useTheme();
  const searchParams = useSearchParams();
  const selectedTag = searchParams.get("tag"); // Captura a tag da URL

  // Filtra os artigos com base na tag da URL, se houver
  const filteredArticles = selectedTag
    ? articles.filter((article) => article.tags.includes(selectedTag))
    : articles;

  return (
    <div className="container box-artigos ">
      <h2 className="text-center">
        {selectedTag ? `Artigos sobre "${selectedTag}"` : "Todos os Artigos"}
      </h2>

      {/* Botão para limpar o filtro e voltar para todos os artigos */}
      {selectedTag && (
        <button
          className="btn btn-outline-primary mb-3"
          onClick={() => router.push("/blog/todos")}
        >
          Ver Todos
        </button>
      )}

      <div className="row gy-4">
        <ArticleGrid articles={filteredArticles} />
      </div>
    </div>
  );
};

export default AllArticles;
