export default function Hero() {
  return (
    <section className="hero-section" id="home">

      {/* Left — text content */}
      <div className="hero-content">
        <div className="hero-eyebrow animate-fade-in-up delay-1">
          <div className="hero-eyebrow-line" />
          <span className="label-tag">Bespoke Interior Craftsmanship</span>
        </div>

        <h1 className="hero-headline animate-fade-in-up delay-2">
          Elevating Spaces<br />
          Through <span>Texture</span><br />
          and Design.
        </h1>

        <p className="hero-subtitle animate-fade-in-up delay-3">
          Bespoke ceiling treatments, custom entryway partitions,
          and tailored wall decorations crafted for the spaces you inhabit.
        </p>

        <div className="hero-buttons animate-fade-in-up delay-4">
          <a href="#portfolio" className="btn-primary">View Portfolio</a>
          <a href="#contact" className="btn-outline">Request Consultation</a>
        </div>
      </div>

      {/* Right — slanted image panel */}
      <div className="hero-image-panel">
        <img
          src="/images/hero.jpg"
          alt="Chisomo's Wall Deco — interior craftsmanship"
          className="hero-image"
        />
        <div className="hero-image-badge">
          <span className="hero-image-badge-line" />
          <span className="hero-image-badge-text">Latest Work</span>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="hero-scroll-cue animate-fade-in-up delay-5">
        <div className="scroll-line" />
        <span className="scroll-label">Scroll to explore</span>
      </div>
    </section>
  )
}
