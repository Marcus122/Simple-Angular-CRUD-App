angular.module('app.directives',[])
.directive('rating',function(){
	var directive = {
		restrict     : "EA",
		scope: {
			rating: '=value'
		},
		templateUrl     : '/directives/rating.html',
		link   : function(scope){
			if(scope.rating.ratings > 0 && scope.rating.score > 0){
				scope.average = Number(( scope.rating.score / scope.rating.ratings ).toFixed(2));
			}else{
				scope.average = 0;
			}
		}
	};
	return directive;
});