window.addEventListener('load', (event) => {

    // When the user clicks on <span> (x), close the modal and display the multicolor rainbow effect
    $('span.close').click(function(e) {

        $('#myModal').css('display', 'none');
        $(".multicolor-effect-wrapper").fadeIn(500);
        $(".effect").addClass("multicolor-effect-load");

        setTimeout(function() {
            $(".multicolor-effect-wrapper").fadeOut(1000);
        }, 4000);

        e.stopImmediatePropagation();

    });

    // When the user clicks anywhere outside of the modal, close the modal and display the multicolor rainbow effect
    window.onclick = function(event) {

        if (event.target == $('#myModal')[0]) {
            $('#myModal').css('display', 'none');
            $(".multicolor-effect-wrapper").fadeIn(500);
            $(".effect").addClass("multicolor-effect-load");
            setTimeout(function() {
                $(".multicolor-effect-wrapper").fadeOut(1000);
            }, 4000);
        }

    }

});