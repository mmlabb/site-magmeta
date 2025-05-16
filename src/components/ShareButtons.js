"use client";

import React from "react";
import {
  FaWhatsapp,
  FaFacebookF,
  FaLinkedinIn,
  FaTelegramPlane,
  FaLink,
} from "react-icons/fa";
import { SiX } from "react-icons/si"; // Ícone do X (Twitter)

const ShareButtons = ({ url, title }) => {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const shareLinks = {
    whatsapp: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`,
    telegram: `https://t.me/share/url?url=${encodedUrl}&text=${encodedTitle}`,
  };

  const copyLink = () => {
    navigator.clipboard.writeText("https://magmeta.com.br/");
    alert("Link copiado!");
  };

  return (
    <div className="share-buttons">
      <a
        href={shareLinks.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        title="Compartilhar no WhatsApp"
      >
        <FaWhatsapp />
      </a>
      <a
        href={shareLinks.facebook}
        target="_blank"
        rel="noopener noreferrer"
        title="Compartilhar no Facebook"
      >
        <FaFacebookF />
      </a>
      <a
        href={shareLinks.twitter}
        target="_blank"
        rel="noopener noreferrer"
        title="Compartilhar no X"
      >
        <SiX />
      </a>
      <a
        href={shareLinks.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        title="Compartilhar no LinkedIn"
      >
        <FaLinkedinIn />
      </a>
      <a
        href={shareLinks.telegram}
        target="_blank"
        rel="noopener noreferrer"
        title="Compartilhar no Telegram"
      >
        <FaTelegramPlane />
      </a>
      <button onClick={copyLink} title="Copiar link">
        <FaLink />
      </button>
    </div>
  );
};

export default ShareButtons;
