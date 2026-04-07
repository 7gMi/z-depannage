import { useState, useEffect, useRef } from 'react';
import { Phone, Search, Truck, CheckCircle } from 'lucide-react';
import { useT } from '../../i18n/LanguageContext';

const STEPS_KEYS = [
  { icon: Phone, step: '01', titleKey: 'process.step1.title', descKey: 'process.step1.desc' },
  { icon: Search, step: '02', titleKey: 'process.step2.title', descKey: 'process.step2.desc' },
  { icon: Truck, step: '03', titleKey: 'process.step3.title', descKey: 'process.step3.desc' },
  { icon: CheckCircle, step: '04', titleKey: 'process.step4.title', descKey: 'process.step4.desc' },
];

const POSITIONS = [5, 33, 64, 92];
const DURATIONS = [0, 3000, 2000, 1500];

export function Process() {
  const { t } = useT();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const [clickedStep, setClickedStep] = useState<number | null>(null);
  const timeoutsRef = useRef<number[]>([]);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setActiveStep(3);
      setHasStarted(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) setHasStarted(true);
      },
      { threshold: 0.3 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted || clickedStep !== null) return;

    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setActiveStep(0);

    const t1 = window.setTimeout(() => setActiveStep(1), 5000);
    const t2 = window.setTimeout(() => setActiveStep(2), 5000 + 3000 + 3000);
    const t3 = window.setTimeout(() => setActiveStep(3), 5000 + 3000 + 3000 + 2000 + 2000);

    timeoutsRef.current = [t1, t2, t3];
    return () => timeoutsRef.current.forEach(clearTimeout);
  }, [hasStarted, clickedStep]);

  function handleStepClick(i: number) {
    setClickedStep(i);
    setActiveStep(i);
    setTimeout(() => setClickedStep(null), 6000);
  }

  const currentPos = POSITIONS[activeStep];
  const currentDuration = DURATIONS[activeStep];

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 bg-[var(--bg-dark)] overflow-hidden">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">{t('process.title')}</h2>
          <p className="text-white/60 max-w-xl mx-auto">{t('process.subtitle')}</p>
        </div>

        {/* Desktop */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-4 gap-8 mb-12">
            {STEPS_KEYS.map(({ icon: Icon, step, titleKey, descKey }, i) => (
              <div
                key={step}
                className="flex flex-col items-center text-center cursor-pointer group"
                onClick={() => handleStepClick(i)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && handleStepClick(i)}
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 transition-all duration-500 group-hover:scale-105 ${
                  i <= activeStep
                    ? 'bg-[var(--accent)]/15 border border-[var(--accent)]/30 shadow-[0_0_20px_rgba(234,88,12,0.15)]'
                    : 'bg-white/5 border border-white/10'
                }`}>
                  <Icon size={28} className={`transition-colors duration-500 ${i <= activeStep ? 'text-[var(--accent-bright)]' : 'text-white/60'}`} />
                </div>
                <span className={`text-xs font-bold mb-2 transition-colors duration-500 ${i <= activeStep ? 'text-[var(--accent)]' : 'text-white/60'}`}>
                  ÉTAPE {step}
                </span>
                <h3 className={`font-heading font-bold text-lg mb-2 transition-colors duration-500 ${i <= activeStep ? 'text-white' : 'text-white/60'}`}>{t(titleKey)}</h3>
                <p className={`text-sm leading-relaxed transition-colors duration-500 ${i <= activeStep ? 'text-white/60' : 'text-white/60'}`}>{t(descKey)}</p>
                <div className={`w-[2px] h-8 mt-4 transition-all duration-500 ${i <= activeStep ? 'bg-gradient-to-b from-[var(--accent)]/50 to-transparent' : 'bg-white/10'}`} />
                <div className={`w-3 h-3 rounded-full border-2 transition-all duration-500 ${
                  i <= activeStep ? 'bg-[var(--accent)] border-[var(--accent)] shadow-[0_0_10px_rgba(234,88,12,0.6)]' : 'bg-[var(--bg-dark)] border-white/20'
                }`} />
              </div>
            ))}
          </div>

          {/* Route */}
          <div className="relative mx-[6%]">
            <div className="h-16 rounded-lg bg-[#2a2a2a] border-t-2 border-b-2 border-[#3a3a3a] relative overflow-hidden">
              <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle, #555 1px, transparent 1px)', backgroundSize: '8px 8px' }} />
              <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex gap-4 px-4">
                {Array.from({ length: 20 }).map((_, i) => (
                  <div key={i} className="h-[3px] flex-1 bg-white/30 rounded-full" />
                ))}
              </div>
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-[var(--accent)]/30" />
              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[var(--accent)]/30" />
              <div
                className="absolute top-0 bottom-0 left-0 ease-out rounded-l-lg"
                style={{
                  transitionProperty: 'width',
                  transitionDuration: `${currentDuration}ms`,
                  transitionTimingFunction: 'ease-out',
                  width: `${currentPos}%`,
                  background: 'linear-gradient(90deg, rgba(234,88,12,0.08) 0%, rgba(234,88,12,0.03) 100%)',
                }}
              />
            </div>
            {/* Trail lumineux derrière le camion */}
            <div
              className="absolute top-1/2 -translate-y-1/2 h-3 rounded-full ease-out pointer-events-none"
              style={{
                transitionProperty: 'width',
                transitionDuration: `${currentDuration}ms`,
                transitionTimingFunction: 'ease-out',
                left: '0',
                width: `calc(${currentPos}% - 20px)`,
                background: 'linear-gradient(90deg, transparent 0%, rgba(234,88,12,0.15) 30%, rgba(234,88,12,0.55) 80%, rgba(255,165,0,0.9) 100%)',
                filter: 'blur(8px)',
              }}
            />
            <div
              className="absolute -top-4 z-20 ease-out"
              style={{
                transitionProperty: 'left',
                transitionDuration: `${currentDuration}ms`,
                transitionTimingFunction: 'ease-out',
                left: `calc(${currentPos}% - 50px)`,
              }}
            >
              <img src="/logo-zdepannage.png" alt="ZDEPANNAGE en route" className="h-24 w-auto brightness-0 invert drop-shadow-[0_4px_16px_rgba(234,88,12,0.6)]" />
              {/* Étincelles sous le camion */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                <span className="w-1 h-1 rounded-full bg-orange-400 animate-ping" />
                <span className="w-1 h-1 rounded-full bg-yellow-300 animate-ping" style={{ animationDelay: '200ms' }} />
                <span className="w-1 h-1 rounded-full bg-orange-400 animate-ping" style={{ animationDelay: '400ms' }} />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile timeline */}
        <div className="lg:hidden flex flex-col gap-6">
          {STEPS_KEYS.map(({ icon: Icon, step, titleKey, descKey }) => (
            <div key={step} className="reveal flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[var(--accent)]/15 border border-[var(--accent)]/30 flex-shrink-0">
                  <Icon size={22} className="text-[var(--accent-bright)]" />
                </div>
                <div className="w-[2px] flex-1 mt-2 bg-gradient-to-b from-[var(--accent)]/30 to-transparent" />
              </div>
              <div className="pb-6">
                <span className="text-xs font-bold text-[var(--accent)] mb-1 block">ÉTAPE {step}</span>
                <h3 className="font-heading font-bold text-white mb-1">{t(titleKey)}</h3>
                <p className="text-sm text-white/65 leading-relaxed">{t(descKey)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
