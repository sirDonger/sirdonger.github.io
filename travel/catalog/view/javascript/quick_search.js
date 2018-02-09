function doquick_search( ev, keywords ) {

	if( ev.keyCode == 38 || ev.keyCode == 40 ) {
		return false;
	}	

	$('#quick_search_results').remove();
	updown = -1;

	if( keywords == '' || keywords.length < 1 ) {
		return false;
	}
	keywords = encodeURI(keywords);

	$.ajax({url: $('base').attr('href') + 'index.php?route=product/search/ajax&keyword=' + keywords, dataType: 'json', success: function(result) {
		if( result.length > 0 ) {
			var eList = document.createElement('ul');
			eList.id = 'quick_search_results';
			var eListElem;
			var eLink;
			for( var i in result ) {
				eListElem = document.createElement('li');
				eLink = document.createElement('a');
				eLink.appendChild( document.createTextNode(result[i].name) );
				if( typeof(result[i].href) != 'undefined' ) {
					eLink.href = result[i].href;
				}
				else {
					eLink.href = $('base').attr('href') + 'index.php?route=product/product&product_id=' + result[i].product_id + '&keyword=' + keywords;
				}
				eListElem.appendChild(eLink);
				eList.appendChild(eListElem);
			}
			if( $('#quick_search_results').length > 0 ) {
				$('#quick_search_results').remove();
			}
			$('#search').append(eList);
		}
	}});

	return true;
}

function upDownEvent( ev ) {
	var elem = document.getElementById('quick_search_results');
	var fkey = $('#search').find('[name=filter_name]').first();

	if( elem ) {
		var length = elem.childNodes.length - 1;

		if( updown != -1 && typeof(elem.childNodes[updown]) != 'undefined' ) {
			$(elem.childNodes[updown]).removeClass('lisves');
		}

		if( ev.keyCode == 38 ) {
			updown = ( updown > 0 ) ? --updown : updown;
		}
		else if( ev.keyCode == 40 ) {
			updown = ( updown < length ) ? ++updown : updown;
		}

		if( updown >= 0 && updown <= length ) {
			$(elem.childNodes[updown]).addClass('lisves');

			var text = elem.childNodes[updown].childNodes[0].text;
			if( typeof(text) == 'undefined' ) {
				text = elem.childNodes[updown].childNodes[0].innerText;
			}

			$('#search').find('[name=filter_name]').first().val( new String(text).replace(/(\s\(.*?\))$/, '') );
		}
	}

	return false;
}

var updown = -1;

$(document).ready(function(){
	$('#search').find('[name=filter_name]').first().keyup(function(ev){
		doquick_search(ev, this.value);
	}).focus(function(ev){
		doquick_search(ev, this.value);
	}).keydown(function(ev){
		upDownEvent( ev );
	}).blur(function(){
		window.setTimeout("$('#quick_search_results').remove();updown=0;", 1500);
	});
	$(document).bind('keydown', function(ev) {
		try {
			if( ev.keyCode == 13 && $('.lisves').length > 0 ) {
				document.location.href = $('.lisves').find('a').first().attr('href');
			}
		}
		catch(e) {}
	});
});