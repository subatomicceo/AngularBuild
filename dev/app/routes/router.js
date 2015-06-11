define(['app', 'assets/js/l10n/en'], function(app, en) {

  var l10n = {
    en: en
  };

  app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('app', {
        abstract: true,
        templateUrl: 'app/shared/layouts/app.html',
        resolve: {
          initScope: function($rootScope, $state, $http, $window, AuthService, $q) {
            initRootScope($rootScope, $state, $http, $window, AuthService);
            $rootScope.user = {
              role: 'brand'
            };
          }
        },
        user: function($rootScope, AuthService, $q) {
          AuthService.user(function(response) {
            var deferred = $q.defer();
            if ($window.sessionStorage.token) {
              $http.defaults.headers.common.Authorization = $window.sessionStorage.token;
            }
            $rootScope.user = response;
            $rootScope.user.role = $rootScope.user.role.toLowerCase();
            deferred.resolve($rootScope.user);
          }, function() {
            deferred.resolve();
          });
          return deferred.promise;
        }
      });
  }]);

  var initRootScope = function($rootScope, $state, $http) {
    var lang = window.navigator.userLanguage || window.navigator.language;
    $rootScope.changeLanguage = function(language) {
      $rootScope.l10n = l10n[language] || l10n.en;
      $http.defaults.headers.common['X-Locale'] = $rootScope.l10n.code;
      localStorage.locale = $rootScope.l10n.code;
    };
    $rootScope.changeLanguage(localStorage.locale || lang.split('-')[0]);

    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {});

  };

});
