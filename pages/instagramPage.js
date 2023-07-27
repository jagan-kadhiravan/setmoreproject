import { expect } from "@playwright/test";
import { instaLogin } from "../util/constant";
export class Instagram {
  constructor(page) {
    this.page = page;
    this.instagramStreaming = page.locator(
      ".int-card.card-Instagram.Streaming"
    );
    this.instaStreamingHeading = page.locator('[class="ml-3"] strong');
    this.connectBtn = page.locator(
      '//*[@class="awd-btn-label" and text()="Connect"]'
    );
    this.disconnectBtn = page.locator(
      '[class="int-modal-sidebar fx fx-col"] >:last-child span'
    );
    this.supportArticle = page.locator(
      '[class="awd-link--sm awd-link__tertiary"]'
    );
    this.closeIcon = page.locator(
      ' [class="ml-3"]+[class="nostyle close-btn"]'
    );
    this.instaTitle = page.getByTitle("Login • Instagram");
    this.instructions = page.locator('[class="awd-nav-item "]');
    this.hastags = page.locator('[class="awd-input mb-2"]');
    this.updateBtn = page.locator(
      '//*[@class="awd-btn-label"][text()="Update"]'
    );
    this.chatWithUs = page.locator(
      '//*[@class="awd-btn-label"][text()="Chat with us"]'
    );
    this.callUs = page.locator('//*[@class="awd-btn-label"][text()="Call us"]');
    this.disconnectConfirm = page.locator(
      '//*[@class="awd-modal-wrapper"]//span[text()="Disconnect"] '
    );
    this.hashTagsUpdate = page.locator('[class="ml-2 mr-4 snackbar-content"]');
  }
  async toClickInstaStreaming() {
    await this.instagramStreaming.click();
  }
  async toCheckInstaStreamingHeading() {
    expect(await this.instaStreamingHeading).toContainText(
      "Instagram Streaming"
    );
  }
  async toClickAllowBtn() {
    this.allowBtn.click();
  }
  async toClickConnectBtn() {
    await this.connectBtn.click();
  }
  async toclickDisconnectBtn() {
    await this.page.waitForSelector(
      '[class="int-modal-sidebar fx fx-col"] >:last-child span'
    );
    await this.disconnectBtn.click();
    await this.page.waitForSelector(
      '//*[@class="awd-modal-wrapper"]//span[text()="Disconnect"] '
    );
    await this.disconnectConfirm.click();
    console.log("pass disconnected");
  }
  async toCheckDisconnectBtn() {
    expect(await this.disconnectBtn).toBeVisible();
  }
  async toClickCloseIcon() {
    await this.page.waitForSelector(
      '[class="ml-3"]+[class="nostyle close-btn"]'
    );
    await this.closeIcon.click();
  }
  async toCheckConnectedToInsta() {
    return expect(await this.toCheckDisconnectBtn()).toBeTruthy();
  }
  async loginInstagram() {
    await this.loginInstaUsername.fill(instaLogin.username);
    await this.loginInstaPassword.fill(instaLogin.password);
    await this.loginBtn.click();
  }
  async clickConnectAndSwitchToNewWindow() {
    const newwindow = this.page.waitForEvent("popup");
    await this.connectBtn.click();
    const page1 = await newwindow;
    await page1.waitForSelector('(//*[@class="_aa4a"])[1]');
    await page1.locator('(//*[@class="_aa4a"])[1]').fill("jagank1718");
    await page1.waitForSelector('[aria-label="Password"]');
    await page1.locator('[aria-label="Password"]').fill(instaLogin.password);
    await page1.getByRole("button", { name: "Log in", exact: true }).click();
    await page1.waitForSelector('[class="_acan _acap _acas _aj1-"]');
    await page1.locator('[class="_acan _acap _acas _aj1-"]').click();
    await page1.getByRole("button", { name: "Allow", exact: true }).click();
    await this.page.waitForTimeout(4000);
    await this.page.bringToFront();
  }
  async toCheckInstaConnected() {
    const check = await expect(this.connectBtn).toBeVisible();
    if (!check) {
      console.log("instagram is connected");
    } else {
      console.log("instagram is not connected");
    }
  }

  async toClickInstructions() {
    await this.instructions.click();
  }
  async hastagsUpdate() {
    await this.page.waitForSelector('[class="awd-input mb-2"]');
    await this.hastags.fill(instaLogin.hastags);
  }
  async toClickUpdate() {
    this.updateBtn.click();
    await this.page.waitForSelector(
      '//*[@class="awd-btn-label"][text()="Update"]'
    );
  }

  async toClickConnect() {
    if (await expect(this.disconnectBtn).toBeEnabled()) {
      console.log("need to connected");
      await this.clickConnectAndSwitchToNewWindow();
    } else {
      console.log("already in connected stage to be disconnected");
      await this.toclickDisconnectBtn();
      await this.clickConnectAndSwitchToNewWindow();
    }
  }

  async toClickChatWithUs() {
    await this.chatWithUs.click();
  }
  async toClickCallUs() {
    await this.callUs.click();
  }

  async toCheckHashtagUpdateMsg() {
    const check = await this.hashTagsUpdate.textContent();
    const text = check;

    expect(await text).toBe("HashTag Updated");

    console.log("Hashtags are updated");
  }
}


















//this.saveInfo = page1.locator('[class="_acan _acap _acas _aj1-"]')
//this.loginInstaUsername = page1.locator('//* [@class="_aa48"]//child::input [@class="_aa4b _add6 _ac4d"][@name="username"]')
//this.loginInstaPassword = page1.locator('[aria-label="Password"]')
//this.loginBtn = page1.getByRole('button', { name: 'Log in', exact: true })

//     console.log(this.page.url());
//    const [newWindow] = await Promise.all([
//   await this.page.waitForEvent("popup"),
//   console.log("hello"),
//   await this.connectBtn.click(),
//   console.log("connect clicked"),
//    await newWindow.waitForNavigation(),
//     await newWindow.locator('Phone number, username or email address').fill('jagank1718'),
//     await newWindow.locator('Password').fill('Jagan@9797')

// ]);

// console.log(newWindow.url());
//     //     const currentContext = this.page.context()
//     //     const page1 = await currentContext.newPage()
//     //     await page1.goto(instaLogin.url)
//     //     await page1.fill('[aria-label="Phone number, username or email address"]', 'jagank1718')
//     //     await page1.fill('[aria-label="Password"]', 'Jagan@9797')
//     }
//    }

//     const[newWindow] = await this.promise.all([
//     context.waitForEvent("page"),

// ])
// await newWindow.waitForLoadState('load');
// expect.soft(await newWindow.url()).toContain("instagram")
// await newWindow.waitForNavigation()
// await newWindow.fill('Phone number, username or email address','jagank1718')
// await newWindow.fill('Phone number, username or email address','Jagan@9797')
// await newWindow.click('[class="_acan _acap _acas _aj1-"]')

// await this.page.waitForEvent('page');
// const pages = await this.page.pages();
// const newPage = pages[pages.length - 1];
// await newPage.waitForLoadState('domcontentloaded');

//await this.page.goto(instaLogin.url)
// await this.page.waitForSelector('Login • Instagram')
// await expect(this.page).toHaveTitle(this.instaTitle);
