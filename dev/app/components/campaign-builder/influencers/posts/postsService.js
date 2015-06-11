define(['app'], function(app) {
  app.service('campaignBuilderInfluencersPostsService', function($resource) {
    return $resource('api/dashboard', {}, {
      getPosts: {
        url: 'app/components/campaign-builder/influencers/posts/posts.json',
        method: 'GET'
      },
      getPost: {
        url: 'app/components/campaign-builder/influencers/posts/post.json',
        method: 'GET'
      }
    });
  });
});
