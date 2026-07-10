import { test, expect } from '@playwright/test';

test('handle iframe', async ({ page }) => {
  await page.goto('https://example.com');

  const frame = page.frameLocator('#my-iframe');

  await frame.locator('input[name="username"]').fill('admin');
  await frame.locator('button').click();
});



