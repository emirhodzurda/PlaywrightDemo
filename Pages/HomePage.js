import { expect } from "@playwright/test";

export class HomePage {

    constructor(page) {

        this.page = page;

        this.product = page.locator('#add-to-cart-sauce-labs-backpack');

        this.cartbutton = page.locator('.shopping_cart_link');

        this.description = page.locator('[data-test="cart-desc-label"]');

        this.checkoutbutton = page.locator('#checkout');

        this.title = page.locator('.title');
        
    }

    async addProductToCart() {

       await this.product.click();
    }


    async goToCartLink() {

        await this.cartbutton.click();
    }

    async isDescriptionvisible() {

        await expect(this.description).toBeVisible();

    }

    async goToCheckOut() {

        await this.checkoutbutton.click();
    }
    

    async isTitleVisible() {

        await expect(this.title).toBeVisible();
    }


        }

