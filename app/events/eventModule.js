angular.module('eventModule', [])
.factory('MainTitle', [function () {
    return {
        title:"Young Game Maker"
    }
}])
.filter('searchCity', function () {
    return function (items, search) {
        var filtered = [];
        if (!search) { return items; }
        angular.forEach(items, function (item) {

            if (angular.lowercase(item.title).indexOf(angular.lowercase(search)) != -1) {
                filtered.push(item);
            }

        });
        return filtered;
    };
})
.config([function () {
}])
.run([function () {
}])
.controller('EventController', ['$scope', '$http', 'MainTitle', function ($scope,$http,mainTitle){
    this.title = mainTitle.title;
    $scope.menu = [
        {
            name:"Events",
            href:"home"
        },
        {
            name:"Contact",
            href:"contact"
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

    this.getData = function () {
        var scope = this;
        $http.get('data/events.json')
        .success(function (data) {
            scope.events = data;
            console.log(data);
        });
    }

    this.getData();

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
    $scope.isTabCurrent = function (val) {
        if (val == $scope.getTab()) {
            return true;
        } else {
            return false;
        }
    }
    $scope.getMyClass = function (val) {
        if (val == $scope.getTab()) {
            return ('active');
        } else {
            return ('');
        }
    }

    this.tabs = [
	{
	    title: "First",
	    description: "1 is a one day event that teaches kids how to code"
	},
	{
	    title: "Second",
	    description: "2 is a one day event that teaches kids how to code"
	},
	{
	    title: "Third",
	    description: "3 is a one day event that teaches kids how to code"
	}
    ]
}])
.directive('eventItem', function () {
    return {
        restrict: 'E', //E = element, A = attribute, C = class, M = comment
        templateUrl: 'partialHtml/eventItem.html',
        controller: function ($scope) {
            console.log('do stuff')
        },
        link: function ($scope, element, attrs) { }
    }
})