<?php
$username=$_GET["rollno"];
$password=$_GET["pass"];
$path = "/var/www/ext1";
$url="http://internship.iitm.ac.in/students/login.php";
$postinfo = "rollno=".$username."&pass=".$password;
$cookie_file_path = $path."/cookie.txt";
$ch = curl_init();
curl_setopt($ch, CURLOPT_HEADER, false);
curl_setopt($ch, CURLOPT_NOBODY, false);
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
curl_setopt($ch, CURLOPT_COOKIEJAR, $cookie_file_path);
curl_setopt($ch, CURLOPT_COOKIE, "cookiename=0");
curl_setopt($ch, CURLOPT_USERAGENT,
    "Mozilla/5.0 (Windows; U; Windows NT 5.0; en-US; rv:1.7.12) Gecko/20050915 Firefox/1.0.7");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_REFERER, $_SERVER['REQUEST_URI']);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 0);
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, $postinfo);
curl_setopt($ch, CURLOPT_URL, "http://internship.iitm.ac.in/students/comp_list.php");
$html = curl_exec($ch);
curl_close($ch);
function getTextBetweenTags($string,$tag1,$tag2) {
    $pattern = "/<$tag1?.*><$tag2?.*>(.*)<\/$tag2><\/$tag1>/";
    preg_match_all($pattern, $string, $matches);
    return $matches[1];
}
$txt1 = getTextBetweenTags($html,"strong", "font");
$txt2 = getTextBetweenTags($html,"a", "font");
$len=count($txt1);
$txt=array();
$init="";
for($i=0;$i<$len;$i++){
	$txt0["name"]=$txt1[$i];
	$txt0["profile"]=$txt2[$i];
	$txt["companies"][]=$txt0;
}
$txt["count"]=$len;
echo json_encode($txt["count"]);
?>

