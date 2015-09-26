angular.module('eventModule', [])
.config([function () {
    console.log("EM: Configuration hook");
}])
.run([function () {
    console.log("EM: Run hook");
}])
.controller('EventController', ['$scope', function ($scope){
    $scope.title = "Title";
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
.controller('EventItemController', ['$scope', function ($scope) {
    $scope.itemTitle = "Item title";
    $scope.description = "Description";
    $scope.imgSrc = "assets/img/newyork_large.jpg";
    $scope.date = "January 24, 2015";
}])