export class BasePage {

constructor(page) {
    this.page = page;
}
async open(url) {
    await this.page.goto(url);
}
async reload() {
    await this.page.reload();
}

}

