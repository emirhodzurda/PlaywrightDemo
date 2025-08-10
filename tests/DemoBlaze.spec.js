import { test, expect } from '@playwright/test';

import { DemoBlazeHomePage } from '../Pages/DemoBlazeHomePage';



test.describe('Smoke tests', () => {

test.beforeEach(async ({page}) => {

    await page.goto('https://demoblaze.com/')
    await expect(page.locator('.navbar-brand', { hasText: 'PRODUCT STORE' })).toBeVisible();

    await page.locator('#login2').click();
    await expect(page.locator('.modal-content', {hasText: 'Log in'})).toBeVisible();

    //entering credentials
    await page.locator('#loginusername').fill('emirwork');
    await page.locator('#loginpassword').fill('emirwork');
    await page.getByRole('button', { name: 'Log in'}).click();

    await expect(page.locator('.nav-link', { hasText: 'Log out'})).toBeVisible();

})    

test.afterEach(async ({page}) => {

    await page.getByRole('link', {name: 'Log out'}).click();
    await expect(page.locator('#login2')).toBeVisible();

})


test.only('Home page', async({page}) => {

    const homepage = new DemoBlazeHomePage(page)

    await homepage.isCategoriesVisible();
    await homepage.clickToMonitorsSection();
    await homepage.isProductVisible();
    await homepage.clickOnProduct();
    await homepage.isAddToCartBtnVisible();
    await homepage.clickToCartBtn();
});

test('Cart page', async ({page}) => {

    const CellProduct = page.locator('.card-title', { hasText: 'Samsung galaxy s6'});

    await expect(CellProduct).toBeVisible();
    await CellProduct.click();
    await expect(page.getByRole('link', { name: 'Add to cart' })).toBeVisible();

    //catching pop-up modal
     page.once('dialog', async dialog => {
          expect(dialog.message()).toContain('Product added.');
          await dialog.accept();
    });

    await page.getByRole('link', { name: 'Add to cart' }).click();
    await page.getByRole('link', { name: 'Cart', exact: true }).click();
    await expect(page.getByRole('heading', { name: 'Total' })).toBeVisible();

    //Place order
    await page.getByRole('button', {name: 'Place Order' }).click();
    const OrderModal = page.getByRole('heading', { name: 'Place order' });

    await expect(OrderModal).toBeVisible();
    await page.getByRole('textbox', { name: 'Name'}).fill('Emir');
    await page.getByRole('textbox', { name: 'Country' }).fill('Bosnia');
    await page.getByRole('textbox', { name: 'City' }).fill('Sarajevo');
    await page.getByRole('textbox', { name: 'Credit card' }).fill('MasterCard');
    await page.getByRole('textbox', { name: 'Month' }).fill('04');
    await page.getByRole('textbox', { name: 'Year'}).fill('2027');
    await page.getByRole('button', { name: 'Purchase' }).click();

    await expect(page.getByRole('heading', { name: 'Thank you for your purchase!'})).toBeVisible();

    await page.getByRole('button', { name: 'OK' }).click();
})

});
