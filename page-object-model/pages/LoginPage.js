//Base = require('../Base');

//class LoginPage extends Base{
module.exports = class LoginPage {

    get loginForm(){
        return element(by.id('login_form'));
    }

    get usernameInput(){
        return element(by.id('user_login'));
    }

    get passwordInput(){
        return element(by.id('user_password'));
    }

    get submitButton(){
        return element(by.css('input[type="submit"]'));
    }

    get error(){
        return element(by.class('alert-error'));
    }

    formIsVisible(){
        //this.loginForm.waitForExist()
        browser.wait(function() {
            return element(by.css("#login_form")).isPresent()
        });
    }

    fillForm(username, password){
        this.usernameInput.sendKeys(username);
        this.passwordInput.sendKeys(password);
    }

    submitForm(){
        this.submitButton.click();
    }

    login(username, password){

        browser.wait(function() {
            return element(by.css("#login_form")).isPresent()
        });

        //this.loginForm.waitForExist();
        //var addTodo = element(by.model('todoList.todoText'));
        this.usernameInput.sendKeys(username);
        this.passwordInput.sendKeys(password);
        this.submitButton.click();
    }

}

//export default new LoginPage();
//module.exports.LoginPage = new LoginPage();