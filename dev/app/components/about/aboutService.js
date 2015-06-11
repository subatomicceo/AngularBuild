define(['app'], function(app) {
  app.service('AboutService', ['$resource', function($resource) {
    return $resource('api/about', {}, {
      getTeam: {
        url: '/api/company/team',
        method: 'GET',
        isArray: true
      },
      getCareers: {
        url: '/api/company/careers',
        method: 'GET',
        isArray: true
      }
    });
  }]);
});
