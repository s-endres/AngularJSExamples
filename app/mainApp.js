angular.module('mainApp', ['eventModule', 'ngRoute', 'ui.router'])
.config(['$urlRouterProvider', '$stateProvider',
  function ($urlRouterProvider, $stateProvider) {
      $stateProvider.
        state('home', {
            url: '/home',
            templateUrl: 'home.html'
        }).
        state('contact', {
            url: '/contact',
            templateUrl: 'contact.html'
        })
      $urlRouterProvider.when('', '/home')
  }])
.run([function () {
    /* Run is when the app gets kicked off*/
    console.log("Run hook");
}])
.factory('Events', ['$http', function ($http) {
    return {
        get: function (callback) {
            $http.get('data/events.json')
            .success(function (data) {
                callback(data);
            });
        }
    };
}]);