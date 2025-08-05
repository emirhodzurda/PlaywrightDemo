//@ts-check

import { test, expect } from '@playwright/test';

test.describe('Regression testing', () => {



test.beforeEach( async ({ page }) =>  {

    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button', { name: 'Login'}).click()
    
    const products= page.locator('[data-test="secondary-header"]');

    await expect(products).toBeVisible();   

})


test.afterEach( async ({page}) => {

    const options= page.locator('.bm-burger-button');

    await expect(options).toBeVisible();

    await options.click();

    await page.locator('#logout_sidebar_link').click();

    const loginbutton= page.locator('#login-button');

    await expect(loginbutton).toBeVisible();






})


test('Home page', async ({page}) => {

    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
    await page.locator('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click();
    await page.locator('[data-test="item-2-title-link"]').click();

    const backbutton= page.locator('[data-test="back-to-products"]');

    await expect(backbutton).toBeVisible();

    await page.locator('[data-test="add-to-cart"]').click();

    await page.locator('[data-test="shopping-cart-badge"]').click();

    const yourcart= page.locator('[data-test="title"]');

    await expect(yourcart).toBeVisible();




})


test('Cart page', async ({page}) => {

    const cartlink= page.locator('[data-test="shopping-cart-link"]');

    await expect(cartlink).toBeVisible();

    await cartlink.click();

    await expect(page.locator('[data-test="title"]')).toBeVisible();

    await page.locator('#checkout').click();

    await expect(page.locator(".title")).toBeVisible();

})


})