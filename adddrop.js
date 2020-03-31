const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    // Navigate to add/drop page 
    await page.goto('https://banner.dartmouth.edu/banner/groucho/zp_web_add_drop.pz_timetable');

    // Select Add/Drop for the desired term
    await page.click(radio);
    await Promise.all([
        page.waitForNavigation(),
        page.click('Select')
    ]);


    // Input CRNs from given arguments 
    const firstTextBox = await page.$('#crn_id1');
    const secondTextBox = await page.$('#crn_id2');
    const thirdTextBox = await page.$('#crn_id3');

    await firstTextBox.click(); // first CRN
    await firstTextBox.type(process.argv[2]);

    await secondTextBox.click(); // second CRN 
    await secondTextBox.type(process.argv[3]);

    await thirdTextBox.click(); // third CRN 
    await thirdTextBox.type(process.argv[4]);

    await page.click('Submit Changes');

    console.log('classes submitted');

    await browser.close();

})