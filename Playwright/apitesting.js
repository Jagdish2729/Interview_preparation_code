import { test , expect} from '@playwright/test';

//GET 
test('get API', async ({request})=>{
    const response = await request.get('URL');
    expect(response.status()).toBe(200);
    const json = await response.json();
    console.log(json);
});

//POST
test('POST API' ,async ({request})=>{
    const response = await request.post('URL',{
        data : {
            name : 'jagdish',
            class : 2,
        }
    });
    expect (response.staus()).toBe(201);
    const json = await response.json();
    console.log(json);
});

//API Testing with Authorization
test('API with Auth', async ({ request }) => {
const response = await request.get('https://api.example.com/users', {
headers: {
'Authorization': 'Bearer token123',
'Content-Type': 'application/json'
}
});
expect(response.ok()).toBeTruthy();
});
