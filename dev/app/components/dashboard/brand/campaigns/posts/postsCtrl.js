define(['app'], function(app) {
  app.controller('campaignsPostsCtrl',['$scope', '$state', '$rootScope', 'posts', function($scope, $state, $rootScope, posts) {
  	this.posts = posts.posts;
  }]);
});
