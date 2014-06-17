<?php
If (isset($_REQUEST['file'])) {
  $file = basename($_REQUEST['file']);
  echo file_get_contents('./requests/'.$file);
} Else {
  If (is_dir('./requests') && $handle = opendir('./requests/')) {
    While (False !== ($entry = readdir($handle))) {
      If (!is_dir($entry)) {
        echo basename($entry)."\n";
      }
    }
    closedir($handle);
  } Else {
    header("HTTP/1.0 404 Not Found");
  }
}
