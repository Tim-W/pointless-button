'use strict';

/**
 * @ngdoc function
 * @name pointlessButtonApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the pointlessButtonApp
 */
angular.module('pointlessButtonApp')
    .controller('MainCtrl', function ($scope, $firebase) {
        var firebaseRef = new Firebase("https://button.firebaseio.com/");
        $scope.pointlessButtonClicks = $firebase(firebaseRef);
        $scope.click = function () {
            $scope.pointlessButtonClicks.clicks += 1;
            $scope.pointlessButtonClicks.$save();
        };
    });