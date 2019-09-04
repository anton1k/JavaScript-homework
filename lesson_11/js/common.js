$(function () {

    $('.menu a').on('click', function (e) {
        e.preventDefault();

        $('.menu a').removeClass('active').filter(this).addClass('active');

        var selector = $(this).attr('href'); /* #about - строка */
        var h = $(selector); /* jquery-элемент заголовка */

        $('html, body').animate({
            scrollTop: h.offset().top - 70
        }, 400);

    });

	$(window).on('scroll', function() {
         if ($(this).scrollTop() > 500) {
             if ($('.scrol-top').is(':hidden')) {
                 $('.scrol-top').css({opacity : 1}).fadeIn('slow');
             }
         } else { $('.scrol-top').stop(true, false).fadeOut('fast'); }
     });
     $('.scrol-top').on('click', function() {
         $('html, body').stop().animate({scrollTop : 0}, 300);
     });

});
