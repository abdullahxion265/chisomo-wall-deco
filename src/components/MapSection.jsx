import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

// Fix default marker icon broken by Vite's asset handling
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
})

// Studio coordinates — update to real address
const STUDIO_POSITION = [-13.9626, 33.7741] // Lilongwe, Malawi (placeholder)

const details = [
  {
    label: 'Studio Address',
    value: 'Area 3, Capital City\nLilongwe, Malawi',
  },
  {
    label: 'Business Hours',
    value: 'Monday – Friday: 08:00 – 18:00\nSaturday: 09:00 – 14:00',
  },
  {
    label: 'Phone',
    value: '+265 999 000 000',
  },
  {
    label: 'Email',
    value: 'hello@chisomoswalldeco.mw',
  },
]

export default function MapSection() {
  return (
    <section className="map-section" id="location">
      <div className="section-header" style={{ marginBottom: '3rem' }}>
        <p className="section-number">04 / Location</p>
        <h2 className="section-title">Find Our Studio</h2>
      </div>

      <div className="map-layout">
        <div className="map-info">
          {details.map((d) => (
            <div className="map-detail" key={d.label}>
              <p className="map-detail-label">{d.label}</p>
              <p className="map-detail-value" style={{ whiteSpace: 'pre-line' }}>
                {d.value}
              </p>
            </div>
          ))}

          <a href="#contact" className="btn-primary" style={{ alignSelf: 'flex-start', marginTop: '0.5rem' }}>
            Book a Studio Visit
          </a>
        </div>

        <div className="map-container">
          <MapContainer
            center={STUDIO_POSITION}
            zoom={14}
            style={{ height: '100%', width: '100%' }}
            zoomControl={true}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={STUDIO_POSITION}>
              <Popup>
                <strong>Chisomo's Wall Deco</strong>
                <br />
                Bespoke Interior Craftsmanship
                <br />
                Area 3, Lilongwe
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </section>
  )
}
