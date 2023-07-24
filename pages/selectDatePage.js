import { expect } from "@playwright/test";
import { bookingDetails } from "../util/constant"

export class Selectdate {
    constructor(page) {
        this.page = page
        this.dropDrown = page.locator('#change-view')
    }
    async changeView() {
        await this.dropDrown.click()
        await this.page.locator('#Month').click()
    }
    async validate() {
        let m = bookingDetails.month//console.log(month,"hi");
        let y = bookingDetails.year//console.log(year);
        let d = bookingDetails.date
        const presentMonth = await this.page.getByTestId('header-month-one')
        const presentYear = await this.page.getByTestId('header-year-one')
        var presentMth = await presentMonth.textContent()
        console.log(presentMth)
        var presentYr = await presentYear.textContent()
        console.log(presentYr)
        const mon = ["January",
            "Febrary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        for (let i = 0; i <= mon.length - 1; i++) {
            if (mon[i] == m) {
                var mth = mon.indexOf(m)
                var givenMth = mth + 1
            }
        }
        for (let i = 0; i < mon.length; i++) {
            if (m === presentMth && y === presentYr) {
                if (mth <= 9 && d > 9) {
                    return await this.page.locator('[data-date="' + y + '-0' + givenMth + '-' + d + '"]').click()
                } else if (mth > 9 && d > 9) {
                    return await this.page.locator('[data-date="' + y + '-' + givenMth + '-' + d + '"]').click()
                } else if (mth > 9 && d < 9) {
                    return await this.page.locator('[data-date="' + y + '-' + givenMth + '-0' + d + '"]').click()
                } else {
                    return await this.page.locator('[data-date="' + y + '-0' + givenMth + '-0' + d + '"]').click()
                }
            } while (m !== presentMth) {
                var prev = await this.page.$('[data-testid="calendar-header-previous-button"]')
                await prev.click();
                var presentMth = await presentMonth.textContent()
            }
            if (presentYr < y) {
                while (y !== presentYr) {
                    var next = await this.page.$('[data-testid="calendar-header-next-button"]')
                    await next.click()
                    var presentYr = await presentYear.textContent()
                }
            }
            else if (presentYr > y) {
                while (y !== presentYr) {
                    var prev = await this.page.$('[data-testid="calendar-header-previous-button"]')
                    await prev.click()
                    var presentYr = await presentYear.textContent()
                }
            }
            if (mth <= 9 && d > 9) {
                return await this.page.locator('[data-date="' + y + '-0' + givenMth + '-' + d + '"]').click()
            } else if (mth > 9 && d > 9) {
                return await this.page.locator('[data-date="' + y + '-' + givenMth + '-' + d + '"]').click()
            } else if (mth > 9 && d < 9) {
                return await this.page.locator('[data-date="' + y + '-' + givenMth + '-0' + d + '"]').click()
            } else {
                return await this.page.locator('[data-date="' + y + '-0' + givenMth + '-0' + d + '"]').click()
            }
        }
    }

}