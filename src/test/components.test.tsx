import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { LanguageProvider } from '../i18n/LanguageContext';
import { Features } from '../components/layout/Features';
import { Services } from '../components/layout/Services';
import { Avis } from '../components/layout/Avis';
import { CTABanner } from '../components/layout/CTABanner';
import { Contact } from '../components/layout/Contact';
import { FAQ } from '../components/layout/FAQ';

function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <BrowserRouter>
      <LanguageProvider>{children}</LanguageProvider>
    </BrowserRouter>
  );
}

describe('Features', () => {
  it('renders 3 feature cards', () => {
    render(<Features />, { wrapper: Wrapper });
    expect(screen.getByText('Disponibles 24/7')).toBeInTheDocument();
    expect(screen.getByText('Sans frais cachés')).toBeInTheDocument();
    expect(screen.getByText('Arrivée en 30 min')).toBeInTheDocument();
  });
});

describe('Services', () => {
  it('renders all 5 services by default', () => {
    render(<Services />, { wrapper: Wrapper });
    expect(screen.getByText('Remorquage automobile')).toBeInTheDocument();
    expect(screen.getByText('Dépannage moto')).toBeInTheDocument();
  });

  it('renders limited services with limit prop', () => {
    render(<Services limit={3} />, { wrapper: Wrapper });
    expect(screen.getByText('Remorquage automobile')).toBeInTheDocument();
    expect(screen.queryByText('Dépannage moto')).not.toBeInTheDocument();
  });
});

describe('Avis', () => {
  it('renders score and Google badge', () => {
    render(<Avis />, { wrapper: Wrapper });
    expect(screen.getByText('5.0')).toBeInTheDocument();
    expect(screen.getByText('Avis Google')).toBeInTheDocument();
    expect(screen.getByText('Ce que disent nos clients')).toBeInTheDocument();
  });

  it('renders limited reviews with limit prop', () => {
    render(<Avis limit={3} />, { wrapper: Wrapper });
    // 3 reviews = 3 quoted texts
    const quotes = screen.getAllByText(/^"/);
    expect(quotes.length).toBe(3);
  });
});

describe('CTABanner', () => {
  it('renders phone number and CTA text', () => {
    render(<CTABanner phoneDisplay="07 56 97 36 86" phoneLink="tel:+33756973686" />, { wrapper: Wrapper });
    expect(screen.getByText('07 56 97 36 86')).toBeInTheDocument();
    expect(screen.getByText('En panne ? Appelez maintenant')).toBeInTheDocument();
  });
});

describe('Contact', () => {
  it('renders phone, address and hours', () => {
    render(<Contact phoneDisplay="07 56 97 36 86" phoneLink="tel:+33756973686" />, { wrapper: Wrapper });
    expect(screen.getByText('07 56 97 36 86')).toBeInTheDocument();
    expect(screen.getByText('7 BIS Route de Corbeil')).toBeInTheDocument();
    expect(screen.getByText('Ouvert 24h/24')).toBeInTheDocument();
  });
});

describe('FAQ', () => {
  it('renders 6 FAQ items', () => {
    render(<FAQ />, { wrapper: Wrapper });
    expect(screen.getByText("Quels sont vos horaires d'intervention ?")).toBeInTheDocument();
    expect(screen.getByText('Comment sont calculés les tarifs ?')).toBeInTheDocument();
  });
});
