define(['app'], function(app) {
  app.service('campaignBuilderInfluencersService', ['$resource', function($resource) {
    return $resource('api/dashboard', {}, {
      getInfo: {
        url: 'app/components/campaign-builder/influencers/influencer.json',
        method: 'GET'
      }
    });
  }]);
});
