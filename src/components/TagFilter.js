"use client";
import { Button } from "react-bootstrap";
import { articles } from "@/data/articles"; // Certifique-se de importar corretamente

const TagFilter = ({ tags, selectedTag }) => {
  // Pegando apenas as tags de artigos com UMA ÚNICA tag
  const singleTagArticles = articles.filter(
    (article) => article.tags.length === 1
  );

  // Extraindo apenas as tags únicas desses artigos
  const singleTags = [
    ...new Set(singleTagArticles.flatMap((article) => article.tags)),
  ];

  return (
    <div className="box-tgas d-flex gap-2 justify-content-center flex-wrap mb-4">
      <Button
        as="a"
        className={`${!selectedTag ? "btn-primary" : "btn-outline-primary"}`}
        href={`/blog/todos`}
      >
        Todos
      </Button>

      {singleTags.map((tag) => (
        <Button
          as="a"
          key={tag}
          className={` ${
            selectedTag === tag ? "btn-primary" : "btn-outline-primary"
          }`}
          href={`/blog/todos?tag=${tag}`}
        >
          {tag}
        </Button>
      ))}
    </div>
  );
};

export default TagFilter;
