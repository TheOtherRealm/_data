(function () {
	var doesItShow = false;
	$(document).ready(function ($) {
		var today = new Date();
		$('#year').html(today.getFullYear());
		$('#menuebar').click(function () {
//			console.log('test');
//			console.log(t);
			// $('.sidebar,.sidebar>*').css('display','block');
		});
		console.log($('.sidebar,.sidebar>*').css('display'));
		$(window).resize(function () {
			if ($(window).width() > 1040) {
				console.log($('.sidebar,.sidebar>*').css('display'));
				$('.sidebar,.sidebar>*').css('display', 'block');
			} else if ($(window).width() <= 1040) {
				console.log($('.sidebar,.sidebar>*').css('display'));
				$('.sidebar,.sidebar>*').css('display', 'none');
			}
			if ((80 + $('.sidebar').height() >= $(window).height()) || $('.sidebar').width() < 1060) {
				console.log($('.sidebar').height(), $(window).height(), $('.sidebar').position().top);
				$('.sidebar').css('position', 'absolute');
			} else {
				console.log($('.sidebar').height(), $(window).height(), $('.sidebar').position().top);
				$('.sidebar').css('position', 'fixed');
			}
		});
		if ((80 + $('.sidebar').height() >= $(window).height()) || $('.sidebar').width() < 1060) {
			console.log($('.sidebar').height(), $(window).height(), $('.sidebar').position().top);
			$('.sidebar').css('position', 'absolute');
		} else {
			console.log($('.sidebar').height(), $(window).height(), $('.sidebar').position().top);
			$('.sidebar').css('position', 'fixed');
		}
	});
	console.log($('.fm-form-container'));
	$('.fm-form-container').css('display', 'block');
})(jQuery);
var toggleMenu = function () {
	if ($('.sidebar,.sidebar>*').css('display') === 'none') {
		console.log($('.sidebar,.sidebar>*').css('display'));
		$('.sidebar,.sidebar>*').css('display', 'block');
	} else {
		console.log($('.sidebar,.sidebar>*').css('display'));
		$('.sidebar,.sidebar>*').css('display', 'none');
	}
};