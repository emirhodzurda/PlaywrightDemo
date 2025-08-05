import { test, expect } from '@playwright/test';

test('Dropdown exerise', async ({page}) =>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    const options= page.locator('#country option');

    await expect(options).toHaveCount(10);

    
})