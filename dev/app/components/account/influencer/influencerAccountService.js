define(['app'], function(app) {
  app.service('influencerAccountService', function($resource) {
    return $resource('api/account/', {}, {
      getAccountInfo: {
        url: '',
        method: 'GET'
      }
    });
  });
});
