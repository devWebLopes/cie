import { useState } from "react";
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  CircuitBoard,
  Factory,
  Home as HomeIcon,
  Instagram,
  Mail,
  MapPin,
  Menu,
  Phone,
  PlugZap,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  UserCheck,
  Wrench,
  X,
  Zap,
} from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/5551982330183?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20com%20a%20Control%20Instala%C3%A7%C3%B5es%20El%C3%A9tricas.";

const services = [
  {
    number: "01",
    eyebrow: "Residencial & Condomínios",
    title: "Elétrica Residencial e Predial",
    description:
      "Instalação e reformas de quadros (QD/CD), proteção contra surtos (DPS e DR), iluminação de emergência, automação e adequação às normas de segurança.",
    image: "/referencias/control-painel-1.jpg",
    icon: HomeIcon,
    tags: ["Quadros QD/CD", "DPS e DR", "Automação", "Geradores & Nobreaks", "PPCI"],
  },
  {
    number: "02",
    eyebrow: "Potência & Continuidade",
    title: "Montagens Industriais e Comerciais",
    description:
      "Montagem de Quadros Gerais de Baixa Tensão (QGBT), Quadros de Força (QGDF), infraestrutura de eletrocalhas/dutos e subestações de média tensão.",
    image: "/referencias/control-painel-2.jpg",
    icon: Factory,
    tags: ["QGBT / QGDF", "Subestações MT", "Eletrocalhas", "Infra Subterrânea e Aérea"],
  },
  {
    number: "03",
    eyebrow: "Engenharia & Conformidade",
    title: "Projetos Elétricos e SPDA",
    description:
      "Elaboração de projetos elétricos comerciais e industriais, sistemas de proteção contra descargas atmosféricas (SPDA), aterramento e cálculo luminotécnico.",
    image: "/referencias/control-portfolio.jpg",
    icon: CircuitBoard,
    tags: ["Projetos Elétricos", "Laudos SPDA", "Aterramento", "Cálculo Luminotécnico"],
  },
  {
    number: "04",
    eyebrow: "Inovação & Canteiro de Obras",
    title: "Robô de Tomadas Control",
    description:
      "Equipamento móvel e personalizado para distribuição elétrica segura em canteiros de obras, serralherias, estruturas steel frame, oficinas e eventos.",
    image: "/referencias/control-robo-tomadas.jpg",
    icon: PlugZap,
    fit: "contain",
    tags: ["Robô de Tomadas", "220V / 380V", "Segurança em Obras", "Sob Encomenda"],
  },
];

const clients = [
  { name: "Selet Materiais Elétricos", city: "Novo Hamburgo/RS", segment: "Distribuição e Materiais" },
  { name: "Petreson Flor Guias e Acessórios", city: "Campo Bom/RS", segment: "Indústria & Acessórios" },
  { name: "Engenhar Climatização", city: "Novo Hamburgo/RS", segment: "Climatização & Refrigeração" },
  { name: "Condomínio Mirante da Lagoa", city: "Torres/RS", segment: "Condomínio Residencial" },
  { name: "Condomínio Ocean Side", city: "Torres/RS", segment: "Condomínio Litorâneo" },
  { name: "GR Síndico Profissional", city: "Torres/RS", segment: "Gestão Condominial" },
];

const steps = [
  {
    index: "01",
    title: "Diagnóstico & Leitura Técnica",
    description: "Avaliamos a carga, os pontos críticos e a infraestrutura necessária conforme as normas ABNT vigentes.",
  },
  {
    index: "02",
    title: "Dimensionamento & Projeto",
    description: "Planejamos a montagem com especificação de componentes de alta qualidade, disjuntores certificados e proteção total.",
  },
  {
    index: "03",
    title: "Execução com Precisão",
    description: "Instalação limpa, identificação clara de circuitos, barramentos organizados e testes completos de carga.",
  },
];

function BrandMark() {
  return (
    <div className="brand-badge">
      <div className="brand-diamond">
        <span className="diamond-text">CONTROL</span>
      </div>
      <div className="brand-text-block">
        <span className="brand-main">CONTROL</span>
        <span className="brand-sub">INSTALAÇÕES ELÉTRICAS</span>
      </div>
    </div>
  );
}

function SectionKicker({ children }: { children: React.ReactNode }) {
  return (
    <div className="section-kicker">
      <span className="kicker-line" />
      <span>{children}</span>
    </div>
  );
}

/* Botão Flutuante do WhatsApp Oficial */
function FloatingWhatsApp() {
  return (
    <aside className="floating-whatsapp" aria-label="Atendimento via WhatsApp">
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-btn"
        aria-label="Fale conosco no WhatsApp"
      >
        <span className="whatsapp-pulse" aria-hidden="true" />
        <span className="whatsapp-tooltip">Solicitar Orçamento</span>
        <svg
          viewBox="0 0 32 32"
          width="32"
          height="32"
          fill="currentColor"
          className="whatsapp-icon"
          aria-hidden="true"
        >
          <path d="M16.02 2.01c-7.72 0-14 6.28-14 14 0 2.47.65 4.87 1.88 6.99L2 30l7.21-1.89c2.04 1.12 4.36 1.7 6.81 1.7 7.72 0 14-6.28 14-14s-6.28-13.8-14-13.8zm0 25.55c-2.18 0-4.3-.59-6.14-1.7l-.44-.26-4.57 1.2 1.22-4.45-.29-.46c-1.22-1.94-1.87-4.2-1.87-6.48 0-6.42 5.22-11.64 11.64-11.64 6.42 0 11.64 5.22 11.64 11.64 0 6.42-5.22 11.69-11.64 11.69zm6.38-8.73c-.35-.18-2.07-1.02-2.39-1.14-.32-.12-.55-.18-.78.18-.23.35-.9 1.14-1.1 1.37-.2.23-.4.26-.75.09-.35-.18-1.48-.55-2.82-1.74-1.04-.93-1.74-2.08-1.95-2.43-.2-.35-.02-.54.15-.71.16-.16.35-.4.52-.61.18-.2.23-.35.35-.58.12-.23.06-.44-.03-.61-.09-.18-.78-1.88-1.07-2.58-.28-.68-.57-.59-.78-.6h-.67c-.23 0-.61.09-.93.44-.32.35-1.22 1.2-1.22 2.92s1.25 3.39 1.42 3.62c.18.23 2.46 3.76 5.96 5.27.83.36 1.48.57 1.99.73.84.27 1.6.23 2.2.14.67-.1 2.07-.85 2.36-1.66.29-.82.29-1.52.2-1.66-.08-.15-.31-.24-.66-.41z" />
        </svg>
      </a>
    </aside>
  );
}

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      {/* Botão Flutuante do WhatsApp */}
      <FloatingWhatsApp />

      {/* Top Bar */}
      <div className="top-line">
        <div className="container top-line-inner">
          <span className="top-line-location">
            <MapPin size={12} className="inline-icon" /> Atendimento: Região Metropolitana, Vale dos Sinos e Litoral RS
          </span>
          <span className="top-line-detail">
            <span className="status-dot" /> Orçamentos e Laudos Técnicos: (51) 98233-0183
          </span>
        </div>
      </div>

      {/* Header */}
      <header className="site-header">
        <div className="container header-inner">
          <a href="#inicio" className="brand" onClick={closeMenu} aria-label="Control Instalações Elétricas — início">
            <BrandMark />
          </a>

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <nav className={`main-nav ${menuOpen ? "is-open" : ""}`} aria-label="Navegação principal">
            <a href="#servicos" onClick={closeMenu}>Serviços</a>
            <a href="#diferenciais" onClick={closeMenu}>Proteção Elétrica</a>
            <a href="#metodo" onClick={closeMenu}>Método de Trabalho</a>
            <a href="#clientes" onClick={closeMenu}>Clientes</a>
            <a href="#contato" onClick={closeMenu}>Contato</a>
            <a className="nav-cta" href={WHATSAPP_URL} target="_blank" rel="noreferrer" onClick={closeMenu}>
              Solicitar Orçamento <ArrowUpRight size={16} />
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="hero-section">
        <div className="hero-image" aria-hidden="true" />
        <div className="hero-overlay" aria-hidden="true" />
        <div className="hero-grid" aria-hidden="true" />

        <div className="container hero-content">
          <div className="hero-copy">
            <div className="hero-label">
              <span className="pulse-mark" />
              <span>Residencial · Comercial · Industrial · Baixa e Média Tensão</span>
            </div>
            <h1>
              Engenharia e Elétrica com <em>Máxima Segurança.</em>
            </h1>
            <p className="hero-description">
              Montagens de quadros de comando, projetos elétricos, proteção contra surtos (DPS/DR),
              manutenção preventiva e soluções sob medida para sua obra ou empresa.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                Falar com Especialista <ArrowUpRight size={17} />
              </a>
              <a className="text-link" href="#servicos">
                Conhecer Serviços <ChevronDown size={16} />
              </a>
            </div>

            <div className="hero-quick-badges">
              <span><Check size={14} /> Atendimento com ART e Normas ABNT</span>
              <span><Check size={14} /> Quadros e Componentes Certificados</span>
            </div>
          </div>

          {/* Carro da Frota Integrado Harmônicamente */}
          <div className="hero-car-wrapper">
            <div className="car-glow-effect" aria-hidden="true" />
            <img
              src="/referencias/control-carro.png"
              alt="Veículo técnico da Control Instalações Elétricas equipado para atendimento"
              className="hero-car-img"
              loading="eager"
            />
            <div className="hero-car-caption">
              <span className="caption-badge">Frota Pronta</span>
              <span>Atendimento ágil em campo com equipamentos próprios</span>
            </div>
          </div>
        </div>

        <div className="hero-bottom container">
          <span>↓ Role para explorar nossas soluções</span>
          <span className="hero-code">CONTROL INSTALAÇÕES ELÉTRICAS — RS</span>
        </div>
      </section>

      {/* Proof Strip */}
      <section className="proof-strip" aria-label="Especialidades Técnicas">
        <div className="container proof-inner">
          <span className="proof-intro">Atuação Especializada</span>
          <div className="proof-items">
            <span><ShieldCheck size={15} /> Quadros QGBT / QGDF</span>
            <span><Zap size={15} /> Proteção DPS & DR</span>
            <span><Factory size={15} /> Subestações MT</span>
            <span><Sparkles size={15} /> Carregador Veicular (NBR 17019)</span>
            <span><Wrench size={15} /> Robô de Tomadas</span>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="services-section section-pad">
        <div className="container">
          <div className="section-heading services-heading">
            <div>
              <SectionKicker>Soluções Técnicas</SectionKicker>
              <h2>
                Instalações elétricas feitas com<br />
                <span>precisão, método e durabilidade.</span>
              </h2>
            </div>
            <p>
              Do diagnóstico à montagem final, garantimos organização impecável nos barramentos,
              fiação identificada e total segurança contra riscos elétricos.
            </p>
          </div>

          <div className="service-list">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article className="service-card" key={service.number}>
                  <div className={`service-media ${service.fit === "contain" ? "media-contain" : ""}`}>
                    <img
                      src={service.image}
                      alt={service.title}
                      className={service.fit === "contain" ? "img-contain" : ""}
                      loading="lazy"
                    />
                    <span className="service-number">{service.number}</span>
                    <span className="service-icon">
                      <Icon size={20} />
                    </span>
                  </div>
                  <div className="service-card-content">
                    <span className="eyebrow">{service.eyebrow}</span>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <div className="tag-row">
                      {service.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                    <a
                      href={`${WHATSAPP_URL}&text=Ol%C3%A1!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20${encodeURIComponent(service.title)}.`}
                      target="_blank"
                      rel="noreferrer"
                      className="card-link"
                    >
                      Consultar este serviço <ArrowUpRight size={15} />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Seção Destaque: Proteção Elétrica e Raios */}
      <section id="diferenciais" className="protection-section">
        <div className="container protection-grid">
          <div className="protection-image-box">
            <img
              src="/referencias/control-protecao.jpg"
              alt="Proteção contra raios e picos de energia com dispositivos DPS e DR"
              className="protection-image"
              loading="lazy"
            />
          </div>
          <div className="protection-content">
            <div className="protection-kicker">
              <ShieldAlert size={18} />
              <span>Segurança Patrimonial</span>
            </div>
            <h2>
              Você sabia que pode proteger seus equipamentos contra <em>picos de energia</em> e descargas por raios?
            </h2>
            <p>
              Instalações sem os dispositivos <strong>DPS (Dispositivo Protetor de Surto)</strong> e <strong>DR (Diferencial Residual)</strong>
              deixam eletrodomésticos, máquinas industriais e sistemas eletrônicos vulneráveis a queimas repentinas.
            </p>
            <ul className="protection-benefits">
              <li>
                <Check size={16} className="benefit-check" />
                <span>Prevenção de queima de computadores, TVs, motores e inversores</span>
              </li>
              <li>
                <Check size={16} className="benefit-check" />
                <span>Proteção contra choques elétricos e riscos de incêndio</span>
              </li>
              <li>
                <Check size={16} className="benefit-check" />
                <span>Conformidade com as normas ABNT NBR 5410 e segurança patrimonial</span>
              </li>
            </ul>
            <div className="protection-cta">
              <a
                className="button button-primary"
                href={`${WHATSAPP_URL}&text=Ol%C3%A1!%20Gostaria%20de%20proteger%20minha%20instala%C3%A7%C3%A3o%20contra%20surtos%20e%20raios%20com%20DPS%20e%20DR.`}
                target="_blank"
                rel="noreferrer"
              >
                Proteger Minha Instalação <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Método de Trabalho */}
      <section id="metodo" className="method-section section-pad">
        <div className="container method-grid">
          <div className="method-intro">
            <SectionKicker>Compromisso Técnico</SectionKicker>
            <h2>
              Menos improviso.<br />
              <span>Mais controle.</span>
            </h2>
            <p>
              Toda instalação executada pela Control segue critérios rigorosos de engenharia,
              dimensionamento correto de cabos e acabamento com padrão profissional.
            </p>
            <div className="method-signature">
              <span className="signature-mark">
                <Zap size={17} />
              </span>
              <span>
                Control Instalações Elétricas<br />
                <small>Rubens Gabriel Barboza Cassal — Responsável Técnico</small>
              </span>
            </div>
          </div>
          <div className="steps-list">
            {steps.map((step) => (
              <div className="step-item" key={step.index}>
                <span className="step-index">{step.index}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
                <Check className="step-check" size={18} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principais Clientes & Obras */}
      <section id="clientes" className="clients-section section-pad">
        <div className="container">
          <div className="section-heading clients-heading">
            <div>
              <SectionKicker>Credibilidade Comprovada</SectionKicker>
              <h2>
                Empresas e Condomínios<br />
                <span>que confiam na Control.</span>
              </h2>
            </div>
            <p>
              Atendemos condomínios residenciais, centros comerciais e indústrias no Vale dos Sinos,
              Região Metropolitana e Litoral Gaúcho.
            </p>
          </div>

          <div className="clients-grid">
            {clients.map((client, idx) => (
              <div className="client-card" key={idx}>
                <div className="client-marker">0{idx + 1}</div>
                <div className="client-info">
                  <h4>{client.name}</h4>
                  <div className="client-meta">
                    <span className="client-city"><MapPin size={12} /> {client.city}</span>
                    <span className="client-segment">{client.segment}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statement / Frase de Impacto */}
      <section className="statement-section">
        <div className="container statement-inner">
          <span className="statement-mark">“</span>
          <p>
            Quando a elétrica é planejada e executada com precisão, <em>sua tranquilidade é garantida.</em>
          </p>
          <span className="statement-rule" />
        </div>
      </section>

      {/* Seção de Contato */}
      <section id="contato" className="contact-section section-pad">
        <div className="container contact-card">
          <div className="contact-copy">
            <SectionKicker>Atendimento Direto</SectionKicker>
            <h2>
              Pronto para iniciar<br />
              <em>seu projeto elétrico?</em>
            </h2>
            <p>
              Envie sua mensagem para avaliação técnica, orçamento sem compromisso ou agendamento de visita.
            </p>

            <div className="contact-info-list">
              <div className="contact-info-item">
                <UserCheck size={18} className="info-icon" />
                <div>
                  <strong>Responsável Técnico</strong>
                  <span>Rubens Gabriel Barboza Cassal</span>
                </div>
              </div>

              <div className="contact-info-item">
                <Phone size={18} className="info-icon" />
                <div>
                  <strong>Telefone / WhatsApp</strong>
                  <span>(51) 98233-0183</span>
                </div>
              </div>

              <div className="contact-info-item">
                <Mail size={18} className="info-icon" />
                <div>
                  <strong>E-mail Comercial</strong>
                  <span>rubensgbcassal@gmail.com</span>
                </div>
              </div>

              <div className="contact-info-item">
                <Instagram size={18} className="info-icon" />
                <div>
                  <strong>Instagram Oficial</strong>
                  <span>@controleletrica</span>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-actions">
            <a className="button button-primary button-large" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
              <svg viewBox="0 0 32 32" width="22" height="22" fill="currentColor" aria-hidden="true">
                <path d="M16.02 2.01c-7.72 0-14 6.28-14 14 0 2.47.65 4.87 1.88 6.99L2 30l7.21-1.89c2.04 1.12 4.36 1.7 6.81 1.7 7.72 0 14-6.28 14-14s-6.28-13.8-14-13.8zm0 25.55c-2.18 0-4.3-.59-6.14-1.7l-.44-.26-4.57 1.2 1.22-4.45-.29-.46c-1.22-1.94-1.87-4.2-1.87-6.48 0-6.42 5.22-11.64 11.64-11.64 6.42 0 11.64 5.22 11.64 11.64 0 6.42-5.22 11.69-11.64 11.69zm6.38-8.73c-.35-.18-2.07-1.02-2.39-1.14-.32-.12-.55-.18-.78.18-.23.35-.9 1.14-1.1 1.37-.2.23-.4.26-.75.09-.35-.18-1.48-.55-2.82-1.74-1.04-.93-1.74-2.08-1.95-2.43-.2-.35-.02-.54.15-.71.16-.16.35-.4.52-.61.18-.2.23-.35.35-.58.12-.23.06-.44-.03-.61-.09-.18-.78-1.88-1.07-2.58-.28-.68-.57-.59-.78-.6h-.67c-.23 0-.61.09-.93.44-.32.35-1.22 1.2-1.22 2.92s1.25 3.39 1.42 3.62c.18.23 2.46 3.76 5.96 5.27.83.36 1.48.57 1.99.73.84.27 1.6.23 2.2.14.67-.1 2.07-.85 2.36-1.66.29-.82.29-1.52.2-1.66-.08-.15-.31-.24-.66-.41z" />
              </svg>
              Conversar no WhatsApp
            </a>
            <a className="contact-detail" href="tel:+5551982330183">
              (51) 98233-0183
            </a>
            <span className="contact-note">Atendimento direto com o responsável técnico</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="site-footer">
        <div className="container footer-inner">
          <a href="#inicio" className="brand footer-brand">
            <BrandMark />
          </a>
          <div className="footer-details">
            <p><strong>Control Instalações Elétricas</strong> — Segurança, Engenharia e Excelência.</p>
            <p className="footer-sub">Atendimento no Vale dos Sinos, Região Metropolitana e Litoral Gaúcho.</p>
          </div>
          <div className="footer-links">
            <a
              href="https://www.instagram.com/controleletrica/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram da Control"
              title="Instagram @controleletrica"
            >
              <Instagram size={18} />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp da Control"
              title="WhatsApp (51) 98233-0183"
            >
              <Phone size={18} />
            </a>
            <a href="#inicio" aria-label="Voltar ao início" title="Voltar ao topo">
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© 2026 Control Instalações Elétricas — Todos os direitos reservados</span>
          <span>Engenharia & Soluções Elétricas</span>
        </div>
      </footer>
    </div>
  );
}

export default Home;
