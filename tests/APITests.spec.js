import { test, expect } from '@playwright/test';

var userid;


test('Get method', async ({request}) => {

    const response = await request.get('https://reqres.in/api/users?page=2');

    expect(response.status()).toBe(200);

})

test('Post method with json', async ({ request }) => {
  const response = await request.post('https://reqres.in/api/users', {
    headers: {
      'Content-Type': 'application/json'
    },
    data: {
      name: 'morpheus',
      job: 'leader'
    }
  });

  expect(response.status()).toBe(201);


})




test('Put method', async ({request}) => {

    request.put('')

})

