'use strict';
module.exports = /*@ngInject*/
    function PhotoAPI($q, $resource, spinnerService) {

      this.getAll = function() {
        return get('http://jsonplaceholder.typicode.com/photos', true);
      };

      this.getPhoto = function(photoID) {
        return get('http://jsonplaceholder.typicode.com/photos/' + photoID, false);
      };

      this.getAlbum = function(albumID) {
        return get('http://jsonplaceholder.typicode.com/albums/' + albumID + '/photos', true);
      };

      function get(url,arr){
        spinnerService.show('mySpinner');
        var d = $q.defer();
        var res = $resource(url, {}, {
          getPhoto: {
            method: 'GET',
            isArray: arr
          }
        });
        res.getPhoto()
        .$promise
        .then(function(data) {
          data = JSON.parse(JSON.stringify(data));
          d.resolve(data);
          spinnerService.hide('mySpinner');
        });
        return d.promise;
      }
    };