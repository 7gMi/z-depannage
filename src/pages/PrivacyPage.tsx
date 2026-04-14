import { Shield } from 'lucide-react';
import { PageMeta } from '../components/PageMeta';
import { useT } from '../i18n/LanguageContext';

export function PrivacyPage() {
  const { t } = useT();

  return (
    <>
      <PageMeta
        title="Politique de confidentialité — ZDEPANNAGE"
        description="Politique de confidentialité et protection des données personnelles — conforme RGPD. ZDEPANNAGE SAS, SIRET 981 024 268 00014."
      />

      <section className="py-16 sm:py-20 bg-[var(--bg-dark)]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-[var(--accent)]/10 border border-[var(--accent)]/30 rounded-full px-4 py-2 mb-6">
            <Shield size={16} className="text-[var(--accent-bright)]" aria-hidden="true" />
            <span className="text-[var(--accent-bright)] font-medium text-sm">{t('privacy.kicker')}</span>
          </div>
          <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-white mb-4">
            {t('privacy.title')}
          </h1>
          <p className="text-white/60 leading-relaxed">
            {t('privacy.subtitle')}
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-[var(--bg-primary)]">
        <div className="max-w-3xl mx-auto px-4">
          <article className="prose prose-slate max-w-none space-y-8 text-[var(--text-secondary)]">
            <div>
              <h2 className="font-heading font-bold text-xl text-[var(--text-primary)] mb-3">{t('privacy.s1.title')}</h2>
              <p className="leading-relaxed">{t('privacy.s1.p1')}</p>
              <ul className="list-disc list-inside space-y-1 mt-3 text-sm">
                <li>{t('privacy.s1.li1')}</li>
                <li>{t('privacy.s1.li2')}</li>
                <li>{t('privacy.s1.li3')}</li>
                <li>{t('privacy.s1.li4')}</li>
                <li>{t('privacy.s1.li5')}</li>
                <li>{t('privacy.s1.li6')}</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading font-bold text-xl text-[var(--text-primary)] mb-3">{t('privacy.s2.title')}</h2>
              <p className="leading-relaxed">{t('privacy.s2.p1')}</p>
              <ul className="list-disc list-inside space-y-1 mt-3 text-sm">
                <li>{t('privacy.s2.li1')}</li>
                <li>{t('privacy.s2.li2')}</li>
                <li>{t('privacy.s2.li3')}</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading font-bold text-xl text-[var(--text-primary)] mb-3">{t('privacy.s3.title')}</h2>
              <p className="leading-relaxed">{t('privacy.s3.p1')}</p>
            </div>

            <div>
              <h2 className="font-heading font-bold text-xl text-[var(--text-primary)] mb-3">{t('privacy.s4.title')}</h2>
              <p className="leading-relaxed">{t('privacy.s4.p1')}</p>
            </div>

            <div>
              <h2 className="font-heading font-bold text-xl text-[var(--text-primary)] mb-3">{t('privacy.s5.title')}</h2>
              <p className="leading-relaxed mb-3">{t('privacy.s5.p1')}</p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>{t('privacy.s5.li1')}</li>
                <li>{t('privacy.s5.li2')}</li>
                <li>{t('privacy.s5.li3')}</li>
                <li>{t('privacy.s5.li4')}</li>
                <li>{t('privacy.s5.li5')}</li>
              </ul>
              <p className="leading-relaxed mt-3 text-sm">{t('privacy.s5.p2')}</p>
            </div>

            <div>
              <h2 className="font-heading font-bold text-xl text-[var(--text-primary)] mb-3">{t('privacy.s6.title')}</h2>
              <p className="leading-relaxed">{t('privacy.s6.p1')}</p>
            </div>

            <div>
              <h2 className="font-heading font-bold text-xl text-[var(--text-primary)] mb-3">{t('privacy.s7.title')}</h2>
              <p className="leading-relaxed">{t('privacy.s7.p1')}</p>
              <p className="leading-relaxed mt-2 text-sm">{t('privacy.s7.p2')}</p>
            </div>

            <div className="p-5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-default)] text-sm">
              <p className="font-medium text-[var(--text-primary)] mb-1">{t('privacy.update')}</p>
              <p>2026-04-14</p>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
