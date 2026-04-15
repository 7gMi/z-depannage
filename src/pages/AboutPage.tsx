import { Shield, Clock, MapPin, Truck, Users, Award, CheckCircle, Phone, Calendar, FileText, Building2, Briefcase, Hash, Scale, Landmark, ExternalLink } from 'lucide-react';
import { Stats } from '../components/layout/Stats';
import { Avis } from '../components/layout/Avis';
import { InsuranceMarquee } from '../components/layout/InsuranceMarquee';
import { CTABanner } from '../components/layout/CTABanner';
import { PageMeta } from '../components/PageMeta';
import { useT } from '../i18n/LanguageContext';

const TIMELINE_MILESTONES = [
  { yearKey: 'about.timeline.2023.year', titleKey: 'about.timeline.2023.title', descKey: 'about.timeline.2023.desc' },
  { yearKey: 'about.timeline.2024.year', titleKey: 'about.timeline.2024.title', descKey: 'about.timeline.2024.desc' },
  { yearKey: 'about.timeline.2025.year', titleKey: 'about.timeline.2025.title', descKey: 'about.timeline.2025.desc' },
  { yearKey: 'about.timeline.2026.year', titleKey: 'about.timeline.2026.title', descKey: 'about.timeline.2026.desc' },
] as const;

const ANTIVALUES = [
  { titleKey: 'about.antivalues.item1.title', descKey: 'about.antivalues.item1.desc' },
  { titleKey: 'about.antivalues.item2.title', descKey: 'about.antivalues.item2.desc' },
  { titleKey: 'about.antivalues.item3.title', descKey: 'about.antivalues.item3.desc' },
  { titleKey: 'about.antivalues.item4.title', descKey: 'about.antivalues.item4.desc' },
] as const;

const FLEET = [
  {
    slug: 'flatbed',
    img: '/fleet/fleet-flatbed',
    tagKey: 'about.fleet.flatbed.tag',
    titleKey: 'about.fleet.flatbed.title',
    descKey: 'about.fleet.flatbed.desc',
  },
  {
    slug: 'urban',
    img: '/fleet/fleet-urban',
    tagKey: 'about.fleet.urban.tag',
    titleKey: 'about.fleet.urban.title',
    descKey: 'about.fleet.urban.desc',
  },
  {
    slug: 'heavy',
    img: '/fleet/fleet-heavy',
    tagKey: 'about.fleet.heavy.tag',
    titleKey: 'about.fleet.heavy.title',
    descKey: 'about.fleet.heavy.desc',
  },
] as const;

const CREDENTIALS = [
  { icon: Hash, labelKey: 'about.credentials.siret.label', valueKey: 'about.credentials.siret.value' },
  { icon: FileText, labelKey: 'about.credentials.tva.label', valueKey: 'about.credentials.tva.value' },
  { icon: Briefcase, labelKey: 'about.credentials.form.label', valueKey: 'about.credentials.form.value' },
  { icon: Scale, labelKey: 'about.credentials.naf.label', valueKey: 'about.credentials.naf.value' },
  { icon: Calendar, labelKey: 'about.credentials.founded.label', valueKey: 'about.credentials.founded.value' },
  { icon: Landmark, labelKey: 'about.credentials.hq.label', valueKey: 'about.credentials.hq.value' },
  { icon: Building2, labelKey: 'about.credentials.idcc.label', valueKey: 'about.credentials.idcc.value' },
  { icon: Shield, labelKey: 'about.credentials.insurance.label', valueKey: 'about.credentials.insurance.value' },
  { icon: MapPin, labelKey: 'about.credentials.zone.label', valueKey: 'about.credentials.zone.value' },
  { icon: Clock, labelKey: 'about.credentials.availability.label', valueKey: 'about.credentials.availability.value' },
] as const;

const VALUES = [
  {
    icon: Clock,
    titleKey: 'about.value1.title',
    descKey: 'about.value1.desc',
  },
  {
    icon: Shield,
    titleKey: 'about.value2.title',
    descKey: 'about.value2.desc',
  },
  {
    icon: CheckCircle,
    titleKey: 'about.value3.title',
    descKey: 'about.value3.desc',
  },
];

const AGREMENTS = [
  'about.agrement1',
  'about.agrement2',
  'about.agrement3',
  'about.agrement4',
];

interface AboutPageProps {
  phoneDisplay: string;
  phoneLink: string;
}

export function AboutPage({ phoneDisplay, phoneLink }: AboutPageProps) {
  const { t } = useT();

  return (
    <>
      <PageMeta
        title="À propos — Qui sommes-nous | ZDEPANNAGE Grigny (91)"
        description="ZDEPANNAGE, entreprise familiale de dépannage et remorquage à Grigny (91). Plus de 3 ans d'expérience, 6 véhicules, équipe de 6 professionnels. Agréé assurances et forces de l'ordre."
      />

      {/* Hero À propos */}
      <section className="grain-overlay about-hero-spotlight py-20 sm:py-32 bg-[var(--bg-dark)] relative overflow-hidden">
        <picture>
          <source srcSet="/atelier/about-hero-hands.avif" type="image/avif" />
          <source srcSet="/atelier/about-hero-hands.webp" type="image/webp" />
          <img
            src="/atelier/about-hero-hands.webp"
            alt=""
            fetchPriority="high"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover opacity-55 pointer-events-none"
            aria-hidden="true"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-dark)]/40 via-[var(--bg-dark)]/55 to-[var(--bg-dark)]/85 pointer-events-none" aria-hidden="true" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-[var(--accent)]/10 border border-[var(--accent)]/30 rounded-full px-4 py-2 mb-8">
            <Users size={16} className="text-[var(--accent-bright)]" />
            <span className="text-[var(--accent-bright)] font-medium text-sm">{t('about.badge')}</span>
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-white mb-6 leading-tight">
            {t('about.heroTitle')}
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
            {t('about.heroSubtitle')}
          </p>
        </div>
      </section>

      {/* Notre histoire */}
      <section className="py-16 sm:py-20 bg-[var(--bg-primary)]">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl font-bold text-[var(--text-primary)] mb-6">
                {t('about.storyTitle')}
              </h2>
              <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed">
                <p>{t('about.storyP1')}</p>
                <p>{t('about.storyP2')}</p>
                <p>{t('about.storyP3')}</p>
              </div>
            </div>

            {/* Infos clés */}
            <div className="grid grid-cols-2 gap-4 reveal-stagger">
              <div className="reveal icon-hover-parent p-[1.5px] rounded-2xl bg-gradient-to-br from-[var(--accent)] via-[var(--accent)]/30 to-transparent">
                <div className="p-[22px] rounded-[calc(1rem-1.5px)] bg-[var(--bg-secondary)] text-center h-full">
                  <MapPin size={24} className="icon-hover text-[var(--accent)] mx-auto mb-3" aria-hidden="true" />
                  <p className="font-heading font-bold text-lg text-[var(--text-primary)]">Grigny (91)</p>
                  <p className="text-sm text-[var(--text-tertiary)]">{t('about.base')}</p>
                </div>
              </div>
              <div className="reveal icon-hover-parent p-6 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-default)] text-center">
                <Truck size={24} className="icon-hover text-[var(--primary)] mx-auto mb-3" aria-hidden="true" />
                <p className="font-heading font-bold text-lg text-[var(--text-primary)]">3 {t('about.plateaux')}</p>
                <p className="text-sm text-[var(--text-tertiary)]">{t('about.equipped')}</p>
              </div>
              <div className="reveal icon-hover-parent p-6 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-default)] text-center">
                <Users size={24} className="icon-hover text-green-500 mx-auto mb-3" aria-hidden="true" />
                <p className="font-heading font-bold text-lg text-[var(--text-primary)]">4 {t('about.pros')}</p>
                <p className="text-sm text-[var(--text-tertiary)]">{t('about.experienced')}</p>
              </div>
              <div className="reveal icon-hover-parent p-6 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-default)] text-center">
                <Phone size={24} className="icon-hover text-[var(--accent-bright)] mx-auto mb-3" aria-hidden="true" />
                <p className="font-heading font-bold text-lg text-[var(--text-primary)]">24h/24</p>
                <p className="text-sm text-[var(--text-tertiary)]">7j/7</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ MANIFESTE ============ */}
      <section className="relative py-20 sm:py-28 bg-[var(--bg-dark)] border-y border-white/5 overflow-hidden">
        <picture>
          <source srcSet="/atelier/about-manifest-driver-young.avif" type="image/avif" />
          <source srcSet="/atelier/about-manifest-driver-young.webp" type="image/webp" />
          <img
            src="/atelier/about-manifest-driver-young.webp"
            alt=""
            loading="lazy"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover opacity-45 pointer-events-none"
            aria-hidden="true"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-dark)]/50 via-[var(--bg-dark)]/65 to-[var(--bg-dark)]/90 pointer-events-none" aria-hidden="true" />
        <div className="absolute inset-0 pattern-dots-orange pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--accent-bright)] mb-6">
            {t('about.manifest.kicker')}
          </p>
          <blockquote className="mb-8">
            <p className="manifeste-quote text-2xl sm:text-4xl lg:text-6xl text-white leading-tight px-2">
              {t('about.manifest.quote')}
            </p>
          </blockquote>
          <p className="text-base sm:text-lg text-white/65 max-w-2xl mx-auto leading-relaxed mb-6">
            {t('about.manifest.desc')}
          </p>
          <p className="text-sm text-white/50 font-medium tracking-wider">
            — {t('about.manifest.author')}
          </p>
        </div>
      </section>

      {/* ============ ANTI-VALUES — Ce qu'on ne fait pas ============ */}
      <section className="py-16 sm:py-20 bg-[var(--bg-primary)] relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--accent)] mb-3">
              {t('about.antivalues.kicker')}
            </p>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[var(--text-primary)]">
              {t('about.antivalues.title')}
            </h2>
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 reveal-stagger">
            {ANTIVALUES.map((item) => (
              <li
                key={item.titleKey}
                className="reveal relative flex items-start gap-4 p-5 sm:p-6 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-default)] hover:border-[var(--accent)]/40 transition-colors"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center bg-red-500/10 border border-red-500/20">
                  <span className="font-heading font-extrabold text-xl text-red-500 leading-none" aria-hidden="true">
                    ×
                  </span>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-base sm:text-lg text-[var(--text-primary)] mb-1.5 leading-tight">
                    {t(item.titleKey)}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {t(item.descKey)}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ============ TIMELINE — Depuis 2023 ============ */}
      <section className="py-20 sm:py-28 bg-[var(--bg-primary)]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-14 sm:mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--accent)] mb-3">
              {t('about.timeline.kicker')}
            </p>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[var(--text-primary)] mb-3">
              {t('about.timeline.title')}
            </h2>
            <p className="text-sm sm:text-base text-[var(--text-secondary)]">
              {t('about.timeline.subtitle')}
            </p>
          </div>

          <ol className="relative pl-10 sm:pl-16 reveal-stagger">
            <span className="timeline-line left-3 sm:left-6" aria-hidden="true" />
            {TIMELINE_MILESTONES.map((m) => (
              <li key={m.yearKey} className="timeline-item reveal relative pb-8 sm:pb-10 last:pb-0">
                <span
                  className="timeline-dot absolute -left-[37px] sm:-left-[55px] top-1"
                  aria-hidden="true"
                />
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-4 mb-2">
                  <span className="inline-flex items-center gap-1.5 font-heading font-extrabold text-xl sm:text-2xl text-[var(--accent)] tabular-nums">
                    <Calendar size={16} className="opacity-70" aria-hidden="true" />
                    {t(m.yearKey)}
                  </span>
                  <h3 className="font-heading font-bold text-lg text-[var(--text-primary)]">
                    {t(m.titleKey)}
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                  {t(m.descKey)}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ============ FLEET SHOWCASE ============ */}
      <section className="py-20 sm:py-28 bg-[var(--bg-dark)] relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots-orange pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--accent-bright)] mb-3">
              {t('about.fleet.kicker')}
            </p>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white mb-4">
              {t('about.fleet.title')}
            </h2>
            <p className="text-sm sm:text-base text-white/60 max-w-2xl mx-auto leading-relaxed">
              {t('about.fleet.desc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 reveal-stagger">
            {FLEET.map((v) => (
              <article
                key={v.slug}
                className="reveal group relative rounded-3xl overflow-hidden bg-gradient-to-b from-white/[0.05] to-white/[0.01] border border-white/10 hover:border-[var(--accent)]/40 transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className="absolute -right-16 -top-16 w-56 h-56 rounded-full bg-[var(--accent)]/15 blur-3xl pointer-events-none"
                  aria-hidden="true"
                />
                <div className="relative aspect-[3/2] overflow-hidden bg-[var(--bg-dark)]">
                  <picture>
                    <source srcSet={`${v.img}.avif`} type="image/avif" />
                    <source srcSet={`${v.img}.webp`} type="image/webp" />
                    <img
                      src={`${v.img}.webp`}
                      alt={t(v.titleKey)}
                      loading="lazy"
                      decoding="async"
                      width={1600}
                      height={1067}
                      className="w-full h-full object-cover motion-safe:group-hover:scale-[1.04] motion-safe:transition-transform motion-safe:duration-700"
                    />
                  </picture>
                </div>
                <div className="relative p-6">
                  <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--accent-bright)] mb-2">
                    {t(v.tagKey)}
                  </p>
                  <h3 className="font-heading font-extrabold text-xl text-white mb-3 leading-tight">
                    {t(v.titleKey)}
                  </h3>
                  <p className="text-sm text-white/60 leading-relaxed">
                    {t(v.descKey)}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Notre atelier — photo authentique backstage */}
      <section className="relative overflow-hidden">
        <div className="relative aspect-[16/9] sm:aspect-[21/9] max-h-[600px]">
          <picture>
            <source srcSet="/content/atelier.avif" type="image/avif" />
            <source srcSet="/content/atelier.webp" type="image/webp" />
            <img
              src="/content/atelier.webp"
              alt="L'atelier ZDEPANNAGE à Grigny — flotte de 6 véhicules prête à intervenir 24h/24"
              loading="lazy"
              decoding="async"
              width={1600}
              height={900}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-dark)] via-[var(--bg-dark)]/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--bg-dark)]/80 via-transparent to-transparent" />
          <div className="absolute inset-0 flex items-end">
            <div className="max-w-5xl mx-auto px-4 pb-10 sm:pb-16 w-full">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--accent-bright)] mb-3">
                {t('about.workshop.badge')}
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white mb-3 max-w-2xl">
                {t('about.workshop.title')}
              </h2>
              <p className="text-white/75 text-base sm:text-lg max-w-xl leading-relaxed">
                {t('about.workshop.desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nos valeurs */}
      <section className="py-16 sm:py-20 bg-[var(--bg-secondary)]">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="font-heading text-3xl font-bold text-[var(--text-primary)] text-center mb-12">
            {t('about.valuesTitle')}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 reveal-stagger">
            {VALUES.map(({ icon: Icon, titleKey, descKey }) => (
              <div key={titleKey} className="reveal icon-hover-parent flex flex-col items-center text-center p-8 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-default)]">
                <div className="icon-hover w-16 h-16 rounded-2xl flex items-center justify-center mb-5 bg-[var(--accent)]/8">
                  <Icon size={32} className="text-[var(--accent)]" aria-hidden="true" />
                </div>
                <h3 className="font-heading font-bold text-lg mb-3">{t(titleKey)}</h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{t(descKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Agréments */}
      <section className="py-16 sm:py-20 bg-[var(--bg-primary)]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-heading text-3xl font-bold text-[var(--text-primary)] text-center mb-10">
            {t('about.agrementsTitle')}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 reveal-stagger">
            {AGREMENTS.map((key) => (
              <div key={key} className="reveal icon-hover-parent flex items-start gap-4 p-5 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-default)]">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-green-500/10 flex-shrink-0">
                  <Award size={20} className="icon-hover text-green-500" aria-hidden="true" />
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed pt-2">{t(key)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ Wall of Credentials ============ */}
      <section className="py-16 sm:py-20 bg-[var(--bg-dark)] relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots-orange pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--accent-bright)] mb-3">
              {t('about.credentials.kicker')}
            </p>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white mb-3">
              {t('about.credentials.title')}
            </h2>
            <p className="text-sm sm:text-base text-white/60 max-w-2xl mx-auto leading-relaxed">
              {t('about.credentials.desc')}
            </p>
          </div>

          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 reveal-stagger">
            {CREDENTIALS.map(({ icon: Icon, labelKey, valueKey }) => (
              <li
                key={labelKey}
                className="icon-hover-parent reveal aspect-square rounded-xl border border-white/10 hover:border-[var(--accent)]/50 bg-white/[0.03] hover:bg-white/[0.05] p-3 sm:p-4 flex flex-col justify-between transition-colors"
              >
                <Icon className="icon-hover w-5 h-5 text-[var(--accent)]" aria-hidden="true" />
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-white/40 leading-tight mb-1">
                    {t(labelKey)}
                  </p>
                  <p className="text-xs sm:text-sm font-heading font-bold text-white leading-tight tabular-nums">
                    {t(valueKey)}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <div className="text-center mt-8">
            <a
              href="https://annuaire-entreprises.data.gouv.fr/entreprise/zdepannage-zdepannage-981024268"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs text-white/50 hover:text-[var(--accent-bright)] underline-offset-2 hover:underline transition-colors"
            >
              {t('about.credentials.verify')}
              <ExternalLink size={12} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      {/* ============ Cadre narratif partenaires ============ */}
      <section className="pt-16 sm:pt-20 pb-4 bg-[var(--bg-primary)]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--accent)] mb-3">
            {t('about.partners.kicker')}
          </p>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[var(--text-primary)] mb-4">
            {t('about.partners.title')}
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
            {t('about.partners.desc')}
          </p>
        </div>
      </section>
      {/* ============ Hotline editorial ============ */}
      <section className="py-20 sm:py-28 bg-[var(--bg-dark)] relative overflow-hidden border-y border-white/5">
        <picture>
          <source srcSet="/atelier/about-hotline-young-answering.avif" type="image/avif" />
          <source srcSet="/atelier/about-hotline-young-answering.webp" type="image/webp" />
          <img
            src="/atelier/about-hotline-young-answering.webp"
            alt=""
            loading="lazy"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover opacity-40 pointer-events-none"
            aria-hidden="true"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-dark)] via-[var(--bg-dark)]/80 to-[var(--bg-dark)] pointer-events-none" aria-hidden="true" />
        <div className="absolute inset-0 pattern-dots-orange pointer-events-none" aria-hidden="true" />
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-[var(--accent)]/15 blur-[100px] pointer-events-none"
          aria-hidden="true"
        />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--accent-bright)] mb-5">
            {t('about.hotline.kicker')}
          </p>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-8 tracking-tight">
            <span className="block">{t('about.hotline.title1')}</span>
            <span className="block">{t('about.hotline.title2')}</span>
          </h2>
          <a
            href={phoneLink}
            className="group inline-flex items-center justify-center gap-2 sm:gap-4 mb-8 hover:scale-[1.02] active:scale-[0.98] transition-transform max-w-full"
            aria-label={phoneDisplay}
          >
            <Phone
              className="text-[var(--accent)] motion-safe:animate-phone-ring w-7 h-7 sm:w-10 sm:h-10 flex-shrink-0"
              aria-hidden="true"
            />
            <span className="font-heading font-extrabold text-4xl sm:text-6xl lg:text-7xl xl:text-8xl text-white tabular-nums leading-none tracking-tight whitespace-nowrap">
              {phoneDisplay}
            </span>
          </a>
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-green-400 motion-safe:animate-pulse" aria-hidden="true" />
            <span className="text-sm font-bold text-green-300 uppercase tracking-wider">
              {t('about.hotline.available')}
            </span>
          </div>
          <p className="text-sm sm:text-base text-white/60 max-w-2xl mx-auto leading-relaxed">
            {t('about.hotline.desc')}
          </p>
        </div>
      </section>

      <InsuranceMarquee />
      <Stats />
      <Avis />
      <CTABanner phoneDisplay={phoneDisplay} phoneLink={phoneLink} />
    </>
  );
}
