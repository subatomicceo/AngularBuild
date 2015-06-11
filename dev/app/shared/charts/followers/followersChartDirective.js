define(['app'], function(app) {
    app.directive('followersChart', function() {

        return {
            restrict: 'E',
            controller: function($scope, $element) {
                // defaults
                var singlePlatformCheck;

            	// pass data to view
            	$scope.platforms = $scope.dashboard.analytics.platforms;
                $scope.reach = $scope.dashboard.analytics.overview.reach;

                // init chart
                var chart = {};
                chart.type = "ColumnChart";
                chart.displayed = false;
                chart.data = chartData();
                chart.options = {
                    isStacked: true
                };
                $scope.followersChartStyle = "width:100%;height:auto;max-height:400px;";
                $scope.followersChart = chart;

                // after chart appended to DOM
                $scope.followersChartReady = function() {
                    fixGoogleChartsBarsBootstrap();
                };

                // check if single platform due to style variation
                if($scope.platforms.length <= 2){
                    singlePlatformCheck = true;
                }

                // create chart data array
                function chartData(){
                    var dataArray = [
                        ['Followers', 'Loss', 'Gain'],
                    ];
                    $.each($scope.dashboard.analytics.audience.stats, function(k, stat) {
                        dataArray.push(stat);
                    });
                    return dataArray;
                }

                // Google charts uses <img height="12px">, which is incompatible with Twitter
                // * bootstrap in responsive mode, which inserts a css rule for: img { height: auto; }.
                // *
                // * The fix is to use inline style width attributes, ie <img style="height: 12px;">.
                // * BUT we can't change the way Google Charts renders its bars. Nor can we change
                // * the Twitter bootstrap CSS and remain future proof.
                // *
                // * Instead, this function can be called after a Google charts render to "fix" the
                // * issue by setting the style attributes dynamically.
                function fixGoogleChartsBarsBootstrap() {
                    $(".google-visualization-table-table img[width]").each(function(index, img) {
                        $(img).css("width", $(img).attr("width")).css("height", $(img).attr("height"));
                    });
                }

            },
            templateUrl: '/app/shared/charts/followers/followersChart.html'
        };
    });
});