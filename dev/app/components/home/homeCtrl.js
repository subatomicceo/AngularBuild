define(['app'], function(app) {
  app.controller('homeCtrl',['$scope', '$state', '$rootScope', 'HomeService', function($scope, $state, $rootScope, HomeService) {
    this.tab = 1;
    this.simpleSliderTab = 1;
    this.brand = {};
    this.influencer = {};

    this.mainCarouselSlides = [{
      bg: 'assets/img/home/carousel/brand.jpg',
      text: 'Maximize Your Brand\'s Visibility',
      note: 'WITH THE MOST EFFECTIVE FORM OF SOCIAL MEDIA MARKETING'
    }, {
      bg: 'assets/img/home/carousel/influencer.jpg',
      text: 'Are you kind of a big deal on social media?',
      note: 'WE\'VE GOT SOME PEOPLE WE\'D LIKE YOU TO MEET'
    }];

  }]);
});
