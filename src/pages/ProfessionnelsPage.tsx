import { useState, useId, type FormEvent } from 'react';
import {
  Shield,
  Building2,
  Truck,
  HeartPulse,
  CheckCircle,
  Phone,
  Send,
  ArrowRight,
} from 'lucide-react';
import { useT } from '../i18n/LanguageContext';
import { PageMeta } from '../components/PageMeta';
import { JsonLd } from '../components/JsonLd';
import { supabase } from '../lib/supabase';

interface ProfessionnelsPageProps {
  phoneDisplay: string;
  phoneLink: string;
}

const B2B_SERVICE_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'B2B automotive breakdown and towing contracts',
  provider: {
    '@type': 'AutoRepair',
    name: 'ZDEPANNAGE',
    legalName: 'ZDEPANNAGE SAS',
    url: 'https://z-depannage.fr',
    telephone: '+33756973686',
    foundingDate: '2023-10-28',
    vatID: 'FR84981024268',
    taxID: '98102426800014',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '7 BIS Route de Corbeil',
      addressLocality: 'Grigny',
      postalCode: '91350',
      addressRegion: 'Île-de-France',
      addressCountry: 'FR',
    },
  },
  areaServed: {
    '@type': 'State',
    name: 'Île-de-France',
  },
  audience: {
    '@type': 'BusinessAudience',
    audienceType: 'Insurers, car dealerships, fleet operators, public health institutions',
  },
  availableChannel: {
    '@type': 'ServiceChannel',
    servicePhone: '+33756973686',
    availableLanguage: ['French', 'English', 'Arabic', 'Russian'],
  },
  hoursAvailable: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '00:00',
    closes: '23:59',
  },
};

const GRID_BG =
  'bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]';

const SECTORS = [
  { icon: Shield, titleKey: 'b2b.sectors.insurance.title', descKey: 'b2b.sectors.insurance.desc' },
  { icon: Building2, titleKey: 'b2b.sectors.dealer.title', descKey: 'b2b.sectors.dealer.desc' },
  { icon: Truck, titleKey: 'b2b.sectors.fleet.title', descKey: 'b2b.sectors.fleet.desc' },
  { icon: HeartPulse, titleKey: 'b2b.sectors.health.title', descKey: 'b2b.sectors.health.desc' },
] as const;

const TRUST_ITEMS = [
  { img: 'trust-public', titleKey: 'b2b.trust.public.title', altKey: 'b2b.trust.public.alt' },
  { img: 'trust-dealer', titleKey: 'b2b.trust.dealer.title', altKey: 'b2b.trust.dealer.alt' },
  { img: 'trust-rental', titleKey: 'b2b.trust.rental.title', altKey: 'b2b.trust.rental.alt' },
] as const;

const SLA_ROWS = [
  {
    labelKey: 'b2b.sla.row.delay',
    standardKey: 'b2b.sla.row.delay.std',
    premiumKey: 'b2b.sla.row.delay.premium',
  },
  {
    labelKey: 'b2b.sla.row.availability',
    standardKey: 'b2b.sla.row.availability.std',
    premiumKey: 'b2b.sla.row.availability.premium',
  },
  {
    labelKey: 'b2b.sla.row.zone',
    standardKey: 'b2b.sla.row.zone.std',
    premiumKey: 'b2b.sla.row.zone.premium',
  },
  {
    labelKey: 'b2b.sla.row.billing',
    standardKey: 'b2b.sla.row.billing.std',
    premiumKey: 'b2b.sla.row.billing.premium',
  },
  {
    labelKey: 'b2b.sla.row.onCall',
    standardKey: 'b2b.sla.row.onCall.std',
    premiumKey: 'b2b.sla.row.onCall.premium',
  },
  {
    labelKey: 'b2b.sla.row.reporting',
    standardKey: 'b2b.sla.row.reporting.std',
    premiumKey: 'b2b.sla.row.reporting.premium',
  },
] as const;

const PROCESS_STEPS = [
  { titleKey: 'b2b.process.step1', descKey: 'b2b.process.step1.desc', kpiKey: 'b2b.process.step1.kpi' },
  { titleKey: 'b2b.process.step2', descKey: 'b2b.process.step2.desc', kpiKey: 'b2b.process.step2.kpi' },
  { titleKey: 'b2b.process.step3', descKey: 'b2b.process.step3.desc', kpiKey: 'b2b.process.step3.kpi' },
  { titleKey: 'b2b.process.step4', descKey: 'b2b.process.step4.desc', kpiKey: 'b2b.process.step4.kpi' },
] as const;

const TRUST2_ITEMS = [
  { labelKey: 'b2b.trust2.siret' },
  { labelKey: 'b2b.trust2.kbis' },
  { labelKey: 'b2b.trust2.insurance' },
  { labelKey: 'b2b.trust2.approval' },
  { labelKey: 'b2b.trust2.founded' },
] as const;

type FormState = {
  name: string;
  email: string;
  phone: string;
  sector: string;
  volume: string;
};

const INITIAL_FORM: FormState = {
  name: '',
  email: '',
  phone: '',
  sector: '',
  volume: '',
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ProfessionnelsPage({ phoneDisplay, phoneLink }: ProfessionnelsPageProps) {
  const { t, lang } = useT();
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const formId = useId();
  const fieldId = (k: string) => `${formId}-${k}`;

  function validate(state: FormState): Partial<Record<keyof FormState, string>> {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!state.name.trim()) next.name = t('b2b.form.error.required');
    if (!state.email.trim()) next.email = t('b2b.form.error.required');
    else if (!EMAIL_REGEX.test(state.email.trim())) next.email = t('b2b.form.error.email');
    if (!state.phone.trim()) next.phone = t('b2b.form.error.required');
    if (!state.sector) next.sector = t('b2b.form.error.required');
    if (!state.volume) next.volume = t('b2b.form.error.required');
    return next;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const v = validate(form);
    setErrors(v);
    if (Object.keys(v).length > 0) return;

    setSubmitting(true);
    setSubmitError(null);

    const { error } = await supabase.from('b2b_leads').insert({
      name: form.name.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
      sector: form.sector,
      volume: form.volume,
      locale: lang,
      user_agent: navigator.userAgent.slice(0, 500),
    });

    if (error) {
      setSubmitError(t('b2b.form.error.generic'));
      setSubmitting(false);
      return;
    }

    setSubmitted(true);
    setSubmitting(false);
  }

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  }

  return (
    <>
      <PageMeta
        title="Espace Professionnels — Contrats dépannage 24/7 B2B | ZDEPANNAGE"
        description="Contrats de dépannage et remorquage 24/7 pour assureurs, concessionnaires, flottes et hôpitaux en Île-de-France. Facturation centralisée, délais garantis, interlocuteur unique."
      />
      <JsonLd data={B2B_SERVICE_JSONLD} id="b2b-service-jsonld" />

      {/* ============ HERO B2B ============ */}
      <section className="relative min-h-[78vh] flex items-center overflow-hidden bg-[var(--bg-dark)]">
        <div className="absolute inset-0">
          <picture>
            <source srcSet="/content/b2b-hero.avif" type="image/avif" />
            <source srcSet="/content/b2b-hero.webp" type="image/webp" />
            <img
              src="/content/b2b-hero.webp"
              alt=""
              aria-hidden="true"
              width={1920}
              height={1080}
              fetchPriority="high"
              decoding="async"
              className="w-full h-full object-cover motion-safe:hero-kenburns"
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--bg-dark)]/95 via-[var(--bg-dark)]/80 to-[var(--bg-dark)]/40" />
          <div className={`absolute inset-0 ${GRID_BG} opacity-60`} aria-hidden="true" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 md:py-24 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 rounded-full px-4 py-1.5 mb-6 motion-safe:animate-[fadeInUp_0.6s_ease_0.1s_both]">
              <span className="text-blue-300 text-xs font-bold uppercase tracking-[0.2em]">
                {t('b2b.hero.kicker')}
              </span>
            </div>

            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-[1.1] motion-safe:animate-[fadeInUp_0.6s_ease_0.25s_both]">
              {t('b2b.hero.title')}
            </h1>

            <p className="text-lg md:text-xl text-white/75 mb-10 max-w-2xl leading-relaxed motion-safe:animate-[fadeInUp_0.6s_ease_0.4s_both]">
              {t('b2b.hero.subtitle')}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10 motion-safe:animate-[fadeInUp_0.6s_ease_0.55s_both]">
              <a
                href="#b2b-form"
                className="inline-flex items-center justify-center gap-2 text-white font-heading font-bold text-base px-6 py-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5 min-h-[48px]"
                style={{ background: 'var(--gradient-cta)', boxShadow: 'var(--shadow-orange)' }}
              >
                {t('b2b.hero.cta.primary')}
                <ArrowRight size={18} />
              </a>
              <a
                href={phoneLink}
                className="inline-flex items-center justify-center gap-2 border-2 border-white/20 backdrop-blur-sm bg-white/5 text-white font-semibold px-6 py-4 rounded-xl hover:bg-white/10 hover:border-white/40 transition-all duration-200 min-h-[48px]"
              >
                <Phone size={18} />
                {t('b2b.hero.cta.secondary')} — {phoneDisplay}
              </a>
            </div>

            <dl className="flex flex-wrap gap-x-8 gap-y-3 motion-safe:animate-[fadeInUp_0.6s_ease_0.7s_both]">
              <div>
                <dt className="text-xs uppercase tracking-widest text-white/50 font-semibold">
                  {t('b2b.hero.stat1.label')}
                </dt>
                <dd className="text-2xl font-heading font-extrabold text-white">
                  {t('b2b.hero.stat1.value')}
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-widest text-white/50 font-semibold">
                  {t('b2b.hero.stat2.label')}
                </dt>
                <dd className="text-2xl font-heading font-extrabold text-white">
                  {t('b2b.hero.stat2.value')}
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-widest text-white/50 font-semibold">
                  {t('b2b.hero.stat3.label')}
                </dt>
                <dd className="text-2xl font-heading font-extrabold text-white">
                  {t('b2b.hero.stat3.value')}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* ============ TRUST BANNER (social proof AVANT pitch) ============ */}
      <section className="py-16 sm:py-20 bg-[var(--bg-secondary)]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-3">
              {t('b2b.trust.kicker')}
            </p>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[var(--text-primary)]">
              {t('b2b.trust.title')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TRUST_ITEMS.map((item) => (
              <article
                key={item.img}
                className="group relative rounded-2xl overflow-hidden bg-[var(--bg-card)] border border-[var(--border-default)] shadow-sm hover:shadow-lg transition-all duration-500 motion-safe:hover:-translate-y-1"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <picture>
                    <source srcSet={`/content/${item.img}.avif`} type="image/avif" />
                    <source srcSet={`/content/${item.img}.webp`} type="image/webp" />
                    <img
                      src={`/content/${item.img}.webp`}
                      alt={t(item.altKey)}
                      loading="lazy"
                      decoding="async"
                      width={1200}
                      height={900}
                      className="w-full h-full object-cover motion-safe:transition-transform motion-safe:duration-700 motion-safe:group-hover:scale-105"
                    />
                  </picture>
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-dark)]/70 via-transparent to-transparent" />
                </div>
                <div className="p-5">
                  <p className="font-heading font-bold text-base text-[var(--text-primary)]">
                    {t(item.titleKey)}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <p className="text-center text-xs text-[var(--text-tertiary)] mt-8 max-w-2xl mx-auto">
            {t('b2b.trust.disclaimer')}
          </p>
        </div>
      </section>

      {/* ============ SECTEURS COUVERTS ============ */}
      <section className="relative py-16 sm:py-24 bg-[var(--bg-dark)] text-white overflow-hidden">
        <div className={`absolute inset-0 ${GRID_BG}`} aria-hidden="true" />
        <div className="relative max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-300 mb-3">
              {t('b2b.sectors.kicker')}
            </p>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white">
              {t('b2b.sectors.title')}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SECTORS.map(({ icon: Icon, titleKey, descKey }) => (
              <article
                key={titleKey}
                className="group relative rounded-2xl p-6 bg-white/5 border border-white/10 hover:border-blue-500/40 hover:bg-white/[0.07] transition-all duration-300 motion-safe:hover:-translate-y-1"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-300 mb-4">
                  <Icon size={22} aria-hidden="true" />
                </div>
                <h3 className="font-heading font-bold text-lg text-white mb-2">
                  {t(titleKey)}
                </h3>
                <p className="text-sm text-white/65 leading-relaxed">{t(descKey)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SLA ============ */}
      <section className="py-16 sm:py-24 bg-[var(--bg-secondary)]">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-3">
              {t('b2b.sla.kicker')}
            </p>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[var(--text-primary)]">
              {t('b2b.sla.title')}
            </h2>
            <p className="text-[var(--text-secondary)] mt-3 max-w-2xl mx-auto">
              {t('b2b.sla.subtitle')}
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-[var(--border-default)] bg-[var(--bg-card)] shadow-sm">
            <table className="w-full text-sm">
              <caption className="sr-only">{t('b2b.sla.caption')}</caption>
              <thead>
                <tr className="bg-[var(--bg-dark)] text-white">
                  <th
                    scope="col"
                    className="text-start font-heading font-bold px-5 py-4 text-xs uppercase tracking-wider"
                  >
                    {t('b2b.sla.col.label')}
                  </th>
                  <th
                    scope="col"
                    className="text-start font-heading font-bold px-5 py-4 text-xs uppercase tracking-wider"
                  >
                    {t('b2b.sla.col.standard')}
                  </th>
                  <th
                    scope="col"
                    className="text-start font-heading font-bold px-5 py-4 text-xs uppercase tracking-wider bg-blue-500/10 text-blue-200"
                  >
                    {t('b2b.sla.col.premium')}
                  </th>
                </tr>
              </thead>
              <tbody>
                {SLA_ROWS.map((row, i) => (
                  <tr
                    key={row.labelKey}
                    className={i % 2 === 0 ? 'bg-[var(--bg-card)]' : 'bg-[var(--bg-secondary)]/50'}
                  >
                    <th
                      scope="row"
                      className="text-start font-semibold text-[var(--text-primary)] px-5 py-4 align-top"
                    >
                      {t(row.labelKey)}
                    </th>
                    <td className="text-[var(--text-secondary)] px-5 py-4 align-top">
                      {t(row.standardKey)}
                    </td>
                    <td className="text-[var(--text-primary)] font-semibold px-5 py-4 align-top bg-blue-50/50">
                      {t(row.premiumKey)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[var(--text-tertiary)] mt-4 text-center">
            {t('b2b.sla.note')}
          </p>
        </div>
      </section>

      {/* ============ PROCESS ============ */}
      <section className="relative py-20 sm:py-28 bg-[var(--bg-dark)] text-white overflow-hidden">
        <div className={`absolute inset-0 ${GRID_BG}`} aria-hidden="true" />
        <div className="relative max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--accent-bright)] mb-3">
              {t('b2b.process.kicker')}
            </p>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white">
              {t('b2b.process.title')}
            </h2>
          </div>

          {/* Desktop — timeline horizontale avec ligne SVG animée */}
          <div className="relative hidden md:block">
            <svg
              className="steps-line reveal absolute left-0 right-0 top-[76px] w-full h-3 pointer-events-none"
              viewBox="0 0 1200 10"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="stepGradient" x1="0" x2="1" y1="0" y2="0">
                  <stop offset="0%" stopColor="#FF6B2B" stopOpacity="0.15" />
                  <stop offset="50%" stopColor="#FF6B2B" stopOpacity="1" />
                  <stop offset="100%" stopColor="#FF6B2B" stopOpacity="0.15" />
                </linearGradient>
              </defs>
              <path
                d="M 40 5 L 1160 5"
                fill="none"
                stroke="url(#stepGradient)"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>

            <ol className="grid grid-cols-4 gap-5 relative reveal-stagger">
              {PROCESS_STEPS.map((step, i) => (
                <li
                  key={step.titleKey}
                  className="step-card reveal group relative pt-24"
                >
                  <span className="step-ghost absolute -top-6 -left-1" aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span
                    className="step-dot absolute top-[70px] left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[var(--accent)] ring-4 ring-[var(--bg-dark)] z-10"
                    aria-hidden="true"
                  />
                  <div className="relative rounded-2xl p-5 bg-white/[0.04] border border-white/10 hover:bg-white/[0.07] hover:border-[var(--accent)]/40 transition-all duration-300 hover:-translate-y-1">
                    <p className="font-heading font-extrabold text-base text-white mb-2 leading-snug">
                      <span className="sr-only">{t('b2b.process.stepLabel')} {i + 1} — </span>
                      {t(step.titleKey)}
                    </p>
                    <p className="text-xs text-white/60 leading-relaxed mb-4 min-h-[48px]">
                      {t(step.descKey)}
                    </p>
                    <p className="step-kpi font-heading font-extrabold text-lg text-[var(--accent-bright)] tabular-nums">
                      {t(step.kpiKey)}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* Mobile — timeline verticale */}
          <ol className="md:hidden relative space-y-5 pl-10 reveal-stagger">
            <span
              className="absolute left-3 top-2 bottom-2 w-px bg-gradient-to-b from-[var(--accent)]/10 via-[var(--accent)]/60 to-[var(--accent)]/10"
              aria-hidden="true"
            />
            {PROCESS_STEPS.map((step, i) => (
              <li key={step.titleKey} className="step-card reveal relative">
                <span
                  className="step-dot absolute -left-[30px] top-5 w-3 h-3 rounded-full bg-[var(--accent)] ring-4 ring-[var(--bg-dark)]"
                  aria-hidden="true"
                />
                <div className="relative rounded-2xl p-5 bg-white/[0.04] border border-white/10">
                  <div className="flex items-start justify-between mb-2">
                    <p className="font-heading font-extrabold text-base text-white leading-snug">
                      <span className="sr-only">{t('b2b.process.stepLabel')} {i + 1} — </span>
                      {t(step.titleKey)}
                    </p>
                    <span className="font-heading text-xs font-bold text-white/25 tracking-widest ml-3 flex-shrink-0">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <p className="text-xs text-white/60 leading-relaxed mb-3">
                    {t(step.descKey)}
                  </p>
                  <p className="step-kpi font-heading font-extrabold text-base text-[var(--accent-bright)] tabular-nums">
                    {t(step.kpiKey)}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ============ CONFORMITE ============ */}
      <section className="py-16 sm:py-24 bg-[var(--bg-secondary)]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-3">
              {t('b2b.trust2.kicker')}
            </p>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[var(--text-primary)]">
              {t('b2b.trust2.title')}
            </h2>
          </div>

          <ul className="space-y-3">
            {TRUST2_ITEMS.map((item) => (
              <li
                key={item.labelKey}
                className="flex items-start gap-3 p-4 rounded-xl bg-[var(--bg-card)] border border-[var(--border-default)]"
              >
                <CheckCircle
                  size={22}
                  className="text-[var(--accent)] flex-shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <span className="text-[var(--text-primary)] text-sm sm:text-base">
                  {t(item.labelKey)}
                </span>
              </li>
            ))}
          </ul>

          <p className="text-xs text-[var(--text-tertiary)] mt-6 text-center italic">
            {t('b2b.trust2.note')}
          </p>
        </div>
      </section>

      {/* ============ FORMULAIRE B2B ============ */}
      <section id="b2b-form" className="relative py-16 sm:py-24 bg-[var(--bg-dark)] text-white overflow-hidden scroll-mt-32">
        <div className={`absolute inset-0 ${GRID_BG}`} aria-hidden="true" />
        <div className="relative max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-300 mb-3">
              {t('b2b.form.kicker')}
            </p>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white">
              {t('b2b.form.title')}
            </h2>
            <p className="text-white/65 mt-3 max-w-xl mx-auto">{t('b2b.form.subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div
                  role="status"
                  aria-live="polite"
                  className="rounded-2xl p-8 bg-green-500/10 border border-green-500/30"
                >
                  <CheckCircle
                    size={36}
                    className="text-green-400 mb-4"
                    aria-hidden="true"
                  />
                  <h3 className="font-heading font-bold text-xl text-white mb-2">
                    {t('b2b.form.success.title')}
                  </h3>
                  <p className="text-white/75 text-sm leading-relaxed">
                    {t('b2b.form.success.desc')}
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="rounded-2xl p-6 sm:p-8 bg-white/5 border border-white/10 space-y-5"
                >
                  {/* Nom */}
                  <div>
                    <label
                      htmlFor={fieldId('name')}
                      className="block text-sm font-semibold text-white mb-2"
                    >
                      {t('b2b.form.field.name')}{' '}
                      <span className="text-red-400" aria-hidden="true">
                        *
                      </span>
                    </label>
                    <input
                      id={fieldId('name')}
                      type="text"
                      required
                      autoComplete="name"
                      value={form.name}
                      onChange={(e) => update('name', e.target.value)}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? `${fieldId('name')}-err` : undefined}
                      className="w-full min-h-[48px] px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                      placeholder={t('b2b.form.field.name.ph')}
                    />
                    {errors.name && (
                      <p
                        id={`${fieldId('name')}-err`}
                        className="mt-1.5 text-xs text-red-300"
                      >
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor={fieldId('email')}
                      className="block text-sm font-semibold text-white mb-2"
                    >
                      {t('b2b.form.field.email')}{' '}
                      <span className="text-red-400" aria-hidden="true">
                        *
                      </span>
                    </label>
                    <input
                      id={fieldId('email')}
                      type="email"
                      required
                      autoComplete="email"
                      value={form.email}
                      onChange={(e) => update('email', e.target.value)}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? `${fieldId('email')}-err` : undefined}
                      className="w-full min-h-[48px] px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                      placeholder={t('b2b.form.field.email.ph')}
                    />
                    {errors.email && (
                      <p
                        id={`${fieldId('email')}-err`}
                        className="mt-1.5 text-xs text-red-300"
                      >
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Telephone */}
                  <div>
                    <label
                      htmlFor={fieldId('phone')}
                      className="block text-sm font-semibold text-white mb-2"
                    >
                      {t('b2b.form.field.phone')}{' '}
                      <span className="text-red-400" aria-hidden="true">
                        *
                      </span>
                    </label>
                    <input
                      id={fieldId('phone')}
                      type="tel"
                      required
                      autoComplete="tel"
                      value={form.phone}
                      onChange={(e) => update('phone', e.target.value)}
                      aria-invalid={!!errors.phone}
                      aria-describedby={errors.phone ? `${fieldId('phone')}-err` : undefined}
                      className="w-full min-h-[48px] px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                      placeholder={t('b2b.form.field.phone.ph')}
                    />
                    {errors.phone && (
                      <p
                        id={`${fieldId('phone')}-err`}
                        className="mt-1.5 text-xs text-red-300"
                      >
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  {/* Secteur */}
                  <div>
                    <label
                      htmlFor={fieldId('sector')}
                      className="block text-sm font-semibold text-white mb-2"
                    >
                      {t('b2b.form.field.sector')}{' '}
                      <span className="text-red-400" aria-hidden="true">
                        *
                      </span>
                    </label>
                    <select
                      id={fieldId('sector')}
                      required
                      value={form.sector}
                      onChange={(e) => update('sector', e.target.value)}
                      aria-invalid={!!errors.sector}
                      aria-describedby={errors.sector ? `${fieldId('sector')}-err` : undefined}
                      className="w-full min-h-[48px] px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                    >
                      <option value="" className="bg-[var(--bg-dark)]">
                        {t('b2b.form.field.sector.ph')}
                      </option>
                      <option value="insurance" className="bg-[var(--bg-dark)]">
                        {t('b2b.form.field.sector.opt.insurance')}
                      </option>
                      <option value="dealer" className="bg-[var(--bg-dark)]">
                        {t('b2b.form.field.sector.opt.dealer')}
                      </option>
                      <option value="fleet" className="bg-[var(--bg-dark)]">
                        {t('b2b.form.field.sector.opt.fleet')}
                      </option>
                      <option value="health" className="bg-[var(--bg-dark)]">
                        {t('b2b.form.field.sector.opt.health')}
                      </option>
                      <option value="other" className="bg-[var(--bg-dark)]">
                        {t('b2b.form.field.sector.opt.other')}
                      </option>
                    </select>
                    {errors.sector && (
                      <p
                        id={`${fieldId('sector')}-err`}
                        className="mt-1.5 text-xs text-red-300"
                      >
                        {errors.sector}
                      </p>
                    )}
                  </div>

                  {/* Volume */}
                  <div>
                    <label
                      htmlFor={fieldId('volume')}
                      className="block text-sm font-semibold text-white mb-2"
                    >
                      {t('b2b.form.field.volume')}{' '}
                      <span className="text-red-400" aria-hidden="true">
                        *
                      </span>
                    </label>
                    <select
                      id={fieldId('volume')}
                      required
                      value={form.volume}
                      onChange={(e) => update('volume', e.target.value)}
                      aria-invalid={!!errors.volume}
                      aria-describedby={errors.volume ? `${fieldId('volume')}-err` : undefined}
                      className="w-full min-h-[48px] px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                    >
                      <option value="" className="bg-[var(--bg-dark)]">
                        {t('b2b.form.field.volume.ph')}
                      </option>
                      <option value="low" className="bg-[var(--bg-dark)]">
                        {t('b2b.form.field.volume.opt.low')}
                      </option>
                      <option value="mid" className="bg-[var(--bg-dark)]">
                        {t('b2b.form.field.volume.opt.mid')}
                      </option>
                      <option value="high" className="bg-[var(--bg-dark)]">
                        {t('b2b.form.field.volume.opt.high')}
                      </option>
                    </select>
                    {errors.volume && (
                      <p
                        id={`${fieldId('volume')}-err`}
                        className="mt-1.5 text-xs text-red-300"
                      >
                        {errors.volume}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full inline-flex items-center justify-center gap-2 text-white font-heading font-extrabold text-base px-6 py-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5 min-h-[48px] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                    style={{ background: 'var(--gradient-cta)', boxShadow: 'var(--shadow-orange)' }}
                  >
                    <Send size={18} className={submitting ? 'motion-safe:animate-pulse' : ''} />
                    {submitting ? t('b2b.form.submitting') : t('b2b.form.submit')}
                  </button>

                  {submitError && (
                    <p role="alert" className="text-sm text-red-300 text-center" aria-live="polite">
                      {submitError}
                    </p>
                  )}

                  <p className="text-xs text-white/50 text-center">
                    {t('b2b.form.privacy')}
                  </p>
                </form>
              )}
            </div>

            {/* Bloc tel direct */}
            <aside className="lg:col-span-2">
              <div
                className="rounded-2xl p-7 h-full flex flex-col justify-between"
                style={{ background: 'var(--gradient-cta)', boxShadow: 'var(--shadow-orange)' }}
              >
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/85 mb-3">
                    {t('b2b.form.direct.kicker')}
                  </p>
                  <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white mb-4 leading-tight">
                    {t('b2b.form.direct.title')}
                  </h3>
                  <p className="text-white/90 text-sm leading-relaxed mb-6">
                    {t('b2b.form.direct.desc')}
                  </p>
                </div>

                <a
                  href={phoneLink}
                  className="inline-flex items-center justify-center gap-2 w-full bg-white text-[var(--accent-hover)] font-heading font-extrabold text-lg px-6 py-4 rounded-xl hover:bg-white/95 transition-all min-h-[48px]"
                >
                  <Phone size={20} className="motion-safe:animate-phone-ring" />
                  {phoneDisplay}
                </a>

                <p className="text-xs text-white/80 text-center mt-4">
                  {t('b2b.form.direct.hours')}
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
