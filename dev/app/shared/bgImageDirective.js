define(['app'], function(app) {
  app.directive('bgImage', function() {
    return {
      restrict: 'A',
      scope: {
        bgImage: '@'
      },
      link: function(scope, element, attr) {
        $(element).css('background-image','url('+ scope.bgImage +')');
      }
    };
  });
});
