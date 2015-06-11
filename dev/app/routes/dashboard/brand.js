define(['app'], function(app) {

  app.config(['$stateProvider', function($stateProvider) {
    $stateProvider
      .state('app.dashboard.brand', {
        url: '/brand',
        abstract: true,
        template: '<ui-view></ui-view>'
      })
      .state('app.dashboard.brand.general', {
        abstract: true,
        templateUrl: '/app/components/dashboard/brand/dashboard-layout.html'
      })
      .state('app.dashboard.brand.general.requests', {
        url: '',
        templateUrl: 'app/components/dashboard/brand/requests/requests.html',
        resolve: {
          data: function($rootScope, $state, RequestsService, $q) {
            var deferred = $q.defer();
            RequestsService.getDashboard(function(response) {
              deferred.resolve(response);
            }, function() {
              deferred.resolve();
            });
            return deferred.promise;
          }
        },
        controller: 'requestsCtrl as requests'
      })
      .state('app.dashboard.brand.general.overview', {
        url: '/overview',
        templateUrl: 'app/components/dashboard/brand/campaigns/overview/overview.html',
        resolve: {
          data: function($rootScope, $state, DashboardService, $q) {
            var deferred = $q.defer();
            DashboardService.getDashboard(function(response) {
              deferred.resolve(response);
            }, function() {
              deferred.resolve();
            });
            return deferred.promise;
          }
        },
        controller: 'campaignsOverviewCtrl as overview'
      })
      .state('app.dashboard.brand.general.analytics', {
        url: '/analytics',
        templateUrl: '/app/components/dashboard/brand/campaigns/analytics/analytics.html',
        resolve: {
          data: function($rootScope, $state, DashboardService, $q) {
            var deferred = $q.defer();
            DashboardService.getDashboard(function(response) {
              deferred.resolve(response);
            }, function() {
              deferred.resolve();
            });
            return deferred.promise;
          }
        },
        controller: 'campaignsAnalyticsCtrl as analytics'
      })
      .state('app.dashboard.brand.general.posts', {
        url: '/posts',
        templateUrl: '/app/components/dashboard/brand/campaigns/posts/posts.html',
        resolve: {
          posts: function($rootScope, $state, PostBreakdownService, $q) {
            var deferred = $q.defer();
            PostBreakdownService.getPosts(function(response) {
              deferred.resolve(response);
            }, function() {
              deferred.resolve();
            });
            return deferred.promise;
          }
        },
        controller: 'campaignsPostsCtrl as campaignsPosts'
      })
      .state('app.dashboard.brand.general.hashtags', {
        url: '/hashtags',
        templateUrl: '/app/components/dashboard/brand/campaigns/hashtags/hashtags.html',
        resolve: {
          data: function($rootScope, $state, HashtagsService, $q) {
            var deferred = $q.defer();
            HashtagsService.getData(function(response) {
              deferred.resolve(response);
            }, function() {
              deferred.resolve();
            });
            return deferred.promise;
          }
        },
        controller: 'campaignsHashtagsCtrl as campaignsHashtags'
      })
      .state('app.dashboard.brand.campaignBuilder', {
        url: '/campaigns/new',
        templateUrl: '/app/components/campaign-builder/campaign-builder.html'
      })
      .state('app.dashboard.brand.influencers', {
        url: '/influencers/:id',
        abstract: true,
        resolve: {
          influencer: function($rootScope, $state, campaignBuilderInfluencersService, $q) {
            var deferred = $q.defer();
            campaignBuilderInfluencersService.getInfo(function(response) {
              deferred.resolve(response);
            }, function() {
              deferred.resolve();
            });
            return deferred.promise;
          }
        },
        templateUrl: '/app/components/campaign-builder/influencers/influencers-layout.html',
        controller: 'campaignBuilderInfluencersCtrl as campaignBuilderInfluencer'
      })
      .state('app.dashboard.brand.influencers.analytics', {
        url: '',
        templateUrl: '/app/components/campaign-builder/influencers/analytics/analytics.html',
        controller: 'campaignBuilderInfluencersAnalitycsCtrl as influencersAnalitycs',
      })
      .state('app.dashboard.brand.influencers.posts', {
        url: '/posts',
        templateUrl: '/app/components/campaign-builder/influencers/posts/posts.html',
        controller: 'campaignBuilderInfluencersPostsCtrl as influencersPosts'
      });
  }]);
});
