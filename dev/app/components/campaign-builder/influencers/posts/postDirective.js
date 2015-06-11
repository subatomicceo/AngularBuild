define(['app'], function(app) {
  app.directive('postFull', function() {
  	return {
  		restrict: 'E',
  		replace: true,
  		templateUrl: '/app/components/campaign-builder/influencers/posts/postTemplate.html',
  		controller: function($scope) {
  			console.log($scope);
  		}
  	};
  });
});
