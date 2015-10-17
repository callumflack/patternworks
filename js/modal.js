/**
 * Run on page load
 */
$(document).ready(function() {

    // Toggle lightbox component
    // ================================

    $('[data-toggle="modal"]').on(com.ward6.EDetailerPage.UIEvents.UP,
        function(e) {
            e.preventDefault();

            $(".Modal").addClass('is-displayed');
        }
    );

    $(".Modal-close").on(com.ward6.EDetailerPage.UIEvents.UP,
        function(e) {
            e.preventDefault();

            var modalClose = $(this),
                modalWindow = modalClose.parents(".Modal"),
                modalVideo = modalWindow.find("video");

            $(".Modal").removeClass('is-displayed');
            modalVideo.get(0).pause();
        }
    );

});


