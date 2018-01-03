$('a.toggle').on('click', function () {
	if ($(this).text() === 'Screenshot -') {
		$(this).text('Screenshot +');
		$(this).nextAll('a.screenshot').find('img').hide();
	} else {
		$(this).text('Screenshot -');
		$(this).nextAll('a.screenshot').find('img').show();
	}
});
