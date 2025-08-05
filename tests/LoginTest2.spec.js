import { test, expect } from "@playwright/test";    

import { LoginPage2} from "./Pages/LoginPage2";



test('Login 2', async ({page}) => {

    const loginPage = new LoginPage2(page)

    await loginPage.goto();

    await loginPage.isloginformvisible();

    await loginPage.login('standard_user', 'secret_sauce');

    await loginPage.islinkedinvisible();

})