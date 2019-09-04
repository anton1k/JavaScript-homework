(function($){
	$.fn.antonSlider = function(settings) {

		var defaults = {
        	images: 'img',
			btnPrev: '.buttons .prev',
			btnNext: '.buttons .next',
			auto: true,
			rate: 1000
        };

		var options = $.extend(defaults, settings);
		elem = $(this);

		var imgs = $(elem.find(options.images));
		var prev = $(elem.find(options.btnPrev));
		var next = $(elem.find(options.btnNext));
		var auto = options.auto;
		var rate = options.rate;

		var i = 0;
		var isRun = false;

		sliderWidth = imgs.eq(0).width();

		if(auto)	{
			var time = setInterval(function() {move(-1);}, rate);;
		}

		function move(direction) {

			if(isRun) {
				return;
			}
			isRun = true;

			// скрыть
			imgs.eq(i).animate({
				left: (sliderWidth * direction)
			}, rate).css({
				left: 0,
			});

			i += direction;
			if (i < 0) {
				i = imgs.length - 1;
			}
			else if (i >= imgs.length) {
				i = 0;
			}

			// показать
			imgs.eq(i).css({
					left: (-sliderWidth * direction),
					width: "100%"
				}).animate({
					left: 0,
			}, rate, function(){
				isRun = false;
			});
		}

		function movePrev() {
			move(1);
			if(auto)	{   // если автопрокрутка была включена, то отключить
				auto = false;
				clearInterval(time);
			}
		};

		function moveNext() {
			move(-1);
			if(auto)	{   // если автопрокрутка была включена, то отключить
				auto = false;
				clearInterval(time);
			}
		};

		$(prev).on('click', function() {movePrev();});
		$(next).on('click', function() {moveNext();});

	};

	return this;

})(jQuery);

$(function(){

	$('.gallery-1').antonSlider({
		auto: false,
		rate: 500
	});

});
$(function(){

	$('.gallery-2').antonSlider({
		auto: true,
		rate: 1000
	});

});
