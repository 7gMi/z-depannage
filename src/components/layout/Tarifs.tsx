import { useState } from 'react';
import { Shield, AlertTriangle, Clock, Info } from 'lucide-react';
import { useT } from '../../i18n/LanguageContext';

type Tab = 'autoroute' | 'police';

const AUTOROUTE_FORFAITS = [
  {
    type: 'Dépannage sur place',
    base: { light: '151 €', heavy: '151 €' },
    majore: { light: '226,50 €', heavy: '226,50 €' },
  },
  {
    type: 'Dépannage sur aire de repos ou de service après remorquage',
    base: { light: '151 €', heavy: '186,72 €' },
    majore: { light: '226,50 €', heavy: '280,08 €' },
  },
  {
    type: "Remorquage jusqu'à l'atelier du dépanneur",
    base: { light: '151 €', heavy: '186,72 €' },
    majore: { light: '226,50 €', heavy: '280,08 €' },
  },
  {
    type: "Remorquage en un lieu choisi par l'automobiliste",
    base: { light: '151 €', heavy: '186,72 €' },
    majore: { light: '226,50 €', heavy: '280,08 €' },
  },
];

const POLICE_LIGHT = [
  { distance: '0 – 20 km', base: '144 €', majore: '216 €' },
  { distance: '20 – 30 km', base: '162 €', majore: '243 €' },
  { distance: '30+ km', base: '180 €', majore: '270 €' },
  { distance: 'Km supplémentaire', base: '2,28 €', majore: '3,42 €' },
];

const POLICE_HEAVY = [
  { distance: '0 – 20 km', base: '168 €', majore: '252 €' },
  { distance: '20 – 30 km', base: '192 €', majore: '288 €' },
  { distance: '30+ km', base: '222 €', majore: '333 €' },
  { distance: 'Km supplémentaire', base: '2,76 €', majore: '4,14 €' },
];

const PRESTATIONS = [
  { label: 'Treuillage (par ½ heure)', base: '168 €', majore: '252 €' },
  { label: 'Grutage (par ½ heure)', base: '288 €', majore: '432 €' },
  { label: 'Supplément sous-sol / ouverture de porte', base: '84 €', majore: '126 €' },
  { label: 'Temps passé (en heure)', base: '96 €', majore: '144 €' },
  { label: 'Véhicule incendié / roues volées', base: '348 €', majore: '522 €' },
  { label: 'Gardiennage (par jour)', base: '68 €', majore: '68 €' },
];

export function Tarifs() {
  const [tab, setTab] = useState<Tab>('autoroute');
  const { t } = useT();

  return (
    <section id="tarifs" className="py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* En-tête */}
        <div className="text-center mb-10">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-4">
            {t('tarifs.title')}
          </h2>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
            {t('tarifs.subtitle')}
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-xl bg-[var(--bg-secondary)] p-1 gap-1">
            <button
              onClick={() => setTab('autoroute')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
                tab === 'autoroute'
                  ? 'bg-white text-[var(--primary)] shadow-sm font-bold'
                  : 'text-[var(--text-tertiary)] hover:text-[var(--text-primary)]'
              }`}
            >
              <Shield size={16} />
              {t('tarifs.tab.highway')}
            </button>
            <button
              onClick={() => setTab('police')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
                tab === 'police'
                  ? 'bg-white text-[var(--primary)] shadow-sm font-bold'
                  : 'text-[var(--text-tertiary)] hover:text-[var(--text-primary)]'
              }`}
            >
              <AlertTriangle size={16} />
              {t('tarifs.tab.police')}
            </button>
          </div>
        </div>

        {/* Légende horaires */}
        <div className="flex flex-wrap justify-center gap-4 mb-8 text-sm">
          <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-50 text-[var(--primary)]">
            <Clock size={14} />
            <span><strong>{t('tarifs.base')}</strong> : {t('tarifs.baseHours')}</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-orange-50 text-[var(--accent)]">
            <Clock size={14} />
            <span><strong>{t('tarifs.surcharge50')}</strong> : {t('tarifs.surchargeHours')}</span>
          </div>
        </div>

        {/* Contenu tab Autoroute */}
        {tab === 'autoroute' && (
          <div className="space-y-8">
            {/* Tableau principal */}
            <div className="overflow-x-auto rounded-2xl border border-[var(--border-default)] shadow-sm">
              <table className="w-full text-sm" role="table">
                <thead>
                  <tr className="bg-[var(--bg-dark)] text-white">
                    <th className="text-left px-4 py-3 font-heading font-bold rounded-tl-2xl" scope="col">
                      {t('tarifs.col.type')}
                    </th>
                    <th className="px-3 py-3 font-heading font-bold text-center" colSpan={2} scope="colgroup">
                      {t('tarifs.col.forfaitBase')}
                    </th>
                    <th className="px-3 py-3 font-heading font-bold text-center rounded-tr-2xl" colSpan={2} scope="colgroup">
                      {t('tarifs.col.forfaitMajore')}
                    </th>
                  </tr>
                  <tr className="bg-[var(--bg-secondary)] text-[var(--text-tertiary)] text-xs uppercase tracking-wider">
                    <th scope="col" />
                    <th className="px-3 py-2 text-center" scope="col">&lt; 1,8T</th>
                    <th className="px-3 py-2 text-center" scope="col">1,8T – 3,5T</th>
                    <th className="px-3 py-2 text-center" scope="col">&lt; 1,8T</th>
                    <th className="px-3 py-2 text-center" scope="col">1,8T – 3,5T</th>
                  </tr>
                </thead>
                <tbody>
                  {AUTOROUTE_FORFAITS.map((row, i) => (
                    <tr
                      key={row.type}
                      className={`border-t border-[var(--border-default)] ${i % 2 === 0 ? 'bg-white' : 'bg-[var(--bg-secondary)]/50'}`}
                    >
                      <td className="px-4 py-3 font-medium text-[var(--text-primary)]">{row.type}</td>
                      <td className="px-3 py-3 text-center font-bold text-[var(--primary)]">{row.base.light}</td>
                      <td className="px-3 py-3 text-center font-bold text-[var(--primary)]">{row.base.heavy}</td>
                      <td className="px-3 py-3 text-center font-bold text-[var(--accent)]">{row.majore.light}</td>
                      <td className="px-3 py-3 text-center font-bold text-[var(--accent)]">{row.majore.heavy}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Km supplémentaires */}
            <div className="overflow-x-auto rounded-2xl border border-[var(--border-default)] shadow-sm">
              <table className="w-full text-sm" role="table">
                <thead>
                  <tr className="bg-[var(--bg-dark)] text-white">
                    <th className="text-left px-4 py-3 font-heading font-bold rounded-tl-2xl" scope="col">
                      {t('tarifs.kmSupp')}
                    </th>
                    <th className="px-3 py-3 text-center font-heading font-bold" scope="col">{t('tarifs.col.baseTTC')}</th>
                    <th className="px-3 py-3 text-center font-heading font-bold rounded-tr-2xl" scope="col">{t('tarifs.col.majoreTTC')}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-[var(--border-default)]">
                    <td className="px-4 py-3 font-medium">{t('tarifs.ptacLight')}</td>
                    <td className="px-3 py-3 text-center font-bold text-[var(--primary)]">3,84 €</td>
                    <td className="px-3 py-3 text-center font-bold text-[var(--accent)]">5,76 €</td>
                  </tr>
                  <tr className="border-t border-[var(--border-default)] bg-[var(--bg-secondary)]/50">
                    <td className="px-4 py-3 font-medium">{t('tarifs.ptacMid')}</td>
                    <td className="px-3 py-3 text-center font-bold text-[var(--primary)]">4,80 €</td>
                    <td className="px-3 py-3 text-center font-bold text-[var(--accent)]">7,20 €</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Note autoroute */}
            <div className="flex gap-3 p-4 rounded-xl bg-blue-50 border border-blue-100">
              <Info size={18} className="text-[var(--primary)] flex-shrink-0 mt-0.5" />
              <p className="text-sm text-[var(--text-secondary)]">
                <strong>{t('tarifs.noteAutorouteBold')}</strong> {t('tarifs.noteAutoroute')}
              </p>
            </div>
          </div>
        )}

        {/* Contenu tab Police / Gendarmerie */}
        {tab === 'police' && (
          <div className="space-y-8">
            {/* PTAC < 1800 kg */}
            <div>
              <h3 className="font-heading font-bold text-lg text-[var(--text-primary)] mb-3">
                {t('tarifs.vehiculesLegers')} <span className="text-[var(--text-tertiary)] font-normal text-sm">({t('tarifs.ptacLightShort')})</span>
              </h3>
              <div className="overflow-x-auto rounded-2xl border border-[var(--border-default)] shadow-sm">
                <table className="w-full text-sm" role="table">
                  <thead>
                    <tr className="bg-[var(--bg-dark)] text-white">
                      <th className="text-left px-4 py-3 font-heading font-bold rounded-tl-2xl" scope="col">{t('tarifs.col.distance')}</th>
                      <th className="px-3 py-3 text-center font-heading font-bold" scope="col">{t('tarifs.col.baseTTC')}</th>
                      <th className="px-3 py-3 text-center font-heading font-bold rounded-tr-2xl" scope="col">{t('tarifs.col.majoreTTC')}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {POLICE_LIGHT.map((row, i) => (
                      <tr
                        key={row.distance}
                        className={`border-t border-[var(--border-default)] ${i % 2 === 0 ? 'bg-white' : 'bg-[var(--bg-secondary)]/50'}`}
                      >
                        <td className="px-4 py-3 font-medium text-[var(--text-primary)]">{row.distance}</td>
                        <td className="px-3 py-3 text-center font-bold text-[var(--primary)]">{row.base}</td>
                        <td className="px-3 py-3 text-center font-bold text-[var(--accent)]">{row.majore}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* PTAC > 1800 kg */}
            <div>
              <h3 className="font-heading font-bold text-lg text-[var(--text-primary)] mb-3">
                {t('tarifs.vehiculesLourds')} <span className="text-[var(--text-tertiary)] font-normal text-sm">({t('tarifs.ptacHeavyShort')})</span>
              </h3>
              <div className="overflow-x-auto rounded-2xl border border-[var(--border-default)] shadow-sm">
                <table className="w-full text-sm" role="table">
                  <thead>
                    <tr className="bg-[var(--bg-dark)] text-white">
                      <th className="text-left px-4 py-3 font-heading font-bold rounded-tl-2xl" scope="col">{t('tarifs.col.distance')}</th>
                      <th className="px-3 py-3 text-center font-heading font-bold" scope="col">{t('tarifs.col.baseTTC')}</th>
                      <th className="px-3 py-3 text-center font-heading font-bold rounded-tr-2xl" scope="col">{t('tarifs.col.majoreTTC')}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {POLICE_HEAVY.map((row, i) => (
                      <tr
                        key={row.distance}
                        className={`border-t border-[var(--border-default)] ${i % 2 === 0 ? 'bg-white' : 'bg-[var(--bg-secondary)]/50'}`}
                      >
                        <td className="px-4 py-3 font-medium text-[var(--text-primary)]">{row.distance}</td>
                        <td className="px-3 py-3 text-center font-bold text-[var(--primary)]">{row.base}</td>
                        <td className="px-3 py-3 text-center font-bold text-[var(--accent)]">{row.majore}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Note police */}
            <div className="flex gap-3 p-4 rounded-xl bg-blue-50 border border-blue-100">
              <Info size={18} className="text-[var(--primary)] flex-shrink-0 mt-0.5" />
              <p className="text-sm text-[var(--text-secondary)]">
                <strong>{t('tarifs.notePoliceBold')}</strong> {t('tarifs.notePolice')}
              </p>
            </div>
          </div>
        )}

        {/* Prestations complémentaires — commun aux deux tabs */}
        <div className="mt-10">
          <h3 className="font-heading font-bold text-xl text-[var(--text-primary)] mb-4 text-center">
            {t('tarifs.extras')}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {PRESTATIONS.map(({ label, base, majore }) => (
              <div
                key={label}
                className="card-hover flex flex-col p-5 rounded-2xl border border-[var(--border-default)] bg-[var(--bg-card)]"
              >
                <span className="text-sm font-medium text-[var(--text-primary)] mb-3">{label}</span>
                <div className="flex items-center gap-4 mt-auto">
                  <div className="flex-1 text-center px-3 py-2 rounded-lg bg-blue-50">
                    <span className="text-xs text-[var(--text-tertiary)] block">{t('tarifs.base')}</span>
                    <span className="font-bold text-[var(--primary)]">{base}</span>
                  </div>
                  <div className="flex-1 text-center px-3 py-2 rounded-lg bg-orange-50">
                    <span className="text-xs text-[var(--text-tertiary)] block">{t('tarifs.surcharge')}</span>
                    <span className="font-bold text-[var(--accent)]">{majore}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
