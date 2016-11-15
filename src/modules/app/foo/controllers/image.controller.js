'use strict';
module.exports = /*@ngInject*/
  function imageController($scope, photoData) {
    var vm = this;
    vm.URL = photoData.url;
  };