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
    this.title = mainTitle.title;
    $scope.menu = [
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

    this.events = [
	{
	    title: "New York",
	    itemTitle: mainTitle.title,
	    description: " is a one day event that teaches kids how to code",
	    imgName: "newyork",
	    date: Date.parse("January 24 2015")
	},
	{
	    title: "Seattle",
	    itemTitle: mainTitle.title,
	    description: " is a one day event that teaches kids how to code",
	    imgName: "seattle",
	    date: Date.parse("February 24 2015")
	},
	{
	    title: "San Francisco",
	    itemTitle: mainTitle.title,
	    description: " is a one day event that teaches kids how to code",
	    imgName: "sanfran",
	    date: Date.parse("January 24 2015")
	},
	{
	    title: "Vancouver",
	    itemTitle: mainTitle.title,
	    description: " is a one day event that teaches kids how to code",
	    imgName: "vancouver",
	    date: Date.parse("March 24 2015")
	},
	{
	    title: "Brighton",
	    itemTitle: mainTitle.title,
	    description: " is a one day event that teaches kids how to code",
	    imgName: "brighton",
	    date: Date.parse("September 24 2015")
	},

	{
	    title: "London",
	    itemTitle: mainTitle.title,
	    description: " is a one day event that teaches kids how to code",
	    imgName: "London",
	    date: Date.parse("September 26 2015")
	},

    ]

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