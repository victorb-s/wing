const steps = [
  { number: '01', title: 'Explore', text: 'Descubra atividades e desafios que despertam curiosidade.', icon: '✦', tone: 'mint' },
  { number: '02', title: 'Aprenda', text: 'Interaja com experiências lúdicas que respeitam seu ritmo.', icon: '↗', tone: 'blue' },
  { number: '03', title: 'Conquiste', text: 'Acompanhe cada avanço e celebre sua própria evolução.', icon: '★', tone: 'gold' },
]

const benefits = [
  ['Aprendizado contínuo', 'Uma jornada que cresce com cada nova descoberta.'],
  ['Ritmo individual', 'Mais espaço para aprender do jeito que faz sentido.'],
  ['Autonomia', 'Pequenas escolhas que ajudam a criança a ganhar confiança.'],
  ['Acompanhamento', 'Uma visão clara da evolução para quem acompanha de perto.'],
]

function Arrow() {
  return <span aria-hidden="true">↗</span>
}

export default function Page() {
  return (
    <main className="site-shell">
      <nav className="navbar" aria-label="Navegação principal">
        <a className="brand" href="#top" aria-label="Wing, início"><span className="brand-mark"><img src="/adaptive-icon.png" alt="" /></span><span>Wing</span></a>
        <div className="nav-links">
          <a href="#wing">O Wing</a><a href="#como-funciona">Como funciona</a><a href="#beneficios">Benefícios</a><a href="#para-quem">Para quem é</a>
        </div>
        <a className="button button-dark nav-cta" href="#conheca">Conheça o Wing <Arrow /></a>
        <details className="mobile-menu"><summary aria-label="Abrir menu">☰</summary><div><a href="#wing">O Wing</a><a href="#como-funciona">Como funciona</a><a href="#beneficios">Benefícios</a><a href="#para-quem">Para quem é</a><a href="#conheca">Conheça o Wing</a></div></details>
      </nav>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-dot" /> Aprender é uma jornada</p>
          <h1>Cada criança aprende de um jeito. <em>O Wing acompanha todos eles.</em></h1>
          <p className="hero-lead">Uma jornada de aprendizado contínuo que transforma pequenas descobertas em grandes conquistas, respeitando o ritmo e as necessidades de cada criança.</p>
          <div className="hero-actions"><a className="button button-green" href="#conheca">Conheça o Wing <Arrow /></a><a className="text-link" href="#como-funciona">Descubra como funciona <Arrow /></a></div>
          <div className="hero-proof"><div className="avatar-stack"><span>✦</span><span>●</span><span>W</span></div><p>Feito para jornadas únicas<br /><strong>e conquistas reais.</strong></p></div>
        </div>
        <div className="hero-product" aria-label="Prévia da interface do Wing">
          <div className="float-card float-card-top"><span className="mini-star">★</span><div><strong>Nova conquista!</strong><small>Primeira descoberta</small></div></div>
          <div className="app-window">
            <div className="app-top"><span className="brand-mini">Wing</span><span className="app-profile"><img src="/adaptive-icon.png" alt="Ícone do Wing" /></span></div>
            <div className="app-greeting"><small>Olá, Lia</small><h3>Vamos continuar?</h3></div>
            <div className="path-label"><span>Sua trilha</span><b>35%</b></div><div className="progress"><i /></div>
            <div className="lesson-path"><div className="path-line" /><div className="lesson active"><span>✦</span><small>Começo</small></div><div className="lesson"><span>●</span><small>Descoberta</small></div><div className="lesson"><span>★</span><small>Próximo</small></div><div className="lesson locked"><span>⌁</span><small>Em breve</small></div></div>
            <div className="app-challenge"><div><small>DESAFIO DE HOJE</small><strong>Encontre a forma</strong></div><div className="shapes"><i /><i /><i /></div><button>Começar <Arrow /></button></div>
          </div>
          <div className="tucan-orbit"><img src="/adaptive-icon.png" alt="Ícone do aplicativo Wing" /></div>
          <span className="sparkle sparkle-one">✦</span><span className="sparkle sparkle-two">✦</span>
        </div>
      </section>

      <section className="intro section" id="wing"><div className="section-kicker">01 / O propósito</div><div className="intro-grid"><h2>Aprender não precisa ser igual <em>para todo mundo.</em></h2><div><p className="large-copy">Cada criança tem uma forma singular de aprender, interagir e desenvolver habilidades.</p><p>O Wing cria um ambiente acolhedor que valoriza essas diferenças e incentiva a evolução individual — sem pressa, sem comparação, sempre com espaço para descobrir.</p><a className="text-link" href="#como-funciona">Conheça nossa abordagem <Arrow /></a></div></div><div className="journey-cards"><div className="journey-card journey-main"><span className="card-label">Jornada única</span><h3>Seu caminho<br /><em>tem valor.</em></h3><img className="journey-tucan mirrored" src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sideTucan-hDHhcK8UsN0A66CHdT0IRPWk4HqC1j.svg" alt="Tucano do Wing" /></div><div className="journey-card journey-stat"><strong>100%</strong><span>no seu ritmo</span><div className="orbit-dots">• &nbsp;• &nbsp;•</div></div><div className="journey-card journey-note"><span>“</span><p>Não existe um único jeito de aprender. Existe o jeito que funciona para você.</p><small>— Princípio Wing</small></div></div></section>

      <section className="steps-section section" id="como-funciona"><div className="section-kicker">02 / Como funciona</div><div className="section-heading"><h2>Uma jornada feita de<br /><em>pequenas conquistas.</em></h2><p>Experiências que acompanham o desenvolvimento e tornam cada passo significativo.</p></div><div className="steps-grid">{steps.map((step) => <article className={`step-card ${step.tone}`} key={step.number}><div className="step-number">{step.number}</div><div className="step-icon">{step.icon}</div><h3>{step.title}</h3><p>{step.text}</p><a href="#conheca" aria-label={`Saiba mais sobre ${step.title}`}>Saiba mais <Arrow /></a></article>)}</div></section>

      <section className="adventure section"><div className="adventure-copy"><div className="section-kicker">03 / Gamificação</div><h2>Aprender pode ser<br /><em>uma aventura.</em></h2><p>Desafios, personagens e recompensas tornam o aprendizado uma experiência para se envolver — nunca para competir.</p><div className="feature-list"><span>↗</span><p><strong>Progresso visual</strong><br />Veja cada avanço ganhando forma.</p><span>★</span><p><strong>Conquistas reais</strong><br />Celebre o que foi descoberto.</p></div></div><div className="adventure-art"><div className="map-card"><span className="map-title">ALFABETIZAÇÃO INICIAL</span><div className="map-path"><i className="map-node done">✓</i><i className="map-node current">✦</i><i className="map-node">○</i><i className="map-node">○</i></div><div className="map-footer"><span>3 de 8 etapas</span><b>+ 20 XP</b></div></div><img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tucanTrophy-GbIMPog5RDciD3uFAtcORQHV27BFxC.svg" alt="Tucano celebrando uma conquista" /></div></section>

      <section className="benefits section" id="beneficios"><div className="section-kicker">04 / Benefícios</div><div className="benefits-layout"><h2>Mais do que aprender.<br /><em>Evoluir no próprio ritmo.</em></h2><div className="benefits-list">{benefits.map(([title, text], index) => <div className="benefit" key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{text}</p></div><Arrow /></div>)}</div></div></section>

      <section className="quote-section" id="para-quem"><div className="quote-bubble">✦</div><div className="quote-content"><p className="eyebrow">Para cada nova descoberta</p><h2>Cada conquista<br /><em>merece ser celebrada.</em></h2><p>Porque quando uma criança percebe que pode avançar do seu jeito, o aprendizado ganha um novo significado.</p><a className="button button-light" href="#conheca">Conheça o Wing <Arrow /></a></div><img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tucanEx1-bgZQwnlfLZeNXjw48lNprLzVQRnDu7.svg" alt="Tucano celebrando uma conquista" /></section>

      <section className="final-cta section" id="conheca"><div className="final-ornament">✦</div><p className="eyebrow">Sua jornada começa aqui</p><h2>O próximo passo da aprendizagem<br /><em>começa aqui.</em></h2><p>Descubra como o Wing pode transformar a jornada de aprendizado em uma experiência mais leve, divertida e significativa.</p><a className="button button-dark" href="#top">Conheça o Wing <Arrow /></a></section>

      <footer className="footer"><div><a className="brand" href="#top"><span className="brand-mark"><img src="/adaptive-icon.png" alt="" /></span><span>Wing</span></a><p>Aprendizado contínuo<br />para jornadas únicas.</p></div><div className="footer-links"><div><small>Explore</small><a href="#wing">O Wing</a><a href="#como-funciona">Como funciona</a><a href="#beneficios">Benefícios</a></div><div><small>Institucional</small><a href="#para-quem">Para quem é</a><a href="#conheca">Contato</a><a href="#conheca">Privacidade</a></div><div><small>Legal</small><a href="#conheca">Termos de uso</a><a href="#conheca">Acessibilidade</a></div></div><div className="footer-bottom"><span>© 2026 Wing. Uma jornada de cada vez.</span><span>Feito com cuidado.</span></div></footer>
    </main>
  )
}
