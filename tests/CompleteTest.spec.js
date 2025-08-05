//@ts-check

import { test, expect } from '@playwright/test';


test.describe('Regression tests', () => {

test.beforeEach(async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');

});

test.afterEach(async ({page})=> {

    await page.locator('#react-burger-menu-btn').click();

    await page.locator('#logout_sidebar_link').click();

    await expect(page.locator('#login-button')).toBeVisible();
});


test('Login test', async({page})=>{


    const loginform= await page.locator('#login_button_container');

    await expect(loginform).toBeVisible();

    await page.getByPlaceholder('Username').fill('standard_user');

    await page.getByPlaceholder('Password').fill('secret_sauce');

    await page.getByRole('button', {name: 'Login'}).click();

    await expect(page.locator('#react-burger-menu-btn')).toBeVisible();



});

test('Add product to card', async({page})=>{

    await page.getByPlaceholder('Username').fill('standard_user');

    await page.getByPlaceholder('Password').fill('secret_sauce');

    await page.getByRole('button', {name: 'Login'}).click();

    await expect(page.locator('#react-burger-menu-btn')).toBeVisible();

    await page.locator('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click();

    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

    const icon= page.locator('[data-test="shopping-cart-link"]');

    await expect(icon).toBeVisible();

    await page.locator('[data-test="shopping-cart-link"]').click();

    const title= page.locator('[data-test="title"]');

    await expect(title).toBeVisible();

    await page.locator('[data-test="checkout"]').click();

    await expect(page.locator('[data-test="checkout-info-container"]')).toBeVisible();

    await page.getByPlaceholder('First Name').fill('emir');

    await page.getByPlaceholder('Last Name').fill('emir');

    await page.getByPlaceholder('Zip/Postal Code').fill('1234');

    await page.locator('[data-test="continue"]').click();

    await expect(page.locator('[data-test="payment-info-label"]')).toBeVisible();

    await page.getByRole('button', {name: 'Finish'}).click();

    await expect(page.getByAltText('Pony Express')).toBeVisible();

    await page.locator('[data-test="back-to-products"]').click();

    await expect(page.locator('#react-burger-menu-btn')).toBeVisible();

});

test('Log out', async({page})=>{

    await page.getByPlaceholder('Username').fill('standard_user');

    await page.getByPlaceholder('Password').fill('secret_sauce');

    await page.getByRole('button', {name: 'Login'}).click();

    await expect(page.locator('#react-burger-menu-btn')).toBeVisible();

});


});

