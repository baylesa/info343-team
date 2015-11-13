"use strict";
describe('Team Challenge App', function() {
  it('should have a title', function() {
    browser.get('https://github.com/baylesa/info343-team');

    expect(browser.getTitle()).toEqual('Info Team');
  });
});