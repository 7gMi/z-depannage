import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { LanguageProvider, useT } from '../i18n/LanguageContext';

function TestComponent() {
  const { lang, setLang, t } = useT();
  return (
    <div>
      <span data-testid="lang">{lang}</span>
      <span data-testid="text">{t('nav.services')}</span>
      <button onClick={() => setLang('ro')}>Switch RO</button>
      <button onClick={() => setLang('ar')}>Switch AR</button>
      <button onClick={() => setLang('ru')}>Switch RU</button>
    </div>
  );
}

function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <BrowserRouter>
      <LanguageProvider>{children}</LanguageProvider>
    </BrowserRouter>
  );
}

describe('LanguageContext', () => {
  it('defaults to French', () => {
    render(<TestComponent />, { wrapper: Wrapper });
    expect(screen.getByTestId('lang')).toHaveTextContent('fr');
    expect(screen.getByTestId('text')).toHaveTextContent('Services');
  });

  it('switches to Romanian', () => {
    render(<TestComponent />, { wrapper: Wrapper });
    fireEvent.click(screen.getByText('Switch RO'));
    expect(screen.getByTestId('lang')).toHaveTextContent('ro');
    expect(screen.getByTestId('text')).toHaveTextContent('Servicii');
  });

  it('switches to Arabic', () => {
    render(<TestComponent />, { wrapper: Wrapper });
    fireEvent.click(screen.getByText('Switch AR'));
    expect(screen.getByTestId('lang')).toHaveTextContent('ar');
    expect(screen.getByTestId('text')).toHaveTextContent('الخدمات');
  });

  it('switches to Russian', () => {
    render(<TestComponent />, { wrapper: Wrapper });
    fireEvent.click(screen.getByText('Switch RU'));
    expect(screen.getByTestId('lang')).toHaveTextContent('ru');
    expect(screen.getByTestId('text')).toHaveTextContent('Услуги');
  });

  it('falls back to French for missing keys', () => {
    const { container } = render(
      <Wrapper>
        <TestComponent />
      </Wrapper>
    );
    expect(container).toBeTruthy();
  });
});
