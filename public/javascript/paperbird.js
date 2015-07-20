var navHeight = $("#con").height();

$('#nav').affix({
    offset : {
        top : function() {
            return navHeight;
        }
    }
});

var public_images_portfolio_pTrump = ["Saab", "Volvo", "BMW"];

function enlargify(link) {
	$('.thumb').hide();
	$('#thumbnail').show();
	//$('#large-image').attr("src", link);
	$('#links').css("height", "400");
	$('#large-image').css("height", "380");
	$('#large-image').css("background-image",'url(' + link + ')');
	$('#large-image-container').show();
}

//for each element that is classed as 'pull-down', set its margin-top to the difference between its own height and the height of its parent
$('.bottom-aligned-text').each(function() {
	$(this).css('margin-top', $(this).parent().parent().height()-$('#paperbird-main-logo').height()-$(this).height())
});

function goBack() {
	$('.thumb').show();
	$('#thumbnail').hide();
	$('#large-image-container').hide();
}