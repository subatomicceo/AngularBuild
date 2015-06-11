define(['app'], function(app) {
  app.controller('campaignBuilderInfluencersCtrl', ['$scope', '$state', '$rootScope', 'influencer', function($scope, $state, $rootScope, influencer) {
    var campaignBuilderInfluencer = this;

    campaignBuilderInfluencer.tabs = [
      "Analytics",
      "Posts"
    ];

    campaignBuilderInfluencer.activeTab = _.capitalize($state.current.name.split('.').pop());

    campaignBuilderInfluencer.influencer = influencer;
    campaignBuilderInfluencer.allPlatforms = 10;
    campaignBuilderInfluencer.activePlatformId = campaignBuilderInfluencer.allPlatforms;

    campaignBuilderInfluencer.switchPlatform = function(platformId) {
      campaignBuilderInfluencer.activePlatformId = platformId;
    };

    campaignBuilderInfluencer.switchTab = function(tab) {
      campaignBuilderInfluencer.activeTab = tab;
      $state.go('app.dashboard.brand.influencers.'+ tab.toLowerCase());
    };

    return campaignBuilderInfluencer;
  }]);
});
