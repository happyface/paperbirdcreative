var navHeight = $("#con").height();

$('#nav').affix({
    offset : {
        top : function() {
            return navHeight;
        }
    }
});

function enlargify(link) {
	$('.thumb').hide();
	$('#large-image').attr("src", link);
	$('#links').css("height", "400");
	$('#large-image').css("height", "380");
	$('#large-image-container').show();
}

function goBack() {
	$('.thumb').show();
	$('#large-image-container').hide();
}