//Monitor Network

// Listen to all requests
page.on('request', request => {
console.log('>>', request.method(), request.url());
});
// Listen to all responses
page.on('response', response => {
console.log('<<', response.status(), response.url());
});

//Mock API Response 
await page.route('URL/URL', async route=>{
    const json = [
       { id: 1, name: 'Product 1', price: 100 },
       { id: 2, name: 'Product 2', price: 200 }
    ];
    await route.fulfill({ json });
})
