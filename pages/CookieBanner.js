import { BasePage } from './BasePage';

export class CookieBanner extends BasePage {
    constructor(page) {
        super(page);

        this.acceptAllButton = page.locator('[data-cky-tag="accept-button"]')
    }
    async acceptAllButton() {
        await this.acceptAllButton.click();
    }
}