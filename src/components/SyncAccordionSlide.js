"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Arrow90degRight } from "react-bootstrap-icons";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowRightCircle,
} from "react-feather";
import {
  ArrowRightFromLine,
  ArrowRightIcon,
  ArrowUpRightIcon,
} from "lucide-react";
import { useRouter } from "next/navigation";
import BtnRoxo from "./botoes/BtnRoxo";

const SyncAccordionSlide = () => {
  const [active_index, set_active_index] = useState(0);
  const [is_paused, set_is_paused] = useState(false);
  const pause_timeout_ref = useRef(null);
  const interval_ref = useRef(null);
  const progress_ref = useRef(null);
  const container_ref = useRef(null);

  const router = useRouter();
  const items = [
    {
      title: "Site Que Vende",
      slug: "sites",
      content:
        "Sua página pronta para atrair clientes com foco total em conversões via WhatsApp.Design estratégico que transforma visitantes em contatos reais. Desenvolvemos páginas focadas em conversão, com botões diretos para o WhatsApp.Design estratégico, responsivo e otimizado para atrair e reter visitantes.Você apresenta seus serviços com clareza e direciona o cliente para a ação certa.",
      image: "/assets/img/site.png",
      cta: "Quero um site",
      link: "https://wa.me/5511987654321?text=Olá%20equipe%20MagMeta,%20quero%20agendar%20uma%20reunião",
    },

    {
      title: "Atendimento Automático 24h",
      slug: "magnet",
      content:
        "Automatize suas conversas com clientes usando chatbots no WhatsApp. Responda dúvidas, colete dados e envie informações 24 horas por dia. Chatbots inteligentes fazem triagens, tiram dúvidas e coletam informações dos clientes.Tudo isso com linguagem personalizada para o seu negócio. Mais agilidade, menos trabalho e mais vendas acontecendo mesmo fora do horário comercial.",
      image: "/assets/img/magnet-1.png",
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

  // useCallback para não recriar a função a cada render
  const start_auto_advance = useCallback(() => {
    if (interval_ref.current) clearInterval(interval_ref.current);
    interval_ref.current = setInterval(() => {
      set_active_index((prev) => (prev + 1) % items.length);
    }, 5000);
  }, [items.length]);

  // Inicia ou retoma o autoplay quando não estiver pausado
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
    }, 5000);
  };

  // Ajusta a barra de progresso para ficar ao lado do item ativo
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

      // Força reflow para aplicar transição em seguida
      void progress_ref.current.offsetHeight;

      progress_ref.current.style.transition =
        "height 4.5s linear, top 0.5s ease";
      progress_ref.current.style.height = `${height}px`;
    }
  }, [active_index]);

  return (
    <div className="container-fluid  justify-content-between">
      <div className="d-flex flex-column-reverse flex-md-row gap-4 row-accordion">
        {/* Accordion */}
        <div className="w-100 w-md-50 position-relative my-2">
          {/* Barra de progresso vertical fixa */}
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
                backgroundColor: "#5B19A9",
                borderRadius: "24px",
                transition: "height 4.5s linear, top 0.5s ease",
              }}
            ></div>
          </div>

          <div
            className="my-accordion   position-relative px-4"
            id="syncAccordion"
            ref={container_ref}
          >
            {items.map((item, index) => {
              const isActive = index === active_index;
              return (
                <div
                  key={index}
                  className="accordion-item"
                  data-index={index}
                  onClick={() => handle_click(index)}
                  style={{
                    cursor: "pointer",
                    transition: "all 0.6s ease",
                  }}
                >
                  <div className="pb-2">
                    <h4
                      style={{
                        fontWeight: "600",
                        color: isActive ? "#fff" : "#1C1C3C",
                        paddingTop: "12px",
                      }}
                    >
                      {item.title} <ArrowDown size={16} />
                    </h4>
                  </div>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      style={{ overflow: "hidden" }}
                    >
                      <div className="d-flex flex-column gap-3">
                        <span style={{ fontWeight: "400" }}>
                          {item.content}
                        </span>

                        <BtnRoxo
                          className="py-2 px-4"
                          style={{
                            fontSize: "0.9rem",
                            width: "50%",
                          }}
                        >
                          {item.cta}
                        </BtnRoxo>
                      </div>
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Slide */}
        <div className="w-100 w-md-50 d-flex justify-content-center align-items-center position-relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={active_index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.6 }}
              className="w-100"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "auto", // Garante altura constante
              }}
            >
              <div
                id="box-img-accord"
                style={{
                  width: "100%",
                  height: "100%",
                  maxWidth: "600px",
                }}
              >
                <Image
                  src={items[active_index].image}
                  alt={items[active_index].title}
                  width={0}
                  height={0}
                  style={{
                    objectFit: "contain",
                    borderRadius: "1rem",
                    width: "100%",
                    height: "100%",
                    maxHeight: "450px",
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
