'use strict';
module.exports = /*@ngInject*/
  function photoListController($scope, photoList) {
    var vm = this;
  	vm.photoList = photoList;
  	vm.photoListScroll = vm.photoList.splice(0, 12);
  	
  	window.onscroll = function(){
  		var pixToBottom = 700;
  		var scrollHeight = Math.max(
  			document.body.scrollHeight, document.documentElement.scrollHeight,
  			document.body.offsetHeight, document.documentElement.offsetHeight,
  			document.body.clientHeight, document.documentElement.clientHeight
		);
  		var posHeight = window.pageYOffset;
  		if(scrollHeight-pixToBottom < posHeight){
  			vm.photoListScroll = vm.photoListScroll.concat(photoList.splice(0, 12));
  			$scope.$digest();
  		}
  	};
  };