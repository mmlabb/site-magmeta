"use client"; 
import SiteNavbar from "@/components/SiteNavbar";
import Banner from "@/components/Banner";
import ArticleGrid from "@/components/ArticleGrid";
import CTA from "@/components/Cta";
import TagFilter from "@/components/TagFilter";
import "./blog.css";
import { useState } from "react";
import { articles } from "@/data/articles";

const Blog = () => {
  const [selectedTag, setSelectedTag] = useState(null);

  const allTags = [...new Set(articles.flatMap((article) => article.tags))];

  const filteredArticles = selectedTag
    ? articles.filter((article) => article.tags.includes(selectedTag))
    : articles;

  return (
    <>
      <SiteNavbar />
      <Banner />
      <div className="container mt-5">
        <TagFilter
          tags={allTags}
          selectedTag={selectedTag}
          onSelectTag={setSelectedTag}
        />
        <ArticleGrid articles={filteredArticles} limit={6} />
      </div>
      <CTA />
    </>
  );
};

export default Blog;
