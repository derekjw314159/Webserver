<?php
/**
 * PHP GD
 * create a simple image with GD library
 * 
 */
//setting the image header in order to proper display the image
header("Content-Type: image/png");
//try to create an image
$im = @imagecreate(800, 600)
    or die("Cannot Initialize new GD image stream");
//set the background color of the image
$background_color = imagecolorallocate($im, 0xFF, 0xCC, 0xDD);
//set the color for the text
$text_color = imagecolorallocate($im, 133, 14, 91);
//adf the string to the image
imagestring($im, 5, 300, 300,  "I'm a pretty picture:))", $text_color);
imagestring($im, 1, 100, 100,  "I'm a pretty picture:))", $text_color);

// Create some colors
$white = imagecolorallocate($im, 255, 255, 255);
$grey = imagecolorallocate($im, 128, 128, 128);
$black = imagecolorallocate($im, 0, 0, 0);
imagefilledrectangle($im, 0, 0, 399, 29, $white);

// The text to draw
$text = 'Testing...';
// Replace path by your own font path
$font = 'Verdana';

// Add some shadow to the text
//imagettftext($im, 20, 0, 11, 21, $grey, $font, $text);

// Add the text
//imagettftext($im, 20, 0, 10, 20, $black, $font, $text);

//outputs the image as png
imagepng($im, "derek.png");
//frees any memory associated with the image 
imagedestroy($im);
?>
