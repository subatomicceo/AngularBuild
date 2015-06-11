define(['app'], function(app) {
    app.directive('listView', function() {

        return {
            restrict: 'E',
            controller: function($scope, $element) {
                // console.log('list view controller -->');
            },
            templateUrl: '/app/components/dashboard/brand/requests/list-view.html'
        };
    });
});