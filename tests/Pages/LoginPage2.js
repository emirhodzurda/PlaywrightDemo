import { expect } from "@playwright/test";

export class LoginPage2 {

    constructor(page) {

        this.page = page;

        this.loginform = page.locator('[data-test="login-container"]');

        this.username = page.getByPlaceholder('Username');

        this.password = page.getByPlaceholder('Password')

        this.loginbutton = page.getByRole('button', { name: 'Login'});

        this.linkedin = page.locator('[data-test="social-linkedin"]');
    
    }

    async goto() {

        await this.page.goto('https://www.saucedemo.com/');

    }

    async isloginformvisible() {

        await expect(this.loginform).toBeVisible();

    }

    async login(username, password) {

        await this.username.fill(username)
        await this.password.fill(password)
        await this.loginbutton.click();
    }

    async islinkedinvisible() {

        await expect(this.linkedin).toBeVisible();
    }
}