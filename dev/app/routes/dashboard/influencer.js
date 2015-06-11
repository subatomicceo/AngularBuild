define(['app'], function(app) {

  app.config(['$stateProvider', function($stateProvider) {
    $stateProvider
      .state('app.dashboard.influencer.overview', {
        url: '/overview',
        templateUrl: '<ui-view></ui-view>'
      });
  }]);
});
