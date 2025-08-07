import { expect } from "@playwright/test";

export class CheckOutPage {

    constructor(page) {

        this.page = page;

        this.cartlink = page.locator('[data-test="shopping-cart-link"]');

        this.checkoutbtn = page.locator('#checkout');

        this.checkoutinfo = page.locator('.checkout_info');

        this.firstname = page.locator('[data-test="firstName"]');

        this.lastname = page.locator('#last-name');

        this.zip = page.getByPlaceholder('Zip/Postal Code');

        this.ContinueBtn = page.locator('#continue');

        this.title = page.locator('[data-test="title"]');

    }

    async goToShoppingCartLink() {

        await this.cartlink.click();
    }

    async clickToCheckOutBtn() {

        await this.checkoutbtn.click();
    }

    async isCheckOutInfoVisible() {

        await expect(this.checkoutinfo).toBeVisible();
    }

    async info(firstname, lastname, zip) {

        await this.firstname.fill(firstname)
        await this.lastname.fill(lastname)
        await this.zip.fill(zip)
        await this.ContinueBtn.click();
    }

    async isTitleVisible() {

        await expect(this.title).toBeVisible();
    }

}