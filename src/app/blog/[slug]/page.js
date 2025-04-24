import React from "react";
import SiteNavbar from "@/components/SiteNavbar";
import Image from "next/image";
import { articles } from "@/data/articles";
import RelatedArticles from "@/components/RelatedArticles";
import ReactMarkdown from "react-markdown";
import TagFilter from "@/components/TagFilter";
import Link from "next/link";

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
      <div className="container  pt-3 mt-5">
        <div className="row pt-5 mt-5 flex-column align-items-center mb-4">
          <div className="col-md-8 col-lg-8 flex-column d-flex box-titulo-blog">
            <h1 className="display-5">{article.title}</h1>
            {/* TAG ÚNICA ABAIXO DO TÍTULO */}
            {article.tags.length > 0 && (
              <div className="mt-3 mb-3">
                <span className="badge bg-primary">{article.tags[0]}</span>
              </div>
            )}
            <div className="d-flex gap-3 align-items-center">
              <div className="d-flex flex-row gap-2 align-items-center rounded-3 ">
                <Image
                  src="/assets/img/logo-magmeta-p-white.svg"
                  alt="logo-mag"
                  width={24}
                  height={24}
                  className="img-fluid logo"
                  sizes="100%"
                />
                <p> Magmeta</p>
              </div>
              <div id="box-5-min">5 Min leitura</div>
            </div>
          </div>

          <div className="col-md-8 col-lg-8 pt-5  justify-content-center d-flex align-items-center flex-column gap-2">
            <Image
              src={article.cover}
              alt="Imagem de capa do artigo"
              width={0}
              height={0}
              className="img-fluid rounded cover-image"
              sizes="100%"
              style={{ width: "100%", height: "auto" }}
            />
          </div>

          {/* Conteúdo do artigo */}
          <div className="pt-5 pb-5  col-md-8 col-lg-8 flex-column d-flex">
            <ReactMarkdown
              components={{
                h2: ({ node, ...props }) => (
                  <h2
                    style={{ paddingTop: "20px", paddingBottom: "20px" }}
                    {...props}
                  />
                ),
                p: ({ node, ...props }) => (
                  <p
                    style={{ paddingTop: "12px", paddingBottom: "12px" }}
                    {...props}
                  />
                ),
                ul: ({ node, ...props }) => (
                  <ul
                    style={{ paddingTop: "12px", paddingBottom: "12px" }}
                    {...props}
                  />
                ),
                ol: ({ node, ...props }) => (
                  <ol
                    style={{ paddingTop: "12px", paddingBottom: "12px" }}
                    {...props}
                  />
                ),

                img: ({ node, ...props }) => (
                  <Image
                    src={props.src}
                    alt={props.alt || ""}
                    width={100} // Defina uma largura padrão ou calcule conforme necessário
                    height={100} // Defina uma altura padrão para manter a proporção
                    style={{ width: "100%", height: "auto" }}
                  />
                ),
              }}
            >
              {article.content}
            </ReactMarkdown>

            <div className="row pt-2">
              <div className="d-flex mt-4 justify-content-center">
                <Link
                  href="/blog"
                  className="btn-mobile-orcam texto-botao botao-nossa-ex btn-or botao-roxo"
                >
                  <span id="txt-blog">VOLTAR PARA BLOG</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Seção de Artigos Relacionados */}
        <RelatedArticles currentArticle={article} />
      </div>
    </>
  );
};

export default Page;
