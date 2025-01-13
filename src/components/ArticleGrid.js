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
  return (
    <div className="container box-artigos">
      <h2 className="text-center mb-5">Nossos Últimos Artigos</h2>
      <div className="row gy-4">
        {articles.map((article) => (
          <div className="col-md-4" key={article.id}>
            <div className="card h-100 text-center p-3 shadow-sm">
              <div className="d-flex justify-content-between">
                <img
                  src={article.image}
                  
                  className="card-img-top rounded mb-3"
                />
                <ArrowUpRight />
              </div>
              <img
                src={article.image}
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
