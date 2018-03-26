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
        console.log($(".singular-project-container"))
         let expandSingularProjectContainer = {
            'width': '400px',
            'height' : '400px',
            'z-index': 3
        }
    
        $(this).children(".projects-shape-1, .projects-shape-2").css(expandSingularProjectContainer)

        // let currentTarget = e.currentTarget
        // setTimeout(function(target) {       
        //     $(target).find(".project-about").css("opacity", "1")
        // }, 700, currentTarget)
    })


    $(".singular-project-container").mouseleave(function(e) {
        let collapseSingularProjectContainer = {
            'width': '200px',
            'height' : '200px',
            'z-index': 2
        }

        $(this).children(".projects-shape-1, .projects-shape-2").css(collapseSingularProjectContainer)
    })


    // Project section ends
});