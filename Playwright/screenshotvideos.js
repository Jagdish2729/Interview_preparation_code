//Screenshots
// Full page screenshot
await page.screenshot({ path: 'screenshot.png', fullPage: true });
// Element screenshot
await page.locator('.header').screenshot({ path: 'header.png' });
// Screenshot on test failure (in config)
// playwright.config.js
// use: {
// screenshot: 'only-on-failure',
// video : 'retain-on-failure'
// };