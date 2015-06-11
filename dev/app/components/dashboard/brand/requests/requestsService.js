define(['app'], function(app) {
  app.service('RequestsService', ['$resource', function($resource) {
    return $resource('api/dashboard', {}, {
      getDashboard: {
        url: '/app/components/dashboard/brand/requests/requests.json',
        method: 'GET'
      }
    });
  }]);
});
