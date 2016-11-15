'use strict';
module.exports = /*ngInject*/
    function ($stateProvider, $urlRouterProvider) {
        
      $stateProvider

      .state('photoList', {
        url: '/',
        templateUrl: "app/foo/templates/photoList.html",
        controller: 'photoListController',
        controllerAs: 'photoListCtrl',
        resolve: {
          photoList: function(PhotoAPI) {
            return PhotoAPI.getAll();
          }
        }
      })

      .state('album', {
        url: '/album/:albumId',
        templateUrl: 'app/foo/templates/album.html',
        controller: 'albumController',
        controllerAs: 'albumCtrl',
        resolve: {
          albumList: function(PhotoAPI,$stateParams) {
            return PhotoAPI.getAlbum($stateParams.albumId);
          }
        }
      })

      .state('image', {
        url: '/image/:id',
        templateUrl: 'app/foo/templates/image.html',
        controller: 'imageController',
        controllerAs: 'imageCtrl',
        resolve: {
          photoData: function(PhotoAPI,$stateParams) {
            return PhotoAPI.getPhoto($stateParams.id);
          }
        }
      });
      $urlRouterProvider.otherwise('/');
    };