"use client";
import { useRouter } from "next/navigation";
import { ArrowUpRight } from "react-feather";
import { articles } from "@/data/articles";
import { useTheme } from "@/providers/ThemeProvider";
import ArticleGrid from "@/components/ArticleGrid";

const AllArticles = () => {
  const router = useRouter();
  const { darkMode } = useTheme();

  const goArticle = (slug) => {
    router.push(`/blog/${slug}`);
  };

  return (
    <div className="container box-artigos">
      <h2 className="text-center mb-5">Todos os Artigos</h2>
      <div className="row gy-4">
        <ArticleGrid articles={articles} />
      </div>
    </div>
  );
};

export default AllArticles;
