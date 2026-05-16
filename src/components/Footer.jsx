export default function Footer() {
  const handleSubscribe = (e) => {
    e.preventDefault()
    const input = e.target.querySelector('input')
    if (input.value.trim()) {
      alert('Thank you for subscribing.')
      input.value = ''
    }
  }

  return (
    <footer className="footer" id="contact">
      <div className="footer-top">

        {/* Brand */}
        <div>
          <p className="footer-brand-name">Chisomo's Wall Deco</p>
          <p className="footer-brand-tagline">
            Crafting architectural detail and surface beauty for discerning interiors across Malawi.
          </p>
        </div>

        {/* Services */}
        <div>
          <p className="footer-col-title">Services</p>
          <ul className="footer-links">
            <li><a href="#services">Ceiling Architecture</a></li>
            <li><a href="#services">Entryway Partitions</a></li>
            <li><a href="#services">Wall Textures</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="footer-col-title">Contact</p>
          <ul className="footer-links">
            <li><a href="tel:+265999000000">+265 999 000 000</a></li>
            <li><a href="mailto:hello@chisomoswalldeco.mw">hello@chisomoswalldeco.mw</a></li>
            <li><a href="#location">Area 3, Lilongwe</a></li>
            <li><a href="#location">Find on Map</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <p className="footer-col-title">Newsletter</p>
          <p className="footer-newsletter-label">
            Design insights and project reveals delivered to your inbox.
          </p>
          <form className="newsletter-form" onSubmit={handleSubscribe}>
            <input
              type="email"
              className="newsletter-input"
              placeholder="your@email.com"
              required
            />
            <button type="submit" className="newsletter-btn">
              Join
            </button>
          </form>
        </div>

      </div>

      <div className="footer-bottom">
        <p className="footer-copy">
          &copy; {new Date().getFullYear()} Chisomo's Wall Deco. All rights reserved.
        </p>
        <div className="footer-legal">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  )
}
