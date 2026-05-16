// Images served from public/images/ — drop your files in there with these names
const portfolioItems = [
  {
    id: 1,
    src: '/images/ceiling-tray.jpg',
    tag: 'Modern Tray Ceiling',
    category: 'Ceiling Architecture',
    size: 'tall',
  },
  {
    id: 2,
    src: '/images/wall-venetian.jpg',
    tag: 'Venetian Plaster Wall',
    category: 'Wall Textures',
    size: 'medium',
  },
  {
    id: 3,
    src: '/images/entryway-archway.jpg',
    tag: 'Living Room Archway',
    category: 'Entryway Partitions',
    size: 'portrait',
  },
  {
    id: 4,
    src: '/images/ceiling-coffered.jpg',
    tag: 'Coffered Ceiling Grid',
    category: 'Ceiling Architecture',
    size: 'short',
  },
  {
    id: 5,
    src: '/images/wall-oak-panel.jpg',
    tag: 'Oak Panel Feature Wall',
    category: 'Wall Textures',
    size: 'medium',
  },
  {
    id: 6,
    src: '/images/entryway-divider.jpg',
    tag: 'Ornamental Room Divider',
    category: 'Entryway Partitions',
    size: 'tall',
  },
  {
    id: 7,
    src: '/images/wall-stone-accent.jpg',
    tag: 'Stone Accent Wall',
    category: 'Wall Textures',
    size: 'short',
  },
  {
    id: 8,
    src: '/images/ceiling-suspended.jpg',
    tag: 'Suspended Ceiling Baffles',
    category: 'Ceiling Architecture',
    size: 'portrait',
  },
  {
    id: 9,
    src: '/images/entryway-arch-geometric.jpg',
    tag: 'Geometric Arch Entry',
    category: 'Entryway Partitions',
    size: 'medium',
  },
]

export default function Portfolio() {
  return (
    <section className="portfolio-section" id="portfolio">
      <div className="portfolio-header">
        <div>
          <p className="section-number">03 / Portfolio</p>
          <h2 className="section-title">Recent Works</h2>
        </div>
        <p className="portfolio-header-right">
          A curated selection of completed projects spanning residential
          and commercial interiors.
        </p>
      </div>

      <div className="masonry-grid">
        {portfolioItems.map((item) => (
          <div className={`masonry-item ${item.size}`} key={item.id}>
            <img
              src={item.src}
              alt={item.tag}
              loading="lazy"
            />
            <div className="masonry-overlay">
              <p className="masonry-tag">{item.tag}</p>
              <p className="masonry-tag-category">{item.category}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
