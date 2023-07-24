import { expect } from "@playwright/test";
export class Teleport {
    constructor(page) {
        this.page = page
        this.teleport = page.getByAltText('Teleport')
    }
    async teleportClick() {
        await this.page.waitForSelector('.int-card.card-Teleport')
        await this.teleport.click();
    }
}