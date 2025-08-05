import { test, expect } from '@playwright/test';

import { LoginPage } from './Pages/LoginPage';



test('Successfully log in',  async ({page}) => {

    const loginPage = new LoginPage(page);

    await loginPage.goto();

    await loginPage.isFormVisible();

    await loginPage.login('standard_user', 'secret_sauce');

    await loginPage.isTitleVisible();


})