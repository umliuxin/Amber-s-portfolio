$( document ).ready(function() {
	$('.project-item').each(function(){
		$(this).mouseenter(function(){
			$(this).find('.project-intro').slideDown('fast');
		});
		$(this).mouseleave(function(){
			$(this).find('.project-intro').slideUp('fast');
		});
	});

});
