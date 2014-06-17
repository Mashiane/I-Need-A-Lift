<?php
 // uncomment the Next line To see runtime Error messages from this script
 //ini_set('display_errors','1');
 // Get the data from the client.
 $myText = file_get_contents('php://input');
 //echo "<p>XML " . $myText . "\n";
 // Send back the text, reversed
 $user = new SimpleXMLElement($myText);
 // Get the email address from the file
 $mobile = $user->mobile;
 //echo "<p>Mobile " . $mobile . "\n";
 //write the data out To a file On the server
 //make sure permissions are all OK!
 $myFile = "users/" . $mobile . ".xml";
 //echo "<p>Writing data to " . getcwd() . "/" . $myFile . "\n";
 $f = fopen($myFile, 'w') or die("Error: Can't open file. Got write permission?");
 fwrite($f, $myText);
 fclose($f);
?>
