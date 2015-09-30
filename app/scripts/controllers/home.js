'use strict';

/**
 * @ngdoc function
 * @name samWhiteleyApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the samWhiteleyApp
 */
angular.module('samWhiteleyApp')
  .controller('HomeCtrl', function ($scope) {
    $scope.content = [
      'A good day is',
      '1 revelation',
      '1 blinking cursor',
      '1 big cup of coffee',
      'a heap of good commits',
      'a code-base to be proud of',
      'and at least 1 skill improved.'
    ];
  });
