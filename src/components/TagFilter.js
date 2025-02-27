"use client"
import { Button } from "react-bootstrap";

const TagFilter = ({ tags, selectedTag }) => {
  return (
    <div className="d-flex gap-2 justify-content-center flex-wrap mb-4">
      <Button
        as="a"
        className={`${!selectedTag ? "btn-primary" : "btn-outline-primary"}`}
        href={`/blog/todos`}
      >
        Todos
      </Button>
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
