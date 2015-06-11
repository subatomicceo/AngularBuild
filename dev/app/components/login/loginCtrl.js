define(['app'], function(app) {
  app.controller('loginCtrl',['$scope', '$state', '$rootScope', 'LoginService', function($scope, $state, $rootScope, LoginService) {
    var login = this;

    login.doLogin = function() {
      console.log('loggin in');
    };

    return login;
  }]);
});
