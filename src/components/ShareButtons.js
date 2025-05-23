"use client";

import React from "react";
import {
  WhatsappShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  TwitterShareButton,
} from "react-share";

import {
  FaWhatsapp,
  FaFacebookF,
  FaLinkedinIn,
  FaTelegramPlane,
  FaLink,
} from "react-icons/fa";
import { SiX } from "react-icons/si";

const normalizeUrl = (url) => {
  const cleaned = url.replace(/^(https?:)?\/+/, "");
  return `https://${cleaned}`;
};

const ShareButtons = ({ url, title }) => {
  const normalizedUrl = normalizeUrl(url);

  const copyLink = () => {
    navigator.clipboard.writeText(normalizedUrl);
    alert("Link copiado!");
  };

  return (
    <div className="share-buttons">
      <WhatsappShareButton url={normalizedUrl} title={title}>
        <FaWhatsapp title="Compartilhar no WhatsApp" />
      </WhatsappShareButton>

      <FacebookShareButton url={normalizedUrl} quote={title}>
        <FaFacebookF title="Compartilhar no Facebook" />
      </FacebookShareButton>

      <TwitterShareButton url={normalizedUrl} title={title}>
        <SiX title="Compartilhar no X" />
      </TwitterShareButton>

      <LinkedinShareButton url={normalizedUrl} title={title} summary={title}>
        <FaLinkedinIn title="Compartilhar no LinkedIn" />
      </LinkedinShareButton>

      <TelegramShareButton url={normalizedUrl} title={title}>
        <FaTelegramPlane title="Compartilhar no Telegram" />
      </TelegramShareButton>

      <button onClick={copyLink} title="Copiar link">
        <FaLink />
      </button>
    </div>
  );
};

export default ShareButtons;
