//import App from '../page-object-model/App'
//import LoginPage from '../page-object-model/pages/LoginPage'
//import Navbar from '../page-object-model/components/Navbar'

App = require('../page-object-model/App');
LoginPage = require('../page-object-model/pages/LoginPage');
Navbar = require ('../page-object-model/components/Navbar');

App = new App();
Navbar = new Navbar();
LoginPage = new LoginPage();

describe('E2E Tests - Login / Logout Flow', () => {
    
    //it('Should not login with invalid credentials', () => {
    //    App.openHomePage();
    //    Navbar.clickSignIn();
    //    LoginPage.pauseShort();
    //    LoginPage.formIsVisible();
    //    LoginPage.fillForm('invalid username','invalid password');
    //    LoginPage.submitForm();

    //    const message = LoginPage.error;
    //    expect(message).toHaveText('Login and/or password are wrong.')
    //});

    it('Should login with valid credentials', () => {
        App.openHomePage();
        Navbar.clickSignIn();
        LoginPage.formIsVisible();
        LoginPage.fillForm('username','password');
        LoginPage.submitForm();
        Navbar.insideNavbarIsVisible();
        console.log(5);
    });
    
    //it('Should logout from app', () => {
    //    App.logout();
    //    Navbar.signInButtonIsVisible();
    //});

});