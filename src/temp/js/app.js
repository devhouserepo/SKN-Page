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



    // Project section ends
});