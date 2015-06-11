define(['app'], function(app) {
  app.directive('mainCarousel', function() {
    return {
      restrict: 'A',
      scope: {
        tab: '=mainCarousel',
        slides: '=',
      },
      templateUrl: 'app/shared/carousel/mainCarouselTemplate.html',
      link: function(scope, element, attr) {
        var container = $(element);
        var width = $(window).width();

        $(document).ready(function() {
          init();
        });

        scope.$watch('tab', function(tab) {
          container.animate({
            'left': - (width * (tab - 1 ))
          }, 500, function() {
          });
        });

        function init() {
          setHeight();
        }

        function setBgPosition() {
          var scrolled = $(window).scrollTop();
          container.find('li').each(function(){
            $(this).css('background-position','50% '+ (0-(scrolled*0.25))+'px');
          });
        }


        function setHeight() {
          var newHeight = ($(window).width() / 4.1);
          width = $(window).width();
          scope.elementSize = {
            width: width,
            height: newHeight
          };
          container.css('height', newHeight + 'px').css('width', scope.slides.length * width + 'px');
          container.css('left', -(width * (scope.tab - 1 )) + 'px');
        }

        $(window).resize(function() {
          setHeight();
        });

        $(window).on('scroll', function() {
          setBgPosition();
        });

      }
    };
  });
});
