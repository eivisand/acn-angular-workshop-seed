'use strict';

angular.module('accAngularWorkshopSeedApp', 
  [
	'ngRoute',
	'ngResource',
	'ngAnimate',
	'angularMoment'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
        .when('/mediaplayer', {
            templateUrl: 'views/mediaplayer.html',
            controller: 'MediaplayerCtrl'
        })
      .otherwise({
        redirectTo: '/'
      });
  });
