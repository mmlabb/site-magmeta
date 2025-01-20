"use client";

import React from "react";
import SiteNavbar from "@/components/SiteNavbar";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { articles } from "@/data/articles";

// Função para carregar dados no momento da renderização estática
export function getData(slug) {
  const artigoEncontrado = articles.find((artigo) => artigo.slug === slug);
  return artigoEncontrado;
}

const Page = ({ params }) => {
  const router = useRouter();
  const { slug } = params;

  const article = getData(slug);
  console.log("🚀 ~ Page ~ article:", article)

  return (
    <>
      <SiteNavbar />
      <main className="container mt-5">
        <div className="row align-items-center mb-4">
          <div className="col-md-6 text-center">
            <Image
              src={article.image}
              alt={`Imagem do artigo ${article.title}`}
              width={500}
              height={300}
              className="img-fluid rounded"
            />
          </div>
          <div className="col-md-6">
            <h1 className="display-5">{article.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: article.content }} />
          </div>
        </div>
      </main>
    </>
  );
};

export default Page;
