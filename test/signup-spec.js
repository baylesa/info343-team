"use strict";

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
})

describe('Password Field', function() {
    it('should display error message if empty and touched', function(){
      browser.get('http://localhost:8000/');
      var password = element(by.model("password"));
      //password.sendKeys('success');

      var errorMessage = element(by.css('.help-block'));
      expect( errorMessage.isPresent() ).toEqual(true);
    });
})

describe('Confirm Password Field', function() {
    it('should display error message if empty and touched', function(){
      browser.get('http://localhost:8000/');
      var confirmPassword = element(by.model("confirmPassword"));
      var password = element(by.model("password"));
      password.sendKeys("success");
      confirmPassword.sendKeys("success");
      expect(password).toEqual(confirmPassword); 

      var errorMessage = element(by.css('.help-block'));
      expect( errorMessage.isPresent() ).toEqual(true);

    });
})
