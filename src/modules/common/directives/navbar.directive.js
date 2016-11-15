'use strict';

module.exports = /*@ngInject*/
    function bftNavbar($rootScope) {
        return {
            restrict: 'E',
            templateUrl: 'app/foo/templates/navbar.html',
            scope: {},
            controller: function(){
              var vm = this;
            },
            controllerAs: 'navbarCtrl',
            bindToController: true     
        };
    };