const services = [
  {
    number: '01',
    title: 'Ceiling Architecture',
    description:
      'Transform overhead planes into architectural statements. We design and install suspended, tray, coffered, and ornamental ceiling systems that define the spatial language of a room.',
    features: [
      'Suspended & drop ceilings',
      'Tray and stepped designs',
      'Coffered grid systems',
      'Plaster medallions & cornices',
      'Integrated lighting recesses',
    ],
  },
  {
    number: '02',
    title: 'Entryway Partitions',
    description:
      'First impressions are permanent. Our custom arches, ornamental room dividers, and transitional partition structures give entryways a commanding architectural presence.',
    features: [
      'Arched passageways',
      'Open-concept room dividers',
      'Decorative screen panels',
      'Structural archways',
      'Transitional space design',
    ],
  },
  {
    number: '03',
    title: 'Wall Textures & Decor',
    description:
      'Walls are the canvas. From polished micro-cement finishes to custom timber paneling and sculptural accent walls, we bring depth and character to every vertical surface.',
    features: [
      'Venetian & micro-plaster',
      'Accent and feature walls',
      'Timber & panel cladding',
      'Custom relief textures',
      'Stone and tile artistry',
    ],
  },
]

export default function Services() {
  return (
    <section className="services-section" id="services">
      <div className="section-header">
        <p className="section-number">02 / Services</p>
        <h2 className="section-title">
          Our Core<br />
          Services
        </h2>
      </div>

      <div className="services-grid">
        {services.map((s) => (
          <div className="service-card" key={s.number}>
            <div className="service-number">{s.number}</div>
            <div className="service-icon-line" />
            <h3 className="service-title">{s.title}</h3>
            <p className="service-desc">{s.description}</p>
            <ul className="service-features">
              {s.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            <a href="#portfolio" className="service-cta">
              See examples
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
