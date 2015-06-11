define(['app'], function(app) {
    app.directive('platformsChart', function() {

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
                chart.type = "PieChart";
                chart.displayed = false;
                chart.data = chartData();
                chart.options = {
                    pieHole: 0.5,
                    legend: 'none',
                    pieSliceText: 'label',
                    enableInteractivity: false,
                    chartArea: {
                        left: "3%",
                        top: "3%",
                        height: "94%",
                        width: "94%"
                    },
                    slices: slicesArray()
                };
                $scope.platformsChartStyle = "width:100%;";
                $scope.chart = chart;

                // after chart appended to DOM
                $scope.chartReady = function() {

                    appendIcons();
                };

                // check if single platform due to style variation
                if($scope.platforms.length <= 2){
                    singlePlatformCheck = true;
                }

                //REDRAW icons ON RESIZE
                $(window).on("resize", function (event) {
                    removeIcons();
                });

                // create chart data array
                function chartData(){
                    var platformsArray = [
                        ["Platform", "Percent"]
                    ];
                    $.each($scope.dashboard.analytics.platforms, function(k, platform) {
                        var platformObj = [platform.name, parseInt(platform.analytics.percent)];
                        platformsArray.push(platformObj);
                    });
                    return platformsArray;
                }

                // create array of slices w/ options
                function slicesArray(){
                    var colorsArray = [];
                    _($scope.platforms).forEach(function(platform) {
                        var color = platform.color,
                        colorObj = {
                            color: color,
                            textStyle: {
                                color: color
                            }
                        };
                        colorsArray.push(colorObj);
                    }).value();
                    return colorsArray;
                }

                // add icons to chart after render because google only allows text labels
                function appendIcons(){
     				var iconOffset = 15; //half of icon width
					var platformCountCheck;

					$('div#donutchart').find('g').each(function(i){
						platform = $(this).text();
						var x = $(this).find('text').attr('x'),
							y = $(this).find('text').attr('y'),
							textOffset = ($(this).find('text').width())/2;


						x = parseInt(x) + textOffset - iconOffset;
						y = parseInt(y) - iconOffset;
						
						$('div.icons-container').append('<div class="chart-icon icon-' + platform.toLowerCase() + '" style="left: ' + x + 'px; top: ' + y + 'px;"></div>');
						platformCountCheck = i;
					});

                    if(platformCountCheck <= 1){
                        $('div.chart-icon').css({"margin-top": "-33%"});
                        $('.legend-percent').addClass('full');
                    }

                    $('div#donut-legend, div.icons-container').addClass('enabled');
                }

                // clear icons on resize
                function removeIcons(){
                    $('div.icons-container').html('');
                }

            },
            templateUrl: '/app/shared/charts/platforms/platformsChart.html'
        };
    });
});