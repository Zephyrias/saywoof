'use strict';

/* Controllers */

function DogListCtrl($scope, $http) {
  $http.get('dogs/dogs.json').success(function(data) {
    $scope.dogs = data;
  });

  $scope.orderProp = 'name';
}

//PhoneListCtrl.$inject = ['$scope', '$http'];


function DogDetailCtrl($scope, $routeParams, $http) {
   $http.get('dogs/' + $routeParams.dogId + '.json').success(function(data) {
   $scope.dog = data;
  });
}

//PhoneDetailCtrl.$inject = ['$scope', '$routeParams', '$http'];

