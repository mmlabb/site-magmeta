"use client";

export default function QuintoCta({ left, right }) {
  return (
    <section className="py-5 ">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start mb-4 mb-md-0">
            <h2>{left.title}</h2>
            <p>{left.text}</p>
            <button className="btn btn-primary">{left.button}</button>
          </div>
          <div className="col-md-6 text-center text-md-start">
            <h2>{right.title}</h2>
            <p>{right.text}</p>
            <button className="btn btn-secondary">{right.button}</button>
          </div>
        </div>
      </div>
    </section>
  );
}
