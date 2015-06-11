define(['app'], function(app) {
  app.service('HashtagsService', ['$resource', function($resource) {
    return $resource('api/dashboard', {}, {
      getData: {
        url: '/app/components/dashboard/brand/campaigns/hashtags/hashtags.json',
        method: 'GET'
      }
    });
  }]);
});
