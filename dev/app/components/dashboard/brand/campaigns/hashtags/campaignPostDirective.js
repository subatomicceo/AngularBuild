define(['app'], function(app) {
  app.directive('campaignPost', function() {
  	return {
  		restrict: 'E',
  		templateUrl: '/app/components/dashboard/brand/campaigns/hashtags/postTemplate.html'
  	};
  });
});
