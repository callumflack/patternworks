$(document).ready(function() {

    // Trigger Treatment/Condition tabs
    // ================================
    function toggleInfo(){

        // Open Treatment/Condition tabs
        // --------------------------------
        $(".Button--toggle").on("click", function(e) {
            e.preventDefault();

            var thisBtn  = $(this),
                thisPane = thisBtn.siblings(".Toggle-pane");

            // set the selected tab to active state
            thisPane.toggleClass("is-active");
            console.log(thisPane);

            // set the selected tab content to be visible
            // $(thisTabContent).addClass("is-active is-opaque");
        });

    }

    toggleInfo();


    // init Stellar parallax
    // ================================
    // don't init if mobile
    // if(!Modernizr.touch){
    //     $.stellar({
    //         horizontalScrolling: false,
    //         verticalOffset: 0,
    //         responsive: true
    //     });
    // }
    // $.stellar();


    // Toggle the signup form
    // ================================

    $("#fieldEmail").focus(
        function() {
            $(this).parent().removeClass('is-inactive');
            $(this).parent().addClass('is-active');
        }).blur(function() {
            $(this).parent().removeClass('is-active');
            $(this).parent().addClass('is-inactive');
        }
    );

    // Toggle the modal
    // ================================

    $('[data-toggle="modal"]').on("click",
        function(e) {
            e.preventDefault();

            $(".Modal").addClass('is-displayed');
        }
    );

    $(".Modal-close").on("click",
        function(e) {
            e.preventDefault();

            var modalClose = $(this),
                modalWindow = modalClose.parents(".Modal"),
                modalVideo = modalWindow.find("video");

            $(".Modal").removeClass('is-displayed');
            // modalVideo.get(0).pause();
        }
    );


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

            // For a nested link
            $(this)
                .parent().siblings('[data-content]').toggleClass('is-open')
        }
    );


    // Toggle (vanilla javscript)
    // See: http://toddmotto.com/stop-toggling-classes-with-js-use-behaviour-driven-dom-manipulation-with-data-states/
    // ===============================================================================================================

    // var nav = document.querySelector('[data-toggle]');
    // var toggleState = function (elem, one, two) {
    //     var elem = document.querySelector(elem);
    //     elem.setAttribute('data-state', elem.getAttribute('data-state') === one ? two : one);
    // };
    //
    // nav.onclick = function (e) {
    //     toggleState('[data-state]', 'closed', 'open');
    //     e.preventDefault();
    // };

    // ES5 using .bind() #ftw
    // nav.addEventListener('click', toggleState.bind(null, '.nav ul', 'closed', 'open'), false);


    // Inject background-images from a data-attr
    // =========================================

    $('.Project-picture').css('background',
        function() {
            var bg = ('url(' + $(this).data("background") + ') no-repeat center center');

            return bg;
        }
    );

    // Carousel
    // http://owlgraphic.com/owlcarousel/
    // ==================================

    $("#owl-example").owlCarousel({
        singleItem: true,
        slideSpeed : 300,
        paginationSpeed : 400,
        rtl: true,
        addClassActive : true,
        navigation : true, // Show next and prev buttons
        navigationText : ['<span>Show work</span>'],
        theme : false
    });

    // Toggle home-work
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


    // Unveil (lazy load)
    // http://luis-almeida.github.io/unveil/
    // =====================================

    $("img").unveil();

});
