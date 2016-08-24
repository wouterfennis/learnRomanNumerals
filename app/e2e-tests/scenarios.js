'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should automatically redirect to /mainMenu when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/mainMenu");
  });


  describe('mainMenu', function() {

    beforeEach(function() {
      browser.get('index.html#!/mainMenu');
    });


    it('should render mainMenu when user navigates to /mainMenu', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 1/);
    });

  });


  describe('romanToDecimal', function() {

    beforeEach(function() {
      browser.get('index.html#!/romanToDecimal');
    });


    it('should render romanToDecimal when user navigates to /romanToDecimal', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 2/);
    });

  });
});
