define(['app'], function(app) {
  app.service('PostBreakdownService',['$resource' , function($resource) {
    return $resource('api/dashboard', {}, {
      getPosts: {
        url: '/app/components/dashboard/brand/campaigns/posts/posts.json',
        method: 'GET'
      }
    });
  }]);
});
