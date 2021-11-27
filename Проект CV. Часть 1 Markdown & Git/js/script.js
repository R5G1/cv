$(document).ready(function() {

	$('.header__bureger').click(function(event) {
        $('.header__bureger,.conteiner__content,.content__nav').toggleClass('active');
		
		$('body').toggleClass('lock');
	});
    
});
    
