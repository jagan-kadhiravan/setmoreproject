const { test } = require('@playwright/test');
const conf = require('../util/constant.js');
import { LoginPage } from '../pages/loginPage.js';
import { Integration } from '../pages/integrationPage.js';
import { Instagram } from '../pages/instagramPage.js';
import { Logout } from '../pages/logout.js';
import { Calender } from '../pages/calendarPage.js';
let loginapp;
let calender
let integration;
let page;
let instagram;
// let page1;
let logout;

test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    // const context = await browser.newContext();
    // page1 = await context.newPage();
    loginapp = new LoginPage(page)
    integration = new Integration(page)
    calender = new Calender(page)
    instagram = new Instagram(page)
    logout = new Logout(page)
    await page.goto(conf.url)
    await loginapp.login(conf.validUser)
    await page.waitForLoadState('load');
    await integration.integrationModuleClick();
    await instagram.toClickInstaStreaming();
    await instagram.toCheckInstaStreamingHeading()
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
            await instagram.clickConnectAndSwitchToNewWindow(conf.instaLogin)
        })
    test('To verify if the instagram is integrated or not', async () => {
        await instagram.clickConnectAndSwitchToNewWindow(conf.instaLogin)
        await instagram.toCheckInstaConnected()
    });
    test.only('To verify the hashatgs textbox after instagram integration', async () => {
        //test.slow();
        await instagram.toClickConnect(conf.instaLogin)
        await instagram.toClickInstructions()
        await instagram.hastagsUpdate(conf.instaLogin)
        await instagram.toClickUpdate()
    })
    test('To verify hashtags are upadated or not', async () => {
        await instagram.toClickInstructions()
        await instagram.hastagsUpdate(conf.instaLogin)
        await instagram.toClickUpdate()
        await instagram.toCheckHashtagUpdateMsg()
    });
    test('To verify if the appointment is booked ', async () => {
        await calender.tocheckCustomerBookedVia()
    })

})

















// test.use({ browserName: 'webkit' }); 