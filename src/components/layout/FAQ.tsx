import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useT } from '../../i18n/LanguageContext';

const FAQ_KEYS = [
  { qKey: 'faq.q1', aKey: 'faq.a1' },
  { qKey: 'faq.q2', aKey: 'faq.a2' },
  { qKey: 'faq.q3', aKey: 'faq.a3' },
  { qKey: 'faq.q4', aKey: 'faq.a4' },
  { qKey: 'faq.q5', aKey: 'faq.a5' },
  { qKey: 'faq.q6', aKey: 'faq.a6' },
];

function FAQItem({ qKey, aKey }: { qKey: string; aKey: string }) {
  const [open, setOpen] = useState(false);
  const { t } = useT();

  return (
    <div className="border border-[var(--border-default)] rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full px-6 py-4 text-left bg-[var(--bg-card)] hover:bg-[var(--bg-secondary)] transition-colors"
        aria-expanded={open}
      >
        <span className="font-semibold text-[var(--text-primary)] pr-4">{t(qKey)}</span>
        <ChevronDown size={18} className={`text-[var(--text-tertiary)] flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>
      <div className="grid transition-all duration-300 ease-out" style={{ gridTemplateRows: open ? '1fr' : '0fr' }}>
        <div className="overflow-hidden">
          <p className="px-6 pb-4 pt-1 text-sm text-[var(--text-secondary)] leading-relaxed">{t(aKey)}</p>
        </div>
      </div>
    </div>
  );
}

export function FAQ() {
  const { t } = useT();

  return (
    <section className="py-16 sm:py-20">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-4">{t('faq.title')}</h2>
          <p className="text-[var(--text-secondary)]">{t('faq.subtitle')}</p>
        </div>
        <div className="flex flex-col gap-3">
          {FAQ_KEYS.map(({ qKey, aKey }) => (
            <FAQItem key={qKey} qKey={qKey} aKey={aKey} />
          ))}
        </div>
      </div>
    </section>
  );
}
