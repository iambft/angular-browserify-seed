'use strict';
module.exports = /*@ngInject*/
    function albumController($scope, albumList) {
    	var vm = this;
    	vm.album = albumList;
    };