<?php
    require('twitteroauth/twitteroauth.php'); // path to twitteroauth library
    $name = $_GET['name'];
    $count = $_GET['count'];
    $consumerkey = '';
    $consumersecret = '';
    $accesstoken = '';
    $accesstokensecret = '';
    $twitter = new TwitterOAuth($consumerkey, $consumersecret, $accesstoken, $accesstokensecret);
    $tweets = $twitter->get('https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=' . $name . '&count=' . $count);
    echo json_encode($tweets);
?>
