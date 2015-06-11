define(['app'], function(app) {
  app.service('LoginService', function($resource) {
    return $resource('api/auth/login', {}, {
      login: {
        url: '/api/auth/login',
        method: 'POST'
      }
    });
  });
});
