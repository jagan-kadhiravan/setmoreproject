import { validUser } from "../util/constant.js";
export class LoginPage {
  constructor(page) {
    this.page = page
    this.usernameTextField = page.locator('#username')
    this.passwordTextField = page.locator("[id='password']")
    this.loginClick = page.locator('#sm-login-btn')
  }
  async login() {
    await this.usernameTextField.fill(validUser.username)
    await this.passwordTextField.fill(validUser.password)
    await this.loginClick.click();
  }
}