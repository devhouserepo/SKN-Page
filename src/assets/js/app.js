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


    $(".singular-project-container").mouseenter(function(e) {
        let currentTarget = e.currentTarget
        setTimeout(function(target) {       
            $(target).find(".project-about").css("opacity", "1")
        }, 700, currentTarget)
    })

    $(".singular-project-container").mouseleave(function(e) {
        let currentTarget = e.currentTarget
        setTimeout(function(target) {  
            $(target).find(".project-about").css("opacity", "0")
        }, 200, currentTarget)
    })


    // Project section ends

});
