export class Logout {
    constructor(page) {
        this.page = page
        this.settingsSideIcon = page.locator('[id="sidebar-app-settings"]')
        this.logout = page.locator('[class="awd-sidebar__item"]')
        this.yesLogOutBtn = page.locator('[class="awd-modal-wrapper"]>footer>button[class="awd-btn awd-btn-tertiary awd-btn--sm"]')
    }
    async toClickSettings() {
        this.settingsSideIcon.click()
    }
    async toClickLogout() {
        await this.toClickSettings();
        this.logout.click()
        await this.page.waitForSelector('[class="awd-modal-wrapper"]>footer>button[class="awd-btn awd-btn-tertiary awd-btn--sm"]',{timeout:5000})
        this.yesLogOutBtn.click()
        await this.page.waitForTimeout(5000)
    }
}