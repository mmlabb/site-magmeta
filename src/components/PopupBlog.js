"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const PopupBlog = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;
  return (
    <div className="popupContainer">
      <div className="popupContent">
        <button
          onClick={() => setIsVisible(false)}
          className="closeButton"
          aria-label="Fechar pop-up"
        >
          ×
        </button>

        <Image
          src="/assets/img/book.png"
          alt="Img book"
          width={60}
          height={60}
        />
        <div className="popupTextGroup">
          <h5 className="popupTitle fs-6">Acesse gratuitamente</h5>
          <span className="popupText">Por tempo limitado!</span>
        </div>
        <Link
          href="https://guiapratico.magmeta.com.br/"
          className="popupButton"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 12H19M19 12L12 5M19 12L12 19"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default PopupBlog;
