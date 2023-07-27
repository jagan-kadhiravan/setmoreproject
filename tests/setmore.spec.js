const { test } = require('@playwright/test');
const conf = require('../util/constant.js');
import { LoginPage } from '../pages/loginPage.js';
import { Selectdate } from '../pages/selectDatePage.js';
import { Service } from '../pages/appointmentPage.js';
import { Integration } from '../pages/integrationPage.js';
let loginapp;
let selectDate;
let service;
let integration;
let page;
test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    loginapp = new LoginPage(page)
    selectDate = new Selectdate(page)
    service = new Service(page)
    integration = new Integration(page)
    await page.goto(conf.url)
    await loginapp.login(conf.validUser);
})
test.describe('Setmore', () => {
    test('selecting the date', async () => {
        await service.addDropdown();
        await service.addCus(conf.customerDetails, conf.bookingDetails)
    });
    test('selecting the service', async () => {
        await selectDate.changeView();
        await selectDate.validate();
        await service.service();
        await service.meetingFifteen();
        await service.selectTimeClick(conf.bookingDetails);
    });
    test.only('To check teleport is connected', async () => {
        await integration.integrationLogoClk();
        await integration.checkapp();
    });
});













  // await expect.soft(page.locator('#draggable-area')).toBeVisible();
    //await expect.soft(page.locator(".navbar-brand")).toBeVisible();
 //tbody tr:nth-child(3) td:nth-child(4) > div
    //tbody tr:nth-child(i) td:nth-child(j) > div
