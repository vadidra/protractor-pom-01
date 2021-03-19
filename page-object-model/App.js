module.exports = class App {

    openHomePage(){
        browser.waitForAngularEnabled(false);
        browser.get('http://zero.webappsecurity.com/index.html');
    }

    openLoginPage(){
        browser.get('http://zero.webappsecurity.com/login.html');
    }

    openFeedbackPage(){
        browser.get('http://zero.webappsecurity.com/feedback.html');
    }

    logout(){
        browser.get('http://zero.webappsecurity.com/logout.html');
    }



}

//export default new App();
//module.exports.App = App;