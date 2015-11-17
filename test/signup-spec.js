"use strict";

describe('First Name Field', function() {
    beforeEach(function() {
        browser.get('http://localhost:8000/');
    });
    it('should display error message if empty and touched', function(){

      var firstName = element(by.model('first'));
      firstName.sendKeys('Alphie'); // touches field
      firstName.clear();

      var errorMessage = element(by.css('.help-block'));
      expect( errorMessage.isPresent() ).toEqual(true);
    });
})

describe('Last Name Field', function() {
    beforeEach(function() {
        browser.get('http://localhost:8000/');
    });
    it('should display error message if empty and touched', function(){

      var lastNameBar = element(by.model('last'));
      lastNameBar.sendKeys('McGee');
      lastNameBar.clear();

      var errorMessage = element(by.css('.help-block'));
      expect( errorMessage.isPresent() ).toEqual(true);
    });
})

describe('Success Message', function() {
    beforeEach(function() {
        browser.get('http://localhost:8000/');
    });
    it('should display success alert if form is valid', function(){
        var emailBar = element(by.model('email'));
        emailBar.sendKeys('joelross@uw.edu');

        var lastNameBar = element(by.model('last'));
        lastNameBar.sendKeys('Ross');

        var button = element(by.buttonText('Sign Me Up!'));
        button.click();

        var successAlert = element(by.model('successAlert'));
        expect( successAlert.isPresent() ).toEqual(true);
    });
})

describe('Password Field', function() {
    beforeEach(function() {
        browser.get('http://localhost:8000/');
    });

    it('should display error message if empty and touched', function(){
      var password = element(by.model("password"));
      password.sendKeys('success');
      password.clear(); 

      var errorMessage = element(by.css('.help-block'));
      expect( errorMessage.isPresent() ).toEqual(true);
    });
})

describe('Confirm Password Field', function() {
    beforeEach(function() {
        browser.get('http://localhost:8000/');
    });
    it('should display error message if empty and touched ', function(){
      var confirmPassword = element(by.model("confirmPassword"));
      confirmPassword.sendKeys("success");
      confirmPassword.clear(); 

      var errorMessage = element(by.css('.help-block'));
      expect( errorMessage.isPresent() ).toEqual(true);
    });

    it('should display error message if password and password confirm don\'t match', function(){
      var confirmPassword = element(by.model("confirmPassword"));
      var password = element(by.model("password"));
      password.sendKeys("success");
      confirmPassword.sendKeys("failure");
      var button = element(by.buttonText('Sign Me Up!'));
       button.click(); 
      var errorMessage = element(by.model('incorrectPassword'));
      expect( errorMessage.isPresent() ).toEqual(true);
    });
})
