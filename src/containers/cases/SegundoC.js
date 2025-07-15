"use client";
import { FaCheck } from "react-icons/fa";
import Image from "next/image";

export default function SegundoC({
  title,
  description,
  items,
  features,
  image,
}) {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 mb-4 mb-md-0">
            <h2>{title}</h2>
            <p>{description}</p>
            <ul className="list-unstyled">
              {items.map((item, idx) => (
                <li key={idx} className="d-flex align-items-start mb-2">
                  <FaCheck className="text-success me-2 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="row pt-3">
              {features.map((feat, idx) => (
                <div key={idx} className="col-4">
                  <h4>{feat.title}</h4>
                  <p>{feat.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="col-md-6">
            <Image
              src={image}
              alt={title}
              width={0}
              height={0}
              sizes="100%"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
