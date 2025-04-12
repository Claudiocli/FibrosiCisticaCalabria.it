<?php
$config = require __DIR__ . '/conf.php';

$pageId       = $config['FB_PAGE_ID'];
$accessToken  = $config['FB_ACCESS_TOKEN'];
$cacheFile    = $config['CACHE_FILE'];
$cacheDuration = $config['CACHE_DURATION'];

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

if (file_exists($cacheFile) && (time() - filemtime($cacheFile) < $cacheDuration)) {
    echo file_get_contents($cacheFile);
    exit;
}

$url = "https://graph.facebook.com/me/posts?fields=message,full_picture,permalink_url&access_token={$accessToken}";

$fbResponse = file_get_contents($url);
if ($fbResponse === false) {
    http_response_code(500);
    echo json_encode(['error' => 'Error while fetching posts from Facebook']);
    exit;
}

$responseData = json_decode($fbResponse, true);
if (!isset($responseData['data'])) {
    error_log("Facebook API error: " . $fbResponse);
    http_response_code(500);
    echo json_encode(['error' => 'Impossible to fetch posts from Facebook']);
    exit;
}

$jsonOutput = json_encode($responseData['data']);

file_put_contents($cacheFile, $jsonOutput);

echo $jsonOutput;
