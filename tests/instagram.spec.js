const { test, expect } = require('@playwright/test');
const conf = require('../util/constant.js');
import { LoginPage } from '../pages/loginPage.js';
import { Selectdate } from '../pages/selectDatePage.js';
import { Service } from '../pages/appointmentPage.js';
import { Integration } from '../pages/integrationPage.js';
import { Teleport } from '../pages/teleportpages.js';
import { Manage } from '../pages/managePage.js';
import { Instagram } from '../pages/instagramPage.js';
import { Logout } from '../pages/logout.js';
let loginapp;
let selectDate;
let service;
let integration;
let page;
let teleport;
let manage;
let instagram;
// let page1;
let logout;



test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    // const context = await browser.newContext();
    // page1 = await context.newPage();

    loginapp = new LoginPage(page)
    selectDate = new Selectdate(page)
    service = new Service(page)
    integration = new Integration(page)
    teleport = new Teleport(page)
    manage = new Manage(page)
    instagram = new Instagram(page)
    logout = new Logout(page)
    await page.goto(conf.url)
    await loginapp.login(conf.validUser)
    await page.waitForLoadState('load');
    await integration.integrationModuleClick();
    await instagram.toClickInstaStreaming();
    await instagram.toCheckInstaStreamingHeading()
    await page.waitForLoadState('load')
})

test.describe('To verify instagram Streaming', () => {
    test('To verify end to end testing for instagram streaming', async () => {
        await instagram.clickConnectAndSwitchToNewWindow(conf.instaLogin)
        await instagram.toCheckInstaConnected()
        await instagram.toClickCloseIcon()
        await logout.toClickLogout()
    });

    test('To verify its allowing instagram login',
        async () => {
            // test.slow();
            await instagram.clickConnectAndSwitchToNewWindow(conf.instaLogin)

        })
    test('To verify if the instagram is integrated or not', async () => {
        await instagram.clickConnectAndSwitchToNewWindow(conf.instaLogin)
        await instagram.toCheckInstaConnected()
    });
    test.only('To verify the hashatgs textbox after instagram integration', async () => {
        // await instagram.clickConnectAndSwitchToNewWindow(conf.instaLogin)
        //test.slow();
        await instagram.toClickConnect(conf.instaLogin)
        await instagram.toClickInstructions()
        await instagram.toClickUpdate()
    });

})