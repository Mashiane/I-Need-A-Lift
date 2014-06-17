<?php
 // Get the data from the client.
 $myText = file_get_contents('php://input');
 // Send back the text, reversed
 $lift = new SimpleXMLElement($myText);
 // Get the email address from the file
 $id = $lift->id;
 //write the data out To a file On the server
 //make sure permissions are all OK!
 $myFile = "requests/" . $id . ".xml";
 //echo "<p>Writing data to " . getcwd() . "/" . $myFile . "\n";
 $f = fopen($myFile, 'w') or die("Error: Can't open file. Got write permission?");
 fwrite($f, $myText);
 fclose($f);
?>
