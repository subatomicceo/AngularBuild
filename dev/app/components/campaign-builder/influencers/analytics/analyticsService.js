define(['app'], function(app) {
  app.service('campaignBuilderInfluencersAnalitycsService', ['$resource', function($resource) {
    return $resource('api/dashboard', {}, {
      getInfo: {
        url: 'app/components/campaign-builder/influencers/analytics/analytics.json',
        method: 'GET'
      }
    });
  }]);
});
