$('[type="button"]').click(function() {
  $.post( 
  
  "submit.php", //url
  
  { 
    mail: $('[name="mail"]').val(),
    phone: $('[name="phone"]').val(),
    address: $('[name="address"]').val()
  }, 
  
  function( data ) { 
    $( ".result" ).html(data);
  }
  
  );
});