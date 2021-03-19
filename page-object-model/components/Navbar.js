//import Base from '../Base';

//class Navbar extends Base{
module.exports = class Navbar {

    get searchbox(){
        return element(by.id('searchTerm'));
    }
    
    get signInButton(){
        return element(by.id('signin_button'));
        //return $('#signin_button');
    }

    get insideNavbar(){
        return element(by.css('.nav-tabs'));
        //return $('.nav-tabs');
    }

    get settingsButton() {
        return element(by.css('.icon-cog'));
        //return $('.icon-cog');
    }

    get helpButton() {
        return element(by.css('#help_link'));
        //return $('#help_link');
    }

    search(text){
        this.searchbox.waitForExist();
        this.searchbox.sendKeys(text);
        browser.keys('Enter');
    }
    
    signInButtonIsVisible(){
        this.signInButton.waitForExist();
    }
    
    clickSignIn(){
        var EC = protractor.ExpectedConditions;

        browser.wait(function() {
            return element(by.css("#signin_button")).isPresent()
        });
        element(by.css("#signin_button")).click();

        //browser.driver.wait(function () {
        //    browser.wait(EC.visibilityOf(this.sighInButton), 10000);
        //    //return elem;
        //});
        //this.signInButton.waitForExist();
        //this.signInButton.click();
    }
  
    insideNavbarIsVisible(){
        //this.insideNavbar.waitForExist();
        browser.wait(function() {
            return element(by.css(".nav-tabs")).isPresent()
        });
    }

    clickSettings() {
        this.settingsButton.waitForExist();
        this.settingsButton.click();
    }

    clickHelp() {
        this.helpButton.waitForExist();
        this.helpButton.click();
    }
}

//export default new Navbar();
//module.exports.Navbar = new Navbar();