"use client";
import React from "react";
import ReactMarkdown from "react-markdown";
import SiteNavbar from "@/components/SiteNavbar";
import Image from "next/image";
import { articles } from "@/data/articles";

// Função para carregar dados no momento da renderização estática
export function getData(slug) {
  const artigoEncontrado = articles.find((artigo) => artigo.slug === slug);
  return artigoEncontrado;
}

// Renderers personalizados para ReactMarkdown
const customRenderers = {
  img: ({ src, alt }) => (
    // Substituímos o <p> padrão para evitar <div> dentro de <p>
    <>
      <div className="image-container my-4 text-center">
        <Image
          src={src}
          alt={alt}
          width={100}
          height={100}
          className="img-fluid rounded"
        />
        <p className="mt-2 text-muted">{alt}</p>
      </div>
    </>
  ),
  p: ({ node, children }) => {
    // Caso o parágrafo contenha apenas uma imagem, evita renderizar o <p>
    if (node.children && node.children[0].tagName === "img") {
      return <>{children}</>;
    }
    return <p>{children}</p>;
  },
};

const Page = ({ params }) => {
  const { slug } = params;
  const article = getData(slug);

  return (
    <>
      <SiteNavbar />
      <div className="container pt-3 mt-5">
        <div className="row pt-5 mt-5 flex-column align-items-center mb-4">
          <div className="col-md-8 box-titulo-blog">
            <h1 className="display-5">{article.title}</h1>
          </div>
          <div className="col-md-8 flex-row align-items-center pt-2 d-flex items-center gap-2">
            <Image
              src={article.cover}
              alt="Imagem de capa do artigo"
              width={500}
              height={300}
              className="img-fluid rounded"
            />
            <p className="mt-2 text-center">{article.summary}</p>
          </div>
          <div className="pt-5 mt-5 col-8">
            {/* Renderizar conteúdo Markdown com renderers personalizados */}
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
