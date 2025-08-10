import { expect } from '@playwright/test';

export class CartPage {

    constructor(page) {

        this.page = page;

        this.cartlink = page.locator('[data-test="shopping-cart-link"]');

        this.title = page.locator('[data-test="title"]');

        this.button = page.locator('#checkout');

        this.secondtitle = page.locator(".title");

    }

    async isCartlinkVisible() {

        await expect(this.cartlink).toBeVisible();

    }

    async goToCartLink() {

        await this.cartlink.click();
    }

    async isTitleVisible() {

        await expect(this.title).toBeVisible();
    }

    async gotoCheckOut() {

        await this.button.click();
    }


    async isSecnondTitleVisible() {

        await expect(this.secondtitle).toBeVisible();
    }

}