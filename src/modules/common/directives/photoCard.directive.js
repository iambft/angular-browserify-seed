'use strict';
module.exports = /*@ngInject*/
    function card($rootScope) {
        return {
          restrict: 'E',
          templateUrl: 'app/foo/templates/photoCard.html',
          scope: {
            item: "=",
            albumRef: "@"
          },
          controller: CardController,
          controllerAs: 'card',
          bindToController: true    
        };
    };

function CardController($state) {
  var vm = this;

  vm.goToPhoto = function(e) {
    //  e.preventDefault();
    if (e && typeof e.preventDefault == 'function') {
      e.preventDefault();
    }
    $state.go('image', {id: vm.item.id});
  };

  vm.goToAlbum = function(e) {
    //  e.preventDefault();
    if (e && typeof e.preventDefault == 'function') {
      e.preventDefault();
    }
    $state.go('album', {albumId: vm.item.albumId});
  };
}
