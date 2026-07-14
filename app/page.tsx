"use client";

/* eslint-disable @next/next/no-img-element */

import { useEffect, useState } from "react";

type Language = "pt" | "en" | "es";

const profileLinks = {
  github: "https://github.com/douglasqs",
  linkedin: "https://www.linkedin.com/in/douglasqs/",
  whatsapp: "https://wa.me/5548996940124",
  email: "mailto:douglasqsoares@hotmail.com",
};

const content = {
  pt: {
    locale: "pt-BR",
    nav: { about: "Sobre", work: "Projetos", experience: "Experiência", contact: "Contato" },
    availability: "Aberto a novas oportunidades",
    eyebrow: "Full-stack · IA · Integrações",
    heroTitle: <>Conecto <em>ideias, dados e o mundo real.</em></>,
    heroBody: "Desenvolvedor full-stack e especialista em integrações, com experiência em IA, computer vision, APIs, redes e sistemas de segurança eletrônica.",
    seeWork: "Ver projetos",
    talk: "Vamos conversar",
    remoteAvailability: "Remoto · disponível globalmente",
    metrics: [
      ["+25%", "de precisão em reconhecimento facial"],
      ["9+", "anos em tecnologia e suporte"],
      ["3", "idiomas para colaborar"],
    ],
    aboutKicker: "Sobre mim",
    aboutTitle: <>Eu transformo complexidade técnica em <em>soluções que funcionam.</em></>,
    aboutText: "Minha carreira começou no suporte técnico e evoluiu para desenvolvimento, automação e integração de sistemas. Essa trajetória me deu uma visão completa: entendo o código, a infraestrutura, o hardware e, principalmente, o problema de quem usa a solução.",
    aboutAside: "Hoje coordeno integrações técnicas, desenvolvo provas de conceito e conecto produtos, APIs e plataformas de terceiros em ambientes críticos.",
    capabilitiesTitle: "Onde entrego mais valor",
    capabilities: [
      ["01", "Engenharia de software", "Python, JavaScript, Node.js, PHP, Java, Flutter e arquitetura de APIs."],
      ["02", "IA & computer vision", "OpenCV, GFPGAN, MediaPipe, processamento de imagens e protótipos com vídeo."],
      ["03", "Integrações & IoT", "HikCentral, ISAPI, SDKs, RTSP, ONVIF, controle de acesso e câmeras LPR."],
      ["04", "Infra & segurança", "TCP/IP, DNS, SSL/TLS, VPN, firewalls, CI/CD, Firebase e bancos de dados."],
    ],
    workKicker: "Trabalhos selecionados",
    workTitle: <>Projetos que unem <em>produto e profundidade técnica.</em></>,
    workIntro: "Os cases confidenciais preservam nomes, clientes e código-fonte, mas mostram o escopo e as decisões técnicas do trabalho.",
    confidential: "Case confidencial",
    public: "Projeto público",
    repository: "Acessar repositório",
    privateNote: "Nome e detalhes sensíveis preservados",
    featured: [
      {
        kind: "confidential",
        visual: "platform",
        number: "01",
        title: "Plataforma cloud para segurança e operação condominial",
        description: "Ecossistema multi-tenant com aplicativo mobile, portais web e backend serverless. Centraliza visitantes, acessos, câmeras, reservas, encomendas e comunicação, integrando a operação digital aos dispositivos do prédio.",
        result: "Arquitetura ponta a ponta, do app ao hardware",
        tags: ["Flutter", "Firebase", "Node.js", "WebRTC", "HikCentral"],
      },
      {
        kind: "public",
        visual: "face",
        number: "02",
        title: "Secure Face",
        description: "Pipeline de restauração e padronização de imagens faciais com IA. Valida qualidade, iluminação e tamanho da face, melhora imagens em lote e integra o resultado a sistemas de reconhecimento e controle de acesso.",
        result: "+25% de precisão em cenários críticos",
        tags: ["Python", "OpenCV", "GFPGAN", "MediaPipe", "Flask"],
        link: "https://github.com/douglasqs/secure-face-2.0",
      },
      {
        kind: "confidential",
        visual: "license",
        number: "03",
        title: "Plataforma de licenças, clientes e operações",
        description: "Solução web para validar instalações, administrar licenças, clientes e pagamentos, com autenticação segura, auditoria e fluxos de renovação. Projetada para operar em diferentes ambientes de hospedagem.",
        result: "Gestão centralizada e validação segura via API",
        tags: ["Node.js", "Express", "Prisma", "MySQL", "JWT"],
      },
      {
        kind: "public",
        visual: "lpr",
        number: "04",
        title: "Servidor de eventos - multimo",
        description: "Ferramenta de diagnóstico que recebe eventos multipart de câmeras e controladores, normaliza dados faciais e de placas, salva evidências e permite testar respostas e comandos remotos em tempo real.",
        result: "Diagnóstico rápido de integrações em campo",
        tags: ["Python", "Flask", "ISAPI", "ANPR", "HTTP"],
        link: "https://github.com/douglasqs/SERVIDOR-LPR",
      },
    ],
    experienceKicker: "Trajetória",
    experienceTitle: <>Experiência que combina <em>código, produto e campo.</em></>,
    present: "atual",
    roles: [
      {
        period: "2026 — atual",
        company: "Hikvision Brasil",
        role: "Coordenador de Integração e Suporte Técnico",
        text: "Coordenação de projetos de integração, PoCs com vídeo e IA, automação de testes, suporte a SDKs e APIs e atuação consultiva com clientes e empresas de tecnologia.",
      },
      {
        period: "2018 — 2026",
        company: "Intelbras",
        role: "Analista Técnico de Pós-venda · Segurança Eletrônica",
        text: "Diagnóstico de alta complexidade, apoio a P&D, incidentes de segurança, desenvolvimento de scripts e criação do software de aprimoramento facial que elevou a precisão em mais de 25%.",
      },
    ],
    educationTitle: "Formação",
    education: [
      ["Pós-graduação", "Inteligência Artificial e Machine Learning · Anhanguera"],
      ["Tecnólogo", "Análise e Desenvolvimento de Sistemas · SENAI"],
      ["Ensino técnico", "Instituto Federal de Santa Catarina · IFSC"],
    ],
    languagesTitle: "Idiomas",
    languages: ["Português · Nativo", "Inglês · Intermediário", "Espanhol · Básico a intermediário"],
    contactKicker: "Vamos construir algo útil",
    contactTitle: <>Procuro desafios onde tecnologia precisa <em>funcionar de verdade.</em></>,
    contactText: "Estou aberto a oportunidades em desenvolvimento, integrações, IA aplicada, suporte técnico avançado e áreas próximas. Se meu perfil fizer sentido para o seu time, vamos conversar.",
    emailMe: "Enviar e-mail",
    whatsapp: "WhatsApp",
    linkedin: "LinkedIn",
    github: "GitHub",
    backToTop: "Voltar ao topo",
    footer: "Projetado e desenvolvido para conectar boas oportunidades a problemas que valem a pena resolver.",
  },
  en: {
    locale: "en",
    nav: { about: "About", work: "Projects", experience: "Experience", contact: "Contact" },
    availability: "Open to new opportunities",
    eyebrow: "Full-stack · AI · Integrations",
    heroTitle: <>I connect <em>ideas, data and the real world.</em></>,
    heroBody: "Full-stack developer and integration specialist with experience in AI, computer vision, APIs, networking and electronic security systems.",
    seeWork: "View projects",
    talk: "Let’s talk",
    remoteAvailability: "Remote · available worldwide",
    metrics: [["+25%", "facial recognition accuracy"], ["9+", "years in technology and support"], ["3", "languages for collaboration"]],
    aboutKicker: "About me",
    aboutTitle: <>I turn technical complexity into <em>solutions that work.</em></>,
    aboutText: "My career started in technical support and evolved into software development, automation and systems integration. That path gave me a complete view: I understand the code, infrastructure, hardware and, most importantly, the user’s problem.",
    aboutAside: "Today I coordinate technical integrations, build proofs of concept and connect products, APIs and third-party platforms in critical environments.",
    capabilitiesTitle: "Where I deliver the most value",
    capabilities: [["01", "Software engineering", "Python, JavaScript, Node.js, PHP, Java, Flutter and API architecture."], ["02", "AI & computer vision", "OpenCV, GFPGAN, MediaPipe, image processing and video prototypes."], ["03", "Integrations & IoT", "HikCentral, ISAPI, SDKs, RTSP, ONVIF, access control and LPR cameras."], ["04", "Infrastructure & security", "TCP/IP, DNS, SSL/TLS, VPN, firewalls, CI/CD, Firebase and databases."]],
    workKicker: "Selected work",
    workTitle: <>Projects that combine <em>product and technical depth.</em></>,
    workIntro: "Confidential cases preserve product names, clients and source code while showing the scope and technical decisions behind the work.",
    confidential: "Confidential case",
    public: "Public project",
    repository: "View repository",
    privateNote: "Name and sensitive details withheld",
    featured: [
      { kind: "confidential", visual: "platform", number: "01", title: "Cloud platform for residential security and operations", description: "Multi-tenant ecosystem with a mobile app, web portals and serverless backend. It centralizes visitors, access, cameras, bookings, deliveries and communication, connecting digital operations to building devices.", result: "End-to-end architecture, from app to hardware", tags: ["Flutter", "Firebase", "Node.js", "WebRTC", "HikCentral"] },
      { kind: "public", visual: "face", number: "02", title: "Secure Face", description: "AI-powered facial image restoration and standardization pipeline. It validates quality, lighting and face size, enhances images in bulk and integrates results with recognition and access-control systems.", result: "+25% accuracy in critical scenarios", tags: ["Python", "OpenCV", "GFPGAN", "MediaPipe", "Flask"], link: "https://github.com/douglasqs/secure-face-2.0" },
      { kind: "confidential", visual: "license", number: "03", title: "Licensing, customer and operations platform", description: "Web solution to validate installations and manage licenses, customers and payments, with secure authentication, audit trails and renewal flows. Designed to run across different hosting environments.", result: "Centralized management and secure API validation", tags: ["Node.js", "Express", "Prisma", "MySQL", "JWT"] },
      { kind: "public", visual: "lpr", number: "04", title: "Event server - multimo", description: "Diagnostic tool that receives multipart events from cameras and controllers, normalizes facial and license-plate data, stores evidence and tests responses and remote commands in real time.", result: "Faster field integration diagnostics", tags: ["Python", "Flask", "ISAPI", "ANPR", "HTTP"], link: "https://github.com/douglasqs/SERVIDOR-LPR" },
    ],
    experienceKicker: "Career",
    experienceTitle: <>Experience that combines <em>code, product and fieldwork.</em></>,
    present: "present",
    roles: [{ period: "2026 — present", company: "Hikvision Brazil", role: "Technical Integration & Support Coordinator", text: "Leading integration projects, video and AI PoCs, test automation, SDK and API support, and technical consulting with customers and technology companies." }, { period: "2018 — 2026", company: "Intelbras", role: "Technical After-Sales Analyst · Electronic Security", text: "Complex diagnostics, R&D support, security incidents, custom scripts and development of facial enhancement software that improved accuracy by more than 25%." }],
    educationTitle: "Education",
    education: [["Graduate degree", "Artificial Intelligence and Machine Learning · Anhanguera"], ["Associate degree", "Systems Analysis and Development · SENAI"], ["Technical education", "Federal Institute of Santa Catarina · IFSC"]],
    languagesTitle: "Languages",
    languages: ["Portuguese · Native", "English · Intermediate", "Spanish · Basic to intermediate"],
    contactKicker: "Let’s build something useful",
    contactTitle: <>I look for challenges where technology must <em>work in the real world.</em></>,
    contactText: "I’m open to opportunities in software development, integrations, applied AI, advanced technical support and adjacent areas. If my background fits your team, let’s talk.",
    emailMe: "Send an email", whatsapp: "WhatsApp", linkedin: "LinkedIn", github: "GitHub", backToTop: "Back to top",
    footer: "Designed and developed to connect good opportunities with problems worth solving.",
  },
  es: {
    locale: "es",
    nav: { about: "Sobre mí", work: "Proyectos", experience: "Experiencia", contact: "Contacto" },
    availability: "Abierto a nuevas oportunidades",
    eyebrow: "Full-stack · IA · Integraciones",
    heroTitle: <>Conecto <em>ideas, datos y el mundo real.</em></>,
    heroBody: "Desarrollador full-stack y especialista en integraciones, con experiencia en IA, visión artificial, APIs, redes y sistemas de seguridad electrónica.",
    seeWork: "Ver proyectos", talk: "Hablemos", remoteAvailability: "Remoto · disponible globalmente",
    metrics: [["+25%", "de precisión en reconocimiento facial"], ["9+", "años en tecnología y soporte"], ["3", "idiomas para colaborar"]],
    aboutKicker: "Sobre mí",
    aboutTitle: <>Convierto la complejidad técnica en <em>soluciones que funcionan.</em></>,
    aboutText: "Mi carrera comenzó en soporte técnico y evolucionó hacia el desarrollo, la automatización y la integración de sistemas. Ese camino me dio una visión completa: entiendo el código, la infraestructura, el hardware y, sobre todo, el problema del usuario.",
    aboutAside: "Hoy coordino integraciones técnicas, desarrollo pruebas de concepto y conecto productos, APIs y plataformas de terceros en entornos críticos.",
    capabilitiesTitle: "Dónde aporto más valor",
    capabilities: [["01", "Ingeniería de software", "Python, JavaScript, Node.js, PHP, Java, Flutter y arquitectura de APIs."], ["02", "IA y visión artificial", "OpenCV, GFPGAN, MediaPipe, procesamiento de imágenes y prototipos con video."], ["03", "Integraciones e IoT", "HikCentral, ISAPI, SDKs, RTSP, ONVIF, control de acceso y cámaras LPR."], ["04", "Infraestructura y seguridad", "TCP/IP, DNS, SSL/TLS, VPN, firewalls, CI/CD, Firebase y bases de datos."]],
    workKicker: "Trabajos seleccionados",
    workTitle: <>Proyectos que unen <em>producto y profundidad técnica.</em></>,
    workIntro: "Los casos confidenciales preservan nombres, clientes y código fuente, pero muestran el alcance y las decisiones técnicas del trabajo.",
    confidential: "Caso confidencial", public: "Proyecto público", repository: "Ver repositorio", privateNote: "Nombre y detalles sensibles protegidos",
    featured: [
      { kind: "confidential", visual: "platform", number: "01", title: "Plataforma cloud para seguridad y operación residencial", description: "Ecosistema multi-tenant con aplicación móvil, portales web y backend serverless. Centraliza visitantes, accesos, cámaras, reservas, entregas y comunicación, conectando la operación digital con los dispositivos del edificio.", result: "Arquitectura de extremo a extremo, de la app al hardware", tags: ["Flutter", "Firebase", "Node.js", "WebRTC", "HikCentral"] },
      { kind: "public", visual: "face", number: "02", title: "Secure Face", description: "Pipeline de restauración y estandarización de imágenes faciales con IA. Valida calidad, iluminación y tamaño, mejora imágenes por lotes e integra los resultados con sistemas de reconocimiento y control de acceso.", result: "+25% de precisión en escenarios críticos", tags: ["Python", "OpenCV", "GFPGAN", "MediaPipe", "Flask"], link: "https://github.com/douglasqs/secure-face-2.0" },
      { kind: "confidential", visual: "license", number: "03", title: "Plataforma de licencias, clientes y operaciones", description: "Solución web para validar instalaciones y administrar licencias, clientes y pagos, con autenticación segura, auditoría y flujos de renovación. Diseñada para operar en distintos entornos de hosting.", result: "Gestión centralizada y validación segura por API", tags: ["Node.js", "Express", "Prisma", "MySQL", "JWT"] },
      { kind: "public", visual: "lpr", number: "04", title: "Servidor de eventos - multimo", description: "Herramienta de diagnóstico que recibe eventos multipart de cámaras y controladores, normaliza datos faciales y de matrículas, guarda evidencias y prueba respuestas y comandos remotos en tiempo real.", result: "Diagnóstico rápido de integraciones en campo", tags: ["Python", "Flask", "ISAPI", "ANPR", "HTTP"], link: "https://github.com/douglasqs/SERVIDOR-LPR" },
    ],
    experienceKicker: "Trayectoria",
    experienceTitle: <>Experiencia que combina <em>código, producto y campo.</em></>,
    present: "actual",
    roles: [{ period: "2026 — actual", company: "Hikvision Brasil", role: "Coordinador de Integración y Soporte Técnico", text: "Coordinación de integraciones, PoCs con video e IA, automatización de pruebas, soporte a SDKs y APIs y consultoría técnica con clientes y empresas de tecnología." }, { period: "2018 — 2026", company: "Intelbras", role: "Analista Técnico de Posventa · Seguridad Electrónica", text: "Diagnóstico complejo, apoyo a I+D, incidentes de seguridad, scripts personalizados y desarrollo del software facial que mejoró la precisión en más de un 25%." }],
    educationTitle: "Formación",
    education: [["Posgrado", "Inteligencia Artificial y Machine Learning · Anhanguera"], ["Tecnólogo", "Análisis y Desarrollo de Sistemas · SENAI"], ["Educación técnica", "Instituto Federal de Santa Catarina · IFSC"]],
    languagesTitle: "Idiomas", languages: ["Portugués · Nativo", "Inglés · Intermedio", "Español · Básico a intermedio"],
    contactKicker: "Construyamos algo útil",
    contactTitle: <>Busco desafíos donde la tecnología debe <em>funcionar de verdad.</em></>,
    contactText: "Estoy abierto a oportunidades en desarrollo, integraciones, IA aplicada, soporte técnico avanzado y áreas relacionadas. Si mi perfil encaja con tu equipo, hablemos.",
    emailMe: "Enviar email", whatsapp: "WhatsApp", linkedin: "LinkedIn", github: "GitHub", backToTop: "Volver arriba",
    footer: "Diseñado y desarrollado para conectar buenas oportunidades con problemas que vale la pena resolver.",
  },
} as const;

function ProjectVisual({ type }: { type: string }) {
  if (type === "platform") return <div className="visual product-showcase" aria-hidden="true"><div className="dashboard-shot"><img src="images/platform-dashboard.png" alt="" loading="lazy" /></div><div className="mobile-shots"><img className="mobile-shot mobile-login" src="images/mobile-login-light.png" alt="" loading="lazy" /><img className="mobile-shot mobile-access" src="images/mobile-access-light.png" alt="" loading="lazy" /><img className="mobile-shot mobile-home" src="images/mobile-home-dark.png" alt="" loading="lazy" /></div><span className="showcase-label">MOBILE + WEB + CLOUD</span></div>;
  if (type === "face") return <div className="visual secure-face-visual" aria-hidden="true"><img src="images/secure-face-interface.png" alt="" loading="lazy" /></div>;
  if (type === "license") return <div className="visual license-visual" aria-hidden="true"><div className="api-card"><span>LICENSE API</span><b>VALID</b><i>•••• · 7F2A</i></div><div className="license-row"><span>AUTH</span><span>CRM</span><span>BILLING</span></div></div>;
  return <div className="visual multimo-visual" aria-hidden="true"><img className="multimo-main" src="images/multimo-events.png" alt="" loading="lazy" /><img className="multimo-settings" src="images/multimo-settings.png" alt="" loading="lazy" /></div>;
}

export default function Home() {
  const [language, setLanguage] = useState<Language>("pt");
  const t = content[language];

  useEffect(() => {
    document.documentElement.lang = t.locale;
  }, [t.locale]);

  function changeLanguage(next: Language) {
    setLanguage(next);
    window.localStorage.setItem("portfolio-language", next);
  }

  function scrollToTop() {
    window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
    const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
    window.scrollTo({ top: 0, behavior });
  }

  return (
    <main>
      <a className="skip-link" href="#content">Skip to content</a>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Douglas Soares — início"><span>DQ</span><b>Douglas Soares</b></a>
        <nav aria-label="Navegação principal">
          <a href="#about">{t.nav.about}</a><a href="#experience">{t.nav.experience}</a><a href="#work">{t.nav.work}</a><a href="#contact">{t.nav.contact}</a>
        </nav>
        <div className="language-switch" aria-label="Selecionar idioma">
          {(["pt", "en", "es"] as Language[]).map((item) => <button key={item} className={language === item ? "active" : ""} onClick={() => changeLanguage(item)} aria-pressed={language === item}>{item === "pt" ? "PT" : item.toUpperCase()}</button>)}
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-orb orb-one" aria-hidden="true" /><div className="hero-orb orb-two" aria-hidden="true" />
        <div className="hero-content" id="content">
          <div className="status"><i />{t.availability}</div>
          <p className="eyebrow">{t.eyebrow}</p>
          <h1>{t.heroTitle}</h1>
          <p className="hero-body">{t.heroBody}</p>
          <div className="hero-actions"><a className="button primary" href="#work">{t.seeWork}<span>↓</span></a><a className="button secondary" href={profileLinks.email}>{t.talk}<span>↗</span></a></div>
          <div className="hero-foot"><span className="world-mark" aria-hidden="true">🌐</span><span>{t.remoteAvailability}</span></div>
        </div>
        <div className="hero-side">
          <div className="profile-photo"><span className="photo-ring" aria-hidden="true"/><img src="images/douglas-soares.jpeg" alt="Douglas Soares" fetchPriority="high" /></div>
          <aside className="hero-console" aria-label="Resumo técnico">
            <div className="console-bar"><span/><span/><span/><b>douglas.profile</b></div>
            <div className="console-body"><p><i>01</i><span className="code-blue">const</span> developer = {'{'}</p><p><i>02</i>&nbsp;&nbsp;focus: <span className="code-green">&quot;real-world systems&quot;</span>,</p><p><i>03</i>&nbsp;&nbsp;stack: [<span className="code-green">&quot;software&quot;</span>, <span className="code-green">&quot;AI&quot;</span>],</p><p><i>04</i>&nbsp;&nbsp;connects: [<span className="code-green">&quot;APIs&quot;</span>, <span className="code-green">&quot;hardware&quot;</span>],</p><p><i>05</i>&nbsp;&nbsp;mindset: <span className="code-green">&quot;solve → validate → improve&quot;</span></p><p><i>06</i>{'}'};</p></div>
            <div className="console-status"><i/>SYSTEMS ONLINE <span>GLOBAL · REMOTE</span></div>
          </aside>
        </div>
      </section>

      <section className="metrics" aria-label="Destaques profissionais">{t.metrics.map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}</section>

      <section className="section about" id="about">
        <div className="section-heading"><p className="kicker">{t.aboutKicker}</p><h2>{t.aboutTitle}</h2></div>
        <div className="about-copy"><p className="lead">{t.aboutText}</p><aside><span>↳</span><p>{t.aboutAside}</p></aside></div>
        <div className="capabilities"><h3>{t.capabilitiesTitle}</h3><div className="capability-grid">{t.capabilities.map(([number, title, body]) => <article key={number}><span>{number}</span><h4>{title}</h4><p>{body}</p></article>)}</div></div>
      </section>

      <section className="section experience" id="experience">
        <div className="section-heading"><p className="kicker">{t.experienceKicker}</p><h2>{t.experienceTitle}</h2></div>
        <div className="timeline">{t.roles.map((role, index) => <article key={role.company}><div className="time-marker"><i className={index === 0 ? "current" : ""}/><span>{role.period}</span></div><div><p className="company">{role.company}</p><h3>{role.role}</h3><p>{role.text}</p></div></article>)}</div>
        <div className="credentials"><div><h3>{t.educationTitle}</h3>{t.education.map(([degree, school]) => <article key={degree}><span>{degree}</span><p>{school}</p></article>)}</div><div><h3>{t.languagesTitle}</h3>{t.languages.map((item, index) => <article key={item}><span>0{index + 1}</span><p>{item}</p></article>)}</div></div>
      </section>

      <section className="section work" id="work">
        <div className="section-heading work-heading"><p className="kicker">{t.workKicker}</p><h2>{t.workTitle}</h2><p>{t.workIntro}</p></div>
        <div className="project-list">{t.featured.map((project) => <article className="project" key={project.number}>
          <div className="project-media"><ProjectVisual type={project.visual}/><span className="project-number">{project.number}</span></div>
          <div className="project-content"><div className={`project-type ${project.kind}`}>{project.kind === "public" ? t.public : t.confidential}</div><h3>{project.title}</h3><p>{project.description}</p><strong className="project-result"><span>↳</span>{project.result}</strong><div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>{"link" in project ? <a className="project-link" href={project.link} target="_blank" rel="noreferrer">{t.repository}<span>↗</span></a> : <span className="private-note">◉ {t.privateNote}</span>}</div>
        </article>)}</div>
      </section>

      <section className="contact" id="contact"><div className="contact-grid" aria-hidden="true"/><p className="kicker">{t.contactKicker}</p><h2>{t.contactTitle}</h2><p>{t.contactText}</p><div className="contact-actions"><a className="button light" href={profileLinks.email}>{t.emailMe}<span>↗</span></a><a className="text-link" href={profileLinks.whatsapp} target="_blank" rel="noreferrer">{t.whatsapp}<span>↗</span></a><a className="text-link" href={profileLinks.linkedin} target="_blank" rel="noreferrer">{t.linkedin}<span>↗</span></a><a className="text-link" href={profileLinks.github} target="_blank" rel="noreferrer">{t.github}<span>↗</span></a></div></section>
      <footer><div className="brand"><span>DQ</span><b>Douglas Soares</b></div><p>{t.footer}</p><button className="back-to-top" type="button" onClick={scrollToTop} aria-label={t.backToTop}>↑ TOP</button></footer>
    </main>
  );
}
