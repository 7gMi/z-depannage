import { lazy, Suspense, useState } from 'react';
import { MapPin, Navigation } from 'lucide-react';
import { useT } from '../../i18n/LanguageContext';

const LeafletMap = lazy(() => import('../LeafletMap'));

const DEPARTEMENTS: { code: string; name: string; highlight: boolean; coords: [number, number]; eta: number }[] = [
  { code: '91', name: 'Essonne', highlight: true, coords: [48.6300, 2.4400], eta: 15 },
  { code: '94', name: 'Val-de-Marne', highlight: false, coords: [48.7800, 2.4700], eta: 25 },
  { code: '75', name: 'Paris', highlight: false, coords: [48.8566, 2.3522], eta: 30 },
  { code: '92', name: 'Hauts-de-Seine', highlight: false, coords: [48.8400, 2.2200], eta: 30 },
  { code: '93', name: 'Seine-Saint-Denis', highlight: false, coords: [48.9100, 2.4500], eta: 35 },
  { code: '77', name: 'Seine-et-Marne', highlight: false, coords: [48.6100, 2.9000], eta: 35 },
  { code: '78', name: 'Yvelines', highlight: false, coords: [48.8000, 1.9000], eta: 40 },
  { code: '95', name: "Val-d'Oise", highlight: false, coords: [49.0500, 2.1500], eta: 45 },
];

const GRIGNY: [number, number] = [48.6544, 2.3833];

const VILLES = [
  'Grigny', 'Morsang-sur-Orge', 'Évry-Courcouronnes', 'Corbeil-Essonnes',
  'Viry-Châtillon', 'Ris-Orangis', 'Savigny-sur-Orge', 'Juvisy-sur-Orge',
  'Longjumeau', 'Palaiseau', 'Massy', 'Athis-Mons',
];

export function Zone({ compact }: { compact?: boolean } = {}) {
  const { t } = useT();
  const [selected, setSelected] = useState<{ code: string; name: string; coords: [number, number]; eta: number } | null>(null);

  return (
    <section id="zone" className="py-16 sm:py-20 bg-[var(--bg-secondary)]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-4">{t('zone.title')}</h2>
          <p className="text-[var(--text-secondary)] max-w-xl mx-auto">{t('zone.subtitle')}</p>
        </div>

        {!compact && (
          <div className="reveal mb-10">
            <div style={{ height: '420px', contain: 'layout size' }} className="rounded-2xl overflow-hidden border border-[var(--border-default)] shadow-sm">
              <Suspense fallback={<div className="h-full bg-[var(--bg-secondary)] animate-pulse" />}>
                <LeafletMap
                  center={GRIGNY}
                  zoom={9}
                  height="100%"
                  showCircle
                  circleRadius={35000}
                  showMarker={false}
                  showRadar
                  hotspots={DEPARTEMENTS.map((d) => ({
                    position: d.coords,
                    label: `${d.name} (${d.code})`,
                    code: d.code,
                    eta: d.eta,
                    isBase: d.highlight,
                  }))}
                  highlight={selected ? { position: selected.coords, label: `${selected.name} (${selected.code})` } : null}
                  flyToZoom={10}
                  ariaLabel="Carte de la zone d'intervention en Île-de-France"
                />
              </Suspense>
            </div>
          </div>
        )}

        {selected && !compact && (
          <div className="mb-6 mx-auto max-w-md p-4 rounded-2xl bg-gradient-to-r from-[var(--accent)]/10 to-[var(--primary)]/10 border border-[var(--accent)]/30 text-center reveal visible">
            <div className="text-xs uppercase tracking-wider text-[var(--text-tertiary)] mb-1">{t('zone.estimatedArrival')}</div>
            <div className="font-heading text-2xl font-extrabold text-[var(--text-primary)]">
              ~{selected.eta} min
            </div>
            <div className="text-sm text-[var(--text-secondary)] mt-1">{t('zone.from')} {selected.name} ({selected.code})</div>
          </div>
        )}

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {DEPARTEMENTS.map(({ code, name, highlight, coords, eta }) => (
            <button
              key={code}
              type="button"
              onClick={() => setSelected({ code, name, coords, eta })}
              className={`flex items-center gap-3 p-4 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                selected?.code === code
                  ? 'bg-[var(--primary)]/10 border-[var(--primary)] shadow-md -translate-y-0.5'
                  : highlight
                  ? 'bg-[var(--accent)]/5 border-[var(--accent)]/20 shadow-sm hover:-translate-y-0.5'
                  : 'bg-[var(--bg-card)] border-[var(--border-default)] hover:border-[var(--primary)]/30 hover:-translate-y-0.5'
              }`}
            >
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-heading font-extrabold text-sm ${
                highlight ? 'bg-[var(--accent)] text-white' : 'bg-[var(--primary)] text-white'
              }`}>
                {code}
              </div>
              <div>
                <p className="font-semibold text-sm text-[var(--text-primary)]">{name}</p>
                {highlight && <span className="text-[10px] font-bold text-[#7C2D12] uppercase tracking-wider">Base</span>}
              </div>
            </button>
          ))}
        </div>

        {!compact && (
          <div className="bg-[var(--bg-card)] rounded-2xl border border-[var(--border-default)] p-6">
            <div className="flex items-center gap-2 mb-4">
              <Navigation size={18} className="text-[var(--primary)]" />
              <h3 className="font-heading font-bold text-base text-[var(--text-primary)]">{t('zone.cities')}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {VILLES.map((ville) => (
                <span key={ville} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[var(--bg-secondary)] text-sm text-[var(--text-secondary)] font-medium">
                  <MapPin size={12} className="text-[var(--accent)]" />
                  {ville}
                </span>
              ))}
            </div>
          </div>
        )}

        <p className="text-center text-sm text-[var(--text-tertiary)] mt-6">{t('zone.note')}</p>
      </div>
    </section>
  );
}
