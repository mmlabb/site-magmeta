"use client";
import Image from "next/image";

export default function TerceiroC({ title, description, image }) {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 mb-4 mb-md-0">
            <Image
              src={image}
              alt={title}
              width={0}
              height={0}
              sizes="100%"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div className="col-md-6">
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
