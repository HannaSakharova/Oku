//Popup registration/authorization
const class_list = {
	popup: 'popup',
	popup_active: 'popup-active',
	popup_has_scroll: 'popup-has-scroll',
	popup_body: 'authorization',
	trigger_open: 'popup-open',
	trigger_close: 'popup-close'
};

document.addEventListener('click', function (event) {
	//Open
	if (event.target.closest(`.${class_list.trigger_open}`)) {
		event.preventDefault();

		const target = event.target.closest(`.${class_list.trigger_open}`);
		const popupId = target.getAttribute('href').replace('#', '');
		const popup = document.getElementById(popupId);

		popup.classList.add(class_list.popup_active);
	}

	//Close
	if (event.target.closest(`.${class_list.trigger_close}`) || event.target.clasList.contains(`.${class_list.popup_active}`)) {
		event.preventDefault();
		const popup = event.target.closest(`.${class_list.popup_active}`);
		popup.classList.remove(class_list.popup_active);
	}
});
