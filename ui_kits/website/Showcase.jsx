/* Gallery (horizontal scroll) · Testimonials */

const galleryItems = [
  { src: 'girl-checkered-web.jpg', w: 440, label: 'Attitude' },
  { src: 'boy-yellow-point-web.jpg', w: 440, label: 'Full Energy' },
  { src: 'silhouette-moon-web.jpg', w: 440, label: 'Moonlight', pos: 'center 28%' },
  { src: 'girl-blue-smile-web.jpg', w: 440, label: 'Pure Joy', pos: 'center 20%' },
  { src: 'boy-white-shirt-web.jpg', w: 440, label: 'Showstoppers' },
  { src: 'ANU07538.jpg', w: 440, label: 'On Stage' },
  { src: 'DSC_2004-2.jpg', w: 440, label: 'Spotlight' },
  { src: 'ANU05856.jpg', w: 440, label: 'Performance' },
  { src: 'ANU06835.jpg', w: 440, label: 'In the Moment' },
  { src: 'ANU07161.jpg', w: 440, label: 'Stage Presence' },
  { src: 'DSC_3043.jpg', w: 440, label: 'The Ensemble' },
];

function Gallery() {
  const ref = useRef(null);
  const pausedRef = useRef(false);
  const nudge = (dir) => {
    const el = ref.current;
    if (!el) return;
    pausedRef.current = true;
    el.classList.add('snapping');
    el.scrollBy({ left: dir * 620, behavior: 'smooth' });
    setTimeout(() => { el.classList.remove('snapping'); pausedRef.current = false; }, 2000);
  };

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf;
    const step = () => {
      if (!pausedRef.current && el.scrollWidth > el.clientWidth) {
        el.scrollLeft += 0.7;
        if (el.scrollLeft >= el.scrollWidth / 2) el.scrollLeft -= el.scrollWidth / 2;
      }
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    const pause = () => { pausedRef.current = true; };
    const resume = () => { pausedRef.current = false; };
    el.addEventListener('mouseenter', pause);
    el.addEventListener('mouseleave', resume);
    el.addEventListener('touchstart', pause, { passive: true });
    el.addEventListener('touchend', resume);
    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener('mouseenter', pause);
      el.removeEventListener('mouseleave', resume);
      el.removeEventListener('touchstart', pause);
      el.removeEventListener('touchend', resume);
    };
  }, []);

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
        {[...galleryItems, ...galleryItems].map((g, i) => (
          <div key={`${g.src}-${i}`} style={{ position: 'relative', width: g.w, height: 640, borderRadius: 22, overflow: 'hidden' }}>
            <Photo src={`assets/photos/${g.src}`} alt={g.label} radius={22} pos={g.pos || 'center'} />
            <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, padding: '60px 24px 22px', background: 'linear-gradient(to top, rgba(7,8,13,.9), transparent)', pointerEvents: 'none' }}>
              <span style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 30, color: 'var(--fg-1)' }}>{g.label}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const quotes = [
  { q: "I can’t thank Mathu enough for the incredible coaching my child received! The stage performance was a huge success, and it was all thanks to the confidence and skills they gained in class. Madhu Dance Academy creates a warm and encouraging environment that truly brings out the best in every dancer!", n: "Priya R.", r: "Parent, Kids Bollywood Dance" },
  { q: "As an adult returning to dance after years away, I was nervous about performing on stage. Mathu not only taught me the choreography but also helped me build the confidence to shine on stage. The coaching was exceptional, and the experience was unforgettable!", n: "Swathi", r: "Adult Bollywood Dance" },
  { q: "My son had his dance tutored by Mathumitha Balu for the past 3 years and he had gained his confidence in dance within few classes. She is good in handling kids and especially when it comes to dance, she’s dedicated and very much comfortable to work with. Managing kids needs patience and good handling techniques to keep their focus on dance, in which she’s really good at. I have seen her dance classes which was composed and organized in what she does. Happy to have her as my son’s dance tutor and we feel happy and satisfied of my kids dance improvement.", n: "Bindhu", r: "Parent, Kids Bollywood Dance" },
  { q: "Madhu Dance Academy completely transformed our sangeet! Mathumitha choreographed routines for four different family groups and made the whole process so smooth and fun. Every single guest ended up on the dance floor. It was the highlight of our wedding weekend.", n: "Anita & Rohan", r: "Wedding Choreography" },
  { q: "My daughter was extremely shy before joining Madhu Dance Academy. Within just a few months she was performing on stage with a huge smile. The way Mathumitha connects with kids and builds their confidence is truly special. We are so grateful!", n: "Deepa S.", r: "Parent, Kids Bollywood Dance" },
  { q: "The teen batch is so well structured — technique, expression, formations, everything is covered. My daughter looks forward to every class and has grown so much as a performer. Highly recommend Madhu Dance Academy to any teenager passionate about dance.", n: "Kavitha M.", r: "Parent, Teen Dance" },
];

const PEEK = 80;
const GAP = 20;

function Testimonials() {
  const [idx, setIdx] = useState(0);
  const [cardW, setCardW] = useState(0);
  const containerRef = useRef(null);
  const total = quotes.length;

  useEffect(() => {
    const measure = () => {
      if (containerRef.current) setCardW(containerRef.current.offsetWidth - PEEK * 2);
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % total), 5500);
    return () => clearInterval(t);
  }, [total]);

  const goTo = (next) => setIdx((next + total) % total);
  const offset = PEEK - idx * (cardW + GAP);

  return (
    <section className="section sec-testimonials">
      <div className="wrap" style={{ maxWidth: 900 }}>
        <div className="reveal" style={{ textAlign: 'center' }}>
          <Eyebrow style={{ justifyContent: 'center' }}>Student Stories</Eyebrow>
        </div>

        <div ref={containerRef} style={{ overflow: 'hidden', marginTop: 48 }}>
          <div style={{
            display: 'flex', gap: GAP,
            transform: `translateX(${offset}px)`,
            transition: 'transform 0.5s cubic-bezier(0.4,0,0.2,1)',
            willChange: 'transform',
          }}>
            {quotes.map((q, i) => (
              <figure
                key={q.n}
                onClick={() => i !== idx && goTo(i)}
                style={{
                  flex: `0 0 ${cardW}px`,
                  background: 'var(--surface-1)',
                  border: `1px solid ${i === idx ? 'rgba(216,178,90,.35)' : 'var(--hairline)'}`,
                  borderRadius: 'var(--r-lg)',
                  padding: '36px 40px',
                  opacity: i === idx ? 1 : 0.45,
                  transform: `scale(${i === idx ? 1 : 0.96})`,
                  transition: 'opacity .4s, transform .4s, border-color .4s',
                  cursor: i !== idx ? 'pointer' : 'default',
                  userSelect: 'none',
                }}
              >
                <Icon name="quote" size={28} color="var(--gold-500)" style={{ opacity: .7 }} />
                <blockquote style={{ fontFamily: 'var(--font-display)', fontSize: 22, lineHeight: 1.45, color: 'var(--fg-1)', marginTop: 16, textWrap: 'pretty' }}>{q.q}</blockquote>
                <figcaption style={{ marginTop: 24, display: 'flex', alignItems: 'center', gap: 12 }}>
                  <span style={{ width: 42, height: 42, borderRadius: '50%', background: 'var(--grad-peacock)', flex: '0 0 auto' }} />
                  <span>
                    <span style={{ display: 'block', fontSize: 15, color: 'var(--fg-1)', fontWeight: 500 }}>{q.n}</span>
                    <span style={{ display: 'block', fontSize: 13, color: 'var(--fg-3)', marginTop: 2 }}>{q.r}</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        {/* dots */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 28 }}>
          {quotes.map((_, i) => (
            <button key={i} onClick={() => goTo(i)} aria-label={`Testimonial ${i + 1}`} style={{ width: i === idx ? 24 : 8, height: 8, borderRadius: 4, background: i === idx ? 'var(--gold-400)' : 'var(--hairline)', border: 'none', cursor: 'pointer', padding: 0, transition: 'width .3s, background .3s' }} />
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Gallery, Testimonials });
