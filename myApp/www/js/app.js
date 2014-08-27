// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','starter.controllers','starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
  // setup an abstract state for the tabs directive
  .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: "templates/tabs.html"
  })
  .state('tab.concerts',{
    url: '/concerts',
    views: {
      'tab-concerts': {
        templateUrl: 'templates/tab-concerts.html',
        controller: 'ConcertsCtrl'
      }
    }
  })
  .state('tab.attending',{
    url: '/attending',
    views: {
      'tab-attending': {
        templateUrl: 'templates/tab-attending.html',
        controller: 'AttendingCtrl'
      }
    }
  })



  $urlRouterProvider.otherwise('/tab/concerts');
});
