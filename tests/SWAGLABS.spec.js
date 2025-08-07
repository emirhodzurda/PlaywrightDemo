    
    import { test, expect } from '@playwright/test';

    import { HomePage } from './Pages/HomePage';

    import { CartPage } from './Pages/CartPage';

    import { CheckOutPage } from './Pages/CheckOutPage';




    test.describe('Regression tests', () => {

    test.beforeEach( async ({page}) => {

    await page.goto('https://www.saucedemo.com/');

    const loginform= await page.locator('.login_wrapper-inner');

    await expect(loginform).toBeVisible();

    await page.getByPlaceholder('Username').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();

    const picture= page.getByAltText('Sauce Labs Backpack');

    await expect(picture).toBeVisible();

    })

    
    test.afterEach( async ({page}) => {

        

    await page.locator('#react-burger-menu-btn').click();

    await page.locator('[data-test="logout-sidebar-link"]').click();

    await expect(page.getByRole('button', { name: 'Login'})).toBeVisible();
})

    


    


test('Home page', async ({page}) => {

    const homepage = new HomePage(page)

    
    await homepage.addProductToCart();

    await homepage.goToCartLink();

    await homepage.isDescriptionvisible();

    await homepage.goToCheckOut();

    await homepage.isTitleVisible();


})

test('Cart page', async ({page}) => {

    const cartpage = new CartPage(page);

    await cartpage.isCartlinkVisible();

    await cartpage.goToCartLink();

    await cartpage.isTitleVisible();

    await cartpage.gotoCheckOut();

    await cartpage.isSecnondTitleVisible();



})


test('Checkout page', async ({page}) => {

    const checkoutpage = new CheckOutPage(page);

    await checkoutpage.goToShoppingCartLink();

    await checkoutpage.clickToCheckOutBtn();

    await checkoutpage.isCheckOutInfoVisible();

    await checkoutpage.info('Emir', 'Test123', '12345');

    await checkoutpage.isTitleVisible();
})


test.skip('Checkout review', async ({page}) => {

await page.locator('[data-test="shopping-cart-link"]').click();
await page.locator('#checkout').click();
await page.locator('[data-test="firstName"]').fill('Emir');
await page.locator('#last-name').fill('Test123.');
await page.getByPlaceholder('Zip/Postal Code').fill('12345');
await page.locator('#continue').click();

await expect(page.locator('[data-test="cart-list"]')).toBeVisible();

const summary = page.locator('.summary_info');

await expect(summary).toContainText('Payment Information');
await expect(summary).toContainText('Shipping Information');
await expect(summary).toContainText('Price Total');

const FinishBtn = page.locator('#finish')

await FinishBtn.click();

await expect(page.locator('[data-test="complete-header"]')).toBeVisible();

await page.getByRole('button', {name: 'Back Home'}).click();

await expect(page.locator('[data-test="product-sort-container"]')).toBeVisible();


}) 



    })