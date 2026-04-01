import { BrowserRouter } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/layout/Hero';
import { Services } from './components/layout/Services';
import { Tarifs } from './components/layout/Tarifs';
import { Zone } from './components/layout/Zone';
import { Contact } from './components/layout/Contact';
import { CTABanner } from './components/layout/CTABanner';

const PHONE = '0169XXXXXX'; // TODO: remplacer par le vrai numéro de Dragos
const PHONE_DISPLAY = '01 69 XX XX XX';
const PHONE_LINK = `tel:+33${PHONE.slice(1)}`;

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[var(--bg-primary)]">
        <Header phoneDisplay={PHONE_DISPLAY} phoneLink={PHONE_LINK} />
        <main>
          <Hero phoneDisplay={PHONE_DISPLAY} phoneLink={PHONE_LINK} />
          <Services />
          <Tarifs />
          <Zone />
          <CTABanner phoneDisplay={PHONE_DISPLAY} phoneLink={PHONE_LINK} />
          <Contact phoneDisplay={PHONE_DISPLAY} phoneLink={PHONE_LINK} />
        </main>
        <Footer phoneDisplay={PHONE_DISPLAY} phoneLink={PHONE_LINK} />
      </div>
    </BrowserRouter>
  );
}
