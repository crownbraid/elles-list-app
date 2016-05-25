$(function() {
    $('.erase').click(eraseState);
});

var erase = 0;

function eraseState() {
	if (erase == 0) {
		cursorSet();
		erase++;
	} else {
		$('body').css('cursor','default');
		erase--;
	}
}

function cursorSet() {
	$('body').css('cursor','url(images/eraser-cursor.ico), default');
}