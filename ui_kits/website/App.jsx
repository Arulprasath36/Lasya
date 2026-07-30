/* App — assembles the Madhu Dance Academy marketing site */
const MADHU_TWEAKS = /*EDITMODE-BEGIN*/{
  "mood": "vibrant",
  "slideshow": true,
  "accent": "#D8B25A"
}/*EDITMODE-END*/;

function App() {
  const [modal, setModal] = useState(() => new URLSearchParams(window.location.search).get('register') === '1');
  const [selectedProgram, setSelectedProgram] = useState('Kids Bollywood');
  const [contactModal, setContactModal] = useState(false);
  const [t, setTweak] = useTweaks(MADHU_TWEAKS);
  useReveal();
  const join = useCallback((program) => {
    // Buttons that use `onClick={join}` pass a React click event here. Only
    // program cards intentionally pass a program-name string.
    if (typeof program === 'string') setSelectedProgram(program);
    setModal(true);
  }, []);

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
        <Programs onJoin={join} />
        <WhyMadhu />
        <Gallery />
        <Testimonials />
        <FinalCTA onJoin={join} onContact={() => setContactModal(true)} />
      </main>
      <Footer onContact={() => setContactModal(true)} onJoin={join} />
      <RegisterModal open={modal} onClose={() => setModal(false)} initialProgram={selectedProgram} />
      <ContactModal open={contactModal} onClose={() => setContactModal(false)} />
      {/* FAQ chat is temporarily hidden. Restore by rendering <FAQChat /> here. */}

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
