define(['app'], function(app) {
  app.service('campaignBuilderService', ['$resource', function($resource) {
    return $resource('api/dashboard', {}, {

    });
  }]);
});
