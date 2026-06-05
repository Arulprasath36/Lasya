/* About · Programs · Why Lasya */

function About() {
  return (
    <section id="about" className="section">
      <div className="wrap split-grid">
        <div className="reveal" style={{ position: 'relative' }}>
          <div style={{ width: '100%', height: 460, borderRadius: 24, overflow: 'hidden' }}>
            <Photo src="assets/photos/girl-blue-smile-web.jpg" alt="Young dancer smiling on stage in a blue lehenga" radius={24} pos="center 25%" />
          </div>
          <div style={{ position: 'absolute', right: -22, bottom: -22, width: 150, height: 150, borderRadius: 20, background: 'rgba(8,9,13,.7)', border: '1px solid var(--hairline)', backdropFilter: 'blur(10px)', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 18 }}>
            <span style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 22, color: 'var(--gold-400)', lineHeight: 1.1 }}>Lásya</span>
            <span style={{ fontSize: 12.5, color: 'var(--fg-3)', marginTop: 6, lineHeight: 1.4 }}>the dance of grace &amp; expression</span>
          </div>
        </div>
        <div>
          <div className="reveal"><Eyebrow>About Lasya</Eyebrow></div>
          <h2 className="reveal reveal-d1" style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'clamp(34px,4.4vw,60px)', lineHeight: 1.04, marginTop: 18 }}>
            More than steps —<br /><span style={{ fontStyle: 'italic' }}>it's expression.</span>
          </h2>
          <p className="reveal reveal-d2" style={{ fontSize: 18, lineHeight: 1.7, color: 'var(--fg-2)', marginTop: 22, maxWidth: 520 }}>
            At Lasya, every class is a stage. We blend the joy of Bollywood with real technique — building confidence, fitness, cultural connection, and the kind of stage presence that stays with you long after the music stops.
          </p>
          <div className="reveal reveal-d3" style={{ display: 'flex', gap: 28, marginTop: 30 }}>
            {[['hand-heart', 'Confidence'], ['globe', 'Culture'], ['dumbbell', 'Fitness'], ['star', 'Stage presence']].map(([ic, t]) => (
              <div key={t} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <Icon name={ic} size={26} color="var(--gold-500)" strokeWidth={1.5} />
                <span style={{ fontSize: 14, color: 'var(--fg-2)' }}>{t}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const programs = [
  { t: 'Kids Bollywood', s: 'Ages 5–11', d: 'Playful choreography, rhythm games, and big-smile expression for our youngest stars.', c: 'var(--teal-500)', ic: 'baby' },
  { t: 'Teen Dance', s: 'Ages 12–17', d: 'High-energy routines, formations, and performance craft that build real confidence.', c: 'var(--emerald-500)', ic: 'zap' },
  { t: 'Adult Bollywood Fitness', s: 'All levels', d: 'Sweat, smile, and learn — a joyful workout set to the songs you love.', c: 'var(--magenta-500)', ic: 'heart-pulse' },
  { t: 'Wedding & Event', s: 'Choreography', d: 'Custom sangeet and event choreography that gets every guest on the floor.', c: 'var(--royal-500)', ic: 'party-popper' },
];

function ProgramCard({ p, i }) {
  return (
    <article className={`lift reveal reveal-d${(i % 3) + 1}`} style={{ background: 'var(--surface-1)', border: '1px solid var(--hairline)', borderRadius: 'var(--r-lg)', padding: 26, boxShadow: 'var(--shadow-md)' }}>
      <div style={{ width: 52, height: 52, borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', background: `color-mix(in srgb, ${p.c} 16%, transparent)`, border: `1px solid color-mix(in srgb, ${p.c} 45%, transparent)`, color: p.c, fontSize: 27 }}>
        <Icon name={p.ic} size={26} color={p.c} />
      </div>
      <div style={{ fontSize: 12.5, color: 'var(--fg-3)', marginTop: 18, letterSpacing: '.04em', textTransform: 'uppercase' }}>{p.s}</div>
      <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 28, marginTop: 4 }}>{p.t}</h3>
      <p style={{ fontSize: 14.5, lineHeight: 1.6, color: 'var(--fg-2)', marginTop: 10, textWrap: 'pretty' }}>{p.d}</p>
      <div style={{ marginTop: 18, height: 3, borderRadius: 3, background: `linear-gradient(90deg, ${p.c}, transparent)` }} />
      <a href="#contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 7, marginTop: 18, fontSize: 14, color: 'var(--gold-400)' }}>
        Enroll <Icon name="arrow-right" size={15} />
      </a>
    </article>
  );
}

function Programs() {
  return (
    <section id="programs" className="section">
      <div className="wrap">
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 18 }}>
          <div>
            <div className="reveal"><Eyebrow>Our Programs</Eyebrow></div>
            <h2 className="reveal reveal-d1" style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'clamp(32px,4vw,54px)', marginTop: 16 }}>Find your rhythm</h2>
          </div>
          <p className="reveal reveal-d2" style={{ fontSize: 16, color: 'var(--fg-2)', maxWidth: 360, lineHeight: 1.6 }}>From first steps to the spotlight — a program for every age and every stage.</p>
        </div>
        <div className="grid-4" style={{ marginTop: 48 }}>
          {programs.map((p, i) => <ProgramCard key={p.t} p={p} i={i} />)}
        </div>
      </div>
    </section>
  );
}

const reasons = [
  { ic: 'drama', t: 'Expression first', d: 'We teach the face, the hands, the feeling — not just the feet.' },
  { ic: 'users', t: 'Formations & teamwork', d: 'Dance as a troupe; learn to move as one and shine together.' },
  { ic: 'mic-vocal', t: 'Real performances', d: 'Showcases and events give every student a true stage moment.' },
  { ic: 'medal', t: 'Confidence that lasts', d: 'Poise and presence that carry into school, work, and life.' },
];

function WhyLasya() {
  return (
    <section className="section sec-why">
      <div className="wrap">
        <div className="reveal" style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto' }}>
          <Eyebrow style={{ justifyContent: 'center' }}>Why Students Love Lasya</Eyebrow>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'clamp(32px,4vw,54px)', marginTop: 16 }}>Learn choreography, expressions, formations & performance confidence.</h2>
        </div>
        <div className="grid-4" style={{ marginTop: 54 }}>
          {reasons.map((r, i) => (
            <div key={r.t} className={`reveal reveal-d${(i % 4) + 1}`} style={{ textAlign: 'center', padding: '0 8px' }}>
              <div style={{ width: 64, height: 64, margin: '0 auto', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--surface-1)', border: '1px solid var(--hairline)', color: 'var(--gold-400)', fontSize: 30 }}>
                <Icon name={r.ic} size={30} strokeWidth={1.4} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-sans)', fontWeight: 500, fontSize: 18, marginTop: 18 }}>{r.t}</h3>
              <p style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--fg-3)', marginTop: 8, textWrap: 'pretty' }}>{r.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { About, Programs, WhyLasya });
