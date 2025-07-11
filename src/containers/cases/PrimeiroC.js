"use client";
import Image from "next/image";

export default function PrimeiroC({ title, subtitle, image }) {
  return (
    <section className="w-100 text-center py-5">
      <div className="container">
        <h1 className="display-4 mb-3">{title}</h1>
        <p className="lead mb-4">{subtitle}</p>
        {image && (
          <Image
            src={image}
            alt={title}
            width={0}
            height={0}
            sizes="100%"
            style={{ width: "100%", height: "auto" }}
          />
        )}
      </div>
    </section>
  );
}
