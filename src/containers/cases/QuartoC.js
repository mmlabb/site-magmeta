"use client";
import { FaCheck } from "react-icons/fa";
import Image from "next/image";

export default function QuartoC({ list, image, feedback }) {
  console.log("QuartoC → imagem recebida:", image);
  return (
    <section className="py-5">
      <div className="container">
        <div className="row align-items-start">
          <div className="col-md-6 col-sm-12 mb-4 mb-md-0">
            <ul className="list-unstyled">
              {list.map((item, idx) => (
                <li key={idx} className="mb-3">
                  <div className="d-flex align-items-start">
                    <FaCheck className="text-primary me-2 mt-1" />
                    <p className="mb-1">{item}</p>
                  </div>
                  <div
                    className="ms-4 text-muted"
                    style={{ fontSize: "0.9rem" }}
                  >
                    Descrição curta sobre o item.
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-md-6 col-sm-12">
            <Image
              src={image}
              alt="Ilustração"
              width={0}
              height={0}
              sizes="100%"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
        <div className="row mt-5">
          <div className="col text-center">
            <h4>{feedback.title}</h4>
            <span className="text-muted">{feedback.text}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
