import { bookingDetails, applications } from "../util/constant.js";

export class Integration {
  constructor(page) {
    this.page = page;
    this.integrationSideIcon = page.locator("#sidebar-app-integration");
    this.disConCheck = page.locator('(//*[contains(text(),"Disconnect")])');
    this.connectBtn = page.locator('(//*[contains(text(),"Connect")])[2]');
    this.closeIcon = page.locator('[class="ml-3"]+[class="nostyle close-btn"]');
    this.applis = page.locator(".container li");
  }
  async integrationModuleClick() {
    await this.page.waitForSelector("#sidebar-app-integration");
    await this.integrationSideIcon.click();
  }
  async checkApp() {
    const appList = await this.page.$$(".container li h6");
    let i = 0;
    for (var apps of appList) {
      const text = await apps.textContent();
      if (text.startsWith(bookingDetails.app)) {
        await this.applis.nth(i).click();
      }
      i++;
    }
    if (!(await this.connectBtn.isHidden())) {
      console.log(bookingDetails.app + "is not connected");
      await this.closeIcon.click();
    } else {
      console.log(bookingDetails.app + "is connected");
      await this.closeIcon.click();
    }
  }
  async verifyAllApp() {
    await this.page.waitForSelector(".container li h6");
    const appList = await this.page.$$(".container li h6");
    const appNames = [];
    const appConst = [];
    for (const app of appList) {
      const appName = await app.textContent();
      appNames.push(appName);
    }
    appNames.sort();

    for (const appl of applications.apps) {
      appConst.push(appl);
    }
    appConst.sort();

    for (let i = 0; i < appConst.length; i++) {
      const appText = appConst[i];
      const appName = await appNames[i];
      const check = appText.startsWith(appName);
      if (check == true) {
        console.log("Application is present in the web page :", appConst[i]);
      } else {
        console.log(
          "Application is not present in the web page :",
          appConst[i]
        );
      }
    }
  }
}






















//     const appList = await this.page.$$('.container li h6');
//     const expectedAppName =applications.apps; // Replace 'bookingDetails.app' with the expected app name
//     let found = false;
//     let appNames = [];
//     let appNamesConst = [];
//     let i =0;

//     for (const apps of appList) {
//         const appName = await apps.textContent();
//         appNames.push(appName)
//         appNamesConst.push(expectedAppName)
// const appText = await appConst[i];
// const appName = await appNames[i];

//         if (appText.includes(appName)) {
//             console.log("All Application is displayed in the web page");
//             found = true;
//             break;
//         }i++
//     }

//     if (!found) {
//         console.log("Application is not displayed in the web page");
//     }
// }

//     const appList = await this.page.$$('.container li h6')
//     const appNames = []
//     const appConst = []
//     for (const app of appList) {
//         const appName = await app.textContent()
//         appNames.push(appName)
//     }
//     appNames.sort();
//     console.log(appNames)

//     for (const appl of applications.apps) {
//         appConst.push(appl)
//     }
//     console.log(appConst);

//     for (let i = 0; i <appConst.length; i++) {
//         if (expect(await appNames[i]).toContainText(appConst[i])) {
//             console.log(await appNames[i], "Application is present in the web page")
//         } else {
//             console.log(await appNames[i], "Application is not present in the web page")
//             break;
//         }
//     }
// }

// }

// const numbers = [10, 5, 20, 3];
// numbers.sort((a, b) => a - b); // Ascending order
// console.log(numbers); // Output: [ 3, 5, 10, 20 ]

// for (var apps of appList) {
//     var appName = await apps.textContent()
//     console.log(appName)
// }
// for (i = 0; i <= appName.length; i++) {
//     console.log(appName.length)
//     if (expect(apps[i]).to.include(appName)) {
//         console.log("Application is displayed in the web page", appName)
//     }
//     else {
//         console.log("Application is not displayed in the web page", appName)
//     }
// }
