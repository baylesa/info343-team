"use strict";
describe('Team Challenge App', function() {
  it('should have a title', function() {
    browser.get('https://github.com/baylesa/info343-team');

    expect(browser.getTitle()).toEqual('baylesa/info343-team');
  });
});

describe('Last Name Field', function() {
    it('should display error message if empty and touched', function(){
      browser.get('http://localhost:8000/');

      var lastNameBar = element(by.model('last'));
      lastNameBar.sendKeys('McGee');
      lastNameBar.clear();

      var errorMessage = element(by.css('.help-block'));
      expect( errorMessage.isPresent() ).toEqual(true);
    });
})
