import { Shield, Clock, MapPin, Truck, Users, Award, CheckCircle, Phone } from 'lucide-react';
import { Stats } from '../components/layout/Stats';
import { Avis } from '../components/layout/Avis';
import { InsuranceMarquee } from '../components/layout/InsuranceMarquee';
import { CTABanner } from '../components/layout/CTABanner';
import { PageMeta } from '../components/PageMeta';
import { useT } from '../i18n/LanguageContext';

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
        description="ZDEPANNAGE, entreprise familiale de dépannage et remorquage à Grigny (91). Plus de 5 ans d'expérience, 3 véhicules, équipe de 4 professionnels. Agréé assurances et forces de l'ordre."
      />

      {/* Hero À propos */}
      <section className="py-16 sm:py-24 bg-[var(--bg-dark)] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
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
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-default)] text-center">
                <MapPin size={24} className="text-[var(--accent)] mx-auto mb-3" />
                <p className="font-heading font-bold text-lg text-[var(--text-primary)]">Grigny (91)</p>
                <p className="text-sm text-[var(--text-tertiary)]">{t('about.base')}</p>
              </div>
              <div className="p-6 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-default)] text-center">
                <Truck size={24} className="text-[var(--primary)] mx-auto mb-3" />
                <p className="font-heading font-bold text-lg text-[var(--text-primary)]">3 {t('about.plateaux')}</p>
                <p className="text-sm text-[var(--text-tertiary)]">{t('about.equipped')}</p>
              </div>
              <div className="p-6 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-default)] text-center">
                <Users size={24} className="text-green-500 mx-auto mb-3" />
                <p className="font-heading font-bold text-lg text-[var(--text-primary)]">4 {t('about.pros')}</p>
                <p className="text-sm text-[var(--text-tertiary)]">{t('about.experienced')}</p>
              </div>
              <div className="p-6 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-default)] text-center">
                <Phone size={24} className="text-[var(--accent-bright)] mx-auto mb-3" />
                <p className="font-heading font-bold text-lg text-[var(--text-primary)]">24h/24</p>
                <p className="text-sm text-[var(--text-tertiary)]">7j/7</p>
              </div>
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
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {VALUES.map(({ icon: Icon, titleKey, descKey }) => (
              <div key={titleKey} className="reveal flex flex-col items-center text-center p-8 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-default)]">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5 bg-[var(--accent)]/8">
                  <Icon size={32} className="text-[var(--accent)]" />
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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {AGREMENTS.map((key) => (
              <div key={key} className="reveal flex items-start gap-4 p-5 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-default)]">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-green-500/10 flex-shrink-0">
                  <Award size={20} className="text-green-500" />
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed pt-2">{t(key)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <InsuranceMarquee />
      <Stats />
      <Avis />
      <CTABanner phoneDisplay={phoneDisplay} phoneLink={phoneLink} />
    </>
  );
}
