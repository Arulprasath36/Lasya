/* Gallery (horizontal scroll) · Instructor · Testimonials */

const galleryItems = [
  { src: 'girl-checkered', w: 440, label: 'Attitude' },
  { src: 'boy-yellow-point', w: 440, label: 'Full Energy' },
  { src: 'silhouette-moon', w: 440, label: 'Moonlight', pos: 'center 28%' },
  { src: 'girl-blue-smile', w: 440, label: 'Pure Joy', pos: 'center 20%' },
  { src: 'boy-white-shirt', w: 440, label: 'Showstoppers' },
];

function Gallery() {
  const ref = useRef(null);
  const nudge = (dir) => ref.current?.scrollBy({ left: dir * 620, behavior: 'smooth' });
  return (
    <section id="gallery" className="section" style={{ paddingLeft: 0, paddingRight: 0 }}>
      <div className="wrap" style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 44, gap: 24 }}>
        <div>
          <div className="reveal"><Eyebrow>Performances</Eyebrow></div>
          <h2 className="reveal reveal-d1" style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'clamp(32px,4vw,54px)', marginTop: 16, whiteSpace: 'nowrap' }}>On the stage</h2>
        </div>
        <div className="reveal reveal-d2 hide-sm" style={{ display: 'flex', gap: 10 }}>
          <button className="btn btn-ghost" onClick={() => nudge(-1)} style={{ padding: 14, borderRadius: '50%' }} aria-label="Scroll left"><Icon name="arrow-left" size={18} /></button>
          <button className="btn btn-ghost" onClick={() => nudge(1)} style={{ padding: 14, borderRadius: '50%' }} aria-label="Scroll right"><Icon name="arrow-right" size={18} /></button>
        </div>
      </div>
      <div className="h-scroll reveal" ref={ref}>
        {galleryItems.map((g) => (
          <div key={g.src} style={{ position: 'relative', width: g.w, height: 640, borderRadius: 22, overflow: 'hidden' }}>
            <Photo src={`assets/photos/${g.src}-web.jpg`} alt={g.label} radius={22} pos={g.pos || 'center'} />
            <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, padding: '60px 24px 22px', background: 'linear-gradient(to top, rgba(7,8,13,.9), transparent)', pointerEvents: 'none' }}>
              <span style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 30, color: 'var(--fg-1)' }}>{g.label}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Instructor() {
  return (
    <section id="instructor" className="section">
      <div className="wrap split-grid">
        <div className="reveal" style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', inset: -16, borderRadius: 'var(--r-xl)', background: 'var(--grad-peacock)', filter: 'blur(40px)', opacity: .3 }} />
          <image-slot id="lasya-founder" style={{ position: 'relative', width: '100%', height: 500, display: 'block' }} shape="rounded" radius="26" placeholder="Drop the founder's portrait"></image-slot>
        </div>
        <div>
          <div className="reveal"><Eyebrow>Your Instructor</Eyebrow></div>
          <h2 className="reveal reveal-d1" style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'clamp(30px,3.6vw,52px)', lineHeight: 1.05, marginTop: 18 }}>
            Founded on grace,<br />taught with joy.
          </h2>
          <p className="reveal reveal-d2" style={{ fontSize: 18, lineHeight: 1.7, color: 'var(--fg-2)', marginTop: 22, maxWidth: 520 }}>
            "I started Lasya to share the dance I grew up loving — the music, the colour, the feeling. Every student who walks in nervous and walks out beaming is why we do this."
          </p>
          <div className="reveal reveal-d3" style={{ marginTop: 24 }}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 26 }}>Meera Nair</div>
            <div style={{ fontSize: 14, color: 'var(--gold-400)', fontFamily: 'var(--font-label)', letterSpacing: '.16em', textTransform: 'uppercase', marginTop: 4 }}>Founder &amp; Lead Choreographer</div>
          </div>
        </div>
      </div>
    </section>
  );
}

const quotes = [
  { q: 'My daughter found a confidence on stage I never knew she had. Lasya is magic.', n: 'Priya R.', r: 'Parent, Kids Bollywood' },
  { q: 'The best hour of my week. I sweat, I smile, and I actually learned the moves.', n: 'Daniel K.', r: 'Adult Fitness' },
  { q: 'They choreographed our whole sangeet — the floor never emptied. Unforgettable.', n: 'Anita & Rohan', r: 'Wedding Event' },
];

function Testimonials() {
  return (
    <section className="section sec-testimonials">
      <div className="wrap">
        <div className="reveal" style={{ textAlign: 'center' }}>
          <Eyebrow style={{ justifyContent: 'center' }}>Student Stories</Eyebrow>
        </div>
        <div className="grid-3" style={{ marginTop: 40 }}>
          {quotes.map((t, i) => (
            <figure key={t.n} className={`lift reveal reveal-d${(i % 3) + 1}`} style={{ background: 'var(--surface-1)', border: '1px solid var(--hairline)', borderRadius: 'var(--r-lg)', padding: 30 }}>
              <Icon name="quote" size={28} color="var(--gold-500)" style={{ opacity: .7 }} />
              <blockquote style={{ fontFamily: 'var(--font-display)', fontSize: 23, lineHeight: 1.35, color: 'var(--fg-1)', marginTop: 14, textWrap: 'pretty' }}>{t.q}</blockquote>
              <figcaption style={{ marginTop: 22, display: 'flex', alignItems: 'center', gap: 12 }}>
                <span style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--grad-peacock)', flex: '0 0 auto' }} />
                <span>
                  <span style={{ display: 'block', fontSize: 15, color: 'var(--fg-1)' }}>{t.n}</span>
                  <span style={{ display: 'block', fontSize: 13, color: 'var(--fg-3)' }}>{t.r}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Gallery, Instructor, Testimonials });
