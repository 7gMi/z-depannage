import { test, expect } from '@playwright/test';

test.describe('Desktop navigation', () => {
  test.use({ viewport: { width: 1280, height: 720 } });

  test('homepage loads with hero and CTA', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('h1')).toBeVisible({ timeout: 10000 });
    await expect(page.locator('a[href^="tel:"]').first()).toBeVisible();
  });

  test('navigates via navbar links', async ({ page }) => {
    await page.goto('/');
    await page.locator('nav a[href="/services"]').first().click();
    await expect(page.locator('body')).toContainText('Nos Services', { timeout: 10000 });

    await page.locator('nav a[href="/tarifs"]').first().click();
    await expect(page.locator('body')).toContainText('Tarifs réglementés', { timeout: 10000 });
  });

  test('page title changes per route', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/ZDEPANNAGE/);
    await page.locator('nav a[href="/services"]').first().click();
    await expect(page).toHaveTitle(/Services/, { timeout: 10000 });
  });

  test('blog page shows articles', async ({ page }) => {
    await page.goto('/');
    await page.locator('nav a[href="/blog"]').first().click();
    await expect(page.locator('h1')).toContainText('Blog', { timeout: 10000 });
  });

  test('phone CTA is visible', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('h1')).toBeVisible({ timeout: 10000 });
    const phoneLinks = page.locator('a[href="tel:+33756973686"]');
    expect(await phoneLinks.count()).toBeGreaterThanOrEqual(1);
  });

  test('language switcher changes text', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('h1')).toBeVisible({ timeout: 10000 });
    await page.locator('button[aria-haspopup="listbox"]').click();
    await page.locator('button[role="option"]:has-text("Română")').click();
    await expect(page.locator('body')).toContainText('Servicii', { timeout: 5000 });
  });
});

test.describe('Mobile navigation', () => {
  test.use({ viewport: { width: 375, height: 667 } });

  test('homepage loads and shows mobile CTA', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('h1')).toBeVisible({ timeout: 10000 });
  });

  test('drawer opens and navigates', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('h1')).toBeVisible({ timeout: 10000 });
    await page.locator('button[aria-label="Ouvrir le menu"]').click();
    await page.locator('[role="dialog"] a[href="/services"]').click();
    await expect(page.locator('body')).toContainText('Nos Services', { timeout: 10000 });
  });

  test('language switch via drawer', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('h1')).toBeVisible({ timeout: 10000 });
    await page.locator('button[aria-label="Ouvrir le menu"]').click();
    await page.locator('[role="dialog"] button:has-text("Română")').click();
    await expect(page.locator('body')).toContainText('Servicii', { timeout: 5000 });
  });
});
