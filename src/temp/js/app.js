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

    $(".button-more-about-project").hide

    $(".projects__box, .projects__box2").mouseover(function() {
        setTimeout(function() {
            $(".button-more-about-project").show
        }, 1800); 
    })

    $(".projects__box, .projects__box2").mouseout(function() {
        setTimeout(function() {
            $(".button-more-about-project").hide
        }, 1800); 
    })

    // Project section ends

});
