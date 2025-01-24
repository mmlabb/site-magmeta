"use client"

import { useRouter } from "next/navigation";
import {
  Arrow90degRight,
  ArrowRightShort,
  ArrowRightSquare,
} from "react-bootstrap-icons";
import {
  ArrowDown,
  ArrowDownLeft,
  ArrowDownRight,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
} from "react-feather";

const ArticleGrid = ({ articles }) => {
 const router = useRouter()

  const goArticle = (slug) =>{
    router.push(`/blog/${slug}`)
  }

  return (
    <div className="container box-artigos">
      <h2 className="text-center mb-5">Nossos Últimos Artigos</h2>
      <div className="row gy-4">
        {articles.map((article) => (
          <div className="col-md-4"  key={article.id} onClick={()=> goArticle(article.slug)}>
            <div className="card h-100 text-center p-3 shadow-sm">
              <div className="d-flex justify-content-between">
                <img
                  src={article.cover}
                  
                  className="card-img-top rounded mb-3"
                />
                <ArrowUpRight />
              </div>
              <img
                src={article.cover}
                alt={article.title}
                className="card-img-top rounded mb-3"
              />
              <h5>{article.title}</h5>
              <div className="fs-1">{article.icon}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticleGrid;
