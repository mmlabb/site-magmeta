"use client";
import Link from "next/link";
import { ArrowUpRight } from "react-feather";
import { useEffect, useState } from "react";
import { articles } from "../data/articles";

const Banner = () => {
  const [article, setArticle] = useState(null);

  useEffect(() => {
    setArticle(articles[0]);
  }, []);

  if (!article) return null;

  return (
    <div className="container relative container-banner">
      <div className="row align-items-center p-3">
        <div className="col-md-6 relative box-artigo-principal">
          <h2>{article.title}</h2>
          <p id="txt-blog">{article.summary}</p>
          <div className="d-flex box-btn-blog">
            <Link
              href={`/blog/${article.slug}`}
              className="btn btn-outline-light rounded-pill btn-blog-roxo"
            >
              Artigo Completo <ArrowUpRight />
            </Link>
          </div>
        </div>
        <div className="col-md-6 relative d-flex">
          <img
            src={article.cover}
            alt={article.title}
            className="img-fluid rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
