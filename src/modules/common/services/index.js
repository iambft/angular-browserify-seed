'use strict';

module.exports =
    angular.module('expressly.common.services', [])
        .factory('exampleService', require('./example.service'))
        .service('PhotoAPI', require('./photo-api.service'));
