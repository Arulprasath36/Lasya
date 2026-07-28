/* Nav + Hero */
const navLinks = ['About', 'Programs', 'Gallery', 'Contact'];

/* Decorative stage-rig spotlights: a truss bar with fanned can fixtures hanging
   above the hero photo frame, each throwing a soft beam — pure ambiance, never
   blended onto the photo itself. */
function StageLights() {
  const fixtures = [
    { left: '10%', angle: -24, delay: '0s' },
    { left: '30%', angle: -12, delay: '-1.2s' },
    { left: '50%', angle: 0, delay: '-2.4s' },
    { left: '70%', angle: 12, delay: '-3.6s' },
    { left: '90%', angle: 24, delay: '-4.8s' },
  ];
  return (
    <div className="stage-rig" aria-hidden="true">
      <div className="stage-truss" />
      {fixtures.map((f, idx) => (
        <div key={idx} className="stage-fixture-mount" style={{ left: f.left, transform: `rotate(${f.angle}deg)` }}>
          <div className="fixture-bracket" />
          <div className="stage-fixture-sway" style={{ animationDelay: f.delay }}>
            <div className="fixture-can" />
            <div className="fixture-glow" />
            <div className="fixture-beam" />
          </div>
        </div>
      ))}
    </div>
  );
}

function Nav({ onJoin }) {
  const scrolled = useScrolled();
  const [open, setOpen] = useState(false);
  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 84 }}>
        <a href="#top" style={{ display: 'flex', alignItems: 'center' }} aria-label="Madhu Dance Academy — Bollywood Dance School">
          <img src="assets/logo-madhu-nav.png" style={{ height: 80 }} alt="Madhu Dance Academy" />
        </a>
        <div className="hide-sm" style={{ display: 'flex', gap: 32 }}>
          {navLinks.map((l) => <a key={l} className="nav-link" href={`#${l.toLowerCase()}`}>{l}</a>)}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <Button onClick={onJoin} style={{ padding: '10px 22px', fontSize: 14 }}>Join a Class</Button>
        </div>
      </div>
    </nav>
  );
}

function Hero({ onJoin, slideshow = true }) {
  return (
    <header id="top" className="section" style={{ paddingTop: 168, paddingBottom: 96, minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
      {/* motion-art: flowing liquid gradient */}
      <MotionArt opacity={0.72} />
      <Particles count={30} />

      <div className="wrap hero-grid" style={{ position: 'relative', zIndex: 2 }}>
        <div>
          <div className="reveal in"><Eyebrow>Bollywood Dance School</Eyebrow></div>
          <h1 className="reveal reveal-d1" style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'clamp(46px,4.2vw,76px)', lineHeight: 1.04, letterSpacing: '-.015em', marginTop: 22 }}>
            <span style={{ display: 'block', whiteSpace: 'nowrap' }}>
              Move with <span style={{ color: 'var(--teal-400)' }}>Grace</span>
            </span>
            <span style={{ display: 'block', whiteSpace: 'nowrap' }}>
              Dance with <span style={{ color: 'var(--magenta-500)' }}>Passion</span>
            </span>
            <span style={{ display: 'block', whiteSpace: 'nowrap', fontStyle: 'italic', color: 'var(--gold-400)', marginTop: 8 }}>Own the Stage.</span>
          </h1>
          <p className="reveal reveal-d2" style={{ fontFamily: 'var(--font-sans)', fontWeight: 300, fontSize: 'clamp(18px,1.7vw,22px)', lineHeight: 1.55, color: 'var(--fg-2)', marginTop: 26, maxWidth: 520 }}>
            A welcoming community where children,
teens, and adults grow through movement,
creativity, and unforgettable performances.
          </p>
          <div className="reveal reveal-d3" style={{ display: 'flex', gap: 14, marginTop: 36, flexWrap: 'wrap' }}>
            <Button onClick={onJoin} icon="sparkles">Join a Class</Button>
            <a href="#programs"><Button variant="secondary">View Programs</Button></a>
          </div>
          <div className="reveal reveal-d3" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '10px 14px', borderRadius: 'var(--r-pill)', background: 'rgba(8,9,13,.48)', border: '1px solid var(--hairline)', marginTop: 18 }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--teal-400)', boxShadow: '0 0 10px var(--teal-400)' }} />
            <span style={{ fontSize: 13, color: 'var(--fg-2)' }}>Now enrolling — Summer batch</span>
          </div>
          <div className="reveal reveal-d4" style={{ display: 'flex', gap: 30, marginTop: 44 }}>
            {[['12+', 'Years teaching'], ['600+', 'Students on stage'], ['4', 'Programs']].map(([n, l]) => (
              <div key={l}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 38, fontWeight: 600, color: 'var(--fg-1)' }}>{n}</div>
                <div style={{ fontSize: 13, color: 'var(--fg-3)', marginTop: 2 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* hero portrait — feather-framed image slot */}
        <div className="reveal reveal-d2 hero-aside" style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', inset: -20, borderRadius: 'var(--r-xl)', background: 'radial-gradient(120% 100% at 50% 0%, var(--gold-500) 0%, transparent 65%)', filter: 'blur(36px)', opacity: .3 }} />
          <StageLights />
          {slideshow ? <HeroSlideshow /> : (
            <div style={{ position: 'relative', width: '100%', height: '100%', minHeight: 480, borderRadius: 28, overflow: 'hidden', border: '1px solid rgba(216,178,90,.5)', boxShadow: '0 0 0 1px rgba(7,8,13,.6), 0 32px 64px -24px rgba(0,0,0,.7)' }}>
              <Photo src="assets/photos/silhouette-moon-web.jpg" alt="Dancer in silhouette against a glowing moon" radius={28} pos="center 30%" />
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

/* Hero portrait slideshow — slow cinematic cross-fade (not a clicky carousel).
   Headline/CTA stay fixed; only the image cycles. Reduced-motion → first frame only. */
const heroShots = [
  { src: 'silhouette-moon', pos: 'center 30%', alt: 'Dancer in silhouette against a glowing moon' },
  { src: 'boy-yellow-point', pos: 'center bottom', alt: 'Young dancer mid-pose, arm raised' },
  { src: 'girl-checkered', pos: 'center bottom', alt: 'Dancer in a checkered costume' },
  { src: 'girl-blue-smile', pos: 'center 22%', alt: 'Young dancer smiling on stage in a blue lehenga' },
  { src: 'boy-white-shirt', pos: 'center bottom', alt: 'Young dancer in a white shirt performing on stage' },
];

function HeroSlideshow({ interval = 4200 }) {
  const [i, setI] = useState(0);
  const reduce = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  useEffect(() => {
    if (reduce || heroShots.length < 2) return;
    const id = setInterval(() => setI((n) => (n + 1) % heroShots.length), interval);
    return () => clearInterval(id);
  }, [interval, reduce]);
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', minHeight: 480, borderRadius: 28, overflow: 'hidden', background: 'var(--ink-800)', border: '1px solid rgba(216,178,90,.5)', boxShadow: '0 0 0 1px rgba(7,8,13,.6), 0 32px 64px -24px rgba(0,0,0,.7)' }}>
      {heroShots.map((s, idx) => (
        <img key={s.src} src={`assets/photos/${s.src}-web.jpg`} alt={s.alt} loading={idx === 0 ? 'eager' : 'lazy'}
          style={{
            position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: s.pos,
            opacity: idx === i ? 1 : 0, transition: 'opacity 1400ms var(--ease-soft)',
            transform: idx === i && !reduce ? 'scale(1.06)' : 'scale(1)',
            transitionProperty: 'opacity, transform',
            transitionDuration: '1400ms, 6500ms',
          }} />
      ))}
      {/* progress dots */}
      <div style={{ position: 'absolute', top: 16, right: 18, display: 'flex', gap: 6, zIndex: 3 }}>
        {heroShots.map((_, idx) => (
          <button key={idx} onClick={() => setI(idx)} aria-label={`Show photo ${idx + 1}`}
            style={{ width: idx === i ? 22 : 7, height: 7, borderRadius: 999, border: 'none', cursor: 'pointer', padding: 0,
              background: idx === i ? 'var(--gold-400)' : 'rgba(245,239,225,.45)', transition: 'all 500ms var(--ease-soft)' }} />
        ))}
      </div>
    </div>
  );
}

Object.assign(window, { Nav, Hero, HeroSlideshow });
