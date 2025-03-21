"use client";
import { Button } from "react-bootstrap";
import "../app/blog/blog.css";

const TagFilter = ({ tags, selectedTag }) => {
  return (
    <div className="box-tags d-flex gap-3 justify-content-center flex-wrap mb-4">
      {/* Botão 'Todos' */}
      <Button
        as="a"
        className={`${!selectedTag ? "btn-primary" : "btn-outline-primary"}`}
        href={`/blog/todos`}
      >
        Todos
      </Button>

      {/* Botões de tags */}
      {tags.map((tag) => (
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
