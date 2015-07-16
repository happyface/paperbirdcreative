var navHeight = $("#con").height();

$('#nav').affix({
    offset : {
        top : function() {
            return navHeight;
        }
    }
});

function enlargify(link) {
	$('.thumbs').hide();
	$('#large-image').attr("src", link);
	$('#links').css("height", "500px");
	console.log(link);
	$('#large-image').show();
}