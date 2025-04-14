<?php
$config = require __DIR__ . '/conf.php';

$pageId         = $config['FB_PAGE_ID'];
$accessToken    = $config['FB_ACCESS_TOKEN'];
$cacheFile      = $config['CACHE_FILE'];
$cacheDuration  = $config['CACHE_DURATION'];

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

if (file_exists($cacheFile) && (time() - filemtime($cacheFile) < $cacheDuration)) {
    echo file_get_contents($cacheFile);
    exit;
}

$url = "https://graph.facebook.com/v22.0/me/feed?fields=message,full_picture,permalink_url&limit=20&access_token={$accessToken}";
$ch = curl_init($url);

curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_TIMEOUT, 10);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, true);

$fbResponse = curl_exec($ch);

if (curl_errno($ch)) {
    error_log("cURL error: " . curl_error($ch));
    http_response_code(500);
    echo json_encode(['error' => 'Error while fetching posts from Facebook']);
    curl_close($ch);
    exit;
}

$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if ($httpCode !== 200) {
    error_log("Facebook API HTTP Error $httpCode: $fbResponse");
    http_response_code(500);
    echo json_encode(['error' => 'Error in fetch response']);
    exit;
}

$responseData = json_decode($fbResponse, true);
if (!isset($responseData['data'])) {
    error_log("Facebook API error: " . $fbResponse);
    http_response_code(500);
    echo json_encode(['error' => 'Impossible to fetch posts from Facebook']);
    exit;
}

$postsWithPicture = array_filter($responseData['data'], function($post) {
    return isset($post['full_picture']);
});

$topFour = array_slice(array_values($postsWithPicture), 0, 4);

$jsonOutput = json_encode($topFour);

file_put_contents($cacheFile, $jsonOutput);

echo $jsonOutput;
