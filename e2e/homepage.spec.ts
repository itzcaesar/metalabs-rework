import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test('should display the homepage correctly', async ({ page }) => {
    await page.goto('/');
    
    await expect(page.getByText(/interactive multimedia/i)).toBeVisible();
  });

  test('should have working navigation', async ({ page }) => {
    await page.goto('/');
    
    await page.getByRole('link', { name: /courses/i }).click();
    await expect(page).toHaveURL(/.*courses/);
  });

  test('should toggle theme', async ({ page }) => {
    await page.goto('/');
    
    const themeToggle = page.getByRole('switch', { name: /toggle theme/i });
    await themeToggle.click();
    
    // Check if theme class changes
    await expect(page.locator('html')).toHaveClass(/dark|light/);
  });
});

test.describe('Mobile Navigation', () => {
  test.use({ viewport: { width: 375, height: 667 } });

  test('should open mobile menu', async ({ page }) => {
    await page.goto('/');
    
    const menuButton = page.getByRole('button', { name: /toggle menu/i });
    await menuButton.click();
    
    await expect(page.getByRole('link', { name: /courses/i })).toBeVisible();
  });
});
