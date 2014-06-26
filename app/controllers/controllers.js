"use strict";
app.controller('mainController', ['$scope', 'pageInfo', 'twitterAPI', function($scope, pageInfo, twitterAPI) {
    function init() {
        $scope.pageInfo = pageInfo.pageParams();
    }
    init();
}]);

app.controller('pageController', ['$scope', '$location', 'wordPressAPI', function($scope, $location, wordPressAPI) {
    var $this = this;
    function init() {
        getPage();
    }
    function getPage() {
        var urlArray = $location.path().split('/');
        var newUrl = urlArray[urlArray.length-1];
        var getPage = wordPressAPI.getPage(newUrl);
        getPage.then(function(data) {
            $this.pullPage = data.page;
        });
    }
    init();
}]);

app.controller('blogController', ['$scope', '$location', 'wordPressAPI', function($scope, $location, wordPressAPI) {
    var $this = this;
    function init() {
        getRecentPosts();
        getPageIndex();
    }
    function getPageIndex() {
        var getPages = wordPressAPI.getPageIndex();
        getPages.then(function(data) {
            $this.pullPages = data.pages;
//            console.log($this.pullPages);
        });
    }
    function getRecentPosts() {
        var getPosts = wordPressAPI.getRecentPosts();
        getPosts.then(function(data) {
            console.log(data);
            $scope.recentPosts = data;
        });
    }
    $scope.navigateSite = function(url) {
        $location.path('/page/' + url);
    };
    $scope.viewPost = function(url) {
        $location.path('/blog/' + url);
    };
    init();
}]);

app.controller('postController', function($scope, $location, wordPressAPI) {
    function init() {
        getPost();
    }
    function getPost() {
        var urlArray = $location.path().split('/');
        var newUrl = urlArray[urlArray.length-1];
        var getPosts = wordPressAPI.getIndividualPost(newUrl);
        getPosts.then(function(data) {
            $scope.post = data.post;
            console.log(data);
        });
    }
    init();
});