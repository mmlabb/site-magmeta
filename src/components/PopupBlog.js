import React from "react";
import Link from "next/link";
import Image from "next/image";

const PopupBlog = () => {
  return (
    <div className="popupContainer">
      <div className="popupContent">
        <Image
          src="/assets/img/logo-magmeta-p-white.svg"
          alt="Logo Magmeta"
          width={32}
          height={32}
          className="popupLogo"
        />
        <div className="popupTextGroup">
          <h5 className="popupTitle">Quer saber mais?</h5>
          <span className="popupText">Fale com nossos especialistas</span>
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
