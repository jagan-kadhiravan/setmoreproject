const { test } = require("@playwright/test");
const conf = require("../util/constant.js");
import { LoginPage } from "../pages/loginPage.js";
import { Integration } from "../pages/integrationPage.js";
import { Teleport } from "../pages/teleportpages.js";
import { Manage } from "../pages/managePage.js";
let loginapp;
let integration;
let page;
let teleport;
let manage;

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
  loginapp = new LoginPage(page);
  integration = new Integration(page);
  teleport = new Teleport(page);
  manage = new Manage(page);
  await page.goto(conf.url);
  await loginapp.login(conf.validUser);
  await page.waitForLoadState("load");
});
test.describe("Manage teleport integration ", () => {
  test.skip("To verify that the every service toggle btn on when clicking the add video all toggle btn ON", async () => {
    await integration.integrationModuleClick();
    await teleport.teleportClick();
    await manage.manageClick();
    await manage.toCheckManageHeading();
    await manage.toCheckAllServiceTurnOn();
  });
  test("To verify that every service toggle btn off, when clicking the add video all toogle btn OFF", async () => {
    await integration.integrationModuleClick();
    await teleport.teleportClick();
    await manage.manageClick();
    await manage.toCheckManageHeading();
    await manage.toCheckAllServiceTurnOff();
  });
});
