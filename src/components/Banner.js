"use client";
import Link from "next/link";
import { ArrowUpRight } from "react-feather";
import { useEffect, useState } from "react";
import { articles } from "../data/articles";
import Image from "next/image";

const Banner = () => {
  const [article, setArticle] = useState(null);

  useEffect(() => {
    setArticle(articles[0]);
  }, []);

  if (!article) return null;

  return (
    <div className="container relative container-banner">
      <div className="row align-items-center">
        <div className="col-md-5 relative box-artigo-principal">
          <div className="box-artigo-banner p-3">
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
        </div>
        <div className="col-md-7 relative d-flex p-0">
          <Image
            src={article.cover}
            alt={article.title}
            className="img-fluid rounded"
            width={0}
            height={0}
            sizes="100%"
            style={{ width: "auto", height: "auto" }} // optional
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
