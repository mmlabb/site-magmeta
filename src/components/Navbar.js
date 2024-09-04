"use client";

import { useTheme } from "@/providers/ThemeProvider";
import Link from "next/link";
import { Moon, Sun } from "react-feather";

export default function Navbar() {
  const { alternateTheme } = useTheme();
  //   const themeSwitch = () => {
  //     console.log("🚀 ~ themeSwitch ~ sdc:");
  //   };

  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container container-nav d-flex justify-content-between align-items-center">
          <a className="nav-brand" href="/">
            <img
              src="/assets/img/logo-magmeta-white.svg"
              alt="logo-magmeta"
              id="logo-magmeta"
              className="logo"
              data-aos="fade"
            />
          </a>

          <div className="d-flex menu-botao gap-3 align-items-center">
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    href="/"
                  >
                    Inicio
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="#segunda-sessao">
                    Projetos
                  </Link>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Menu
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="text-center justify-content-between" id="menu-nav">
              <div className="navbar-nav flex-row align-items-center gap-3">
                <div className="botao-tema">
                  <input
                    onClick={alternateTheme}
                    type="checkbox"
                    className="checkbox chk"
                    id="chk-1"
                  />
                  <label className="label" htmlFor="chk-1">
                    <div className="ball"></div>
                    <Moon />
                    <Sun />
                  </label>
                </div>

                <div className="botao-conversar">
                  <button type="button" className="btn btn-outline-info">
                    Vamos conversar
                  </button>
                </div>
              </div>
            </div>

            <div className="botao-tema btn-mobile">
              <input
                onClick={alternateTheme}
                type="checkbox"
                className="checkbox chk"
                id="chk-2"
              />
              <label className="label" htmlFor="chk-2">
                <div className="ball"></div>
                <Moon />
                <Sun />
              </label>
            </div>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span>
                <img
                  src="/assets/img/logo-menu-white.svg"
                  className="logo"
                  alt=""
                />
              </span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
