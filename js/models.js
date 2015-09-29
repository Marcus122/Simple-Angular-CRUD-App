angular.module('app.models',[])
.factory('Rating', function($resource) {
	return $resource("/ratings/:name", {name:'@name'});
})
.factory('Ratings',function(Rating){
	var ratings;
	function getRatings(cb){
		populateRatings(function(_ratings){
			return cb(_ratings);
		});
	}
	function populateRatings(cb){
		if(ratings){
			return cb(ratings);
		}
		ratings = Rating.query(function(){
			return cb(ratings);
		});	
	}
	function clearResults(){
		ratings=null;
	}
	function createNew(){
		return new Rating({
			name:"",
			ratings:0,
			score:0,
			new:true
		});
	}
	return{
		getRatings:getRatings,
		clearResults:clearResults,
		createNew:createNew
	}
});
