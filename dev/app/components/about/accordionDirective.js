define(['app'], function(app) {
  app.directive('toggleAccordion', function() {
    return {
      restrict: 'A',
      link: function(scope, element, attr) {
        var _this = $(element),
          main_container = _this.closest('ul.accordion-container'),
          container = _this.closest('li');

        _this.click(function(e) {
          if (container.hasClass('opened')) {
            container.removeClass('opened');
          } else {
            main_container.find('li.opened').removeClass('opened');
            container.addClass('opened');
          }
          e.preventDefault();
          if ($(attr.href)) {
            setTimeout(function() {
              $('html, body').animate({
                scrollTop: $(attr.href).offset().top - 72
              }, 200);
            }, 300);
          }
        });
      }
    };
  });
});
