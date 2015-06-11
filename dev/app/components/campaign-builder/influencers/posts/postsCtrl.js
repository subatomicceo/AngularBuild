define(['app'], function(app) {
  app.controller('campaignBuilderInfluencersPostsCtrl', function($scope, $state, $rootScope, campaignBuilderInfluencersPostsService) {
    var influencersPosts = this;
    var lastDevider = 0;
    influencersPosts.postOpened = false;

    function setOffset(el) {
      $('#social-post-opened').css('top', $(el).offset().top + $(el).height() - $('#cmp-inf-posts').offset().top + 'px');
    }

    function getLastRowElementIndex(index, resize) {
      var devider = 4;
      if ($(window).width() > 991) {
        devider = 4;
      } else if ($(window).width() > 767) {
        devider = 3;
      } else {
        devider = 2;
      }
      if (resize && lastDevider === devider) {
        return;
      }
      lastDevider = devider;
      var offset = (index + 1) % devider;
      var appendAfterIndex;
      if (offset > 0) {
        if($('.post-container .post:eq('+(index + (devider - offset))+')').length) {
          return index + (devider - offset);
        }
        else {
          return $('.post-container .post').last().index();
        }
      } else {
        return index;
      }
    }

    function setLastRowElement(index) {
      $('.post.last-row-el').removeClass('last-row-el');
      $('.post-container .post:eq('+getLastRowElementIndex(index)+')').addClass('last-row-el');
    }

    campaignBuilderInfluencersPostsService.getPosts({}, function(response) {
      influencersPosts.posts = response.posts;
    }, function(error) {
      console.log('error');
    });

    influencersPosts.getPostDetails = function(index, postId, $event) {
      var el = (function() {
        if (angular.element($event.target).hasClass('post')) {
          return angular.element($event.target);
        } else {
          return $(angular.element($event.target)).closest('.post');
        }
      })();

      if (!$(el).hasClass('active')) {
        $('.post.active').removeClass('active');
        campaignBuilderInfluencersPostsService.getPost({}, function(response) {
          influencersPosts.openedPost = response;
          setLastRowElement(index);
          $(el).addClass('active');
          setOffset(el);
          influencersPosts.postOpened = true;
          $("html, body").animate({
            scrollTop: $('.post.active').offset().top + $('.post.active').height() - 74
          }, 1000);
        });
      } else {
        $('.post.last-row-el').removeClass('last-row-el');
        $(el).removeClass('active');
        influencersPosts.postOpened = false;
      }
    };

    $(window).resize(function(){
      if(influencersPosts.postOpened) {
        setOffset($('.post.active'));
        setLastRowElement($('.post.active').index());
      }
    });

    return influencersPosts;
  });
});
