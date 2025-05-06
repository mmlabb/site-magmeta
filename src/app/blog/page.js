"use client";
import SiteNavbar from "@/components/SiteNavbar";
import Banner from "@/components/Banner";
import ArticleGrid from "@/components/ArticleGrid";
import CTA from "@/components/Cta";
import TagFilter from "@/components/TagFilter";
import "./blog.css";
import "../../app/globals.css";
import { useState } from "react";
import { articles } from "@/data/articles";

const Blog = () => {
  const [selectedTag, setSelectedTag] = useState(null);

  // Ordenar artigos por ID de forma decrescente
  const sortedArticles = [...articles].sort((a, b) => b.id - a.id);

  // O primeiro artigo será usado no Banner
  const [bannerArticle, ...otherArticles] = sortedArticles;

  // Tags únicas
  const allTags = [...new Set(articles.flatMap((article) => article.tags))];

  // Filtragem de artigos pela tag
  const filteredArticles = selectedTag
    ? otherArticles.filter((article) => article.tags.includes(selectedTag))
    : otherArticles;

  return (
    <>
      <SiteNavbar />
      <Banner article={bannerArticle} />
      <div className="container mt-5">
        <TagFilter
          tags={allTags}
          selectedTag={selectedTag}
          onSelectTag={setSelectedTag}
        />
        <ArticleGrid articles={filteredArticles} limit={7} />
      </div>
      <CTA />
    </>
  );
};

export default Blog;
