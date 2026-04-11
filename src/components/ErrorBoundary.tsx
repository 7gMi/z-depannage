import { Component, type ReactNode } from 'react';
import { translations, type Lang } from '../i18n/translations';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

function getCurrentLang(): Lang {
  try {
    const stored = localStorage.getItem('zdep-lang');
    if (stored && ['fr', 'ar', 'en', 'ru'].includes(stored)) return stored as Lang;
  } catch {
    /* ignore */
  }
  return 'fr';
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      const lang = getCurrentLang();
      const t = (key: string) => translations[lang][key] ?? key;
      return (
        <div className="min-h-screen flex items-center justify-center bg-[var(--bg-primary)]">
          <div className="text-center px-4">
            <p className="font-heading text-6xl font-extrabold text-[var(--accent)] mb-4">Oops</p>
            <h1 className="font-heading text-2xl font-bold text-[var(--text-primary)] mb-4">
              {t('error.title')}
            </h1>
            <p className="text-[var(--text-secondary)] mb-8">
              {t('error.subtitle')}
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 rounded-xl font-heading font-bold text-white"
              style={{ background: 'var(--gradient-cta)' }}
            >
              {t('error.reload')}
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
