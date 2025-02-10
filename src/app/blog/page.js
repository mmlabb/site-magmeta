import SiteNavbar from "@/components/SiteNavbar";
import Banner from "@/components/Banner";
import ArticleGrid from "@/components/ArticleGrid";
import CTA from "@/components/Cta";
import "./blog.css";
import { articles } from "@/data/articles";

const Blog = () => {
  return (
    <>
      <SiteNavbar />
      <Banner />
      <ArticleGrid articles={articles} limit={6} />
      <CTA />
    </>
  );
};

export default Blog;
