$(document).ready(function () {

    $(document).foundation();

    $(function() {
        $('.top-bar-section a').smoothScroll({
            offset: -48,
            easing: 'swing',
            speed: 800
        });

        $('.title-area h1 a').smoothScroll({
            offset: -55,
            easing: 'swing',
            speed: 600
        });
    });

    // $('.top-bar-section a').click(function(e) {
    //  if($('.contain-to-grid, nav').hasClass('expanded')) {
    //      // console.log('Has Expanded Class');
    //      $('.contain-to-grid, nav').removeClass('expanded');
    //  } else {
    //      console.log('No Expanded Class');
    //  }
    // });

    $(function(){
        $('#Grid').mixitup();
    });

    $('.lazy').Lazy();

    $('a.gallery').featherlightGallery({
        previousIcon: '&#9664;',     /* Code that is used as previous icon */
        nextIcon: '&#9654;',         /* Code that is used as next icon */
        galleryFadeIn: 100,          /* fadeIn speed when slide is loaded */
        galleryFadeOut: 300          /* fadeOut speed before slide is loaded */
    });
    
	$('.sub-nav a').on('click', function (e) {
		e.preventDefault();
	});
});
window.onload = window.onresize = function () {
	var windowHeight = window.innerHeight;
	// console.log(windowHeight);
	// $('.banner, #contact').height(windowHeight-80);
	$('.section-head.about').css('margin-top', function (index) {
        index += 1;
        return index * windowHeight - 190;
    });
    $('section.banner').css('height', function (index) {
        index += 1;
        return index * windowHeight;
    });
}

function isElementInViewport(){
    var scrollTop = $(window).scrollTop();
    var viewportHeight = $(window).height();
    $('.skills-section .skills--bar:not(.html5)').each(function(){
        var top = $(this).offset().top;
        // console.log(top);
        // console.log(scrollTop + viewportHeight);
        if(scrollTop + viewportHeight >= top ){
            $(this).find('.expand-90').addClass('p90');
            $(this).find('.expand-70').addClass('p70');
            $(this).find('.expand-55').addClass('p55');
            $(this).find('.expand-60').addClass('p60');
            $(this).find('.expand-10').addClass('p10');
            $(this).find('.expand-30').addClass('p30');
            // console.log(true);
        }else{
            // console.log(false);
        }
    });
}

$(window).scroll(isElementInViewport);