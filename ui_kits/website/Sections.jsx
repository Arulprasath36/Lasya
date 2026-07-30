/* About · Programs · Why Madhu Dance Academy */

function About() {
  return (
    <section id="about" className="section">
      <div className="wrap split-grid about-grid">
        <div className="reveal" style={{ position: 'relative' }}>
          <div className="about-photo">
            <Photo src="assets/photos/madhu-group-photo.jpg" alt="Madhu Dance Academy students and instructor together on stage" radius={24} pos="center center" />
          </div>
        </div>
        <div>
          <div className="reveal"><Eyebrow>About Madhu Dance Academy</Eyebrow></div>
          <h2 className="reveal reveal-d1" style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'clamp(34px,4.4vw,60px)', lineHeight: 1.04, marginTop: 18 }}>
            From First Steps<br /><span style={{ fontStyle: 'italic' }}>to Stage Lights.</span>
          </h2>
          <p className="reveal reveal-d2" style={{ fontSize: 18, lineHeight: 1.7, color: 'var(--fg-2)', marginTop: 22, maxWidth: 520 }}>
            Every dancer's journey begins with a single step. At Madhu Dance Academy, children, teens, and adults build confidence, learn exciting Bollywood choreography, make new friends, and grow into performers who shine on stage.
          </p>
          <div className="reveal reveal-d2" style={{ marginTop: 26 }}>
            <a href="about.html"><Button variant="secondary" icon="arrow-right">Read more about us</Button></a>
          </div>
        </div>
      </div>
    </section>
  );
}

const programs = [
  { t: 'Kids Bollywood', d: 'A joyful introduction to Bollywood dance through energetic music, exciting choreography, and a welcoming environment where kids learn, laugh, and grow together.', c: 'var(--teal-500)', ic: 'baby' },
  { t: 'Teen Dance', d: 'Build confidence, sharpen your technique, make new friends, and take your performance to the next level with high-energy Bollywood dance.', c: 'var(--emerald-500)', ic: 'zap' },
  { t: 'Adult Bollywood Fitness', d: 'Take a break from the everyday hustle, get moving, and enjoy a high-energy Bollywood workout that leaves you smiling long after class ends.', c: 'var(--magenta-500)', ic: 'heart-pulse' },
  { t: 'Wedding & Event', d: 'Personalized choreography that brings family and friends together, creating performances everyone will remember long after the celebration ends.', c: 'var(--royal-500)', ic: 'party-popper' },
];

function ProgramCard({ p, i, onJoin }) {
  return (
    <article className={`lift reveal reveal-d${(i % 3) + 1}`} style={{ background: 'var(--surface-1)', border: '1px solid var(--hairline)', borderRadius: 'var(--r-lg)', padding: 26, boxShadow: 'var(--shadow-md)', display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div style={{ width: 52, height: 52, borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', background: `color-mix(in srgb, ${p.c} 16%, transparent)`, border: `1px solid color-mix(in srgb, ${p.c} 45%, transparent)`, color: p.c, fontSize: 27 }}>
        <Icon name={p.ic} size={26} color={p.c} />
      </div>
      <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 28, marginTop: 18 }}>{p.t}</h3>
      <p style={{ fontSize: 14.5, lineHeight: 1.6, color: 'var(--fg-2)', marginTop: 10, textWrap: 'pretty' }}>{p.d}</p>
      <div style={{ marginTop: 'auto', paddingTop: 18 }}>
        <div style={{ height: 3, borderRadius: 3, background: `linear-gradient(90deg, ${p.c}, transparent)` }} />
        <button onClick={() => onJoin(p.t)} style={{ display: 'inline-flex', alignItems: 'center', gap: 7, marginTop: 18, fontSize: 14, color: 'var(--gold-400)', background: 'none', border: 'none', cursor: 'pointer', padding: 0, fontFamily: 'inherit' }}>
          Enroll <Icon name="arrow-right" size={15} />
        </button>
      </div>
    </article>
  );
}

function Programs({ onJoin }) {
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
          {programs.map((p, i) => <ProgramCard key={p.t} p={p} i={i} onJoin={onJoin} />)}
        </div>
      </div>
    </section>
  );
}

const reasons = [
  { ic: 'sparkles', t: 'Confidence That Lasts', d: 'Every class helps students become more confident, expressive, and comfortable performing—on stage and in everyday life.' },
  { ic: 'users', t: 'New Friends, Lasting Memories', d: 'Dance is better together. Students build meaningful friendships while learning, laughing, and celebrating every milestone as a team.' },
  { ic: 'drama', t: 'Performance Opportunities', d: 'From recitals to cultural events and community showcases, students gain real stage experience in a fun and encouraging environment.' },
  { ic: 'heart', t: 'A Place to Belong', d: 'More than a studio, Madhu Dance Academy is a welcoming community where every dancer feels supported, encouraged, and inspired to be their best.' },
];

function WhyMadhu() {
  return (
    <section className="section sec-why">
      <div className="wrap">
        <div className="reveal" style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto' }}>
          <Eyebrow style={{ justifyContent: 'center' }}>Why Families Love Madhu Dance Academy</Eyebrow>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'clamp(32px,4vw,54px)', marginTop: 16 }}>More than dance lessons.<br />A place to learn, grow, and shine.</h2>
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

Object.assign(window, { About, Programs, WhyMadhu });
