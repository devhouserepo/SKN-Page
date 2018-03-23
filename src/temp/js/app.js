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
        console.log(e.currentTarget)
        let currentTarget = e.currentTarget
        setTimeout(function(currentTarget) {        
            $(".project-about").css("opacity", "1")
        }, 700)
    })

    $(".singular-project-container").mouseleave(function(e) {
        setTimeout(function() {
 
            // let targetObject = e.currentTarget
            $(".project-about").css("opacity", "0")
        }, 100)
    })


    // Project section ends

});
