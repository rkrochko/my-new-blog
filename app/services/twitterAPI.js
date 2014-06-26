app.factory('twitterAPI', function($http, $q) {
    var getData = function(name, count) {
        var twitter_api_url = Directory.url + '/backend/twitter.php';
        var deferred = $q.defer();
        $http({
            method:"GET",
            url:twitter_api_url,
            params: {
                name: name,
                count: count
            }
        })
            .success(function(result){
                deferred.resolve(result);
        });
        return deferred.promise;
    };
    return { getData: getData };
});