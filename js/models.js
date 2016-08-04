angular.module('app.models',[])
.factory('Rating', function($resource) {
	return $resource("/ratings/:name", {name:'@name'});
})
.factory('Ratings',function(Rating){
	var ratings=[],populated=false;
	function getRatings(cb){
		populateRatings(function(_ratings){
			return cb(_ratings);
		});
	}
	function populateRatings(cb){
		if(populated){
			return cb(ratings);
		}
		ratings = Rating.query(function(){
			populated=true;
			return cb(ratings);
		});	
	}
	function clearResults(){
		ratings=[];
	}
	function createNew(){
		ratings.push( new Rating({
			name:"",
			ratings:0,
			score:0,
			new:true
		}));
	}
	function deleteRating(rating){
		if(!rating.new){
			rating.$delete();
		}
		for(var i in ratings){
			if(ratings[i]===rating){
				ratings.splice(i,1);
				break;
			}
		}
	}
	return{
		getRatings:getRatings,
		clearResults:clearResults,
		createNew:createNew,
		deleteRating:deleteRating
	}
});
