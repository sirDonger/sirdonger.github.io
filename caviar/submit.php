<?php 
if (!empty($_POST['name']) AND !empty($_POST['phone']) AND !empty($_POST['goods'])){
  
  $headers = 'From: Gorbusha.co.ua \n'.
             'Reply-To: drugoisvet@gmail.com \n'.
              'X-Mailer: PHP/'. phpversion();
             
  $theme = 'Новое сообщение';

  $letter = 'Данные сообщения: ';
  $letter .='Имя: '.$_POST['name'].';  ';
  $letter .='Телефон: '.$_POST['phone'].';  ';
  $letter .='Фасовка: '.$_POST['goods'];

  if (mail('alexpor@i.ua', $theme, $letter, $headers)){
    echo "Спасибо за Ваш заказ!";
  } else {
    echo "Ошибка при отправке!";
  }

} 
 if (!empty($_POST['name']) AND !empty($_POST['email']) AND !empty($_POST['message'])){
  
  $headers = 'From: Gorbusha.co.ua \n'.
             'Reply-To: drugoisvet@gmail.com \n'.
              'X-Mailer: PHP/'. phpversion();
             
  $theme = 'Новый комментарий на сайте';

  $letter = 'Данные сообщения: ';
  $letter .='Имя: '.$_POST['name'].';  ';
  $letter .='Email: '.$_POST['email'].';  ';
  $letter .='Сообщение: '.$_POST['message'];


  if (mail('alexpor@i.ua', $theme, $letter, $headers)){
    echo "Сообщение отправлено!";
  } else {
    echo "Ошибка при отправке!";
  }
}


