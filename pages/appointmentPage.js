
import { expect } from "@playwright/test";
import { customerDetails, bookingDetails } from "../util/constant";
//const { year, month, date } = require("../constant");

export class Service {

    constructor(page) {
        this.page = page;
        this.serviceEle = page.locator("button#Service")
        this.serClk = page.getByPlaceholder("Select a service")
        this.fifteenMin = page.locator('#scheduleId_10f1a8de-54a5-4c25-b281-fba11d84eb1b')
        this.thirtyMin = page.locator('#scheduleId_97d96ac8-63ed-4a41-a88a-1c05ab7f0a78')
        this.addDropdownClick = page.locator('#add-dropdown')
        this.addCusClick = page.locator('#add-customer')
        this.nameField = page.getByTestId('contact-fullName')
        this.phoneNo = page.locator('#ph_0')
        this.emailaddCus = page.locator('#contact-email0')
        this.searchinDrp = page.getByTestId('countrycodeChange')
        this.stateClick = page.locator('[data-testid="state-bar"] [id="g-input state"]')
        this.searchState = page.locator('#stateSearch')
        this.savebtn = page.getByTestId('app-widget-contact-save')
        this.cos = page.locator('.awd-input.fx-i-center')
        this.duration = page.getByTestId('service-class-duration')
        this.addGuest = page.getByTestId("app-widget-guest")
        this.createbtn = page.locator('#create .awd-btn-label')
    }
    async service() {
        await this.page.waitForSelector('button#Service')
        expect(await this.page.locator('body').textContent()).toContain('service')
    }
    async meetingFifteen() {
        await this.page.waitForSelector('#scheduleId_10f1a8de-54a5-4c25-b281-fba11d84eb1b')
        await this.fifteenMin.click()
    }
    async selectTimeClick() {
        let t = time;
        let c = cost;
        let d = duration;
        console.log(t)
        console.log(await c)
        await this.page.waitForSelector('#start-time-input')
        await this.page.click('#start-time-input')
        await this.page.click('[data-testid="app-widget-start-' + t + '"]')
        await expect(this.page.locator('[data-testid="app-widget-start-time-list"] [data-testid="app-widget-start-' + t + '"]')).toHaveText(t)
        await this.cos.fill('')
        await this.cos.fill(bookingDetails.cost)
        await this.duration.fill('')
        await this.duration.fill(bookingDetails.duration)
        await this.duration.fill('')
        await this.addGuest.fill(customerDetails.name)
        await this.page.getByTestId('app-widget-guest-in-suggestion').click()
        await this.createbtn.click()
    }
    async addDropdown() {
        await this.page.waitForSelector('#add-dropdown')
        await this.addDropdownClick.click()
        await this.addCusClick.click()
    }
    async addCus() {
        await this.nameField.fill(customerDetails.name)
        await this.phoneNo.fill(customerDetails.phoneNumber)
        await this.emailaddCus.fill(customerDetails.email)
        await this.page.waitForSelector('[data-testid="state-bar"] [id="g-input state"]')
        await this.stateClick.click()
        await this.searchState.fill(bookingDetails.city)
        await this.page.locator('[class="awd-dropdown-listitem "]').click()
        await this.savebtn.click()
    }
}
