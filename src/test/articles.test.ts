import { describe, it, expect } from 'vitest';
import { ARTICLES } from '../data/articles';

describe('Articles', () => {
  it('should have 12 articles', () => {
    expect(ARTICLES).toHaveLength(12);
  });

  it('should have unique slugs', () => {
    const slugs = ARTICLES.map((a) => a.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it('should have all required fields', () => {
    for (const article of ARTICLES) {
      expect(article.slug).toBeTruthy();
      expect(article.title).toBeTruthy();
      expect(article.excerpt).toBeTruthy();
      expect(article.category).toBeTruthy();
      expect(article.date).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(article.readTime).toBeGreaterThan(0);
      expect(article.image).toBeTruthy();
      expect(article.content.length).toBeGreaterThan(3);
    }
  });

  it('should have valid image paths', () => {
    for (const article of ARTICLES) {
      expect(article.image).toMatch(/^\/blog\/.+\.webp$/);
    }
  });

  it('should have content with headings', () => {
    for (const article of ARTICLES) {
      const headings = article.content.filter((b) => b.startsWith('## '));
      expect(headings.length, `${article.slug} should have headings`).toBeGreaterThan(2);
    }
  });
});
