import { lazy, Suspense, useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageCircle, MessageSquare, Copy, Check, AlertCircle, Briefcase, HelpCircle, ArrowRight } from 'lucide-react';
import { Stats } from '../components/layout/Stats';
import { Avis } from '../components/layout/Avis';
import { Contact } from '../components/layout/Contact';
import { CallbackForm } from '../components/layout/CallbackForm';
import { useT } from '../i18n/LanguageContext';
import { PageMeta } from '../components/PageMeta';

const LeafletMap = lazy(() => import('../components/LeafletMap'));
const GRIGNY: [number, number] = [48.6544, 2.3833];

const WHATSAPP_NUMBER = '33756973686';
const PHONE_RAW = '+33756973686';

interface ContactPageProps {
  phoneDisplay: string;
  phoneLink: string;
}

export function ContactPage({ phoneDisplay, phoneLink }: ContactPageProps) {
  const { t } = useT();
  const [copied, setCopied] = useState(false);

  function copyPhone() {
    navigator.clipboard.writeText(PHONE_RAW);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <>
      <PageMeta
        title="Contact & Avis — ZDEPANNAGE Grigny (91)"
        description="Contactez ZDEPANNAGE au 07 56 97 36 86. 7 BIS Route de Corbeil, 91350 Grigny. 25 avis Google 5 étoiles. Dépannage 24h/24."
      />

      {/* ============ HERO HOTLINE ============ */}
      <section className="relative py-20 sm:py-28 bg-[var(--bg-dark)] overflow-hidden border-b border-white/5">
        <picture>
          <source srcSet="/atelier/contact-hero-night.avif" type="image/avif" />
          <source srcSet="/atelier/contact-hero-night.webp" type="image/webp" />
          <img
            src="/atelier/contact-hero-night.webp"
            alt=""
            fetchPriority="high"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover opacity-55 pointer-events-none"
            aria-hidden="true"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-dark)]/45 via-[var(--bg-dark)]/60 to-[var(--bg-dark)]/85 pointer-events-none" aria-hidden="true" />
        <div className="hero-mesh-gradient" aria-hidden="true" />
        <div className="absolute inset-0 pattern-dots-orange pointer-events-none" aria-hidden="true" />
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] rounded-full bg-[var(--accent)]/15 blur-[100px] pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 mb-6">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 motion-safe:animate-ping" aria-hidden="true" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" aria-hidden="true" />
            </span>
            <span className="text-xs font-bold text-green-300 uppercase tracking-wider">
              {t('contact.hero.available')}
            </span>
          </div>

          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--accent-bright)] mb-3">
            {t('contact.hero.kicker')}
          </p>
          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white leading-tight mb-4 tracking-tight">
            {t('contact.hero.title')}
          </h1>
          <p className="text-sm sm:text-base text-white/60 max-w-xl mx-auto mb-10 leading-relaxed">
            {t('contact.hero.subtitle')}
          </p>

          <a
            href={phoneLink}
            className="group inline-flex items-baseline gap-3 sm:gap-4 mb-3 hover:scale-[1.02] active:scale-[0.98] transition-transform"
            aria-label={phoneDisplay}
          >
            <Phone
              size={38}
              className="text-[var(--accent)] motion-safe:animate-phone-ring self-center"
              aria-hidden="true"
            />
            <span className="font-heading font-extrabold text-4xl sm:text-6xl lg:text-7xl text-white tabular-nums leading-none tracking-tight">
              {phoneDisplay}
            </span>
          </a>

          <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
            <span className="text-xs text-white/50">{t('contact.hero.callHint')}</span>
            <button
              type="button"
              onClick={copyPhone}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 text-xs font-medium text-white/70 hover:text-white transition-colors"
              aria-label={copied ? t('contact.hero.copied') : t('contact.hero.copy')}
            >
              {copied ? (
                <>
                  <Check size={13} className="text-green-400" aria-hidden="true" />
                  {t('contact.hero.copied')}
                </>
              ) : (
                <>
                  <Copy size={13} aria-hidden="true" />
                  {t('contact.hero.copy')}
                </>
              )}
            </button>
          </div>

          {/* Channels secondaires */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-2xl mx-auto">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="icon-hover-parent flex flex-col items-center gap-2 p-4 rounded-xl bg-white/[0.04] border border-white/10 hover:border-green-500/40 hover:bg-white/[0.07] transition-colors"
            >
              <MessageCircle size={20} className="icon-hover text-green-400" aria-hidden="true" />
              <span className="font-heading font-bold text-sm text-white">{t('contact.channels.wa.title')}</span>
              <span className="text-[11px] text-white/50 leading-tight text-center">{t('contact.channels.wa.desc')}</span>
            </a>
            <a
              href={`sms:${PHONE_RAW}`}
              className="icon-hover-parent flex flex-col items-center gap-2 p-4 rounded-xl bg-white/[0.04] border border-white/10 hover:border-blue-400/40 hover:bg-white/[0.07] transition-colors"
            >
              <MessageSquare size={20} className="icon-hover text-blue-300" aria-hidden="true" />
              <span className="font-heading font-bold text-sm text-white">{t('contact.channels.sms.title')}</span>
              <span className="text-[11px] text-white/50 leading-tight text-center">{t('contact.channels.sms.desc')}</span>
            </a>
            <a
              href="#callback-form"
              className="icon-hover-parent col-span-2 sm:col-span-1 flex flex-col items-center gap-2 p-4 rounded-xl bg-white/[0.04] border border-white/10 hover:border-[var(--accent)]/40 hover:bg-white/[0.07] transition-colors"
            >
              <Phone size={20} className="icon-hover text-[var(--accent-bright)]" aria-hidden="true" />
              <span className="font-heading font-bold text-sm text-white">{t('contact.channels.callback.title')}</span>
              <span className="text-[11px] text-white/50 leading-tight text-center">{t('contact.channels.callback.desc')}</span>
            </a>
          </div>
        </div>
      </section>

      {/* ============ ROUTAGE PAR INTENTION ============ */}
      <section className="py-16 sm:py-20 bg-[var(--bg-primary)]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-center font-heading font-extrabold text-2xl sm:text-3xl text-[var(--text-primary)] mb-10">
            {t('contact.routing.title')}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 reveal-stagger">
            <a
              href={phoneLink}
              className="reveal group relative overflow-hidden rounded-2xl p-6 sm:p-7 text-white transition-transform hover:-translate-y-1"
              style={{ background: 'var(--gradient-cta)', boxShadow: 'var(--shadow-orange)' }}
            >
              <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-white/10 blur-2xl pointer-events-none" aria-hidden="true" />
              <span className="relative inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest bg-white/20 px-2 py-1 rounded mb-4">
                <AlertCircle size={11} aria-hidden="true" />
                {t('contact.routing.urgent.tag')}
              </span>
              <h3 className="relative font-heading font-extrabold text-xl mb-2 leading-tight">
                {t('contact.routing.urgent.title')}
              </h3>
              <p className="relative text-sm text-white/85 leading-relaxed mb-5">
                {t('contact.routing.urgent.desc')}
              </p>
              <span className="relative inline-flex items-center gap-2 font-heading font-bold text-sm">
                <Phone size={16} className="motion-safe:animate-phone-ring" aria-hidden="true" />
                {t('contact.routing.urgent.cta')}
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </span>
            </a>

            <Link
              to="/professionnels#b2b-form"
              className="reveal group relative rounded-2xl p-6 sm:p-7 bg-[var(--bg-card)] border border-[var(--border-default)] hover:border-[var(--primary)]/40 transition-all hover:-translate-y-1"
            >
              <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-[var(--primary)] bg-[var(--primary)]/10 px-2 py-1 rounded mb-4">
                <Briefcase size={11} aria-hidden="true" />
                {t('contact.routing.quote.tag')}
              </span>
              <h3 className="font-heading font-extrabold text-xl text-[var(--text-primary)] mb-2 leading-tight">
                {t('contact.routing.quote.title')}
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-5">
                {t('contact.routing.quote.desc')}
              </p>
              <span className="inline-flex items-center gap-2 font-heading font-bold text-sm text-[var(--primary)]">
                {t('contact.routing.quote.cta')}
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </span>
            </Link>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="reveal group relative rounded-2xl p-6 sm:p-7 bg-[var(--bg-card)] border border-[var(--border-default)] hover:border-green-500/40 transition-all hover:-translate-y-1"
            >
              <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-green-600 bg-green-500/10 px-2 py-1 rounded mb-4">
                <HelpCircle size={11} aria-hidden="true" />
                {t('contact.routing.info.tag')}
              </span>
              <h3 className="font-heading font-extrabold text-xl text-[var(--text-primary)] mb-2 leading-tight">
                {t('contact.routing.info.title')}
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-5">
                {t('contact.routing.info.desc')}
              </p>
              <span className="inline-flex items-center gap-2 font-heading font-bold text-sm text-green-600">
                <MessageCircle size={14} aria-hidden="true" />
                {t('contact.routing.info.cta')}
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </span>
            </a>
          </div>
        </div>
      </section>

      <div id="callback-form" className="scroll-mt-20" />
      <CallbackForm />
      <Stats />
      <Avis />
      <Contact phoneDisplay={phoneDisplay} phoneLink={phoneLink} />

      <section className="py-12 sm:py-16 bg-[var(--bg-secondary)]">
        <div className="max-w-4xl mx-auto px-4">
          <div style={{ height: '320px', contain: 'layout size' }} className="rounded-2xl overflow-hidden border border-[var(--border-default)] shadow-sm">
            <Suspense fallback={<div className="h-full bg-[var(--bg-card)] animate-pulse" />}>
              <LeafletMap
                center={GRIGNY}
                zoom={14}
                height="100%"
                popupText="ZDEPANNAGE — 7 BIS Route de Corbeil, 91350 Grigny"
                ariaLabel="Carte de localisation du dépôt à Grigny"
              />
            </Suspense>
          </div>
        </div>
      </section>
    </>
  );
}
