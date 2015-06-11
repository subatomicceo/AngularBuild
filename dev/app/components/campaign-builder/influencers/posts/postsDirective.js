define(['app'], function(app) {
  app.directive('postThumbnail', function() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '/app/components/campaign-builder/influencers/posts/thumbnailTemplate.html',
      link: function(scope, element, attr) {

        var lastDevider = 0;
        var openedPost = {};

        function closeOpenedPost(button) {
          $('#social-post-opened').remove();
          if (button) {
            $('.social-post.active').removeClass('active');
          }
        }

        function getPostDetails(postId, platformTypeId, target) {
          $.ajax({
            type: "GET",
            url: '/index.php/account/getPostComments/?platformTypeId=' + platformTypeId + '&postId=' + postId,
            success: function(response) {
              openedPost = response;
              appendPost($('.social-post').index(target), true);
            },
            error: function(error) {
              сonsole.log(error);
            }
          });
        }

        function appendPost(index, click) {

          var devider = 4;
          if ($(window).width() > 1199) {
            devider = 4;
          } else if ($(window).width() > 767) {
            devider = 3;
          } else {
            devider = 2;
          }
          if (!click && lastDevider === devider) {
            return;
          }
          closeOpenedPost();
          lastDevider = devider;
          var offset = (index + 1) % devider;
          var appendAfterIndex;
          if (offset > 0) {
            appendAfterIndex = index + (devider - offset);
          } else {
            appendAfterIndex = index;
          }

          openedPost.offest = offset;
          
          $("html, body").animate({
            scrollTop: $('#social-post-opened').offset().top - 74
          }, 1000);
        }
      },

      controller: function($scope) {

      }
    };
  });
});
