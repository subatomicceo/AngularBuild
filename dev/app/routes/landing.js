define(['app'], function(app) {

  app.config(['$stateProvider', function($stateProvider) {
    $stateProvider
      .state('app.about', {
        url: '/about/:tab',
        templateUrl: 'app/components/about/about.html',
        controller: 'aboutCtrl as about',
        resolve: {
          careers: function($rootScope, $state, AboutService, $q) {
            var deferred = $q.defer();
            AboutService.getCareers(function(response) {
              deferred.resolve(response);
            }, function() {
              deferred.resolve();
            });
            return deferred.promise;
          },
          team: function($rootScope, $state, AboutService, $q) {
            var deferred = $q.defer();
            AboutService.getTeam(function(response) {
              deferred.resolve(response);
            }, function() {
              deferred.resolve();
            });
            return deferred.promise;
          }
        }
      })
      .state('app.login', {
        url: '/login',
        templateUrl: 'app/components/login/login.html',
        controller: 'loginCtrl as login'
      })
      .state('app.recovery', {
        url: '/recovery',
        templateUrl: 'app/components/recovery/recovery.html',
        controller: 'recoveryCtrl as recovery'
      })
      .state('app.home', {
        url: '/',
        templateUrl: 'app/components/home/home.html',
        controller: 'homeCtrl as home'
      })
      .state('app.campaigns', {
        url: '/campaigns',
        templateUrl: 'app/components/campaigns/campaigns.html',
        controller: 'campaignsCtrl as campaigns'
      })
      .state('app.dashboard', {
        url: '/dashboard',
        abstract: true,
        template: '<ui-view></ui-view>'
      });
  }]);
});
