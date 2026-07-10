// Listen for new page
const [newPage] = await Promise.all([
page.waitForEvent('popup'),
page.locator('#openWindow').click()
]);


