'use strict';

/**
 * @ngdoc service
 * @name angularApp.Users
 * @description
 * # Users
 * Factory in the angularApp.
 */
angular.module('starter.services', ['ngResource'])
    .factory('Users', function ($resource) {
        return $resource('http://jsonplaceholder.typicode.com/users/',{}, {
            query: {
                method: 'GET', isArray: true
            },
            create: {
                method: 'POST'
            }
        });
    })
    .factory('User', function ($resource) {
        return $resource('http://jsonplaceholder.typicode.com/users/:id',{}, {
            show: { method: 'GET'},
            update: { method: 'PUT', params: {id: '@id'} },
            delete: { method: 'DELETE', params: {id: '@id'} }
        });
    });;