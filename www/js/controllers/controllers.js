angular.module('starter.controllers', [])

    .controller('AppCtrl', function ($scope, $ionicModal, $timeout) {
        $scope.loginData = {};
        $ionicModal.fromTemplateUrl('templates/login.html', {
            scope: $scope
        }).then(function (modal) {
            $scope.modal = modal;
        });
        $scope.closeLogin = function () {
            $scope.modal.hide();
        };
        $scope.login = function () {
            $scope.modal.show();
        };
        $scope.doLogin = function () {
            console.log('Doing login', $scope.loginData);
            $timeout(function () {
                $scope.closeLogin();
            }, 1000);
        };
    })

    .controller('PlaylistsCtrl', function ($scope,$ionicLoading,$http) {
        $scope.loadingIndicator = $ionicLoading.show({
            content: 'Loading Data',
            animation: 'fade-in',
            showBackdrop: false,
            maxWidth: 200,
            showDelay: 500
        });
        $http.get("http://jsonplaceholder.typicode.com/posts").then(function (response) {
            $ionicLoading.hide();
            $scope.listas = response.data;
        })
    })
    .controller('UsersListCtrl', function ($scope,$ionicLoading,Users) {
        $scope.loadingIndicator = $ionicLoading.show({
            content: 'Loading Data',
            animation: 'fade-in',
            showBackdrop: false,
            maxWidth: 200,
            showDelay: 500
        });
        Users.query(function(data){
            $ionicLoading.hide();
            $scope.users=data;
        });
    })
    .controller('UserShowCtrl', function ($scope,$ionicLoading,User,$stateParams) {
        $scope.loadingIndicator = $ionicLoading.show({
            template: '<h1>Loading...</h1>'
        });
        User.show({id: $stateParams.id},function(data){
            $ionicLoading.hide();
            $scope.user=data;
        })
    })
    .controller('PlaylistCtrl', function ($scope, $stateParams) {
        $scope.valor = $stateParams.playlistId;

    });
