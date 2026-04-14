import '@testing-library/jest-dom/vitest';

// IntersectionObserver mock (jsdom ne l'a pas)
class IntersectionObserverMock {
  observe() {}
  disconnect() {}
  unobserve() {}
  takeRecords() { return []; }
  root = null;
  rootMargin = '';
  thresholds = [];
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
(globalThis as any).IntersectionObserver = IntersectionObserverMock;
