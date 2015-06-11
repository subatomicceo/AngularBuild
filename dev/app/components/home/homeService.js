define(['app'], function(app) {
  app.service('HomeService',['$resource', function($resource) {
    return $resource('/api/registration', {}, {
      registerBrand: {
        url: '/api/registration/brand',
        method: 'POST'
      },
      registerInfluencer: {
        url: '/api/registration/influencer',
        method: 'POST'
      }
    });
  }]);
});
