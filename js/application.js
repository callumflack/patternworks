$(document).ready(function() {

    // Page slider (home<>work)
    // http://frankchimero.com/writing/other-halves/
    // =============================================

    $('[data-slide="open"]').click(function() {
        var txt = $('body').hasClass('is-work') ? 'View work' : 'Close';
        $(this).children('span').text(txt);
        $('body').toggleClass("is-work", 500);
    });

    $('[data-slide="close"]').click(function() {
        var txt = $("body").hasClass('is-work') ? 'View work' : 'Close';
        $('[data-slide="open"] span').text(txt);
        $("body").removeClass( "is-work", 500 );
    });


    // Toggle the fold-outs (JQuery version)
    // See: http://toddmotto.com/simple-html5-data-attribute-jquery-tabs-markup-free-and-relative-to-their-container-for-ultimate-reuse/
    // =================================================================================================================================

    $('[data-toggle]').on('click',
        function(e) {
            e.preventDefault();
            // console.log($(this).data('toggle'))
            // console.log($(this).parents('.Fold').siblings().find('[data-fold]') )
            console.log($(this).siblings('[data-content=' + $(this).data('toggle') + ']'))

            $(this)
                .toggleClass('is-active').siblings('[data-toggle]').removeClass('is-active')
            $(this)
                .siblings('[data-content=' + $(this).data('toggle') + ']').toggleClass('is-open')
                .siblings('[data-content]').removeClass('is-open')

            // For a nested link vars
            $(this)
                .parent().siblings().find('[data-content]').toggleClass('is-open')
        }
    );

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

});
