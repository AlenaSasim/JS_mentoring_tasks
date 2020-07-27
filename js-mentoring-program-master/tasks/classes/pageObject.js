/**
 * Organize a page object structure of any app you want:
 * 1. Base page should be created
 * 2. At least one of the child pages should be inherited from the page
 * 3. Create a simple walk through scenarios using the described elements (how it was done on the sessions for Login functionality)
 */

 class BasePage {
    constructor (baseUrl) {
        this.baseUrl = baseUrl;
    }
    get headerMenu() {
        return 'Header menu';
    }
    get forecastItem() {
        return 'Forecast item';
    }
    URL () {
        return `${this.baseUrl}`;
    }
    open () {
        return `I navigated to ${this.baseUrl}`;
    }
    click (item) {
        return `I clicked ${item}`;
    }
    see (item) {
        return `I see ${item}`;
    }
 }

 class ForcastPage extends BasePage {
    constructor (baseUrl, actualPageItems) {
        super(baseUrl);
        this.maxItemsPerPage = '25';
        this.actualPageItems = actualPageItems;
    } 
    get forecastMenu() {
        return 'Forecast menu';
    }
    get editItem() {
        return 'Edit item';
    }
    checkItemsOnPage  (actualPageItems) {
         if (actualPageItems <= this.maxItemsPerPage)
                    return `I verified that count of items on a page is correct`;
                else
                    return `Error: count of items is not correct`;
    }
 }

 class EditForecastPage extends BasePage {
    constructor (baseUrl, appPath) {
        super(baseUrl);
        this.appPath=appPath;
    }
    checkPage (appPath, editPageURL) {
         if (appPath === 'Forecast /' && editPageURL==='https://d3hljngs5u3bb6.cloudfront.net/forecast/')
                    return `I verified that correct page is opened`;
                else
                    return `Error: incorrect page is opened`;
    }
 }
 const basePage = new BasePage ('https://d3hljngs5u3bb6.cloudfront.net/');
 const forecastPage = new ForcastPage ('https://d3hljngs5u3bb6.cloudfront.net/forecasts/page/1');
 const editPage = new EditForecastPage ();

 //Scenario - 1
 console.log('scenario_1');
 console.log(basePage.open());
 console.log(basePage.see(basePage.headerMenu));
 console.log(basePage.click(basePage.headerMenu));
 console.log(basePage.see(`${basePage.headerMenu} > ${basePage.forecastItem}`));
 console.log(forecastPage.click(basePage.forecastItem));
 console.log(forecastPage.checkItemsOnPage('24'));
 
 //Scenario - 2
 console.log('scenario_2');
 console.log(forecastPage.open());
 console.log(forecastPage.click(forecastPage.forecastMenu));
 console.log(forecastPage.click(`${forecastPage.forecastMenu} > ${forecastPage.editItem}`));
 
 console.log(editPage.checkPage('Forecast /', 'https://d3hljngs5u3bb6.cloudfront.net/forecast/'));
 