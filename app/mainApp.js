angular.module('mainApp', ['eventModule', 'ngRoute'])
.config(['$routeProvider',
  function ($routeProvider) {
      $routeProvider.
        when('/contact', {
            templateUrl: 'contact.html',
            controller: 'ContactCtrl'
        }).
        when('/', {
            templateUrl: 'home.html',
            controller: 'HomeCtrl'
        }).
        otherwise({
            redirectTo: '/'
        });
  }])
.run([function () {
    /* Run is when the app gets kicked off*/
    console.log("Run hook");
}])
.controller('ContactCtrl', ['$scope', function ($scope) {
}])
.controller('HomeCtrl', ['$scope', function ($scope) {

}])