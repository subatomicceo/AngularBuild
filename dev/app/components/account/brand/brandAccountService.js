define(['app'], function(app) {
  app.service('brandAccountService', function($resource) {
    return $resource('api/account/', {}, {
      getAccountInfo: {
        url: '',
        method: 'GET'
      }
    });
  });
});
