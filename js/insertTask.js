$(function() {
	$('form').submit(function(e){
      	e.preventDefault();
		var newHtml = htmlWrite($("#newInput").val());
	    $("#items").append(newHtml);
	    controlCheckbox(document.querySelector('#cb' + num), 'list', { viewBox : '0 0 300 100', preserveAspectRatio : 'none' } );
	    num++;
	    $("#newInput").val("");
	    haltTasks();
    });
});

var num = 1;

function htmlWrite(input) {
	var html = '<li class="erasable"><input id="cb' + num;
	html += '" name="cb' + num;
	html += '" type="checkbox"><label for="cb' + num;
	html += '"><span>' + input;
	html += '</span></label></li>';
	return html;
}

function haltTasks() {
	var numItems = $("#items").children().length;
	if (numItems == 17) {
		$('#newInput').hide();
	}
}