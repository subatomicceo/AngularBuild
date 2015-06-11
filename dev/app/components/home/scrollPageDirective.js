define(['app'], function(app) {
  app.directive('scrollPage', function() {
    return {
      restrict: 'A',
      link: function(scope, element, attr) {
        $(element).click(function(e) {
          e.preventDefault();
          if ($(attr.href)) {
            $('html, body').animate({
              scrollTop: $(attr.href).offset().top - 72
            }, 1000);
          }
        });
      }
    };
  });
});
