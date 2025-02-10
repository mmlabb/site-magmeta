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
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const toggleOffcanvas = () => setShowOffcanvas(!showOffcanvas);
  const closeOffcanvas = () => setShowOffcanvas(false);

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
  }, [floating]);

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
                  <a
                    href="http://localhost:3001/onboarding/lead"
                    target="_blank"
                    className="btn btn-outline-info"
                  >
                    Orçamento rápido
                  </a>
                </div>
              </div>
            </div>

            <Navbar.Toggle
              aria-controls={`offcanvasNavbar-expand-lg`}
              onClick={toggleOffcanvas}
            >
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
              show={showOffcanvas}
              onHide={closeOffcanvas}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                  {/* Menu */}
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3 align-items-center gap-3">
                  <Nav.Link as={Link} href="/" onClick={closeOffcanvas}>
                    Início
                  </Nav.Link>
                  {/*<Nav.Link as={Link} href="/#segunda-sessao">
                    Soluções
                  </Nav.Link>*/}
                  <Nav.Link
                    as={Link}
                    href="quem-somos"
                    onClick={closeOffcanvas}
                  >
                    Quem somos
                  </Nav.Link>

                  <a
                    href="https://wa.me/5561999999999?text=Olá,%20equipe Magmeta%20vim pelo site e%20gostaria de fazer um orçamento%20com vocês."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-light rounded-pill"
                    onClick={closeOffcanvas}
                  >
                    Vamos conversar
                  </a>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </div>
        </Container>
      </Navbar>
    </header>
  );
}
