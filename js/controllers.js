angular.module('app.controllers',[])
.controller('appController',function($scope){
	$scope.title = "Reviews";
})
.controller('MainController',function($scope,Ratings,$location){
	Ratings.getRatings(function(ratings){
		$scope.ratings = ratings;
	});
	$scope.rate = function(){
		$scope.ratings.forEach(function(rate){
			rate.ratings++;
			rate.score+=rate.userScore;
			delete rate.userScore;
			rate.$save();
		});
		$location.path('/results');
	}
	$scope.remove = function(rating){
		Ratings.deleteRating(rating);
	}
	$scope.create = function(){
		Ratings.createNew();
	}
	function populateRatings(){
		Ratings.getRatings(function(ratings){
			$scope.ratings = ratings;
		});
	}
	populateRatings();
})
.controller('ResultsController',function($scope,Ratings,$location){
	Ratings.getRatings(function(ratings){
		$scope.ratings = ratings;
	});
	$scope.rescore = function(){
		$location.path('/');
	}
});