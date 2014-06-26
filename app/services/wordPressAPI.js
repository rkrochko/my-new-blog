app.factory('wordPressAPI', function($http, $q) {
    var getRecentPosts = function() {
        var api_url = '/?json=get_recent_posts';
        var deferred = $q.defer();
        $http({
            method:"GET",
            url:api_url,
            params: {}
        })
        .success(function(result){
            deferred.resolve(result);
        });
        return deferred.promise;
    };
    var getPage = function(url) {
        var api_url = 'api/get_page/?page_slug=' + url;
        var deferred = $q.defer();
        $http({
            method:"GET",
            url:api_url,
            params: {}
        })
            .success(function(result){
                deferred.resolve(result);
            });
        return deferred.promise;

        globalReturn(api_url);
    };
    var getPageIndex = function() {
        var api_url = '/?json=get_page_index';
        var deferred = $q.defer();
        $http({
            method:"GET",
            url:api_url,
            params: {}
        })
        .success(function(result){
            deferred.resolve(result);
        });
        return deferred.promise;
    };
    var getIndividualPost = function(url) {
        var api_url = 'api/get_post/?post_slug=' + url;
        console.log(api_url);
        var deferred = $q.defer();
        $http({
            method:"GET",
            url:api_url,
            params: {}
        })
        .success(function(result){
           deferred.resolve(result);
        });
        return deferred.promise;
    };
    return { getRecentPosts: getRecentPosts, getPage: getPage, getPageIndex: getPageIndex, getIndividualPost: getIndividualPost };
});