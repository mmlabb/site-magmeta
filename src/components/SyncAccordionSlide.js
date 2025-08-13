"use client";

import Link from "next/link";
import React, { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDownCircle } from "react-feather";
import BtnRoxo from "./botoes/BtnRoxo";
import { useTheme } from "@/providers/ThemeProvider";

const gradients = {
  default: "linear-gradient(to right, #5B19A9 100%,  #9C5DD3 100%)",
  site: "linear-gradient(to right, #03d1e8 0%, #1197c3 50%, #005b81 100%)",
  chat: "linear-gradient(to right, #00c37e 0%, #1ac881 50%, #42d391 100%)",
  app: "linear-gradient(to right, #C900A4 0%, #9A007F 100%)",
};

const progressGradients = {
  site: "linear-gradient(to right, rgb(3, 209, 232) 0%, rgb(17, 151, 195) 50%, rgb(0, 91, 129) 100%)",
  default: gradients.default,
  chat: gradients.chat,
  app: gradients.app,
};

const SyncAccordionSlide = ({ variant = "default" }) => {
  const { darkMode } = useTheme();
  const [active_index, set_active_index] = useState(0);
  const [is_paused, set_is_paused] = useState(false);
  const pause_timeout_ref = useRef(null);
  const interval_ref = useRef(null);
  const progress_ref = useRef(null);
  const container_ref = useRef(null);

  const items = [
    {
      title: "Site Que Vende",
      slug: "sites",
      content:
        "Sua página pronta para atrair clientes com foco total em conversões via WhatsApp.Design estratégico que transforma visitantes em contatos reais. Desenvolvemos páginas focadas em conversão, com botões diretos para o WhatsApp.Design estratégico, responsivo e otimizado para atrair e reter visitantes.Você apresenta seus serviços com clareza e direciona o cliente para a ação certa.",
      image: "/assets/img/site.png",
      cta: "Quero um site",
      link: "/pacotes/sites",
    },
    {
      title: "Atendimento Automático 24h",
      slug: "magnet",
      content:
        "Automatize suas conversas com clientes usando chatbots no WhatsApp. Responda dúvidas, colete dados e envie informações 24 horas por dia. Chatbots inteligentes fazem triagens, tiram dúvidas e coletam informações dos clientes.Tudo isso com linguagem personalizada para o seu negócio. Mais agilidade, menos trabalho e mais vendas acontecendo mesmo fora do horário comercial.",
      image: "/assets/img/atendimento24.png",
      cta: "Quero um chat",
      link: "https://wa.me/5511987654321?text=Olá%20equipe%20MagMeta,%20quero%20agendar%20uma%20reunião",
    },
    {
      title: "Aplicativo Para Seus Clientes",
      slug: "aplicativos",
      content:
        "Tenha um app exclusivo para seu negócio, com sua marca e funcionalidades. Facilite pedidos, agendamentos ou comunicação direta com seus clientes. Desenvolvemos aplicativos sob medida para facilitar agendamentos, pedidos ou suporte.Com visual profissional e funcionalidades pensadas no seu público.Integração com sistemas e atualizações sempre que você precisar.",
      image: "/assets/img/app.png",
      cta: "Quero um app",
      link: "https://wa.me/5511987654321?text=Olá%20equipe%20MagMeta,%20quero%20agendar%20uma%20reunião",
    },
  ];

  const start_auto_advance = useCallback(() => {
    if (interval_ref.current) clearInterval(interval_ref.current);
    interval_ref.current = setInterval(() => {
      set_active_index((prev) => (prev + 1) % items.length);
    }, 6000);
  }, [items.length]);

  useEffect(() => {
    if (!is_paused) {
      start_auto_advance();
    }
    return () => {
      if (interval_ref.current) clearInterval(interval_ref.current);
    };
  }, [is_paused, start_auto_advance]);

  const handle_click = (index) => {
    if (active_index === index) return;
    set_active_index(index);
    set_is_paused(true);
    if (pause_timeout_ref.current) clearTimeout(pause_timeout_ref.current);
    if (interval_ref.current) clearInterval(interval_ref.current);

    pause_timeout_ref.current = setTimeout(() => {
      set_is_paused(false);
    }, 6000);
  };

  useEffect(() => {
    if (progress_ref.current && container_ref.current) {
      const activeItem = container_ref.current.querySelector(
        `.accordion-item[data-index='${active_index}']`
      );
      if (!activeItem) return;

      const offsetTop = activeItem.offsetTop;
      const height = activeItem.offsetHeight;

      progress_ref.current.style.transition = "none";
      progress_ref.current.style.top = `${offsetTop}px`;
      progress_ref.current.style.height = "0px";
      void progress_ref.current.offsetHeight;

      progress_ref.current.style.transition =
        "height 4.5s linear, top 0.5s ease";
      progress_ref.current.style.height = `${height}px`;
    }
  }, [active_index]);

  useEffect(() => {
    const container = container_ref.current;
    if (!container) return;

    const handleMouseEnter = () => {
      set_is_paused(true);
      if (interval_ref.current) clearInterval(interval_ref.current);
    };

    const handleMouseLeave = () => {
      set_is_paused(false);
      start_auto_advance();
    };

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [start_auto_advance]);

  return (
    <div className="container justify-content-between" data-aos="fade-down">
      <div className="d-flex flex-column-reverse flex-lg-row row-accordion gap-4">
        <div className="col-12 col-lg-6 d-flex flex-column justify-content-center position-relative my-2">
          <div
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: "6px",
              height: "100%",
              backgroundColor: "#4f4b55",
              borderRadius: "24px",
              zIndex: 1,
            }}
          >
            <div
              ref={progress_ref}
              style={{
                position: "absolute",
                width: "100%",
                height: "0px",
                top: "0px",
                background:
                  progressGradients[variant] || progressGradients.default,
                borderRadius: "24px",
                transition: "height 4.5s linear, top 0.5s ease",
              }}
            ></div>
          </div>

          <div
            className="my-accordion gap-4 d-flex flex-column justify-content-center position-relative px-4"
            id="syncAccordion"
            ref={container_ref}
            onMouseEnter={() => set_is_paused(true)}
            onMouseLeave={() => set_is_paused(false)}
          >
            {items.map((item, index) => {
              const isActive = index === active_index;
              const activeColor = darkMode ? "#FFFFFF" : "#1C1C3C";
              const inactiveColor = darkMode ? "#1C1C3C" : "#2725259c";

              return (
                <div
                  key={index}
                  className="accordion-item gap-2 d-flex flex-column"
                  data-index={index}
                  onClick={() => handle_click(index)}
                  style={{
                    cursor: "pointer",
                    transition: "all 0.6s ease",
                  }}
                >
                  <div
                    className="d-flex justify-content-between"
                    style={{
                      color: isActive ? activeColor : inactiveColor,
                    }}
                  >
                    <h4>{item.title}</h4>
                    <ArrowDownCircle size={20} />
                  </div>

                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, y: 100 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -100 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      style={{ overflow: "hidden" }}
                    >
                      <div className="d-flex flex-column gap-2">
                        <span
                          style={{
                            fontWeight: "400",
                            color: darkMode ? "#FFFFFF" : "#1C1C3C",
                          }}
                        >
                          {item.content}
                        </span>
                        <div className="d-flex justify-content-start">
                          <Link href={item.link}>
                            <BtnRoxo
                              variant={variant}
                              className="btn-sm"
                              style={{
                                fontSize: "0.8rem",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              <small className="text-nowrap btn-sml p-2">
                                {item.cta}
                              </small>
                            </BtnRoxo>
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center position-relative text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={active_index}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.1 }}
              className="w-100"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "auto",
              }}
            >
              <div
                id="box-img-accord"
                style={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "16 / 9",
                }}
              >
                <Image
                  src={items[active_index].image}
                  alt={items[active_index].title}
                  fill
                  style={{
                    objectFit: "contain",
                    borderRadius: "1rem",
                  }}
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default SyncAccordionSlide;
