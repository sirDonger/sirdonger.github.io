jQuery(document).ready(function($){
  $('#time>i').click(function(){
    //console.log($(this).parent().find('.clockpicker').html());
    $(this).parent().find('.clockpicker').click();
  });
  setHeaderWidth();
  $(document).on('click','.a-ajax-data',function(){
    var a = $(this);
    $.magnificPopup.open({
     items: { src: a.attr('data-href') },
      type: 'ajax',     
        overflowY: 'scroll',
        removalDelay: 300,
        mainClass: 'my-mfp-zoom-in',
      callbacks: {
            open: function () {                          
                
           }
      },         
    });

    return false;
  });
    $('.my-order').click(function(){
      //console.log(1);
      $('body,html').stop().animate({scrollTop:$('.check_list').offset().top - 50},300);
    });
  $(document).on('click','.a-ajax-data2',function(){
    var a = $(this);
    $.magnificPopup.open({
     items: { src: a.attr('data-href') },
      type: 'ajax',     
        overflowY: 'scroll',
        removalDelay: 300,
        mainClass: 'my-mfp-zoom-in',
      callbacks: {
            ajaxContentAdded: function () {                          
                $('.mfp-content input[name="product"]').val(a.attr('data-name'));
           }
      },         
    });
    return false;
  });

	//Замена телефонов ссылками
	$('.phone').each(function(){
     var phone = $(this).text();
     phone = phone.replace(/[^0-9]/gim,'');
     $(this).wrapInner('<a href="tel:' + phone + '"></a>');
  });
  
  $.datepicker.setDefaults( $.datepicker.regional[ "ru" ] );
	$( ".calendar" ).datepicker({
    dateFormat:'dd.mm.yy'
  }   
  );
  $(document).on('focus','.error-input,.input-error',function(){
    
    $(this).parent().find('.error-text,.text-error').remove();
    $(this).removeClass('error-input');
    $(this).removeClass('input-error');
  }); 

	  $('input:not(.nostyle), select:not(.nostyle)').styler();


	  // $('.block_banner').find('.main_img img').css('display', 'none').closest('.block_banner').css({
   //  "background": "url("+$('.block_banner').find('.main_img img').attr('src')+") 50% 50% no-repeat",
   //  "backgroundSize": "cover"
   //  });
    // if ($('.top_banner').find('.main_img').length){
    //   $('.top_banner').find('.main_img img').css('display', 'none').closest('.top_banner').css({
    //   "background": "url("+$('.top_banner').find('.main_img img').attr('src')+") 50% 50% no-repeat",
    //   "backgroundSize": "cover"
    //   });
    // }
    //  $('.event_card .image a').find('img').css('display', 'none').closest('.event_card .image a').css({
    // "background": "url("+$('.event_card .image a').find('img').attr('src')+") 50% 50% no-repeat",
    // "backgroundSize": "cover"
    // });
    //  $('.block_new_event .image').find('img').css('display', 'none').closest('.block_new_event .image').css({
    // "background": "url("+$('.block_new_event .image').find('img').attr('src')+") 50% 50% no-repeat",
    // "backgroundSize": "cover"
    // });
    
	  
    $(".tabs:not(.no-tabs) a").tabs();

    $('.photo_review').each(function(){
      $(this).find('.popup-link').magnificPopup({
      
      gallery: {
        enabled: true
      },
      type: 'image'
      // other options
      });
    });
  //slider
    var itemsE = [];
    var i = 0;
    $('.auto_photo .gallery .gall1').each(function(){
      var type = 'image';
      var magItem = {src:$(this).attr('href'), type:type,preloaded:false,};
      itemsE.push(magItem);
    });
    $('.add-image').bxSlider({
        slideWidth: 122,
        minSlides: 2,
        maxSlides: 8,
        controls:true,
        infiniteLoop: false,
        slideMargin: 20,
        pager: false,
    });
    $('.auto_photo .item img').on('click',function(){
      $('.auto_photo .item').removeClass('active');
      $(this).closest('.item').addClass('active');
      $('#main-img a').attr('data-id', $(this).attr('data-id'));
      $('#main-img img').attr('src', $(this).attr('pop'));
    });
    //slider END

    //slider review
    $('input.calendar').each(function(){
      $(this).next('i').click(function(){
        $(this).closest('div').find('input').focus();
      });
    });
    $('.clockpicker').clockpicker({
        'default': "now",
        autoclose: true
    });
    //slider review end 
    bgimage($('.block_new_event .image'));
    bgimage($('.event_card .image'));
    bgimage($('.block_banner'));
    if($(window).width()<940) {bgimage3($('.top_banner'));}
    if($(window).width()<480) {
      bgimage2($('.item_selection .item-head .col_3'));
    }

    dropDownadditional();
    mobileMenuClone();
    
    tabsMenuOpen();
    inputNum();
    setHeaderWidth();
    clickTour();
    addBeverages();
    fixedBar();
  });	
$(window).load(function() {
  setHeaderWidth();
  fixedBar();
  mobileMenuOpen();
});
$(window).resize(function() {
 setHeaderWidth();
 fixedBar();
 if($(window).width()<480) {
      bgimage2($('.item_selection .item-head .col_3'));
    }
  if($(window).width()<940) {bgimage3($('.top_banner'));}
});
$(document).scroll(function() {
 if($(window).width()>940) {headerFix();}
 fixedBar();
});


function dropDownadditional() {
  $(document).on('click', '#turn', function(event) {
    if($(this).closest('.block_additionally').find('.items').hasClass('active')) {
      $(this).closest('.block_additionally').find('.items').removeClass('active').slideUp(200);
      $(this).text('Смотреть');
    } else {
      $(this).closest('.block_additionally').find('.items').addClass('active').slideDown(200);
      $(this).text('Свернуть');
    }
  });
}

function newEventItem() {
  var Hmax = 0;
  $('.block_new_event .item').removeAttr('style');

  $('.block_new_event .item').each(function() {
      if ($(this).height() > Hmax) {
          Hmax = $(this).height();
      }
  });

  $('.block_new_event .item').height(Hmax);
}
function headerFix() {
  var header_t = $('.header .header_top').height();
  var header_b = $('.header .header_bottom').height();
  if($(window).scrollTop()>(header_t+header_b)) {
    $('.header').addClass('active');
  } else {
    $('.header').removeClass('active');
  }

  if($('.individual_block').length>0){
    var ws = $(window).scrollTop();
    var b = $('.block_order>.inner');
    if (ws>=$('.shadow2').height() && (ws < b.offset().top - 150 || ws > b.offset().top + b.height()) && !$('.header').hasClass('active2')){
      $('.header').addClass('active2');
      $('.individual_block').css({'display':'none','opacity':0}).fadeTo(300,1);
    }
    else if(($(window).scrollTop()<$('.shadow2').height()  || (ws >= b.offset().top - 150 && ws <= b.offset().top + b.height())) && $('.header').hasClass('active2')){
      $('.header').removeClass('active2');
      $('.individual_block').fadeTo(300,0,function(){$('.individual_block').css('display','none')});
    }
  }
}

function mobileMenuClone() {
  $('nav li').each(function() {
    $(this).clone().appendTo('.mobile_menu ul');
  });
}
function mobileMenuOpen() {
  $(document).on('click', '.mobile_menu .menu-tab', function(event) {
    if($(this).hasClass('open')) {
      $(this).removeClass('open');
      $(this).closest('.mobile_menu').find('ul').slideUp('200');
    } else {
      $(this).addClass('open');
      $(this).closest('.mobile_menu').find('ul').slideDown('200');
    }
  });
}
function tabsMenuOpen() {
  $(document).on('click', '.auto_photo .sort_auto b', function(event) {
    if($(this).hasClass('open')) {
      $(this).removeClass('open');
      $(this).closest('.sort_auto').find('.tabs').slideUp(200);
    } else {
      $(this).addClass('open');
      $(this).closest('.sort_auto').find('.tabs').slideDown(200);
    }
  });
}
function inputNum() {
  
  $(document).on('click', 'a.next', function() {
    var def = parseInt($(this).closest('div').find('input[type="text"]').val(),10);
    if(isNaN(def))
      def = 0;
    $(this).closest('div').find('input[type="text"]').val(--def).change();
    if($(this).closest('div').find('input[type="text"]').val()<0) {
      $(this).closest('div').find('input[type="text"]').val(0).change();
      
    }
  });
  $(document).on('click', 'a.prev', function() {
    var def = parseInt($(this).closest('div').find('input[type="text"]').val(),10);
    if(isNaN(def))
      def = 0;
    $(this).closest('div').find('input[type="text"]').val(++def).change();
  });
  
}

  function validate(form){
      var noerror = true;
    var patern_email  = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/i;
    var patern_phone  = /[^0-9\-\+\s\(\)]/;     
    var patern_number = /[^0-9]/;
    var patern_name   = /^([а-я-\s])*$/i;
   form.find('.error-text,.tool-message').remove();
   form.find('.error-input').removeClass('error-input');   
   form.find('input.required,textarea.required,select.required').each(function(){
     if ((jQuery(this).val() == '' || jQuery(this).val() == null || jQuery(this).attr('data-def') == jQuery(this).val()) && jQuery(this).attr('type')!='checkbox' && jQuery(this).attr('type')!='radio'){
       if (jQuery(this).next('.jq-selectbox__select').length)
        show_error(jQuery(this).next('.jq-selectbox__select'),'Необходимо выбрать значение из списка!');
       else if (jQuery(this).closest('.jq-select-multiple').length)
        show_error(jQuery(this).closest('.jq-select-multiple'),'Необходимо выбрать значение из списка!');
       else
        show_error(jQuery(this),'Необходимо заполнить!');
       noerror = false;
     }
     if ((jQuery(this).attr('type')=='checkbox' || jQuery(this).attr('type')=='radio') && !jQuery(this).is(':checked')){
      show_error(jQuery(this).closest('label'),'Необходимо отметить');
       noerror = false;
     }             
   });
   form.find('input[name="transfer[quantity]"]').each(function(){
     if (jQuery(this).val() != '' && !jQuery(this).hasClass('error')){       
       var check = jQuery('.car_section input[type="checkbox"]:checked').closest('.select-auto');
       if (check.length>0){
        var v = parseInt($(this).val(),10);
        //console.log(v,check.attr('data-max'),check.attr('data-min'));
        if (v>parseInt(check.attr('data-max'),10) || v<parseInt(check.attr('data-min'),10)){
          show_error(jQuery(this),'Неверное количество!');
          noerror = false;
        }
       }
     } 
   });
   form.find('.email,.login').each(function(){
     if (jQuery(this).val() != '' && jQuery(this).val().search(patern_email) != 0 && !jQuery(this).hasClass('error')){       
       show_error(jQuery(this),'Неверный e-mail!');
       noerror = false;
     }       
   });
   form.find('.phone').each(function(){
     //console.log($(this).val());
     if (jQuery(this).val() != '' && patern_phone.test(jQuery(this).val()) && !jQuery(this).hasClass('error')){
       show_error(jQuery(this),'Неверный формат!');
       noerror = false;
     }   
   });

   

   form.find('.number-input').each(function(){
     var v = $(this).val();
     //console.log(v,jQuery(this).val().search(patern_number));
     if (jQuery(this).val() != '' && patern_number.test(jQuery(this).val()) != 0 && !jQuery(this).hasClass('error')){
       show_error(jQuery(this),'Разрешено вводить только цифры!');
       noerror = false;
     }   
   });

   form.find('.required').each(function(){
    if ($(this).attr('data-length')!=undefined){
      var l = parseInt($(this).attr('data-length'),10);
      var v = $(this).val();
      if (l>0 && v.length>l){
        show_error(jQuery(this),'Длина должна быть не больше ' + l + ' символов!');
        noerror = false;
      }
    }
   });

   

   form.find('.inputagree').each(function(){
    if (!jQuery(this).is(':checked')){
      jQuery(this).parent().addClass('error');
      noerror = false;
    }
   });

   
   return noerror;
  }

  function validate2(form){
      var noerror = true;
    var patern_email  = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/i;
    var patern_phone  = /[^0-9\-\+\s\(\)]/;     
    var patern_number = /[^0-9]/;
    var patern_name   = /^([а-я-\s])*$/i;
   form.find('.error-text,.tool-message').remove();
   form.find('.error-input').removeClass('error-input');   
   form.find('input.required,textarea.required,select.required').each(function(){
     if ((jQuery(this).val() == '' || jQuery(this).val() == null || jQuery(this).attr('data-def') == jQuery(this).val()) && jQuery(this).attr('type')!='checkbox' && jQuery(this).attr('type')!='radio'){
       noerror = false;
     }
     if ((jQuery(this).attr('type')=='checkbox' || jQuery(this).attr('type')=='radio') && !jQuery(this).is(':checked')){
       noerror = false;
     }             
   });
   form.find('input[name="transfer[quantity]"]').each(function(){
     if (jQuery(this).val() != '' && !jQuery(this).hasClass('error')){       
       var check = jQuery('.car_section input[type="checkbox"]:checked').closest('.select-auto');
       if (check.length>0){
        var v = parseInt($(this).val(),10);
        //console.log(v,check.attr('data-max'),check.attr('data-min'));
        if (v>parseInt(check.attr('data-max'),10) || v<parseInt(check.attr('data-min'),10)){
          noerror = false;
          show_error(jQuery(this),'Неверное количество!');
        }
       }
     } 
   });
   form.find('.email,.login').each(function(){
     if (jQuery(this).val() != '' && jQuery(this).val().search(patern_email) != 0 && !jQuery(this).hasClass('error')){       
       noerror = false;
     }       
   });
   form.find('.phone').each(function(){
     //console.log($(this).val());
     if (jQuery(this).val() != '' && patern_phone.test(jQuery(this).val()) && !jQuery(this).hasClass('error')){
       noerror = false;
     }   
   });

   

   form.find('.number-input').each(function(){
     var v = $(this).val();
     //console.log(v,jQuery(this).val().search(patern_number));
     if (jQuery(this).val() != '' && patern_number.test(jQuery(this).val()) != 0 && !jQuery(this).hasClass('error')){
       noerror = false;
     }   
   });

   form.find('.required').each(function(){
    if ($(this).attr('data-length')!=undefined){
      var l = parseInt($(this).attr('data-length'),10);
      var v = $(this).val();
      if (l>0 && v.length>l){
        noerror = false;
      }
    }
   });

   

   form.find('.inputagree').each(function(){
    if (!jQuery(this).is(':checked')){
      noerror = false;
    }
   });

   
   return noerror;
  }

    ///Отображение сообщения об ошибке
  function show_error(el,text){   
    jQueryerror = jQuery('<div class="error-text">' + text + '</div>');
    el.after(jQueryerror);  
    el.addClass('error-input');
  }

  ///Отображение сообщения об ошибке c заливкой
  function show_message(el,text,color){   
    jQueryerror = jQuery('<div class="tool-message tool-message-' + color + '">' + text + '</div>');
    el.prepend(jQueryerror);      
  }

  function setHeaderWidth(){
    $('#header').width($(window).width());
  }

function clickTour() {
  $(document).on('click', '.item_selection .item', function(event) {
    $('.item_selection .item .jq-checkbox.checked').click();
    $(this).find('.jq-checkbox').click();

  });
}  

function addBeverages() {
  $(document).on('click', '.item_selection .item-head', function(event) {
    $(this).find('.jq-checkbox').click();
  });
   $(document).on('change', '.item_selection input[type="checkbox"]', function(){
    if ($(this).closest('.select-auto').length>0){
      $('.select-auto').removeClass('active-auto');
    }
    if ($(this).is(':checked')){
    //console.log('yes');
     $(this).closest('.item_selection').addClass('active'); 
     $(this).closest('.select-auto').addClass('active-auto');
    }
    else{
      //console.log('no');
     $(this).closest('.item_selection').removeClass('active');  
     $(this).closest('.select-auto').removeClass('active-auto');
    }
    if ($(this).closest('.select-auto').length>0){
      $('.select-auto:not(.active-auto) .jq-checkbox.checked').each(function(){
        $(this).removeClass('checked').find('input').removeAttr('checked');
      });
    }
    if ($(window).width()>980){
      $('.wrap_order>.right').removeAttr('style').height($('.wrap_order').height());
    }
   });

   $(document).on('click','.remove',function(){
    var a = $(this);
    if ($('.clean_cart').length>0){
      $.ajax({
        url:'/index.php?route=product/product/happyrem&checkout=Y',
        type:'POST',
        data:{'key':a.attr('data-key'),'type':a.attr('data-type'),'id':a.attr('data-id')},
        success:function(data){

              $('#right-order').html(data);
              $.get('/index.php?route=product/product/getcart&checkout=Y',function(data){$('#cart').html(data)});
        }
      });
    }
    else{
      $.ajax({
        url:'/index.php?route=product/product/happyrem',
        type:'POST',
        data:{'key':a.attr('data-key'),'type':a.attr('data-type'),'id':a.attr('data-id')},
        success:function(data){
              //console.log(a.attr('data-type'));
              if(a.attr('data-type') == 'saletur'){
                var id = a.attr('data-id');
                //console.log(id);
                $('input.qchange2[value="' + id + '"]').removeAttr('checked').parent().removeClass('checked');
              }          
              $('#right-order').html(data);
              $.get('/index.php?route=product/product/getcart',function(data){$('#cart').html(data)});
        }
      });
    }
   });
}

function addProduct(){
  var form = $('#order_form');
  $.ajax({
    url:'/index.php?route=product/product/happyadd',
    type:'POST',
    async:false,
    data:form.serialize(),
    beforeSend:function(){},
    success:function(data){
      $('#right-order').html(data);
      var form = $('.transfer_information-form');
      if (validate2(form)){
        $('.help2').text('Все готово для оформления');mig();
      }
      else{
        $('.help2').text('Заполните персональные данные');mig();
      }    
    }
  });
}

function checkCart(a = false){
 
  $.ajax({
    url:'/index.php?route=product/product/happycheck',
    type:'POST',
    async:false,    
    beforeSend:function(){},
    success:function(data){
      $('input.qchange').val(0);
      $('#right-order').html(data);
      if (a){
          // set cuurent tur
          var html = '';
              html += '<div class="excursion excursion-tmp"><div class="table_body"><div class="item closerow">';
              html += '<div class="col col_1">' + $('h1').text() + '</div>';
              html += '<div class="col col_2"> — </div>';
              html += '<div class="col col_3"> — </div>';
              html += '<div class="col col_4"> — </div>';
              html += '</div></div></div><div class="help2">Выберите автомобиль</div>';
              $('.excursion-tmp').remove();
              if ($('.excursion').length){
                $('.excursion:last').after(html);
              }
              else{
                $('#right-order').html('<form><div class="body"><div class="excursion"><div class="thead"><div class="col col_1">Экскурсии:</div><div class="col col_2">Дата:</div><div class="col col_3">Группа:</div><div class="col col_4">Стоимость:</div></div>            </div>' + html + '</div></form>');
              }        
              mig();
      }
    }
  });
}

function checkCart2(){
 
  $.ajax({
    url:'/index.php?route=product/product/happycheck&checkout=Y',
    type:'POST',
    async:false,    
    beforeSend:function(){},
    success:function(data){
      $('input.qchange').val(0);
      $('#right-order').html(data);
    }
  });
}

function addCart(){
  var form = $('.transfer_information-form');
  if (validate(form)){
      $.ajax({
        url:'/index.php?route=product/product/getcart',
        type:'POST',
        async:false,    
        beforeSend:function(){},
        success:function(data){
          $('input.qchange').val(0);
          $('#cart').html(data);
          $('#right-order .addtocart').after('<div class="was-add">Добавлено в корзину</div>');
          $('.help2').remove();
          $('#right-order .addtocart').remove();
          //$('.my-order').text('Ваш заказ: ' + data);
        }
      }); 
  }
  else{
    $('html,body').animate({scrollTop:$('.transfer_information-form').offset().top - 150}, 300);
  }
 
}
function goCheckout(){
  var form = $('.transfer_information-form');
  if ($('.select-auto .jq-checkbox.checked').length == 0 || validate(form)){
      $.ajax({
        url:'/index.php?route=product/product/getcart',
        type:'POST',
        async:false,    
        beforeSend:function(){},
        success:function(data){
          $('input.qchange').val(0);
          $('#cart').html(data);
          location = '/checkout_order.html';
        }
      }); 
  }
  else{
    $('html,body').animate({scrollTop:$('.transfer_information-form').offset().top - 150}, 300);
  }
 
}

function clearcart(){
  $.get('/index.php?route=product/product/clearcart',function(){ location.reload(); });
}

function confirmOrder(){
  var form = $('#checkout_form');
  if (validate(form)){
    form.submit();
  }
  else{
    $('html,body').animate({scrollTop:$('#checkout_form').offset().top - 150}, 300);
  }
  return false;
}

function fixedBar(){

}

function bgimage(selector) {
      //console.log(1);
      selector.each(function(index, el) {
        $(this).find('img').css('display', 'none').closest($(this)).css({
        "background": "url("+$(this).find('img').attr('src')+") 50% 50% no-repeat",
        "backgroundSize": "cover"
        });
      }); 
    } 
function bgimage2(selector) {
      selector.each(function(index, el) {
        $(this).find('img').css('display', 'none').closest($(this)).css({
        "background": "url("+$(this).find('img').attr('src')+") 0 50% no-repeat",
        //"backgroundSize": "cover"
        });
      }); 
    } 

function bgimage3(selector) {
      //console.log(3);
      selector.each(function(index, el) {
        $(this).find('.main_img img').css('display', 'none').closest($(this)).css({
        "background": "url("+$(this).find('.main_img img').attr('src')+") 50% 50% no-repeat",
        "backgroundSize": "cover"
        });
      }); 
} 

function mig(){
  return false;
  $('.help2').stop().animate({'opacity':'0','color':'#000000'}, 500, function(){
    $('.help2').stop().animate({'opacity':'1','color':'#afafaf'}, 500);
  });
}

function listenForShare() {
    if (window.addEventListener) {
        window.addEventListener('message', onShare, false);
    } else {
        window.attachEvent('onmessage', onShare);
    }
}

function listenForJoin() {
    if (window.addEventListener) {
        window.addEventListener('message', onJoin, false);
    } else {
        window.attachEvent('onmessage', onJoin);
    }
}

function onShare(e) {
    var args = e.data.split("$");
    if (args[0] == "ok_shared") {
        alert(args[1]);
    }
}

function onJoin(e) {
    var args = e.data.split("$");
    if (args[0] == "ok_join") {
        $.get('/index.php?route=product/product/setsale&sale=ok1',function(data){
          $('#right-order').html(data); 
          $.get('/index.php?route=product/product/getcart',function(data2){
            $('#cart').html(data2);
            $('.mfp-close').click();
          })            
        });  
    }
}

listenForShare();
listenForJoin();