define(['app'], function(app) {
  app.service('AuthService', ['$resource', function($resource) {
    return $resource('/api/auth', {}, {
      user: {
        url: '/api/auth/user',
        method: 'GET'
      }
    });
  }]);
});
