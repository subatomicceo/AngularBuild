require.config({
  paths: {
    jquery: '../bower_components/jquery/dist/jquery',
    lodash: '../bower_components/lodash/lodash',
    moment: '../bower_components/moment/moment',
    bootstrap: '../bower_components/bootstrap/dist/js/bootstrap',
    angular: '../bower_components/angular/angular',
    'angular-route': '../bower_components/angular-route/angular-route',
    'angular-resource': '../bower_components/angular-resource/angular-resource',
    'angular-router': 'assets/libs/angular/angular-ui-router',
    'angular-bootstrap': '../bower_components/angular-bootstrap/ui-bootstrap-tpls',
    app: 'app/app',
    'googlecharts': '../bower_components/angular-google-chart/ng-google-chart',
    'fullcalendar': '../bower_components/fullcalendar/dist/fullcalendar.min',
    'angular-ui-calendar': '../bower_components/angular-ui-calendar/src/calendar'
  },
  shim: {
    jquery: {
      exports: '$'
    },
    angular: {
      exports: 'angular'
    },
    bootstrap: [
      'jquery'
    ],
    'fullcalendar': [
      'jquery',
      'moment'
    ],
    'jquery-locationpicker-plugin': [
      'jquery'
    ],
    'angular-bootstrap': [
      'bootstrap',
      'angular'
    ],
    'angular-route': [
      'angular'
    ],
    'angular-router': [
      'angular'
    ],
    'angular-resource': [
      'angular'
    ],
    'googlecharts': [
      'angular'
    ],
    'angular-ui-calendar': [
      'angular'
    ]
  },
  baseUrl: '.',
  packages: [

  ]
});

(function() {
  require([
    'jquery',
    'fullcalendar',
    'lodash',
    'moment',
    'bootstrap',
    'angular',
    'angular-route',
    'angular-router',
    'angular-resource',
    'angular-bootstrap',
    'googlecharts',
    'angular-ui-calendar',
    'app',

    // Router
    'app/routes/router.js',
    'app/routes/landing.js',
    'app/routes/dashboard/brand.js',
    'app/routes/dashboard/influencer.js',
    'app/routes/account.js',

    // shared
    'app/shared/authorization/authService.js',
    'app/shared/dashboard/dashboardService.js',
    'app/shared/charts/locations/locationsChartDirective.js',
    'app/shared/charts/platforms/platformsChartDirective.js',
    'app/shared/charts/followers/followersChartDirective.js',
    'app/shared/bgImageDirective.js',
    'app/shared/carousel/mainCarouselDirective.js',

    // components
    'app/components/home/homeService.js',
    'app/components/home/homeCtrl.js',
    'app/components/home/carouselDirective.js',
    'app/components/home/scrollPageDirective.js',
    'app/components/home/sliderGalleryDirective.js',
    'app/components/home/sliderDirective.js',
    'app/components/login/loginService.js',
    'app/components/login/loginCtrl.js',
    'app/components/recovery/recoveryService.js',
    'app/components/recovery/recoveryCtrl.js',
    'app/components/about/aboutService.js',
    'app/components/about/aboutCtrl.js',
    'app/components/about/accordionDirective.js',
    'app/components/account/brand/brandAccountCtrl.js',
    'app/components/account/brand/brandAccountService.js',
    'app/components/account/influencer/influencerAccountCtrl.js',
    'app/components/account/influencer/influencerAccountService.js',
    'app/components/dashboard/brand/campaigns/overview/overviewCtrl.js',
    'app/components/dashboard/brand/campaigns/analytics/analyticsCtrl.js',
    'app/components/dashboard/brand/campaigns/posts/postsCtrl.js',
    'app/components/dashboard/brand/campaigns/posts/postDirective.js',
    'app/components/dashboard/brand/campaigns/posts/postsService.js',
    'app/components/dashboard/brand/campaigns/hashtags/hashtagsCtrl.js',
    'app/components/dashboard/brand/campaigns/hashtags/hashtagsService.js',
    'app/components/dashboard/brand/campaigns/hashtags/campaignPostDirective.js',
    'app/components/dashboard/brand/requests/listViewDirective.js',
    'app/components/dashboard/brand/requests/requestsService.js',
    'app/components/dashboard/brand/requests/requestsCtrl.js',
    'app/components/campaign-builder/influencers/analytics/analyticsCtrl.js',
    'app/components/campaign-builder/influencers/analytics/analyticsService.js',
    'app/components/campaign-builder/influencers/influencersService.js',
    'app/components/campaign-builder/influencers/influencersCtrl.js',
    'app/components/campaign-builder/influencers/posts/postsDirective.js',
    'app/components/campaign-builder/influencers/posts/postDirective.js',
    'app/components/campaign-builder/influencers/posts/postsCtrl.js',
    'app/components/campaign-builder/influencers/posts/postsService.js',

  ], function() {
    angular.bootstrap(document, ['instabrand']);
  });
})();
