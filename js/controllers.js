angular.module('app.controllers',[])
.controller('appController',function($scope,Ratings){
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
		$scope.showResults = true;
	}
	$scope.rescore = function(){
		$scope.showResults = false;
	}
	$scope.remove = function(rating){
		if(!rating.new){
			rating.$delete();
		}
		Ratings.clearResults();
		populateRatings();
	}
	$scope.create = function(){
		$scope.ratings.push(Ratings.createNew());
	}
	function populateRatings(){
		Ratings.getRatings(function(ratings){
			$scope.ratings = ratings;
		});
	}
	populateRatings();
});