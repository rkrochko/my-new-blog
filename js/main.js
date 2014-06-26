WebFontConfig = {
    google: {
        families: ['Raleway', 'Raleway Dots', 'Merriweather', 'Merriweather Sans']
    },
    loading: function() {
        console.log('loaded');
    },
    active: function() {
        console.log('active');
    },
    inactive: function() {
        console.log('inactive');
    },
    fontloading: function(familyName, fvd) {},
    fontactive: function(familyName, fvd) {},
    fontinactive: function(familyName, fvd) {}
};
(function() {
    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
        '://ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
})();