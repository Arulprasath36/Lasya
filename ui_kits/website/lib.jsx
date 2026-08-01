/* Shared hooks + atoms for the Madhu Dance Academy site kit */
const { useState, useEffect, useRef, useCallback } = React;

/* Reveal-on-scroll: add `reveal` (+ optional delay class) to any element,
   then call useReveal() once in the app to wire the observer. */
function useReveal() {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return; // resting state is already visible
    let raf;
    const delayFor = (el) => {
      for (let i = 1; i <= 4; i++) if (el.classList.contains('reveal-d' + i)) return i * 80;
      return 0;
    };
    const check = () => {
      const vh = window.innerHeight;
      document.querySelectorAll('.reveal:not([data-shown])').forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < vh * 0.92 && r.bottom > 0) {
          el.setAttribute('data-shown', '');
          el.animate(
            [{ opacity: 0, transform: 'translateY(22px)' }, { opacity: 1, transform: 'none' }],
            { duration: 760, delay: delayFor(el), easing: 'cubic-bezier(0.16,1,0.3,1)', fill: 'none' }
          );
        }
      });
    };
    const onScroll = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(check); };
    requestAnimationFrame(check);
    setTimeout(check, 100);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); cancelAnimationFrame(raf); };
  }, []);
}

/* Sticky nav background toggle */
function useScrolled(threshold = 40) {
  const [s, setS] = useState(false);
  useEffect(() => {
    const on = () => setS(window.scrollY > threshold);
    on(); window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, [threshold]);
  return s;
}

function Eyebrow({ children, style }) {
  return <span className="eyebrow" style={style}>{children}</span>;
}

/* Lucide icon — renders inline SVG (captures cleanly, no web-font dependency).
   We fill a ref'd span imperatively so React never fights Lucide's DOM swap. */
function Icon({ name, size = 20, color, style, strokeWidth = 1.6 }) {
  const ref = useRef(null);
  useEffect(() => {
    const host = ref.current;
    if (!host || !window.lucide) return;
    host.innerHTML = '';
    const i = document.createElement('i');
    i.setAttribute('data-lucide', name);
    host.appendChild(i);
    window.lucide.createIcons({ attrs: { 'stroke-width': strokeWidth, width: '100%', height: '100%' } });
  }, [name, strokeWidth]);
  return <span ref={ref} className="lic" style={{ display: 'inline-flex', width: size, height: size, color, lineHeight: 0, ...style }} aria-hidden="true" />;
}

function Button({ variant = 'primary', children, icon, ...rest }) {
  return (
    <button className={`btn btn-${variant}`} {...rest}>
      {icon && <Icon name={icon} size={18} />}
      {children}
    </button>
  );
}

/* Drifting gold particles */
function Particles({ count = 26 }) {
  const items = React.useMemo(() => Array.from({ length: count }, () => ({
    left: Math.random() * 100,
    size: 2 + Math.random() * 5,
    dur: 9 + Math.random() * 14,
    delay: -Math.random() * 20,
    top: Math.random() * 100,
  })), [count]);
  return (
    <div className="particles" aria-hidden="true">
      {items.map((p, i) => (
        <span key={i} className="particle" style={{
          left: p.left + '%', top: p.top + '%',
          width: p.size, height: p.size,
          animationDuration: p.dur + 's', animationDelay: p.delay + 's',
        }} />
      ))}
    </div>
  );
}

/* Cursor-following peacock-eye dot */
function CursorEye() {
  const ref = useRef(null);
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (window.matchMedia('(pointer: coarse)').matches) return;
    const el = ref.current; let raf;
    let x = innerWidth / 2, y = innerHeight / 2, tx = x, ty = y;
    const move = (e) => { tx = e.clientX; ty = e.clientY; el.style.opacity = .9; };
    const loop = () => { x += (tx - x) * .14; y += (ty - y) * .14; el.style.left = x + 'px'; el.style.top = y + 'px'; raf = requestAnimationFrame(loop); };
    window.addEventListener('pointermove', move); loop();
    return () => { window.removeEventListener('pointermove', move); cancelAnimationFrame(raf); };
  }, []);
  return <div ref={ref} className="cursor-eye" aria-hidden="true" />;
}

/* Cover-fit photo with a subtle warm grade to match the brand */
function Photo({ src, alt, radius = 24, style, pos = 'center' }) {
  return (
    <img src={src} alt={alt || ''} loading="lazy" decoding="async" style={{
      width: '100%', height: '100%', objectFit: 'cover', objectPosition: pos,
      borderRadius: radius, display: 'block', ...style,
    }} />
  );
}

/* Motion-art: flowing liquid-gradient field of drifting blurred color blobs.
   JS-driven (rAF + setInterval fallback) so it animates in every environment.
   Reduced-motion → static field. */
const MA_DEFAULT = [
  { c: '#C42E84', x: '6%',  y: '8%',  s: 420, ax: 26, ay: 20, sx: 0.20, sy: 0.16, ps: 0.0, ss: 0.17 }, // magenta
  { c: '#2C4BD4', x: '58%', y: '0%',  s: 500, ax: 22, ay: 26, sx: 0.16, sy: 0.21, ps: 1.7, ss: 0.14 }, // royal
  { c: '#0FA6A0', x: '72%', y: '50%', s: 400, ax: 28, ay: 22, sx: 0.19, sy: 0.17, ps: 3.1, ss: 0.19 }, // teal
  { c: '#7C5AE0', x: '26%', y: '54%', s: 440, ax: 24, ay: 28, sx: 0.17, sy: 0.19, ps: 4.4, ss: 0.15 }, // violet
  { c: '#DB4C9C', x: '44%', y: '26%', s: 340, ax: 20, ay: 24, sx: 0.23, sy: 0.20, ps: 2.2, ss: 0.21 }, // pink
];
function MotionArt({ blobs = MA_DEFAULT, opacity = 0.55 }) {
  const wrap = useRef(null);
  useEffect(() => {
    const root = wrap.current;
    if (!root) return;
    const els = [...root.querySelectorAll('.ma-blob')];
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) { els.forEach((el) => { el.style.transform = 'none'; }); return; }
    const t0 = performance.now();
    let last = -100;
    const update = (now) => {
      if (now - last < 14) return;
      last = now;
      const t = (now - t0) / 1000;
      for (let i = 0; i < els.length; i++) {
        const b = blobs[i];
        const x = Math.sin(t * b.sx + b.ps) * b.ax;
        const y = Math.cos(t * b.sy + b.ps * 0.6) * b.ay;
        const sc = 1 + Math.sin(t * b.ss + b.ps) * 0.26;
        els[i].style.transform = `translate(${x}%, ${y}%) scale(${sc})`;
      }
    };
    let raf = requestAnimationFrame(function tick(n) { update(n); raf = requestAnimationFrame(tick); });
    const iv = setInterval(() => update(performance.now()), 33);
    return () => { cancelAnimationFrame(raf); clearInterval(iv); };
  }, [blobs]);
  return (
    <div className="motion-art" aria-hidden="true" ref={wrap}>
      <div className="ma-inner">
        {blobs.map((b, i) => (
          <span key={i} className="ma-blob" style={{
            left: b.x, top: b.y, width: b.s, height: b.s, opacity,
            background: `radial-gradient(circle at 50% 50%, ${b.c}, transparent 68%)`,
          }} />
        ))}
      </div>
    </div>
  );
}

/* FAQ chat widget — rule-based, no AI, no tokens */
const FAQ_ITEMS = [
  { q: 'What are your class timings?', a: 'Classes run on weekends — Saturday & Sunday. Specific batch timings will be confirmed upon enrollment. Contact us to check current slot availability.' },
  { q: 'What is the fee?', a: 'Fees vary by program and batch. Please reach out via the contact form or call us directly and we\'ll share the latest pricing for your preferred program.' },
  { q: 'What age groups do you teach?', a: 'We have programs for everyone — Kids (5–11), Teens (12–17), Adults (all levels), and custom Wedding & Event choreography.' },
  { q: 'Where are you located?', a: 'Our studio location details will be shared upon enrollment. Use the Contact section to get in touch and we\'ll guide you to us!' },
  { q: 'How do I enroll?', a: 'Click the "Join a Class" button at the top of the page to fill out our enrollment form. We\'ll get back to you within 24 hours.' },
  { q: 'What styles do you teach?', a: 'We specialise in Bollywood dance — covering expressions, formations, stage presence, and performance confidence. It\'s high energy and a whole lot of fun!' },
];

function FAQChat() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);
  const panelRef = useRef(null);

  useEffect(() => {
    if (open && panelRef.current) panelRef.current.scrollTop = 0;
  }, [open]);

  return (
    <div className="faq-widget" aria-label="FAQ chat">
      {open && (
        <div className="faq-panel" ref={panelRef} role="dialog" aria-modal="true" aria-label="Frequently asked questions">
          <div className="faq-header">
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 18, color: 'var(--fg-1)' }}>Ask Madhu Dance Academy</div>
              <div style={{ fontSize: 12, color: 'var(--fg-3)', marginTop: 2 }}>Pick a question below</div>
            </div>
            <button className="faq-close" onClick={() => { setOpen(false); setActive(null); }} aria-label="Close">
              <Icon name="x" size={16} />
            </button>
          </div>
          <div className="faq-body">
            <div className="faq-bot-bubble">Hi! I'm here to help. What would you like to know about Madhu Dance Academy? 👋</div>
            {FAQ_ITEMS.map((item, i) => (
              <div key={i} className="faq-item">
                <button className={`faq-q${active === i ? ' active' : ''}`} onClick={() => setActive(active === i ? null : i)}>
                  {item.q}
                </button>
                {active === i && <div className="faq-a">{item.a}</div>}
              </div>
            ))}
          </div>
        </div>
      )}
      <button className="faq-trigger" onClick={() => setOpen(o => !o)} aria-label={open ? 'Close chat' : 'Open FAQ chat'}>
        <Icon name={open ? 'x' : 'message-circle'} size={22} />
      </button>
    </div>
  );
}

Object.assign(window, { useReveal, useScrolled, Eyebrow, Icon, Button, Particles, CursorEye, Photo, MotionArt, FAQChat });
