$(document).ready(function () {

    $("#click").click(function () {
        $("#form").slideToggle("slow");
        $("#form2").slideToggle("slow");
    });

    $("#click2").click(function () {
        $("#form").slideToggle("slow");
        $("#form2").slideToggle("slow");
    });

    $("#myModal").on("shown.bs.modal", function () {
        $("#myInput").trigger("focus");
    });



    // Projects section

    $(".button-more-about-project").hide()
    $(".projects-shape-1, .projects-shape-2").mouseenter(function (targetObject) {
        $(".button-more-about-project").hide()
        setTimeout(function (a) {
            a.fadeIn("slow")
        }, 600, $(targetObject.currentTarget).find(".button-more-about-project"))
    })


    $(".projects-shape-1, .projects-shape-2").mouseleave(function (targetObject) {
        let a = $(targetObject.currentTarget).find(".button-more-about-project")
        a.fadeOut("slow", function() {
            a.hide()
        })
    })

    // Project section ends

});
