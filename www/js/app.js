angular.module('app', ['ionic', 'app.controllers', 'app.services', 'app.factories'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    .state('mainMenu', {
      url: '/mainMenu',
      templateUrl: 'templates/mainMenu.html',
      controller: 'MainMenuController'
    })

    .state('romanToDecimal', {
      url: '/romanToDecimal',
      templateUrl: 'templates/romanToDecimal.html',
      controller: 'RomanToDecimalController'
    })

    .state('decimalToRoman', {
    url: '/decimalToRoman',
    templateUrl: 'templates/decimalToRoman.html',
    controller: 'DecimalToRomanController'
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/mainMenu');

});
