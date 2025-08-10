import { expect  } from "@playwright/test";

export class DemoBlazeHomePage {
    constructor(page) {

        this.page = page;
        this.categories = page.locator('.list-group-item', { hasText: 'CATEGORIES' });
        this.monitors = page.locator('.list-group-item', { hasText: 'Monitors' });
        this.product = page.locator('.card-title', { hasText: 'ASUS Full HD' });
        this.cartBtn = page.getByRole('link', { name: 'Add to cart' });
    }

    async isCategoriesVisible() {
        await expect(this.categories).toBeVisible();
    }

    async clickToMonitorsSection() {
        await this.monitors.click();
    }

    async isProductVisible() {
        await expect(this.product).toBeVisible();
    }

    async clickOnProduct() {
        await this.product.click()
    }

    async isAddToCartBtnVisible() {
        await expect(this.cartBtn).toBeVisible();
    }

    async clickToCartBtn() {
        await this.cartBtn.click();
    }
};