import { expect } from "@playwright/test";

export class LoginPage {

    constructor(page) {

        this.page = page;

        this.form = page.locator('[data-test="login-container"]');

        this.usernamefield = page.getByPlaceholder('Username');

        this.passwordfield = page.getByPlaceholder('Password');

        this.loginbutton = page.getByRole('button', {name: 'Login'});

        this.title = page.locator('[data-test="secondary-header"]');

    }

    async goto() {

        await this.page.goto('https://www.saucedemo.com/');

    }


    async isFormVisible() {

        await expect(this.form).toBeVisible();
    }


    async login(username, password)  {

        await this.usernamefield.fill(username);
        await this.passwordfield.fill(password);
        await this.loginbutton.click();
        
    }

    async isTitleVisible() {

        await expect(this.title).toBeVisible();
    }

    }













    
















