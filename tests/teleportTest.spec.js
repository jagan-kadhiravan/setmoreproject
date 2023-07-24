const { test, expect } = require('@playwright/test')
const conf = require('../util/constant.js')
import { LoginPage } from '../pages/loginPage.js'
import { Selectdate } from '../pages/selectDatePage.js'
import { Service } from '../pages/appointmentPage.js'
import { Integration } from '../pages/integrationPage.js'
import { Calender } from '../pages/calendarPage.js'
let loginapp
let selectDate
let service
let integration
let calender
let page


test.describe('Setmore Booking ', () => {
    test.beforeAll(async ({ browser }) => {
        page = await browser.newPage()
        loginapp = new LoginPage(page)
        selectDate = new Selectdate(page)
        service = new Service(page)
        calender = new Calender(page)
        integration = new Integration(page)
        await page.goto(conf.url)
        //await page.screenshot({path: "homepage.png"});
        await loginapp.login(conf.validUser)
    })
    test.beforeEach(async () => {
        await integration.integrationModuleClick()
        await integration.checkApp(conf.bookingDetails)
        await calender.toClickCalenderLogo()
        await calender.toSelectDate()
        await calender.toCheckServiceText()
    })

    test.slow('To check the teleportlink and booking appointment created', async () => {
        await calender.toClickFifteenMin()
        await calender.toSetCost(conf.bookingDetails)
        await calender.toSetDuration(conf.bookingDetails)
        await calender.addGuest(conf.customerDetails)
        await calender.toClickCreate()
        await calender.toClickOnBookedAppointment()
        await calender.verifyDetailText()
        await calender.toCheckTeleportLink()
    })
    test.slow('To verify without giving cost', async () => {
        await calender.toClickFifteenMin()
        await calender.toSetDuration(conf.bookingDetails)
        await calender.addGuest(conf.customerDetails)
        await calender.toClickCreate()
        await calender.toClickOnBookedAppointment()
    });

    test.slow('To create appointment without giving duration', async () => {
        await calender.toClickFifteenMin()
        await calender.addGuest(conf.userCus)
        await calender.toClickCreate()
        await calender.toClickOnBookedAppointment()
    });
    test('To create a meeting without set the cost and duration', async () => {
        await calender.toClickFifteenMin()
        await calender.addGuest(conf.userCus)
        await calender.toClickCreate()
        await calender.toClickOnBookedAppointment()
    });
    test.slow('To create a meeting without selectig guest', async () => {
        await calender.toClickFifteenMin()
        await calender.toClickCreate()
        await calender.toCheckAddGuestErrorMsg()
    });
    test('To create a meeting without selecting the service', async () => {
        await calender.appoinmentContainerClick()
        await calender.toClickCreate()
        await calender.toCheckAddGuestErrorMsg()
        await calender.toCheckServiceErrorMsg()
    });
});

test.describe.only('To verify all the apps in integration page', () => {
    test.beforeAll(async ({ browser }) => {
        page = await browser.newPage()
        loginapp = new LoginPage(page)
        selectDate = new Selectdate(page)
        service = new Service(page)
        calender = new Calender(page)
        integration = new Integration(page)
        await page.goto(conf.url)
        //await page.screenshot({path: "homepage.png"});
        await loginapp.login(conf.validUser)
    })

    test.beforeEach(async () => {
        await integration.integrationModuleClick()
    })

    test('Toverify all apps are present in webpage', async () => {
        await integration.verifyAllApp()
    });
});

