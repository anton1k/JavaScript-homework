$(function(){
	$('.answer').hide();
	$('.question').on('click' , function(){
		$(this).parent().children('.answer').slideToggle();
		$('.question').not(this).parent().children('.answer').slideUp();
	});
});
