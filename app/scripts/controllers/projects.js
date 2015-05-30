'use strict';

/**
 * @ngdoc function
 * @name samWhiteleyApp.controller:ProjectsCtrl
 * @description
 * # ProjectsCtrl
 * Controller of the samWhiteleyApp
 */
angular.module('samWhiteleyApp')
  .controller('ProjectsCtrl', function ($scope) {

    var samwhiteley = {
      title: 'SamWhiteley',
      link: 'https://github.com/sqash/samwhiteley',
      linktitle: 'GitHub',
      tech: 'AngularJS, HTML/CSS, Bootstrap, LESS ...',
      description: [
        'This project is the website you\'re looking at right here! Built ' +
        '100% front-end. I built it as a demo of my web-design capabilities ' +
        'so it\'s likely to be updated as I try out new design patterns, ' +
        'techniques, and technologies.',
        'Dev-dependencies are wired up to host this on GitHub pages and keep ' +
        'the styling in working with modern(ish) browser compatibilities',
        'I built this to be a responsive mobile design, so feel free to ' +
        'view it on any device and it should still be just as beautiful. '
      ]
    };

    var artistBase = {
      title: 'artist-base',
      link: 'https://sqash.github.io/artist-base',
      linktitle: 'Project page',
      tech: 'AngularJS, HTML/CSS, Bootstrap, Grunt for git automation ...',
      description: [
        'This is an app that I\'m putting together for some artist friends ' +
        'of mine. It\'s a front-end website designed to be hosted on GitHub ' +
        'pages so that artists (and probably other people) can easily host, ' +
        'maintain, and update a website to display their work. It\'s a ' +
        'platform to expose your art (or whatever)! Currently in v0.0.4, ' +
        'should be v1.0.0 before July 2015.',
        'Almost all of the content displayed on the project page is managed ' +
        'and populated by JSON manifests which are easily modified. I used ' +
        'Grunt to automate all of the version control tasks that I use git ' +
        'for so that there are straight-forward and bulletproof commands ' +
        'available to non-developers to keep their own clone up to date. ' +
        'I\'m still testing the veracity of those commands, but will be ' +
        'perfect* by v1.0.',
        'This website is designed mobile-first! When it\'s all ready to be ' +
        'cloned and used I will offer services to manage, re-develop, and ' +
        'theme individual clones of this app.'
      ]
    };

    var pfsdb = {
      title: 'Pathfinder Spells Database',
      link: 'https://github.com/sqash/pf-spells-db',
      linktitle: 'GitHub',
      tech: 'Express.js, SQLite, AngularJS, HTML/CSS, Python ...',
      description: [
        'A prototype web-interface database browser for players of the ' +
        'Pathfinder roleplaying game. I decided to do this after being very ' +
        'frustrated over the poor functionality of the spells database you ' +
        'can find on the d20pfsrd (a player resource website).',
        'I plan to improve and expand the functionality of this app, ' +
        'however that will have to wait until I find an appropriate hosting ' +
        'solution. The app relies on its database in the backend.'
      ]
    };

    $scope.notes = [
      {
        icon: 'glyphicon-search',
        note: 'For other projects I\'ve worked on and a more complete list ' +
          'of technology that I\'m proficient in, check out my resume!'
      },
      {
        icon: 'glyphicon-envelope',
        note: 'If you\'d like to talk to me about custom code or ' +
          'collaboration then hop over to \'Contact\'.'
      }
    ];

    $scope.projects = [samwhiteley, artistBase, pfsdb];

  });
