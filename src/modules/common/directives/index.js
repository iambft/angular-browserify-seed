'use strict';

module.exports =
    angular.module('expressly.common.directives', [])
        .directive('exampleDirective', require('./example.directive'))
        .directive('bftNavbar', require('./navbar.directive'))
        .directive('card', require('./photoCard.directive'));
