"use client";

import Image from "next/image";

export default function RedesSociais() {
  return (
    <div className="row pt-4">
      <div className="col d-flex justify-content-start align-items-center">
        <div className="mx-2 my-2 d-flex">
          <a
            href="https://www.facebook.com/profile.php?id=61560382723312"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/assets/img/icon-face-white.svg"
              alt="logo-facebook"
              className="logo"
              width={0}
              height={0}
              sizes="100%"
              style={{ width: "auto", height: "auto" }}
            />
          </a>
        </div>
        <div className="mx-2 my-2">
          <a
            href="https://www.instagram.com/magmetasolucoes/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/assets/img/logo-instagram-white.svg"
              alt="logo-instagram"
              className="logo"
              width={0}
              height={0}
              sizes="100%"
              style={{ width: "auto", height: "auto" }}
            />
          </a>
        </div>
      </div>
    </div>
  );
}
