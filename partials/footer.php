        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
        <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.10.2.min.js"><\/script>')</script>
        <script src="<?php echo get_template_directory_uri(); ?>/js/vendor/moment.min.js"></script>
        <script>
           var Directory = {
                "url": "<?php echo get_template_directory_uri(); ?>"
           }
        </script>

        <script src="<?php echo get_template_directory_uri(); ?>/js/vendor/angular.min.js"></script>
        <script src="<?php echo get_template_directory_uri(); ?>/js/vendor/angular-route.js"></script>
        <script src="<?php echo get_template_directory_uri(); ?>/js/vendor/angular-sanitize.min.js"></script>
        <script src="<?php echo get_template_directory_uri(); ?>/js/vendor/angular-animate.min.js"></script>
        <script src="<?php echo get_template_directory_uri(); ?>/app/app.js"></script>
        <script src="<?php echo get_template_directory_uri(); ?>/app/filters/filters.js"></script>
        <script src="<?php echo get_template_directory_uri(); ?>/app/controllers/controllers.js"></script>
        <script src="<?php echo get_template_directory_uri(); ?>/app/services/pageInfo.js"></script>
        <script src="<?php echo get_template_directory_uri(); ?>/app/services/twitterAPI.js"></script>
        <script src="<?php echo get_template_directory_uri(); ?>/app/services/wordPressAPI.js"></script>
        <script src="<?php echo get_template_directory_uri(); ?>/app/directives/directives.js"></script>

        <script src="<?php echo get_template_directory_uri(); ?>/js/main.js"></script>

        <script>
            (function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
            function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
            e=o.createElement(i);r=o.getElementsByTagName(i)[0];
            e.src='//www.google-analytics.com/analytics.js';
            r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
            ga('create','UA-XXXXX-X');ga('send','pageview');
        </script>
    </body>
</html>