angular.module('eventModule', [])
.factory('MainTitle', [function () {
    return {
        title:"Young Game Maker"
    }
}])
.config([function () {
    console.log("EM: Configuration hook");
}])
.run([function () {
    console.log("EM: Run hook");
}])
.controller('EventController', ['$scope', 'MainTitle', function ($scope,mainTitle){
    $scope.title = mainTitle.title;
    $scope.menu =[
        {
            name:"Events",
            href:"index.html"
        },
        {
            name:"Contact",
            href:"contact.html"
        }
    ]

    $scope.index = 0;
    $scope.setIndex = function (val) {
        $scope.index = val;
    }
    $scope.getIndex = function () {
        return($scope.index);
    }
    $scope.getMyClass = function (val) {
        if (val == $scope.getIndex()) {
            return ('active');
        } else {
            return ('');
        }
    }

}])
.controller('EventItemController', ['$scope', 'MainTitle', function ($scope,mainTitle) {
    $scope.itemTitle = mainTitle.title+" Item title";
    $scope.description = "Description";
    $scope.imgSrc = "assets/img/newyork_large.jpg";
    $scope.date = "January 24, 2015";
}])
.controller('EventTabController', ['$scope', function ($scope) {
    $scope.tab = 0;
    $scope.setTab=function(val)
    {
        $scope.tab = val;
    }
    $scope.getTab=function()
    {
        return($scope.tab);
    }
}])