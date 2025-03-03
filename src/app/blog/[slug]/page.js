import React from "react";
import SiteNavbar from "@/components/SiteNavbar";
import Image from "next/image";
import { articles } from "@/data/articles";
import RelatedArticles from "@/components/RelatedArticles";
import ReactMarkdown from "react-markdown";

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

const Page = ({ params }) => {
  const { slug } = params;
  const article = articles.find((art) => art.slug === slug);

  if (!article) {
    return <p>Artigo não encontrado.</p>;
  }

  return (
    <>
      <SiteNavbar />
      <div className="container pt-3 mt-5">
        <div className="row pt-5 mt-5 flex-column align-items-center mb-4">
          <div className="col-md-10 flex-column d-flex box-titulo-blog">
            <h1 className="display-5">{article.title}</h1>
            <div className="d-flex gap-3 align-items-center">
              <div className="d-flex flex-row gap-2 align-items-center">
                <Image
                  src="/assets/img/logo-magmeta-p-white.svg"
                  alt="logo-mag"
                  width={0}
                  height={0}
                  className="img-fluid rounded logo"
                  sizes="100%"
                  style={{ width: "auto", height: "auto" }}
                />
                <p> Magmeta</p>
              </div>
              <div id="box-5-min">5 Min leitura</div>
            </div>
          </div>

          <div className="col-md-10 pt-3 justify-content-center d-flex align-items-center flex-column gap-2">
            <Image
              src={article.cover}
              alt="Imagem de capa do artigo"
              width={1250}
              height={850}
              className="img-fluid rounded cover-image"
              sizes="100%"
              style={{ width: "auto", height: "auto" }}
            />
          </div>

          {/* Conteúdo do artigo */}
          <div className="pt-5 pb-5 mb-5 col-md-10 flex-column d-flex">
            <ReactMarkdown>{article.content}</ReactMarkdown>
          </div>
        </div>

        {/* Seção de Artigos Relacionados */}
        <RelatedArticles currentArticle={article} />
      </div>
    </>
  );
};

export default Page;
