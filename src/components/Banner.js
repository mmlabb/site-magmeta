"use client";
import Link from "next/link";
import { ArrowUpRight } from "react-feather";
import { useEffect, useState } from "react";
import { articles } from "../data/articles";
import Image from "next/image";

const Banner = () => {
  const [article, setArticle] = useState(null);

  useEffect(() => {
    // Verifica e pega o artigo com a data mais recente
    const latestArticle = articles.reduce((latest, current) => {
      return new Date(current.date) > new Date(latest.date) ? current : latest;
    }, articles[0]);
    setArticle(latestArticle);
  }, []);

  if (!article) return null;

  return (
    <div className="container relative container-banner">
      <div className="row primeiro-artigo align-items-center">
        <div className="col-md-5 col-sm-6 relative box-artigo-principal">
          <div className="box-artigo-banner p-3">
            <div className="d-flex justify-content-between">
              <div className="tag-destaque text-center">
                <small>DESTAQUE</small>
              </div>
              <div className="d-flex align-items-center gap-1">
                <i className="bi bi-clock"></i>
                <small>3 minutos de leitura</small>
              </div>
            </div>
            <div className="justify-content-between d-flex flex-column">
              <h2 className="sub-titulo">{article.title}</h2>
              <p id="txt-blog">{article.summary}</p>
            </div>
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
        <div className="col-md-7 col-banner-bl col-sm-6 relative d-flex">
          <Image
            src={article.cover}
            alt={article.title}
            className="img-fluid img-capa-banner"
            width={0}
            height={0}
            sizes="100%"
            style={{
              width: "100%",
              height: "100%",
              borderTopRightRadius: "44px",
              borderBottomRightRadius: "44px",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
