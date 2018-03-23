$(document).ready(function() {

    $("#click").click(function() {
        $("#form").slideToggle("slow");
        $("#form2").slideToggle("slow");
    });

    $("#click2").click(function() {
        $("#form").slideToggle("slow");
        $("#form2").slideToggle("slow");
    });

    $("#myModal").on("shown.bs.modal", function() {
        $("#myInput").trigger("focus");
    });



    // Projects section


    $(".projects__box, .projects__box2").mouseenter(function() {
        $(".button-more-about-project").hide()
        setTimeout(function() {
            $(".button-more-about-project").fadeIn("slow")
        }, 600)
    })


    $(".projects__box, .projects__box2").mouseleave(function() {
            $(".button-more-about-project").fadeOut("slow")
    })

    // Project section ends

});
