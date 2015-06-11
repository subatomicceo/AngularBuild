define(['app'], function(app) {
  app.controller('campaignsHashtagsCtrl', ['$scope', '$state', '$rootScope', 'data',function($scope, $state, $rootScope, data) {
    this.data = data;

    var statesArray = [
      ["Country", "Popularity"]
    ];
    $.each(this.data.locations, function(k, location) {
      var stateitem = [location.name, location.value];
      statesArray.push(stateitem);
    });

    // create overview geo chart and pass data 
    var chart = {};
    chart.type = "GeoChart";
    chart.displayed = false;
    chart.data = statesArray;
    chart.options = {
      colors: ['#eeeff1', '#bbbcbe'],
      markerOpacity: 0.1,
      legend: 'none',
      tooltip: {
        trigger: 'none'
      }
    };

    // init chart
    $scope.chart = chart;

    // additonal styles
    $scope.cssStyle = "width:100%;";

    // after chart appended to DOM
    $scope.chartReady = function() {
      fixGoogleChartsBarsBootstrap();
    };

    // bootstrap hack
    function fixGoogleChartsBarsBootstrap() {
      // Google charts uses <img height="12px">, which is incompatible with Twitter
      // * bootstrap in responsive mode, which inserts a css rule for: img { height: auto; }.
      // *
      // * The fix is to use inline style width attributes, ie <img style="height: 12px;">.
      // * BUT we can't change the way Google Charts renders its bars. Nor can we change
      // * the Twitter bootstrap CSS and remain future proof.
      // *
      // * Instead, this function can be called after a Google charts render to "fix" the
      // * issue by setting the style attributes dynamically.

      $(".google-visualization-table-table img[width]").each(function(index, img) {
        $(img).css("width", $(img).attr("width")).css("height", $(img).attr("height"));
      });
    }

  }]);
});
