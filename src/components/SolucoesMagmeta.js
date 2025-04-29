'use client'

import Image from 'next/image'
import { Zap } from 'lucide-react'

const solucoes = [
  {
    title: 'Magnet Chat',
    subtitle: 'Atendimento & captação de leads',
    description:
      'Automatize e simplifique o contato com seus clientes com um ChatBot capaz... Nam in elementum libero. Vivamus tristique justo ornare, pretium quam et, condimentum libero. Nam vulputate magna non ligula molestie, a sagittis felis vulputate.',
    image: '/assets/img/icon-chat.png',
    buttonText: 'APLICAR NO MEU NEGÓCIO',
  },
  {
    title: 'Mag Play',
    subtitle: 'Propaganda e Checkout',
    description:
      'Leve sua mensagem direto ao seu público! Com a mídia indoor, sua marca ganha visibilidade em locais estratégicos do dia a dia das pessoas. Impacte seu cliente no momento certo, em ambientes relevantes e com alto poder de atenção.',
    image: '/assets/img/logo_midia_indoor.png',
    buttonText: 'QUERO ANUNCIAR!',
  },
  {
    title: 'Digital Boost',
    subtitle: 'Comece por aqui!',
    description:
      'Com o Digital Boost, analisamos sua operação e identificamos oportunidades para tornar seu negócio mais eficiente com tecnologia. Nosso objetivo é ajudar você a simplificar o dia a dia, melhorar a experiência do cliente e abrir novas possibilidades de crescimento.',
    image: '/assets/img/icon-chat.png',
    buttonText: 'APLICAR NO MEU NEGÓCIO',
  },
  {
    title: 'Lançamento MVP',
    subtitle: 'Valide sua ideia agora!',
    description:
      'Desenvolva sua ideia com agilidade e foco! Criamos MVPs (Mínimo Produto Viável) sob medida para validar seu conceito no mercado. Lance sua solução inicial rapidamente, colete feedback valioso e itere com inteligência.',
    image: '/assets/img/icon-chat.png',
    buttonText: 'APLICAR NO MEU NEGÓCIO',
  },
]

export default function SolucoesMagmeta() {
  return (
    <div className="container solucoes-magmeta py-5">
      <div className="row g-4">
        {solucoes.map((solucao, index) => (
          <div className="col-12 col-md-6 box-solu" key={index}>
            <div className="p-4 rounded card-solu text-white h-100">
              <div className="d-flex flex-colunm">
                <Image
                  src={solucao.image}
                  alt={`Ícone ${solucao.title}`}
                  width={64}
                  height={64}
                  className={solucao.title === 'Mag Play' ? 'rounded-3' : ''}
                />
                <div className="d-flex flex-column ms-3">
                  <p className="mb-0 d-flex align-items-center small">
                    {solucao.subtitle}
                  </p>
                  <h3 className="">{solucao.title}</h3>
                </div>
              </div>
              <div>
                <p className="mb-4 pt-3">
                  {solucao.description}
                </p>
              </div>
              <div>
                <a
                  href="https://api.whatsapp.com/send?phone=+5561981689203&text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20quero%20saber%20mais%20sobre%20as%20Solu%C3%A7%C3%B5es%20Magmeta."
                  className="btn btn-light w-100 fw-bold"
                >
                  {solucao.buttonText} <Zap size={18} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
