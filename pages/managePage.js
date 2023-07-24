import { expect } from "@playwright/test";
export class Manage {
    constructor(page) {
        this.page = page
        // await page.getByRole('button', { name: /submit/i }).click();
        this.manageBtn = page.getByRole('button', { name: 'Manage' })
        this.manageHeadText = page.getByText('Manage Teleport integration')
        this.addVideoLinkToAllOff = page.locator('[class="awd-togg-btn "]').nth(0)
        this.addVideoLinkToAllOn = page.locator('[class="awd-togg-btn awd-togg--on"]').nth(0)
        this.firstServiceToggleBtnOff = page.locator('[class="awd-togg-btn "]').nth(1)
        this.firstServiceToggleBtnOn =  page.locator('[class="awd-togg-btn awd-togg--on"]').nth(1)
        this.secondServiceToggleBtnOff= page.locator('[class="awd-togg-btn "]').nth(2)
        this.secondServiceToggleBtnOn = page.locator('[class="awd-togg-btn awd-togg--on"]').nth(2)
        this.thirdServiceToggleBtnOff = page.locator('[class="awd-togg-btn "]').nth(3)
        this.thirdServiceToggleBtnOn = page.locator('[class="awd-togg-btn awd-togg--on"]').nth(3)
        this.manageSaveBtn = page.locator('.awd-btn.awd-btn-primary.awd-btn--sm.ml-2')
    }
    async manageClick() {
        await this.manageBtn.click();
    }
    async toCheckManageHeading() {
        expect(await this.manageHeadText.textContent()).toBe('Manage Teleport integration')
    }
    async toAddVideoToAllOn() {
        await this.page.waitForLoadState();
        //await this.page.waitForSelector('[class="awd-togg-btn"]')
        await this.addVideoLinkToAllOff.click()
    }
    async toAddVideoToAllOff(){
        await this.page.waitForLoadState();
        //await this.page.waitForSelector('[class="awd-togg-btn"]')
        await this.addVideoLinkToAllOn.click()
    }
    async fifttenMinToggleBtnClick() {
        await this.fifteenMinToggleBtn.click()
    }
    async thirtyMinToggleBtnClick() {
        await this.thirtyMinToggleBtn.click()
    }
    async sixtyMinToggleBtnClick() {
        await this.sixtyMinToggleBtn.click()
    }
    async toCheckAllServiceTurnOn() {
        await this.toAddVideoToAllBtn()
        const enableAllbtn = await (this.addVideoLinkToAllOn).isEnabled()
        const firstServiceBtn = await (this.firstServiceToggleBtnOn).isEnabled()
        const secondServiceBtn = await (this.secondServiceToggleBtnOn).isEnabled()
        const thirdServicebtn = await (this.thirdServiceToggleBtnOn).isEnabled()
        if (!enableAllbtn && !firstServiceBtn && !secondServiceBtn && !thirdServicebtn) {
            console.log("toggle button is off")
        } 
        else {
            console.log("All the service toggleBtn is on")
        }
    }
    async toCheckAllServiceTurnOff(){
        const enableAllbtn = await (this.addVideoLinkToAllOn).isDisabled()
        const firstServiceBtn = await (this.firstServiceToggleBtnOn).isDisabled()
        const secondServiceBtn = await (this.secondServiceToggleBtnOn).isDisabled()
        const thirdServicebtn = await (this.thirdServiceToggleBtnOn).isDisabled()

        if(!enableAllbtn){
            await this.toAddVideoToAllOff()
        }
        else if(enableAllbtn && firstServiceBtn && secondServiceBtn && thirdServicebtn){
            console.log("All the service button is disabled")
        }
    }
    async toClickManageSaveBtn(){
        await this.manageSaveBtn.click()
    }
}