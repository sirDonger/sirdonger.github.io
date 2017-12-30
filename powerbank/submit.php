
<?php 
if (!empty($_POST['mail']) AND !empty($_POST['phone'])  AND !empty($_POST['address'])){
  
  $headers = 'From: Powerbank  '.
             'Reply-To:  ' ;
             
  $theme = 'Новое сообщение    ';

  $letter = 'Сообщение: ';
  // $letter .='Користувач: '.$_POST['person'].';  ';
  $letter .='Пошта: '.$_POST['mail'].';  ';
  $letter .='Телефон: '.$_POST['phone'].';  ';
  $letter .='Адреса: '.$_POST['address'];

  
  if (mail('', $theme, $letter, $headers)){    
    echo "Заказ принят";
  } else {
    echo "Ошибка при отправке";
  }

}  
