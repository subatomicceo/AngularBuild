define(['app'], function(app) {

  app.config(['$stateProvider', function($stateProvider) {
    $stateProvider
      .state('app.account', {
        abstract: true,
        template: '<ui-view></ui-view>'
      })
      .state('app.account.brand', {
        url: '/brand/account',
        abstract: true,
        templateUrl: 'app/components/account/brand/accountLayout.html',
        controller: 'brandAccountCtrl as brandAccount'
      })
      .state('app.account.brand.info', {
        url: '',
        templateUrl: 'app/components/account/brand/accountInfo.html'
      })
      .state('app.account.brand.payment', {
        url: '/payment',
        templateUrl: 'app/components/account/brand/accountPayment.html',
      })
      .state('app.account.brand.changePassword', {
        url: '/change-password',
        templateUrl: 'app/components/account/brand/accountChangePassword.html',
      })
      .state('app.account.influencer', {
        url: '/account',
        abstract: true,
        templateUrl: 'app/components/account/influencer/accountLayout.html',
        controller: 'influencerAccountCtrl as influencerAccount'
      })
      .state('app.account.influencer.info', {
        url: '',
        templateUrl: 'app/components/account/influencer/accountInfo.html'
      })
      .state('app.account.influencer.payment', {
        url: '/payment',
        templateUrl: 'app/components/account/influencer/accountPayment.html'
      })
      .state('app.account.influencer.paymentSummary', {
        url: '/payment-summary',
        templateUrl: 'app/components/account/influencer/accountPaymentSummary.html'
      })
      .state('app.account.influencer.shipping', {
        url: '/shipping',
        templateUrl: 'app/components/account/influencer/accountShipping.html'
      })
      .state('app.account.influencer.changePassword', {
        url: '/change-password',
        templateUrl: 'app/components/account/influencer/accountChangePassword.html'
      })
      .state('app.account.influencer.platforms', {
        url: '/platforms',
        templateUrl: 'app/components/account/influencer/accountPlatforms.html'
      });
  }]);
});
