define(['app'], function(app) {
  app.directive('breakdownPost', function() {
  	return {
  		restrict: 'E',
  		templateUrl: '/app/components/dashboard/brand/campaigns/posts/postTemplate.html'
  	};
  });
});
