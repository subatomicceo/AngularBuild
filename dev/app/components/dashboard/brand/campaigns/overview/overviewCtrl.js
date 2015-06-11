define(['app'], function(app) {
  app.controller('campaignsOverviewCtrl', ['$scope', '$state', '$rootScope', 'data', function($scope, $state, $rootScope, data) {
  	// pass dashboard json from restapi to view
    // overviewData passed from service through router 
  	$scope.dashboard = data.dashboard;
  }]);
});
