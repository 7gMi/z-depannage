import { MapContainer, TileLayer, Circle, Polyline, CircleMarker, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const GRIGNY: [number, number] = [48.6595, 2.3947];

interface City {
  name: string;
  pos: [number, number];
}

const CITIES: City[] = [
  { name: 'Lille', pos: [50.6292, 3.0573] },
  { name: 'Brest', pos: [48.3904, -4.4861] },
  { name: 'Strasbourg', pos: [48.5734, 7.7521] },
  { name: 'Nantes', pos: [47.2184, -1.5536] },
  { name: 'Lyon', pos: [45.764, 4.8357] },
  { name: 'Bordeaux', pos: [44.8378, -0.5792] },
  { name: 'Toulouse', pos: [43.6047, 1.4442] },
  { name: 'Marseille', pos: [43.2965, 5.3698] },
];

export default function NationalCoverageMap() {
  return (
    <div className="w-full h-[420px] sm:h-[480px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
      <MapContainer
        center={[46.5, 2.5]}
        zoom={5}
        scrollWheelZoom={false}
        zoomControl={false}
        dragging={false}
        doubleClickZoom={false}
        touchZoom={false}
        keyboard={false}
        attributionControl={true}
        style={{ height: '100%', width: '100%', background: '#0F1B2D' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Cercle rouge 50% opacite sur Grigny — base */}
        <Circle
          center={GRIGNY}
          radius={45000}
          pathOptions={{
            color: '#DC2626',
            fillColor: '#DC2626',
            fillOpacity: 0.5,
            weight: 2,
          }}
        />

        {/* Lignes vers grandes villes (depuis Grigny) */}
        {CITIES.map((c) => (
          <Polyline
            key={c.name}
            positions={[GRIGNY, c.pos]}
            pathOptions={{
              color: '#EA580C',
              weight: 2.5,
              opacity: 0.85,
              dashArray: '6 6',
            }}
          />
        ))}

        {/* Markers cibles */}
        {CITIES.map((c) => (
          <CircleMarker
            key={`m-${c.name}`}
            center={c.pos}
            radius={6}
            pathOptions={{
              color: '#FFFFFF',
              fillColor: '#EA580C',
              fillOpacity: 1,
              weight: 2,
            }}
          >
            <Tooltip
              permanent
              direction="top"
              offset={[0, -8]}
              className="zdep-coverage-tooltip"
            >
              {c.name}
            </Tooltip>
          </CircleMarker>
        ))}

        {/* Marker Grigny avec label */}
        <CircleMarker
          center={GRIGNY}
          radius={8}
          pathOptions={{
            color: '#FFFFFF',
            fillColor: '#DC2626',
            fillOpacity: 1,
            weight: 2.5,
          }}
        >
          <Tooltip
            permanent
            direction="bottom"
            offset={[0, 8]}
            className="zdep-coverage-tooltip zdep-coverage-tooltip-base"
          >
            Grigny (91) — Base
          </Tooltip>
        </CircleMarker>
      </MapContainer>
    </div>
  );
}
