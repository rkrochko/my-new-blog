<?php
    require('twitteroauth/twitteroauth.php'); // path to twitteroauth library
    $name = $_GET['name'];
    $count = $_GET['count'];
    $consumerkey = 'QkST6Xo45O6uVuUs1JzRC53vN';
    $consumersecret = 'lcXucixhkl4861PO3YC2WCEADxW3CbLteRc99nWmiOpcFf9cND';
    $accesstoken = '373551450-4Yv8f4bFPWa1OWb4aUo9v4Ef0Lt1KXodfsZeOYjl';
    $accesstokensecret = 'c68qL1Ah56REb5jgY1jwzLh9QZcAAvuTPfBKPtwO2A5ho';
    $twitter = new TwitterOAuth($consumerkey, $consumersecret, $accesstoken, $accesstokensecret);
    $tweets = $twitter->get('https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=' . $name . '&count=' . $count);
    echo json_encode($tweets);
?>