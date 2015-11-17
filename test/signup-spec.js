'use strict';

describe('First Name Field', function() {
    beforeEach(function() {
        browser.get('http://localhost:8000/');
    });
    
    it('should display error message if empty and dirty', function(){

      var firstName = element(by.model('first'));
      firstName.sendKeys('Alphie'); // dirty field
      firstName.clear();

      var errorMessage = element(by.binding('formFieldErrors.firstName'));
      expect(errorMessage.getText()).not.toEqual('');
    });
});

describe('Last Name Field', function() {
    beforeEach(function() {
        browser.get('http://localhost:8000/');
    });
    
    it('should display error message if empty and dirty', function(){

      var lastNameBar = element(by.model('last'));
      lastNameBar.sendKeys('McGee');
      lastNameBar.clear();

      var errorMessage = element(by.binding('formFieldErrors.lastName'));
      expect(errorMessage.getText()).not.toEqual('');
    });
});

describe('Birthdate Field', function() {
    beforeEach(function() {
        browser.get('http://localhost:8000/');
    });
    
    it('should display error message date in wrong format', function(){

      var birthdateField = element(by.model('birthdate'));
      birthdateField.sendKeys('1990/01/30');

      var errorMessage = element(by.binding('birthdateError'));
      expect(errorMessage.getText())
        .toEqual('Must be a valid birthdate of the form (MM/DD/YYYY).');
    });
    
    it('should display error message date not at least thirteen years ago', function(){

      var birthdateField = element(by.model('birthdate'));
      birthdateField.sendKeys('07/30/2005');

      var errorMessage = element(by.binding('birthdateError'));
      expect(errorMessage.getText())
        .toEqual('Birthdate must be at least thirteen years in the past.');
    });
});

describe('Success Message', function() {
    beforeEach(function() {
        browser.get('http://localhost:8000/');
    });
    
    it('should display success alert if form is valid', function(){
        // send valid keys to all required elements
        var emailBar = element(by.model('email'));
        emailBar.sendKeys('joelross@uw.edu');

        var firstNameBar = element(by.model('first'));
        firstNameBar.sendKeys('Joel');

        var lastNameBar = element(by.model('last'));
        lastNameBar.sendKeys('Ross');

        var birthdateField = element(by.model('birthdate'));
        birthdateField.sendKeys('07/30/1990');

        var password = element(by.model('password'));
        password.sendKeys('asdf');

        var passwordConf = element(by.model('confirmPassword'));
        passwordConf.sendKeys('asdf');

        // submit form
        var button = element(by.buttonText('Sign Me Up!'));
        button.click();

        // test success alert
        var successAlert = element(by.model('successAlert'));
        expect(successAlert.getText())
          .toEqual('Success! Your form has been submitted.');
    });
});

describe('Password Field', function() {
    beforeEach(function() {
        browser.get('http://localhost:8000/');
    });

    it('should display error message if empty and touched', function(){
      var password = element(by.model('password'));
      password.sendKeys('success');
      password.clear(); 

      var errorMessage = element(by.binding('formFieldErrors.password'));
      expect(errorMessage.getText()).not.toEqual('');
    });
});

describe('Confirm Password Field', function() {
    beforeEach(function() {
        browser.get('http://localhost:8000/');
    });
    it('should display error message if empty and touched ', function(){
      var confirmPassword = element(by.model('confirmPassword'));
      confirmPassword.sendKeys('success');
      confirmPassword.clear(); 

      var errorMessage = element(by.binding('formFieldErrors.confirmPassword'));
      expect(errorMessage.getText()).not.toEqual('');
    });

    it('should display error message if password and password confirm don\'t match', function(){
      var confirmPassword = element(by.model('confirmPassword'));
      var password = element(by.model('password'));
      password.sendKeys('success');
      confirmPassword.sendKeys('failure');
      var button = element(by.buttonText('Sign Me Up!'));
       button.click(); 
      var errorMessage = element(by.model('incorrectPassword'));
      expect( errorMessage.isPresent() ).toEqual(true);
    });
});
