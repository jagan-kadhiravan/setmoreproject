import { expect } from "@playwright/test";
import { customerDetails, bookingDetails } from "../util/constant.js";
export class Calender {
    constructor(page) {
        this.page = page
        this.fifteenMin = page.locator('[data-testid="service-class-list"]:first-of-type li:first-child')
        this.cos = page.locator('.awd-input.fx-i-center')
        this.duration = page.getByTestId('service-class-duration')
        this.ToCheckOnCreatedMetting = page.locator('[class="fc-daygrid-day-events"]').nth(22)
        this.clickDate = page.locator('[class="fc-scrollgrid-sync-table"] [class="fc-daygrid-day-top"]').nth(22);
        this.CalenderLogo = page.locator('#sidebar-app-calendar')
        this.ToClickStartTimeTextBox = page.locator('#start-time-input')
        this.toSelectTime = page.locator('[data-testid="app-widget-start-' + bookingDetails.time + '"]')
        this.createBtn = page.getByTestId('app-widget-create-button')
        this.addGuestTextBox = page.getByTestId('app-widget-guest')
        this.clickGuest = page.locator('.awd-avatar.fx-no-shrink.mr-2')
        this.appointmentContainer = page.locator('.inner-container.f-inner-scroll.awd-custom-scrollbar')
        this.teleportLink = page.locator('[href="https://teleport.video/meeting/setmore/qXQVX"]')
        this.toCheckDetailText = page.locator('#Detail')
        this.errorMsgGuest = page.locator('[data-testid="app-widget-guest-error"]')
        this.errorMsgService = page.locator('[class="awd-input-desc"]').nth(0)
        this.CustomerBookedvia = page.getByTestId('app-widget-booking-source')
    }
    async toSelectDate() {
        await this.clickDate.click()
    }
    async verifyDetailText() {
        expect(this.page.locator('#Detail')).toContainText('Detail');
    }
    async toCheckServiceText() {
        expect(this.page.locator('(//*[@id="Service"])')).toContainText('Service')
    }
    async toClickFifteenMin() {
        await this.fifteenMin.click()
    }
    async toSetCost() {
        await this.cos.clear()
        await this.cos.fill(bookingDetails.cost)
    }
    async toSetDuration() {
        await this.duration.clear()
        await this.duration.fill(bookingDetails.duration)
    }
    async toClickCalenderLogo() {
        await this.page.waitForSelector('#sidebar-app-calendar')
        await this.CalenderLogo.click()
    }
    async toClickTime() {
        await this.page.waitForSelector('#start-time-input')
        await this.ToClickStartTimeTextBox.click()
        await this.toSelectTime.click()
    }
    async toClickCreate() {
        await this.createBtn.click()
    }
    async addGuest() {
        await this.addGuestTextBox.fill(customerDetails.name)
        await this.appointmentContainer.click()
        await this.addGuestTextBox.click()
        await this.page.waitForSelector('.awd-avatar.fx-no-shrink.mr-2')
        await this.clickGuest.click()
    }
    async toCheckAddGuestErrorMsg() {
        const errMsgGuest = await this.errorMsgGuest.textContent();
        expect(errMsgGuest).toContain('Select atleast one guest to continue')
    }
    async toCheckServiceErrorMsg() {
        const errMsgSerice = await this.errorMsgService.textContent();
        expect(errMsgSerice).toContain('Select atleast one ')
    }
    async toCheckTeleportLink() {
        if (this.teleportLink.isVisible()) {
            console.log("Teleport link is displayed")
        } else {
            console.log("Teleport link is not displayed")
        }
    }
    async toClickOnBookedAppointment() {
        await this.ToCheckOnCreatedMetting.click();
    }
    async appoinmentContainerClick() {
        await this.appointmentContainer.click();
    }
    async tocheckCustomerBookedVia() {

        const check = this.CustomerBookedvia.textContent();
        if (check.isVisible()) {
            expect(check).toBe('Booked from Custom staff booking page')
            console.log("Appointment is Booked")
        }else {
            console.log("The appointment is not booked")
        }
    }
}