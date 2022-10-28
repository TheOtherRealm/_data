/*
Copyright (C) 2019 Aaron E-J!

This program is free software: you can redistribute it and/or modify
it under the terms of the latest version of The GNU Affero General Public License
as published by the Free Software Foundation, or at least version 3.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the text of The GNU Affero General Public License
for more details: <https://www.gnu.org/licenses/agpl-3.0.txt>.
*/
(function () {
	var doesItShow = false;
	jQuery(document).ready(function ($) {
	//console.log($('.layout-sidebar-first,.layout-sidebar-first>*').css('display'));
		var today = new Date();
		$('#year').html(today.getFullYear());
		$('#menuebar').click(function () {
			//			console.log('test');
			//			console.log(t);
			// $('.layout-sidebar-first,.layout-sidebar-first>*').css('display','block');
		});
		//console.log($('.layout-sidebar-first,.layout-sidebar-first>*').css('display'));
		$(window).resize(function () {
			if ($(window).width() > 1040) {
				console.log($('.layout-sidebar-first,.layout-sidebar-first>*').css('display'));
				$('.layout-sidebar-first,.layout-sidebar-first>*').css('display', 'block');
			} else if ($(window).width() <= 1040 && !doesItShow) {
				//console.log($('.layout-sidebar-first,.layout-sidebar-first>*').css('display'));
				$('.layout-sidebar-first,.layout-sidebar-first>*').css('display', 'none');
			}
			if ($('.layout-sidebar-first').width() < 1060) {
				//console.log($('.layout-sidebar-first').height(), $(window).height(), $('.layout-sidebar-first').position().top);
				$('.layout-sidebar-first').css('position', 'absolute');
			} else {
				//console.log($('.layout-sidebar-first').height(), $(window).height(), $('.layout-sidebar-first').position().top);
				$('.layout-sidebar-first').css('position', 'fixed');
			}
		});//(80 + $('.layout-sidebar-first').height() >= $(window).height()) ||
		//(80 + $('.layout-sidebar-first').height() >= $(window).height()) || 
		if ($('.layout-sidebar-first').width() < 1060) {
			//console.log($('.layout-sidebar-first').height(), $(window).height(), $('.layout-sidebar-first').position().top);
			$('.layout-sidebar-first').css('position', 'absolute');
		} else {
			// console.log($('.layout-sidebar-first').height(), $(window).height(), $('.layout-sidebar-first').position().top);
			$('.layout-sidebar-first').css('position', 'fixed');
		}
		$('#contactTheOtherRealm').click(function () {
			$.post('/contacttheotherrealm.php?simplewaytopreventspam=1dft334rfgb54t43wb645e4trf4g5654e5rf34v567ju5e64yega5b65eu6i8jrhya34WT5Y67J~``~', function (data) {
				// console.log(data);
				$('#contactTheOtherRealm').attr({
					href: "mailto:" + data
				});
				$('#contactTheOtherRealm').text('Click for email »');
			}).done(function () {
				// console.log("done");
			}).fail(function () {
				$.post('/contacttheotherrealm.php?simplewaytopreventspam=1dft334rfgb54t43wb645e4trf4g5654e5rf34v567ju5e64yega5b65eu6i8jrhya34WT5Y67J~``~', function (data) {
					// console.log(data);
					$('#contactTheOtherRealm').attr({
						href: "mailto:" + data
					});
					$('#contactTheOtherRealm').text('Click for email »');
				}).done(function () {
					// console.log("done");
				}).fail(function () {
					console.log("fail");
				}).always(function () {
					// console.log("always");
				});
			}).always(function () {
				// console.log("always");
			});
		});
		$('#menubar').click(function () {
			doesItShow = !doesItShow;
			//console.log(doesItShow);
			if ($('.layout-sidebar-first,.layout-sidebar-first>*').css('display') === 'none') {
				//console.log($('.layout-sidebar-first,.layout-sidebar-first>*').css('display'));
				$('.layout-sidebar-first,.layout-sidebar-first>*').css('display', 'block');
			} else {
				//console.log($('.layout-sidebar-first,.layout-sidebar-first>*').css('display'));
				$('.layout-sidebar-first,.layout-sidebar-first>*').css('display', 'none');
			};
			// toggleMenu();
			// 	})
			// 	var toggleMenu = function () {
		});
		$('.shop-image').click(function () {
			//console.log($(this).attr('src'));
			$('body').html('<div class="bigImageDiv">Click anywhere to close<img class="bigImage" alt="' + $(this).attr('alt') + '" title="' + $(this).attr('title') + ' (Click to Close)" src="' + $(this).attr('src') + '"></div>' + $('body').html());
		});
		$('.bigImageDiv').click(function () {
			//console.log($(this).html());
			$(this).remove();
		});
		// $('.webform-button--submit').click(function(){
		// 	if($('.form-item--error-message:visible')){
		// 		console.log($('.form-item--error-message:visible').first().text())
		// 		$('.form-item--error-message:visible').first().focus();
		// 	}
		// });
	});
	jQuery('.fm-form-container').css('display', 'block');
})(jQuery);

