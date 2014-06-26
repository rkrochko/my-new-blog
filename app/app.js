var app = angular.module('ryanApp', ['ngRoute', 'ngSanitize', 'ngAnimate', 'blogFilters']);

app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            controller: 'blogController',
            templateUrl: Directory.url + '/app/partials/main.html'
        })
        .when('/blog/:post', {
            controller: 'postController',
            templateUrl: Directory.url + '/app/partials/post.html'
        })
        .when('/page/twitter', {
//            controller: 'blogController',
            templateUrl: Directory.url + '/app/partials/twitter.html'
        })
        .when('/page/:page', {
            templateUrl: Directory.url + '/app/partials/page.html'
        })
        .otherwise({ redirectTo: '/'});
});

