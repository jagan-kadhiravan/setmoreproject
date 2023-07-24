
        // const dates = await this.page.$$('.fc-scrollgrid-sync-table tbody tr td');
        // for (let dateElement of dates) {
        //   const date = await dateElement.textContent();
        //   console.log(date);
        // }

        // for (let i = 0; i < dates.length; i++) {
        //   if (m === presentMth && y === presentYr) {
        //     await dates[i].click();
        //     console.log('if pass');
        //   } else {
        //     if (m < presentMth && y < presentYr) {
        //       const prev = await this.page.$('[data-testid="calendar-header-previous-button"]');
        //       await prev.click();
        //       await dates[i].click();
        //     } else {
        //       const next = await this.page.$('[data-testid="calendar-header-next-button"]');
        //       await next.click();
        //       await dates[i].click();
        //       console.log('else passed');
        //     }

         // const prev = await page.getByTestId('calendar-header-previous-button');
    // const next = await page.getByTestId('calendar-header-next-button');




    // async changeView() {
  //   await this.dropDrown.click();
  //   await this.page.click(' #Month');

  // }

  // async validate() {
  //   let m = month;//console.log(month,"hi");
  //   let y = year;//console.log(year);
  //   let d = date;

  //   const presentMonth = await this.page.getByTestId('header-month-one')
  //   const presentYear = await this.page.getByTestId('header-year-one')
  //   var presentMth = await presentMonth.textContent();
  //   console.log(presentMth);
  //   var presentYr = await presentYear.textContent();
  //   console.log(presentYr);

  //   const mon = ["January",
  //     "Febrary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  //   for (let i = 0; i <= mon.length - 1; i++) {

  //     if (mon[i] == m) {
  //       var mth = mon.indexOf(m);
  //       var givenMth = await mth + 1
  //     }
  //   }

  //   for (let i = 0; i < mon.length; i++) {

  //     if (m === presentMth && y === presentYr) {
  //       await this.page.locator('[data-date="' + y + '-0' + mth + '-' + d + '"]').click();
  //     } while (m !== presentMth) {
  //       var prev = await this.page.$('[data-testid="calendar-header-previous-button"]');
  //       await prev.click();
  //       var presentMth = await presentMonth.textContent();
  //     }
  //     if (presentYr < y) {
  //       while (y !== presentYr) {
  //         var next = await this.page.$('[data-testid="calendar-header-next-button"]');
  //         await next.click();
  //         var presentYr = await presentYear.textContent();
  //       }
  //     }
  //     else if (presentYr > y) {
  //       while (y !== presentYr) {
  //         var prev = await this.page.$('[data-testid="calendar-header-previous-button"]');
  //         await prev.click();
  //         var presentYr = await presentYear.textContent();
  //       }
  //     }
  //     if (mth <= 9 && d > 9) {
  //       return await this.page.locator('[data-date="' + y + '-0' + await givenMth + '-' + d + '"]').click();
  //     } else if (mth > 9 && d > 9) {
  //       return await this.page.locator('[data-date="' + y + '-' + await givenMth + '-' + d + '"]').click();
  //     } else if (mth > 9 && d < 9) {
  //       return await this.page.locator('[data-date="' + y + '-' + await givenMth + '-0' + d + '"]').click();
  //     } else {
  //       return await this.page.locator('[data-date="' + y + '-0' + await givenMth + '-0' + d + '"]').click();
  //     }

  //   }
  // }

  // async dropDwn() {
  //   await this.dropDown.click();
  // }

  // async serviceClick() {
  //   await this.service.click();
  // }

  // async Service() {
  //   await expect(this.page.locator('#Service')).toBeVisible();
  //   this.serviceClick();

  // }
  // async meetingFifteen() {
  //   await this.fifteenMin.click()
  //   await expect.soft(this.page.getByPlaceholder('placeholder="15 Minutes Meeting"')).toBeVisible();
  // }
  // async selectTimeClick() {
  //   const selectTime = this.page.locator('#start-time-input')

  //   for (let time in selectTime) {
  //     const timeElement = await time.textContent();
  //     console.log(timeElement)
  //   }
  // }



// const prev = await this.page.$('[data-testid="calendar-header-previous-button"]');
// await prev.click();
// await this.page.locator('[data-date="' + y + '-0' + mth + '-' + d + '"]').click();

// } else if () {
//   const next = await this.page.$('[data-testid="calendar-header-next-button"]');
//   await next.click();
//   await this.page.locator('[data-date="' + y + '-0' + mth + '-' + d + '"]').click()



   // await this.country.click();
        // await this.page.waitForTimeout(5000)
        //const Country= await this.page.locator('.awd-dropdown-list >li[id='+ country +']');

        // await this.page.waitForTimeout(5000)

        // await Country.click()

        //  cosnt coun= await this.page.$$('')
        //await this.searchinDrp.fill(country)
        // await this.page.locator('.selected.awd-dropdown-listitem[id="' + country +'"]')





    //    for( let i = 0;i<=text.length-1;i++){
    //     let a = app;
    //     let check = this.page.locator('.int-card-grid .int-card.card-"'+a+ "')
    //     if(a=== )
    //    }

    //.int-card.card-Teleport











    //     await expect(this.page.locator('(//*[contains(text(),"Teleport")])[2]')).toContainText('Teleport')
    //     await this.teleCLk.click();
    //     await this.page.waitForTimeout(4000)
    //     const a= await expect.soft(this.teleConnectCLk).toBeDisabled();

    //    // const b = await expect.soft(this.teleDisConCheck).toBeDisabled();
    //     if(a==true){

    //         const teleport = await this.teleDisConCheck.textContent('Disconnect')
    //         console.log(teleport)
    //         console.log('Teleport is connected')
    //         this.page.click('.nostyle.close-btn');
    //     }else
    //     {
    //         this.teleConnectCLk.textContent('Connect');
    //         this.page.click('(//*[contains(text(),"Sa")])[2]')
    //         await expect.soft(this.page(teleport).toContainText('Disconnect'))
    //         console.log('teleport connected')
    //         this.page.click('.nostyle.close-btn');







    // const teleport = await this.teleCheck.textContent('Disconnect')
    // console.log(teleport)
    // if (teleport.startsWith('Disconnect')) {

    //     console.log('Teleport is connected')
    //     this.page.click('.nostyle.close-btn');
    // }
    // else {

    //     this.teleConnectCLk.textContent('Connect');
    //     this.page.click('(//*[contains(text(),"Sa")])[2]')
    //     await expect.soft(this.page(teleport).toContainText('Disconnect'))
    //  console.log('teleport connected')
    //     this.page.click('.nostyle.close-btn');
    // }



//} 