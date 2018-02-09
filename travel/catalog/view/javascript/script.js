$(document).ready(function() {

 
 $(document).on('submit','.web-form form',function(){
	 var div  = $(this).parent();
	 var form = $(this);
	 var button = div.find('.submit');
	 var answer = $('#answer');
	 var noerror = true;
	 var patern_email = /^[a-z0-9_-]+@[a-z0-9-]+\.([a-z]{1,6}\.)?[a-z]{2,6}$/i;
	 var patern_phone = /[^0-9\-\+\s\(\)]/;	 
	 form.find('.error').removeClass('error');
	 form.find('.required').each(function(){
		 if ($(this).val() == ''){
			 $(this).addClass('error');
			 noerror = false;
		 }			 	 		 
	 });
	 form.find('.email').each(function(){
		 if ($(this).val() != '' && $(this).val().search(patern_email) != 0){
			 $(this).addClass('error');
			 noerror = false;
		 }			 
	 });
	 form.find('.phone').each(function(){
		 if ($(this).val() != '' && patern_phone.test($(this).val())){
			 $(this).addClass('error');
			 noerror = false;
		 }	 
	 });	 
	 if (noerror){
		 $.ajax({
			 type:'POST',
			 async:false,
			 data:form.serialize(),
			 url:'index.php?route=common/form',
			 beforeSend: function(){
				 button.html('<img src="/catalog/view/theme/original/images/load.gif" />');
			 },
			 complete:function(msg){
				 button.html('Отправить');
				 form.find('input[type="text"],select,textarea').val('');
				 answer.html(msg.responseText);
				 $('.show-answer').click();
			 }
			 
		 });
	 }
	 return false;
 });
});

var simple_route = '';
var simple_path  = '';
function simplecheckout_login() {
    jQuery.ajax({
        url: 'index.php?'+simple_route+'route=checkout/simplecheckout_customer/login',
        data: jQuery('#simplecheckout_login input'),
        type: 'POST',
        dataType: 'text',
        success: function(data) {
            jQuery('#simplecheckout_login').replaceWith(data);
        }
    });
}

function simple_login_open() {
    var parent_position = jQuery('#simple_login_layer').parent().css('position');
    if (jQuery('#simple_login_layer').length == 0 || parent_position == 'fixed' || parent_position == 'relative' || parent_position == 'absolute') {
        jQuery('#simple_login_layer').remove();
        jQuery('#simple_login').remove();
        jQuery('body').append('<div id="simple_login_layer" onclick="simple_login_close();"></div><div id="simple_login"><div id="simple_login_header"><img style="cursor:pointer;" src="'+simple_path+'catalog/view/image/close.png" onclick="simple_login_close();"></div><div id="simple_login_content"></div></div>');
    }
    jQuery('#simple_login').show();
    jQuery('#simple_login_content').load('index.php?'+simple_route+'route=checkout/simplecheckout_customer/login');
    var loginHeight = jQuery(document).height();
    var loginWidth = jQuery(window).width();
    jQuery('#simple_login_layer').css('height', loginHeight);
    var winH = jQuery(window).height();
    var winW = jQuery(window).width();
    jQuery('#simple_login').css('top',  winH/2-jQuery('#simple_login').height()/2);
    jQuery('#simple_login').css('left', winW/2-jQuery('#simple_login').width()/2);
    jQuery('#simple_login_layer').fadeTo(500,0.8);
    return false;
}

function simple_login_close() {
    jQuery('#simple_login_layer').fadeOut(500, function() {
        jQuery('#simple_login_layer').hide().css('opacity','1');
    });
    jQuery('#simple_login').fadeOut(500, function() {
        jQuery('#simple_login').hide();
        jQuery('#simple_login_content').empty();
    });
}