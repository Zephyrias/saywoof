'use strict';

/* App Module */

angular.module('dogcat', []).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/dogs', {templateUrl: 'partials/dog-list.html',   controller: 'DogListCtrl'}).
      when('/dogs/:dogId', {templateUrl: 'partials/dog-detail.html', controller: 'DogDetailCtrl'}).
      when('/partials/dog-add', {templateUrl: 'partials/dog-add.html', controller: 'DogAddCtrl'}).
      otherwise({redirectTo: '/dogs'});
}]);

