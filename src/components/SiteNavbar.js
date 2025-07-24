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
import Image from "next/image";

export default function SiteNavbar() {
  const { alternateTheme } = useTheme();
  const [floating, setFloating] = useState(false);
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const toggleOffcanvas = () => setShowOffcanvas(!showOffcanvas);
  const closeOffcanvas = () => setShowOffcanvas(false);

  useEffect(() => {
    const navbarPosition = () => {
      const scrollY = window.scrollY;
      setFloating(scrollY > 120);
    };

    window.addEventListener("scroll", navbarPosition);
    return () => window.removeEventListener("scroll", navbarPosition);
  }, []);

  return (
    <header className={floating ? `floating` : ``}>
      <Navbar expand="lg" className="bg-transparentnav ">
        <Container className="container-fluid ">
          <Navbar.Brand as={Link} href="/">
            <Image
              src="/assets/img/logo-magm-black.svg"
              alt="logo-magmeta"
              id="logo-magmeta"
              className="logo"
              data-aos="fade"
              width={100}
              height={100}
              sizes="100%"
            />
          </Navbar.Brand>

          <div className="d-flex gap-3 align-items-center">
            <div className="pe-3">
              {" "}
              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-lg`}
                onClick={toggleOffcanvas}
              >
                <Image
                  src="/assets/img/logo-menu-white.svg"
                  className="logo "
                  alt=""
                  width={0}
                  height={0}
                  sizes="100%"
                  style={{ width: "auto", height: "auto" }} // optional
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
                      href="/quem-somos"
                      onClick={closeOffcanvas}
                    >
                      Quem somos
                    </Nav.Link>

                    <Nav.Link as={Link} href="/blog" onClick={closeOffcanvas}>
                      Blog
                    </Nav.Link>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
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
                <Sun />
                <Moon />
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
                <Sun />
                <Moon />
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
                    <Sun />
                    <Moon />
                  </label>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Navbar>
    </header>
  );
}
