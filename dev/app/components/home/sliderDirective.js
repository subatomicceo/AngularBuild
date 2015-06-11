define(['app'], function(app) {
  app.directive('simpleSlider', function() {
    return {
      restrict: 'E',
      templateUrl: 'app/components/home/sliderLayout.html',
      replace: true,
      controller: function($scope) {
        $scope.tab = 1;
        $scope.$watch('tabCount', function(newCount) {
          if (newCount > 0) {
            $scope.startAutoSlide();
          }
        });
        var timer;
        $scope.startAutoSlide = function() {
          clearInterval(timer);
          timer = setInterval(function() {
            if ($scope.tab !== $scope.tabCount - 1) {
              $scope.tab = ($scope.tab + 1) % $scope.tabCount;
            } else {
              $scope.tab = $scope.tabCount;
            }
            $scope.$apply();
          }, 5000);
        };

        $scope.stopAutoSlide = function() {
          clearInterval(timer);
        };

        $scope.sliderGoToTab = function(tab){
          $scope.tab = tab;
        };

        $scope.startAutoSlide();
      },
      link: function(scope, element, attr) {
        var container = $(element);
        scope.tabCount = container.find('>ul > li').size();
        function init() {
          container.find('> ul > li').each(function() {
            $(this).css('background-image', 'url(' + $(this).attr('data-bg') + ')');
            if ($(this).attr('data-full')) {
              $(this).css('background-size', '100%');
            }
          });
        }
        init();
      }
    };
  });
});
