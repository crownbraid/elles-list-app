$(function() {
    $('.erase').click(eraseState);
});

var erase = 0;

function eraseState() {
	if (erase == 0) {
		cursorSet();
		erase++;} 
	else {
		$('body').css('cursor','default');
		erase--;
	}
}

function eraseTask() {
	if (erase == 1) {
		$(this).parent().remove();
		console.log($(this));
		$('#newInput').show();
	}
}

function cursorSet() {
	$('body').css('cursor','url(images/eraser-cursor.ico), default');
}