$(document).ready(function () {
	//Function to detect WEBP support
	function testWebP(callback) {
		var webP = new Image();
		webP.onload = webP.onerror = function () {
			callback(webP.height == 2);
		};
		webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}
	testWebP(function (support) {
		if (support == true) {
			document.querySelector('body').classList.add('webp');
		} else {
			document.querySelector('body').classList.add('no-webp');
		}
	});

	//Check the devise
	const isMobile = {
		Android: function () {
			return navigator.userAgent.match(/Android/i);
		},
		BlackBerry: function () {
			return navigator.userAgent.match(/BlackBerry/i);
		},
		iOS: function () {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
		Opera: function () {
			return navigator.userAgent.match(/Opera Mini/i);
		},
		Windows: function () {
			return navigator.userAgent.match(/IEMobile/i);
		},
		any: function () {
			return (
				isMobile.Android()
				|| isMobile.BlackBerry()
				|| isMobile.iOS()
				|| isMobile.Opera()
				|| isMobile.Windows()
			);
		}
	};
	if (isMobile.any()) {
		document.body.classList.add('_touch');
	} else {
		document.body.classList.add('_pc');
	}

	//Menu burger
	let iconMenu = document.querySelector('.icon-menu');
	if (iconMenu) {
		const menuBody = document.querySelector('.menu__body');
		iconMenu.addEventListener('click', function (e) {
			document.body.classList.toggle('lock');
			iconMenu.classList.toggle('menu__body--active');
			menuBody.classList.toggle('menu__body--active');
		});
	}
	$('.menu__list').click(function (e) {
		$('.icon-menu,.menu__body').removeClass('menu__body--active');
		$('body').removeClass('lock');
	});

	//Hide a div at the bottom of the mainblock
	let closeTrigger = document.querySelector('.icon-close');
	if (closeTrigger) {
		const bodyTrigger = document.querySelector('.trigger-mainblock');
		closeTrigger.addEventListener('click', function (e) {
			bodyTrigger.classList.add('trigger-mainblock--hide');
		});
	}

});