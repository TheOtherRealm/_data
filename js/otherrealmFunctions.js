(function () {
	var doesItShow = false;
	console.log($('.layout-sidebar-first,.layout-sidebar-first>*').css('display'));
	$(document).ready(function ($) {
		var today = new Date();
		$('#year').html(today.getFullYear());
		$('#menuebar').click(function () {
//			console.log('test');
//			console.log(t);
			// $('.layout-sidebar-first,.layout-sidebar-first>*').css('display','block');
		});
		console.log($('.layout-sidebar-first,.layout-sidebar-first>*').css('display'));
		$(window).resize(function () {
			if ($(window).width() > 1040) {
				console.log($('.layout-sidebar-first,.layout-sidebar-first>*').css('display'));
				$('.layout-sidebar-first,.layout-sidebar-first>*').css('display', 'block');
			} else if ($(window).width() <= 1040) {
				console.log($('.layout-sidebar-first,.layout-sidebar-first>*').css('display'));
				$('.layout-sidebar-first,.layout-sidebar-first>*').css('display', 'none');
			}
			if ((80 + $('.layout-sidebar-first').height() >= $(window).height()) || $('.layout-sidebar-first').width() < 1060) {
				console.log($('.layout-sidebar-first').height(), $(window).height(), $('.layout-sidebar-first').position().top);
				$('.layout-sidebar-first').css('position', 'absolute');
			} else {
				console.log($('.layout-sidebar-first').height(), $(window).height(), $('.layout-sidebar-first').position().top);
				$('.layout-sidebar-first').css('position', 'fixed');
			}
		});
		if ((80 + $('.layout-sidebar-first').height() >= $(window).height()) || $('.layout-sidebar-first').width() < 1060) {
			console.log($('.layout-sidebar-first').height(), $(window).height(), $('.layout-sidebar-first').position().top);
			$('.layout-sidebar-first').css('position', 'absolute');
		} else {
			console.log($('.layout-sidebar-first').height(), $(window).height(), $('.layout-sidebar-first').position().top);
			$('.layout-sidebar-first').css('position', 'fixed');
		}
	});
	console.log($('.fm-form-container'));
	$('.fm-form-container').css('display', 'block');
})(jQuery);
var toggleMenu = function () {
	if ($('.layout-sidebar-first,.layout-sidebar-first>*').css('display') === 'none') {
		console.log($('.layout-sidebar-first,.layout-sidebar-first>*').css('display'));
		$('.layout-sidebar-first,.layout-sidebar-first>*').css('display', 'block');
	} else {
		console.log($('.layout-sidebar-first,.layout-sidebar-first>*').css('display'));
		$('.layout-sidebar-first,.layout-sidebar-first>*').css('display', 'none');
	}
};