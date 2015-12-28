'use strict';

/**
 * @ngdoc function
 * @name samWhiteleyApp.controller:NavCtrl
 * @description
 * # NavCtrl
 * Controller of the samWhiteleyApp
 */
angular.module('samWhiteleyApp')
  .controller('NavCtrl', function ($scope) {
    $scope.menu = [
      {
        title: 'Home',
        link: '/'
      },
      {
        title: 'Projects',
        link: '/projects'
      },
      {
        title: 'About',
        link: '/about'
      },
      {
        title: 'Contact',
        link: '/contact'
      }
    ];
  });
