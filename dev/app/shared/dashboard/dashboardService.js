define(['app'], function(app) {
  app.service('DashboardService', ['$resource', function($resource) {
    return $resource('api/dashboard', {}, {
      getDashboard: {
        url: '/app/shared/dashboard/dashboard.json',
        method: 'GET'
      }
    });
  }]);
});
