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

interface LeafletMapProps {
  center: [number, number];
  zoom: number;
  height?: string;
  showCircle?: boolean;
  circleRadius?: number;
  showMarker?: boolean;
  popupText?: string;
  ariaLabel?: string;
  highlight?: { position: [number, number]; label: string } | null;
  flyToZoom?: number;
}

export default function LeafletMap({
  center,
  zoom,
  height = '400px',
  showCircle = false,
  circleRadius = 30000,
  showMarker = true,
  popupText = 'ZDEPANNAGE — Dépôt principal',
  ariaLabel = 'Carte interactive',
  highlight = null,
  flyToZoom = 11,
}: LeafletMapProps) {
  return (
    <div
      className="rounded-2xl overflow-hidden border border-[var(--border-default)] shadow-sm"
      style={{ height }}
      role="application"
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
        {showMarker && (
          <Marker position={center} icon={pinIcon}>
            <Popup>{popupText}</Popup>
          </Marker>
        )}
        {highlight && (
          <Marker position={highlight.position} icon={pinIcon}>
            <Popup>{highlight.label}</Popup>
          </Marker>
        )}
        <FlyTo position={highlight ? highlight.position : null} zoom={flyToZoom} />
      </MapContainer>
    </div>
  );
}
