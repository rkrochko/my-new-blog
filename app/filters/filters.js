angular.module('blogFilters', []).
    filter('formatWPDate', function() {
        return function(time) {
            return moment(time).format("dddd, MMMM Do YYYY");
        };
    });