<?php
$name = $_POST['name'];
$telegram = $_POST['tel'];
$message = $_POST['lnk'];

$token = "#";
$chat_id = "#";
$arr = array(
  'Имя: ' => $name,
  'Связь: ' => $telegram,
  'Сообщение: ' => $message,
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};



$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

header('Location: /');



?>
