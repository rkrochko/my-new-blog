app.service('pageInfo', function($http) {
    var d = new Date();
    var n = d.getFullYear();
    this.pageParams = function() {
        var params = {
            pageTitle: 'rkrochko.com',
            copyrightDate: n
        };
        return params;
    };
});