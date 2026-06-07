/* App — assembles the Lasya marketing site */
const LASYA_TWEAKS = /*EDITMODE-BEGIN*/{
  "mood": "vibrant",
  "slideshow": true,
  "accent": "#D8B25A"
}/*EDITMODE-END*/;

function App() {
  const [modal, setModal] = useState(false);
  const [t, setTweak] = useTweaks(LASYA_TWEAKS);
  useReveal();
  const join = useCallback(() => setModal(true), []);

  // apply background mood + accent to the document
  useEffect(() => {
    document.documentElement.setAttribute('data-mood', t.mood || 'midnight');
  }, [t.mood]);
  useEffect(() => {
    if (t.accent) document.documentElement.style.setProperty('--accent-override', t.accent);
  }, [t.accent]);

  return (
    <React.Fragment>
      <CursorEye />
      <Nav onJoin={join} />
      <main>
        <Hero onJoin={join} slideshow={t.slideshow} />
        <About />
        <Programs />
        <WhyLasya />
        <Gallery />
        <Instructor />
        <Testimonials />
        <FinalCTA onJoin={join} />
      </main>
      <Footer />
      <RegisterModal open={modal} onClose={() => setModal(false)} />
      <FAQChat />

      <TweaksPanel>
        <TweakSection label="Background mood" />
        <TweakRadio
          label="Palette"
          value={t.mood}
          options={['midnight', 'jewel', 'vibrant']}
          onChange={(v) => setTweak('mood', v)}
        />
        <TweakSection label="Hero" />
        <TweakToggle
          label="Photo slideshow"
          value={t.slideshow}
          onChange={(v) => setTweak('slideshow', v)}
        />
      </TweaksPanel>
    </React.Fragment>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
