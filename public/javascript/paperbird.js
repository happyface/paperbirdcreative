var navHeight = $("#nav").height();
var detachTop = $("#detach").offset().top;
var navTop = $("#nav-wrapper").offset().top;

$('#nav-wrapper').height(navHeight);
$('#nav').affix({
    offset : {
        top : function() {
            if (($(window).scrollTop()) > detachTop) {
                return Number.MAX_VALUE;
            }
            return navTop;
        }
    }