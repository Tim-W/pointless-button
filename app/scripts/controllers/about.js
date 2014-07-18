'use strict';

/**
 * @ngdoc function
 * @name pointlessButtonApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the pointlessButtonApp
 */
angular.module('pointlessButtonApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
