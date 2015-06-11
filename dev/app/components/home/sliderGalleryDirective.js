define(['app'], function(app) {
  app.directive('sliderGallery', function() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'app/components/home/sliderGalleryLayout.html',
      link: function(scope, element, attr) {

        var container = $(element),
          listContainer = container.find('>ul');

        function setWidth() {
          container.find('> ul').css('width', container.find('> ul > li').size() * $(window).width() + 'px');
          container.find('> ul > li').each(function() {
            $(this).css('width', $(window).width());
          });
        }

        scope.gallery = {
          tab: 1,
          tabs: container.find('> ul > li').size()
        };

        setWidth();

        $(window).resize(function() {
          setWidth();
        });

        scope.slide = function(left) {
          scope.lastTab = scope.gallery.tab;
          if (left) {
            listContainer.prepend(container.find(' > ul > li:last-child')).css('left', (-$(window).width()) + 'px').animate({
              left: 0
            }, 300);
          } else {
            listContainer.animate({
              left: -$(window).width()
            }, 300, function() {
              listContainer.append(container.find(' > ul > li:first-child')).css('left', '0px');
            });
          }
        };

      },
      controller: function($scope) {
        $scope.lastTab = 1;

        $scope.goToTab = function(tab) {
          $scope.gallery.tab = tab;
          if ($scope.lastTab === tab) return;
          $scope.slide($scope.lastTab > tab);
        };

        $scope.nextTab = function(left) {
          if(left) {
            if ($scope.gallery.tab > 1) {
              $scope.gallery.tab -= 1;
            }
            else {
              $scope.gallery.tab = $scope.gallery.tabs;
            }
          }
          else {
            if ($scope.gallery.tab < $scope.gallery.tabs) {
              $scope.gallery.tab += 1;
            }
            else {
              $scope.gallery.tab = 1;
            }
          }
          $scope.slide(left);
        };

        

      }
    };
  });
});
