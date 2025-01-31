"use client";
import React from "react";
import ReactMarkdown from "react-markdown";
import SiteNavbar from "@/components/SiteNavbar";
import Image from "next/image";
import { articles } from "@/data/articles";

// Função para carregar dados no momento da renderização estática
export function getData(slug) {
  return articles.find((artigo) => artigo.slug === slug);
}

// Renderers personalizados para ReactMarkdown
const customRenderers = {
  img: ({ src, alt }) => (
    <div className="image-container my-4 text-center">
      <Image
        src={src}
        alt={alt}
        width={1250} // Ajuste a largura
        height={850} // Ajuste a altura
        className="img-fluid rounded"
      />
      {alt && <p className="mt-2 text-muted">{alt}</p>}
    </div>
  ),
  p: ({ node, children }) => {
    if (
      node.children &&
      node.children.length === 1 &&
      node.children[0].tagName === "img"
    ) {
      return <>{children}</>;
    }
    return <p className="fs-4">{children}</p>; // Ajustando tamanho da fonte dos parágrafos
  },
};

const Page = ({ params }) => {
  const { slug } = params;
  const article = getData(slug);

  if (!article) {
    return <p>Artigo não encontrado.</p>;
  }

  return (
    <>
      <SiteNavbar />
      <div className="container pt-3 mt-5">
        <div className="row pt-5 mt-5 flex-column align-items-center mb-4">
          {/* Título e informações do artigo */}
          <div className="col-md-10 flex-column d-flex box-titulo-blog">
            <h1 className="display-5">{article.title}</h1>
            <div className="d-flex gap-3 align-items-center">
              <div className="d-flex flex-row gap-2 align-items-center">
                <Image
                  src="/assets/img/logo-magmeta-p-white.svg"
                  alt="logo-mag"
                  width={40}
                  height={40}
                  className="img-fluid rounded logo"
                />
                <p> Magmeta</p>
              </div>
              <div id="box-5-min">5 Min leitura</div>
            </div>
          </div>

          {/* Imagem de capa */}
          <div className="col-md-10 pt-3 justify-content-center d-flex align-items-center flex-column gap-2">
            <Image
              src={article.cover}
              alt="Imagem de capa do artigo"
              width={1250}
              height={850}
              className="img-fluid rounded cover-image"
            />
          </div>

          {/* Conteúdo do artigo em Markdown */}
          <div className="pt-5  pb-5 mb-5 col-md-10 flex-column d-flex">
            <ReactMarkdown components={customRenderers}>
              {article.content}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
