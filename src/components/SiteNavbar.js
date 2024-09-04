"use client";

import { useTheme } from "@/providers/ThemeProvider";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
} from "react-bootstrap";
import { Moon, Sun } from "react-feather";

export default function SiteNavbar() {
  const { alternateTheme } = useTheme();
  const [floating, setFloating] = useState(false);
  //   const themeSwitch = () => {
  //     console.log("🚀 ~ themeSwitch ~ sdc:");
  //   };

  useEffect(() => {
    const navbarPosition = () => {
      const scrollY = window.scrollY;
      if (scrollY > 120 && floating === false) setFloating(true);
      else setFloating(false);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", navbarPosition);
    }

    return () => {
      window.removeEventListener("scroll", navbarPosition);
    };
  }, []);

  return (
    <header className={floating ? `floating` : ``}>
      <Navbar expand="lg" className="bg-transparent">
        <Container>
          <Navbar.Brand as={Link} href="/">
            <img
              src="/assets/img/logo-magmeta-white.svg"
              alt="logo-magmeta"
              id="logo-magmeta"
              className="logo"
              data-aos="fade"
            />
          </Navbar.Brand>

          <div className="d-flex gap-3 align-items-center">
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
            <div className="botao-tema d-none d-lg-flex">
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
            <div
              className="text-center justify-content-between d-md-none"
              id="menu-nav"
            >
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

            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`}>
              <img
                src="/assets/img/logo-menu-white.svg"
                className="logo"
                alt=""
              />
            </Navbar.Toggle>

            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-lg`}
              aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                  {/* Menu */}
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3 align-items-center gap-3">
                  <Nav.Link as={Link} href="/">
                    Início
                  </Nav.Link>
                  <Nav.Link as={Link} href="#segunda-sessao">
                    Projetos
                  </Nav.Link>
                  <Nav.Link as={Link} href="a-magmeta">
                    Quem somos
                  </Nav.Link>

                  <button type="button" className="btn btn-outline-info">
                    Vamos conversar
                  </button>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </div>
        </Container>
      </Navbar>

      {/* <nav className="navbar navbar-expand-lg">
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
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-lg`}
              aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">Link</Nav.Link>
                  <NavDropdown
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand-lg`}
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </div>
        </div>
      </nav> */}
    </header>
  );
}
