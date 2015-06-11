define(['app'], function(app) {
  app.directive('homeCarousel', function() {
    return {
      restrict: 'A',
      link: function(scope, element, attr) {
        $(document).ready(function() {
          function carousel() {
            setTimeout(function() {
              $(element).animate({
                'left': -155
              }, 1000, function() {
                $(element).append($(element).find('li:first-child'));
                $(element).css('left', '0');
                carousel();
              });
            }, 2500);
          }
          carousel();
        });
      }
    };
  });
});
