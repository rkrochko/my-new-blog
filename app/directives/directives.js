app
    .directive('twitterPost', ['$compile', 'twitterAPI', function($compile, twitterAPI) {
        return {
            restrict:   'A',
            templateUrl:   Directory.url + '/app/partials/tweets.html',
            scope: {
                twitterCount: "@counter",
                twitterId: "@twitterid"
            },
            controller: function ($scope) {
                var $this = this;
                function getTweets(name, count) {
                    var myDataPromise = twitterAPI.getData(name, count);
                    $this.dataTweets = {};
                    myDataPromise.then(function(tweets) { $this.tweets = tweets; });
                }
                this.changeCount = function() {
                    if (!this.tweetCount) {
                        this.tweetCount = 1;
                    }
                    getTweets($scope.twitterId, this.tweetCount);
                };

                getTweets($scope.twitterId, $scope.twitterCount);
            },
            controllerAs: 'twitterCtrl'
        };
    }])
    .directive('getNavigation', function() {
        return {
            restrict: 'A',
            scope: '@',
            templateUrl: Directory.url + '/app/partials/nav.html',
            controller: 'blogController',
            controllerAs: 'navCtrl'
        };
    })
    .directive('getRecentPosts', function() {
        return {
            restrict:   'A',
            scope: '@',
            templateUrl: Directory.url + '/app/partials/main_post.html'

        };
    })
    .directive('getRecentPostNames', function() {
        return {
            restrict:   'A',
            scope: '@',
            template: '<div ng-repeat="post in recentPosts.posts">' +
                '<p ng-click="viewPost(post.slug)">{{ post.title }}</p>' +
                '<br />' +
                '</div>'

        };
    })
    .directive('individualBlogPost', function() {
        return {
            restrict:   'A',
            scope: '@',
            template:   '<h1>{{ post.title_plain }}</h1>' +
                        '<p ng-bind-html="post.excerpt"></p>' +
                        '<p ng-bind-html="post.content"></p>' +
                        '<p>Author: {{ post.author.name }}, data posted: {{ post.date }}</p>',
            link: function(scope, element, attrs) {
                element.addClass('hoory');
                console.log(attrs);
            }

        };
    });
