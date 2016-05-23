$(function() {
	$('form').submit(function(e){
      	e.preventDefault();
		var newHtml = htmlWrite($("#newInput").val());
	    $("#items").append(newHtml);
	    num++;
	    console.log(num);
    });
});

var num = 5;

function htmlWrite(input) {
	html = '<li><input id="cb' + num;
	html += '" name="cb' + num;
	html += '" type="checkbox"><label for="cb' + num;
	html += '"><span>' + input;
	html += '</span></label></li>';
	return html;
}