/* Final CTA · Register modal · Footer */

function Field({ label, children }) {
  return (
    <label style={{ display: 'block' }}>
      <span style={{ display: 'block', fontSize: 12.5, color: 'var(--fg-3)', marginBottom: 6, letterSpacing: '.03em' }}>{label}</span>
      {children}
    </label>
  );
}
const fieldStyle = { width: '100%', background: 'var(--surface-1)', border: '1px solid var(--hairline)', borderRadius: 'var(--r-md)', padding: '13px 15px', color: 'var(--fg-1)', fontSize: 15, fontFamily: 'var(--font-sans)', outline: 'none' };

function RegisterModal({ open, onClose }) {
  const [done, setDone] = useState(false);
  useEffect(() => { if (open) setDone(false); }, [open]);
  if (!open) return null;
  return (
    <div onClick={onClose} style={{ position: 'fixed', inset: 0, zIndex: 100, background: 'rgba(4,5,9,.72)', backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
      <div onClick={(e) => e.stopPropagation()} style={{ width: 'min(520px,100%)', background: 'var(--ink-700)', border: '1px solid var(--hairline)', borderRadius: 'var(--r-lg)', boxShadow: 'var(--shadow-lg)', overflow: 'hidden' }}>
        <div style={{ height: 4, background: 'var(--grad-peacock)' }} />
        <div style={{ padding: 32 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <Eyebrow>Register</Eyebrow>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 32, marginTop: 12 }}>Join a Class</h3>
            </div>
            <button onClick={onClose} aria-label="Close" style={{ background: 'var(--surface-1)', border: '1px solid var(--hairline)', borderRadius: '50%', width: 38, height: 38, color: 'var(--fg-2)', cursor: 'pointer', fontSize: 18, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Icon name="x" size={18} /></button>
          </div>

          {done ? (
            <div style={{ textAlign: 'center', padding: '28px 0 8px' }}>
              <div style={{ width: 60, height: 60, margin: '0 auto', borderRadius: '50%', background: 'color-mix(in srgb, var(--emerald-500) 18%, transparent)', border: '1px solid var(--emerald-500)', color: 'var(--emerald-400)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 30 }}><Icon name="check" size={30} /></div>
              <h4 style={{ fontFamily: 'var(--font-display)', fontSize: 26, marginTop: 18 }}>See you on the floor!</h4>
              <p style={{ color: 'var(--fg-2)', fontSize: 15, marginTop: 8 }}>We'll email you class times shortly.</p>
              <div style={{ marginTop: 22 }}><Button onClick={onClose}>Done</Button></div>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setDone(true); }} style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 22 }}>
              <Field label="Student name"><input style={fieldStyle} placeholder="Aanya Sharma" required /></Field>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                <Field label="Email"><input type="email" style={fieldStyle} placeholder="you@email.com" required /></Field>
                <Field label="Program">
                  <select style={{ ...fieldStyle, appearance: 'none' }}>
                    <option>Kids Bollywood</option><option>Teen Dance</option><option>Adult Bollywood Fitness</option><option>Wedding &amp; Event</option>
                  </select>
                </Field>
              </div>
              <Button type="submit" icon="sparkles" style={{ justifyContent: 'center', marginTop: 6 }}>Register Now</Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

function FinalCTA({ onJoin }) {
  return (
    <section id="contact" className="section" style={{ position: 'relative', overflow: 'hidden', textAlign: 'center' }}>
      <MotionArt opacity={0.42} />
      <Particles count={18} />
      <div className="wrap reveal" style={{ position: 'relative', zIndex: 2, maxWidth: 760 }}>
        <Eyebrow style={{ justifyContent: 'center' }}>Contact / Register</Eyebrow>
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'clamp(42px,6vw,88px)', lineHeight: 1, marginTop: 22 }}>
          Ready to dance<br />with <span style={{ fontStyle: 'italic', color: 'var(--gold-400)' }}>Lasya?</span>
        </h2>
        <p style={{ fontSize: 19, color: 'var(--fg-2)', marginTop: 22, fontWeight: 300 }}>Your first class is the start of something joyful.</p>
        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', marginTop: 36, flexWrap: 'wrap' }}>
          <Button onClick={onJoin} icon="sparkles">Register Now</Button>
          <Button variant="secondary" icon="phone-call">Contact Us</Button>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--hairline)', background: 'var(--ink-800)' }}>
      <div className="wrap footer-grid" style={{ padding: '56px 32px 40px' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src="assets/logo-lasya.png" style={{ height: 92 }} alt="Lasya — Bollywood Dance School" />
          </div>
          <p style={{ color: 'var(--fg-3)', fontSize: 14.5, marginTop: 16, maxWidth: 320, lineHeight: 1.6 }}>Where rhythm becomes expression. A Bollywood dance school for kids, teens, and adults.</p>
          <div style={{ display: 'flex', gap: 12, marginTop: 20 }}>
            {['instagram', 'youtube', 'message-circle'].map((ic) => (
              <a key={ic} href="#" style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--surface-1)', border: '1px solid var(--hairline)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--fg-2)', fontSize: 18 }}><Icon name={ic} size={18} /></a>
            ))}
          </div>
        </div>
        {[['Explore', ['About', 'Programs', 'Gallery', 'Instructor']], ['Visit', ['Studio hours', 'Find us', 'Contact', 'Register']]].map(([h, items]) => (
          <div key={h}>
            <div style={{ fontFamily: 'var(--font-label)', textTransform: 'uppercase', letterSpacing: '.2em', fontSize: 12.5, color: 'var(--gold-500)' }}>{h}</div>
            <ul style={{ listStyle: 'none', marginTop: 16, display: 'flex', flexDirection: 'column', gap: 11 }}>
              {items.map((it) => <li key={it}><a href="#" className="nav-link" style={{ fontSize: 14.5 }}>{it}</a></li>)}
            </ul>
          </div>
        ))}
      </div>
      <div className="wrap" style={{ padding: '20px 32px', borderTop: '1px solid var(--hairline)', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 10 }}>
        <span style={{ fontSize: 13, color: 'var(--fg-3)' }}>© 2026 Lasya Dance School</span>
        <span style={{ fontSize: 13, color: 'var(--fg-3)' }}>Made with rhythm ✦</span>
      </div>
    </footer>
  );
}

Object.assign(window, { RegisterModal, FinalCTA, Footer });
