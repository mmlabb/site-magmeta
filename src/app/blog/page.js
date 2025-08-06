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
import PopupBlog from "@/components/PopupBlog";

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
      <section className="pc" id="section-banner-blog">
        <Banner article={bannerArticle} />
      </section>

      <section className="pc">
        <TagFilter
          tags={allTags}
          selectedTag={selectedTag}
          onSelectTag={setSelectedTag}
        />
      </section>

      <section>
        <ArticleGrid articles={filteredArticles} limit={7} />
        <PopupBlog />
      </section>

      <section className="pc" id="section-cta-blog">
        <CTA />
      </section>
    </>
  );
};

export default Blog;
