define(['app'], function(app) {
  app.service('RecoveryService', function($resource) {
    return $resource('api/auth/reset', {}, {
      reset: {
        url: '/api/auth/reset',
        method: 'POST'
      }
    });
  });
});
