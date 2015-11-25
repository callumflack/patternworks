$(document).ready(function() {

    // Flickity
    // custom nav UI: http://codepen.io/desandro/pen/jEZwxb
    // captioning: http://codepen.io/desandro/pen/dPdVNM
    // ====================================================

    // external js: flickity.pkgd.js
    var $gallery = $('.Gallery').flickity({
        prevNextButtons: false,
        pageDots: false,
        autoPlay: 9000,
        selectedAttraction: 0.05,
        friction: 0.8,
        cellSelector: '.Gallery-cell',
        imagesLoaded: true,
        percentPosition: false,
        setGallerySize: false,
        wrapAround: true,
        freeScroll: true,
        // contain: true
    });

    // Gallery-cell caption with data attributes?
    // https://github.com/metafizzy/flickity/issues/290#issuecomment-157717618
    // ===> $( flkty.selectedElement ).attr('data-attribute')

    // Flickity instance
    // var flkty = $gallery.data('flickity');
    // // elements
    // var $caption = $('.Caption-line');

    // console.log( flkty.selectedElement.attr("data-caption") );
    // console.log( $(this).data("caption") );
    // console.log( selectedCaption );

    // set image caption using img's alt
    // https://github.com/metafizzy/flickity/issues/222
    // $gallery.on( 'cellSelect', function() {
    //     var element = flkty.selectedElement;
    //     var selectedCaption = $(element).children().data("caption");
    //
    //     $caption.text( selectedCaption );
    //     // $caption.text( flkty.selectedElement.alt )
    // });

    // select cell on button click
    // $('.button--previous').on( 'click', function() {
    //     $gallery.flickity('previous');
    // });
    // $('.button--next').on( 'click', function() {
    //     $gallery.flickity('next');
    // });





    // Inject background-images from a data-attr
    // =========================================
    // $('.Project-picture').css('background',
    //     function() {
    //         var bg = ('url(' + $(this).data("background") + ') no-repeat center center');
    //
    //         return bg;
    //     }
    // );


    // Unveil (lazy load)
    // http://luis-almeida.github.io/unveil/
    // =====================================
    $("img").unveil();


    // On Windows, detect & hide root element overflow
    // @url: https://web-design-weekly.com/2014/11/18/viewport-units-vw-vh-vmin-vmax/
    // =====================================
    var element = document.documentElement;

    if(element.scrollHeight > element.clientHeight) {
        // Overflow detected; force scroll bar
        element.style.overflow = 'scrollbar';
    } else {
        // No overflow detected; prevent scroll bar
        element.style.overflow = 'hidden';
    }

});
