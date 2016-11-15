'use strict';
module.exports = /*@ngInject*/
  function photoListController($scope, photoList) {
    var vm = this;
  	vm.photoList = photoList;
  };