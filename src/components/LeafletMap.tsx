import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Circle, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

function FlyTo({ position, zoom }: { position: [number, number] | null; zoom: number }) {
  const map = useMap();
  useEffect(() => {
    if (position) map.flyTo(position, zoom, { duration: 0.8 });
  }, [position, zoom, map]);
  return null;
}

// Fix Leaflet default icon paths (cassé avec bundlers)
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const pinIcon = L.divIcon({
  className: 'zdep-pin',
  html: `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="#EA580C" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="filter: drop-shadow(0 2px 4px rgba(0,0,0,0.4));"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3" fill="#fff" stroke="#EA580C"/></svg>`,
  iconSize: [36, 36],
  iconAnchor: [18, 36],
  popupAnchor: [0, -36],
});

// Pulse radar au centre (cercle qui s'élargit en boucle)
const radarIcon = L.divIcon({
  className: 'zdep-radar',
  html: `<div style="position:relative;width:20px;height:20px;"><div style="position:absolute;inset:0;background:#EA580C;border-radius:50%;animation:zdepRadar 2s ease-out infinite;"></div><div style="position:absolute;inset:0;background:#EA580C;border-radius:50%;animation:zdepRadar 2s ease-out infinite;animation-delay:1s;"></div><div style="position:absolute;inset:6px;background:#EA580C;border-radius:50%;border:2px solid white;box-shadow:0 0 8px rgba(234,88,12,0.8);"></div></div><style>@keyframes zdepRadar{0%{transform:scale(0.5);opacity:0.9}100%{transform:scale(3);opacity:0}}</style>`,
  iconSize: [20, 20],
  iconAnchor: [10, 10],
});

// Hotspot pulsant par département — orange subtil
function hotspotIcon(label: string, isBase = false) {
  const color = isBase ? '#EA580C' : '#FB923C';
  const size = isBase ? 14 : 10;
  const dotSize = isBase ? 6 : 5;
  return L.divIcon({
    className: 'zdep-hotspot',
    html: `<div class="zdep-hotspot-wrap" style="width:${size}px;height:${size}px;"><span class="zdep-hotspot-ping" style="background:${color};"></span><span class="zdep-hotspot-dot" style="background:${color};width:${dotSize}px;height:${dotSize}px;"></span><span class="zdep-hotspot-label">${label}</span></div>`,
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2],
    popupAnchor: [0, -size],
  });
}

// Pin bleu pour départements highlight (différencié du pin orange principal)
const highlightIcon = L.divIcon({
  className: 'zdep-pin-highlight',
  html: `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="#1E40AF" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" style="filter: drop-shadow(0 3px 6px rgba(30,64,175,0.6)); animation: pulse-pin 1.5s ease-out infinite;"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3" fill="#fff" stroke="#1E40AF"/></svg><style>@keyframes pulse-pin{0%,100%{transform:scale(1)}50%{transform:scale(1.15)}}</style>`,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40],
});

interface Hotspot {
  position: [number, number];
  label: string;
  code?: string;
  eta?: number;
  isBase?: boolean;
}

interface LeafletMapProps {
  center: [number, number];
  zoom: number;
  height?: string;
  showCircle?: boolean;
  circleRadius?: number;
  showMarker?: boolean;
  showRadar?: boolean;
  popupText?: string;
  ariaLabel?: string;
  highlight?: { position: [number, number]; label: string } | null;
  flyToZoom?: number;
  hotspots?: Hotspot[];
}

export default function LeafletMap({
  center,
  zoom,
  height = '400px',
  showCircle = false,
  circleRadius = 30000,
  showMarker = true,
  showRadar = false,
  popupText = 'ZDEPANNAGE — Dépôt principal',
  ariaLabel = 'Carte interactive',
  highlight = null,
  flyToZoom = 11,
  hotspots = [],
}: LeafletMapProps) {
  return (
    <div
      style={{ height, width: '100%' }}
      role="region"
      aria-label={ariaLabel}
    >
      <MapContainer
        center={center}
        zoom={zoom}
        scrollWheelZoom={false}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {showCircle && (
          <Circle
            center={center}
            radius={circleRadius}
            pathOptions={{
              color: '#FF0000',
              fillColor: '#FF0000',
              fillOpacity: 0.5,
              weight: 2,
            }}
          />
        )}
        {showRadar && (
          <Marker position={center} icon={radarIcon} interactive={false} />
        )}
        {showMarker && (
          <Marker position={center} icon={pinIcon}>
            <Popup>{popupText}</Popup>
          </Marker>
        )}
        {hotspots.map((h) => (
          <Marker
            key={`${h.position[0]}-${h.position[1]}`}
            position={h.position}
            icon={hotspotIcon(h.code ?? '', h.isBase)}
          >
            <Popup>
              {h.label}
              {h.eta ? ` — ~${h.eta} min` : ''}
            </Popup>
          </Marker>
        ))}
        {highlight && (
          <Marker position={highlight.position} icon={highlightIcon}>
            <Popup>{highlight.label}</Popup>
          </Marker>
        )}
        <FlyTo position={highlight ? highlight.position : null} zoom={flyToZoom} />
      </MapContainer>
    </div>
  );
}
