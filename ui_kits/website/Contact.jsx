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

const FORM_ENDPOINT = 'https://formsubmit.co/ajax/lasyadancefitness@gmail.com';

async function submitForm(fields) {
  const res = await fetch(FORM_ENDPOINT, {
    method: 'POST',
    headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
    body: JSON.stringify({
      ...fields,
      _url: window.location.href.split('#')[0],
      _template: 'table',
    }),
  });

  let data = null;
  try {
    data = await res.json();
  } catch {
    // Preserve the HTTP status below when the service returns a non-JSON error.
  }

  if (!res.ok || data?.success === false) {
    const detail = data?.message || `FormSubmit returned HTTP ${res.status}.`;
    console.error('FormSubmit submission failed:', { status: res.status, data });
    throw new Error(detail);
  }

  return data;
}

function RegisterModal({ open, onClose, initialProgram = 'Kids Bollywood' }) {
  const [status, setStatus] = useState('idle'); // idle | submitting | done | error
  const [errorMessage, setErrorMessage] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [program, setProgram] = useState(initialProgram);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (open) { setStatus('idle'); setErrorMessage(''); setName(''); setEmail(''); setMobile(''); setProgram(initialProgram); setMessage(''); }
  }, [open, initialProgram]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');
    try {
      await submitForm({
        name,
        email,
        mobile,
        program,
        message,
        _subject: `New ${program} registration from Madhu Dance Academy website`,
      });
      setStatus('done');
    } catch (error) {
      setErrorMessage(error.message);
      setStatus('error');
    }
  };

  if (!open) return null;
  return (
    <div className="modal-overlay" onClick={onClose} style={{ position: 'fixed', inset: 0, zIndex: 100, background: 'rgba(4,5,9,.72)', backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()} style={{ width: 'min(520px,100%)', background: 'var(--ink-700)', border: '1px solid var(--hairline)', borderRadius: 'var(--r-lg)', boxShadow: 'var(--shadow-lg)', overflow: 'hidden' }}>
        <div style={{ height: 4, background: 'var(--grad-peacock)' }} />
        <div className="modal-body" style={{ padding: 32 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <Eyebrow>Register</Eyebrow>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 32, marginTop: 12 }}>Join a Class</h3>
            </div>
            <button onClick={onClose} aria-label="Close" style={{ background: 'var(--surface-1)', border: '1px solid var(--hairline)', borderRadius: '50%', width: 38, height: 38, color: 'var(--fg-2)', cursor: 'pointer', fontSize: 18, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Icon name="x" size={18} /></button>
          </div>

          {status === 'done' ? (
            <div style={{ textAlign: 'center', padding: '28px 0 8px' }}>
              <div style={{ width: 60, height: 60, margin: '0 auto', borderRadius: '50%', background: 'color-mix(in srgb, var(--emerald-500) 18%, transparent)', border: '1px solid var(--emerald-500)', color: 'var(--emerald-400)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Icon name="check" size={30} /></div>
              <h4 style={{ fontFamily: 'var(--font-display)', fontSize: 26, marginTop: 18 }}>Registration received!</h4>
              <p style={{ color: 'var(--fg-2)', fontSize: 15, marginTop: 8 }}>Thank you! We will get back to you within 24 hours.</p>
              <div style={{ marginTop: 22 }}><Button onClick={onClose}>Done</Button></div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 22 }}>
              <Field label="Student name *">
                <input style={fieldStyle} placeholder="Aanya Sharma" required value={name} onChange={e => setName(e.target.value)} />
              </Field>
              <Field label="Email *">
                <input type="email" style={fieldStyle} placeholder="you@email.com" required value={email} onChange={e => setEmail(e.target.value)} />
              </Field>
              <div className="form-two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                <Field label="Mobile number">
                  <input type="tel" style={fieldStyle} placeholder="98765 43210" value={mobile} onChange={e => setMobile(e.target.value)} pattern="[\d\s\+\(\)\-]{10,15}" title="Please enter a valid phone number (10–15 digits)" />
                </Field>
                <Field label="Interested In">
                  <select style={{ ...fieldStyle, appearance: 'none' }} value={program} onChange={e => setProgram(e.target.value)}>
                    <option>Kids Bollywood</option><option>Teen Dance</option><option>Adult Bollywood Fitness</option><option>Wedding &amp; Event</option>
                  </select>
                </Field>
              </div>
              <Field label="Message">
                <textarea style={{ ...fieldStyle, resize: 'vertical', minHeight: 90 }} placeholder="Any questions or details you'd like to share… (optional)" value={message} onChange={e => setMessage(e.target.value)} rows={3} />
              </Field>
              {status === 'error' && (
                <p role="alert" style={{ fontSize: 13, color: 'var(--magenta-400)', margin: 0 }}>
                  Unable to send: {errorMessage || 'Please try again or email us directly.'}
                </p>
              )}
              <Button type="submit" icon={status === 'submitting' ? 'loader' : 'sparkles'} style={{ justifyContent: 'center', marginTop: 6 }} disabled={status === 'submitting'}>
                {status === 'submitting' ? 'Sending…' : 'Register Now'}
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

function ContactModal({ open, onClose }) {
  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (open) { setStatus('idle'); setErrorMessage(''); setName(''); setEmail(''); setMessage(''); }
  }, [open]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');
    try {
      await submitForm({ name, email, message, _subject: 'New message from Madhu Dance Academy website' });
      setStatus('done');
    } catch (error) {
      setErrorMessage(error.message);
      setStatus('error');
    }
  };

  if (!open) return null;
  return (
    <div className="modal-overlay" onClick={onClose} style={{ position: 'fixed', inset: 0, zIndex: 100, background: 'rgba(4,5,9,.72)', backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()} style={{ width: 'min(480px,100%)', background: 'var(--ink-700)', border: '1px solid var(--hairline)', borderRadius: 'var(--r-lg)', boxShadow: 'var(--shadow-lg)', overflow: 'hidden' }}>
        <div style={{ height: 4, background: 'var(--grad-peacock)' }} />
        <div className="modal-body" style={{ padding: 32 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <Eyebrow>Get in touch</Eyebrow>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 32, marginTop: 12 }}>Contact Us</h3>
              <a href="https://maps.app.goo.gl/mbDFceyWnrHENiw46" target="_blank" rel="noopener noreferrer" className="nav-link" style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginTop: 12, color: 'var(--gold-400)', fontSize: 14 }}>
                <Icon name="map-pin" size={16} style={{ marginTop: 2, flexShrink: 0 }} />
                <span style={{ textDecoration: 'underline', textUnderlineOffset: 3, textDecorationColor: 'rgba(236,203,121,.45)' }}>104 Schubert Dr (Suite B), Downingtown, PA</span>
              </a>
            </div>
            <button onClick={onClose} aria-label="Close" style={{ background: 'var(--surface-1)', border: '1px solid var(--hairline)', borderRadius: '50%', width: 38, height: 38, color: 'var(--fg-2)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Icon name="x" size={18} /></button>
          </div>

          {status === 'done' ? (
            <div style={{ textAlign: 'center', padding: '28px 0 8px' }}>
              <div style={{ width: 60, height: 60, margin: '0 auto', borderRadius: '50%', background: 'color-mix(in srgb, var(--emerald-500) 18%, transparent)', border: '1px solid var(--emerald-500)', color: 'var(--emerald-400)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Icon name="check" size={30} /></div>
              <h4 style={{ fontFamily: 'var(--font-display)', fontSize: 26, marginTop: 18 }}>Message sent!</h4>
              <p style={{ color: 'var(--fg-2)', fontSize: 15, marginTop: 8 }}>We'll get back to you as soon as possible.</p>
              <div style={{ marginTop: 22 }}><Button onClick={onClose}>Done</Button></div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 22 }}>
              <Field label="Name *">
                <input style={fieldStyle} placeholder="Your name" required value={name} onChange={e => setName(e.target.value)} />
              </Field>
              <Field label="Email *">
                <input type="email" style={fieldStyle} placeholder="you@email.com" required value={email} onChange={e => setEmail(e.target.value)} />
              </Field>
              <Field label="Message *">
                <textarea style={{ ...fieldStyle, resize: 'vertical', minHeight: 110 }} placeholder="How can we help you?" required value={message} onChange={e => setMessage(e.target.value)} rows={4} />
              </Field>
              {status === 'error' && (
                <p role="alert" style={{ fontSize: 13, color: 'var(--magenta-400)', margin: 0 }}>
                  Unable to send: {errorMessage || 'Please try again or email us directly.'}
                </p>
              )}
              <Button type="submit" icon={status === 'submitting' ? 'loader' : 'send'} style={{ justifyContent: 'center', marginTop: 6 }} disabled={status === 'submitting'}>
                {status === 'submitting' ? 'Sending…' : 'Send Message'}
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

function FinalCTA({ onJoin, onContact }) {
  return (
    <section id="contact" className="section" style={{ position: 'relative', overflow: 'hidden', textAlign: 'center' }}>
      <MotionArt opacity={0.42} />
      <Particles count={18} />
      <div className="wrap reveal" style={{ position: 'relative', zIndex: 2, maxWidth: 760 }}>
        <Eyebrow style={{ justifyContent: 'center' }}>Contact / Register</Eyebrow>
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'clamp(42px,6vw,88px)', lineHeight: 1, marginTop: 22 }}>
          Ready to dance<br />with <span style={{ fontStyle: 'italic', color: 'var(--gold-400)' }}>Madhu Dance Academy?</span>
        </h2>
        <p style={{ fontSize: 19, color: 'var(--fg-2)', marginTop: 22, fontWeight: 300 }}>Your first class is the start of something joyful.</p>
        <p style={{ fontSize: 16, color: 'var(--fg-3)', marginTop: 28, lineHeight: 1.7, maxWidth: 560, margin: '28px auto 0' }}>
          Have a question? Curious about classes?<br />
          Reach out anytime. No pressure, no obligations,<br />
          and no endless promotional calls.
        </p>
        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', marginTop: 36, flexWrap: 'wrap' }}>
          <Button onClick={onJoin} icon="sparkles">Register Now</Button>
          <Button onClick={onContact} variant="secondary" icon="phone-call">Contact Us</Button>
        </div>
      </div>
    </section>
  );
}

function Footer({ onContact, onJoin }) {
  return (
    <footer style={{ borderTop: '1px solid var(--hairline)', background: 'var(--ink-800)', marginTop: 0 }}>
      <div className="wrap footer-grid" style={{ padding: '56px 32px 40px' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src="assets/logo-madhu.png" style={{ height: 170 }} alt="Madhu Dance Academy — Bollywood Dance School" />
          </div>
          <p style={{ color: 'var(--fg-2)', fontSize: 14.5, marginTop: 16, maxWidth: 320, lineHeight: 1.6 }}>From First Steps to Stage Lights. A Bollywood dance school for kids, teens, and adults.</p>
          <a href="https://maps.app.goo.gl/mbDFceyWnrHENiw46" target="_blank" rel="noopener noreferrer" className="nav-link" style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginTop: 18, color: 'var(--gold-400)', fontSize: 14 }}>
            <Icon name="map-pin" size={16} style={{ marginTop: 2, flexShrink: 0 }} />
            <span style={{ textDecoration: 'underline', textUnderlineOffset: 3, textDecorationColor: 'rgba(236,203,121,.45)' }}>104 Schubert Dr (Suite B)<br />Downingtown, PA</span>
          </a>
          <div style={{ display: 'flex', gap: 12, marginTop: 20 }}>
            {[
              { name: 'Instagram', src: 'assets/icon-instagram.png', href: 'https://www.instagram.com/madhudanceacademypa' },
              { name: 'Facebook', src: 'assets/icon-facebook.png', href: '#' },
            ].map(({ name, src, href }) => (
              <a key={name} href={href} target="_blank" rel="noopener noreferrer" aria-label={name} style={{ width: 40, height: 40, borderRadius: '50%', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src={src} alt={name} style={{ width: '100%', height: '100%' }} />
              </a>
            ))}
          </div>
        </div>
        {[['Explore', ['About', 'Programs', 'Gallery']], ['Visit', ['Contact', 'Register']]].map(([h, items]) => (
          <div key={h}>
            <div style={{ fontFamily: 'var(--font-label)', textTransform: 'uppercase', letterSpacing: '.2em', fontSize: 12.5, color: 'var(--gold-500)' }}>{h}</div>
            <ul style={{ listStyle: 'none', marginTop: 16, display: 'flex', flexDirection: 'column', gap: 11 }}>
              {items.map((it) => {
                if (it === 'Contact') return <li key={it}><button onClick={onContact} className="nav-link" style={{ fontSize: 14.5, background: 'none', border: 'none', cursor: 'pointer', padding: 0, fontFamily: 'inherit' }}>{it}</button></li>;
                if (it === 'Register') return <li key={it}><button onClick={onJoin} className="nav-link" style={{ fontSize: 14.5, background: 'none', border: 'none', cursor: 'pointer', padding: 0, fontFamily: 'inherit' }}>{it}</button></li>;
                return <li key={it}><a href={`#${it.toLowerCase()}`} className="nav-link" style={{ fontSize: 14.5 }}>{it}</a></li>;
              })}
            </ul>
          </div>
        ))}
      </div>
      <div className="wrap" style={{ padding: '20px 32px', borderTop: '1px solid var(--hairline)', textAlign: 'center' }}>
        <span style={{ fontSize: 13, color: 'var(--fg-3)' }}>© 2026 Madhu Dance Academy</span>
      </div>
    </footer>
  );
}

Object.assign(window, { RegisterModal, ContactModal, FinalCTA, Footer });
