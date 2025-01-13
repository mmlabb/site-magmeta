import SiteNavbar from "@/components/SiteNavbar";
import Banner from "@/components/Banner";
import ArticleGrid from "@/components/ArticleGrid";
import CTA from "@/components/Cta";
import "./blog.css";

const articles = [
  {
    id: 1,
    image: "/images/article1.jpg",
    title: "Como começar com React",
    icon: "📘",
  },
  {
    id: 2,
    image: "/images/article2.jpg",
    title: "Guia completo de Next.js",
    icon: "🚀",
  },
  {
    id: 3,
    image: "/images/article3.jpg",
    title: "Dicas práticas de Bootstrap",
    icon: "🎨",
  },
  {
    id: 4,
    image: "/images/article3.jpg",
    title: "Dicas práticas de Bootstrap",
    icon: "🎨",
  },
  {
    id: 5,
    image: "/images/article3.jpg",
    title: "Dicas práticas de Bootstrap",
    icon: "🎨",
  },
  {
    id: 6,
    image: "/images/article3.jpg",
    title: "Dicas práticas de Bootstrap",
    icon: "🎨",
  },
  {
    id: 7,
    image: "/images/article3.jpg",
    title: "Dicas práticas de Bootstrap",
    icon: "🎨",
  },
  {
    id: 8,
    image: "/images/article3.jpg",
    title: "Dicas práticas de Bootstrap",
    icon: "🎨",
  },
  {
    id: 9,
    image: "/images/article3.jpg",
    title: "Dicas práticas de Bootstrap",
    icon: "🎨",
  },
];

import { getSortedPostsData } from "../../../lib/posts";

const Blog = () => {
  const allPostsData = getSortedPostsData();
  return (
    <>
      <SiteNavbar />
      <Banner />
      <ArticleGrid articles={articles} />
      <CTA />
    </>
  );
};

export default Blog;
