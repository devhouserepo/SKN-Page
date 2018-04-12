$(document).ready(function () {

    let number = 0;

    $("#private-button").click(function () {

        if (number === 2) {

            $("#form-contact, #form-content").slideUp("slow");

            setTimeout(function () {

                document.getElementsByName('formSchool')[0].placeholder = 'Uczelnia';
                document.getElementsByName('formDepartment')[0].placeholder = 'Wydział';

            }, 0700);

        }

        $("#form-contact, #form-content").slideDown("slow");

        number = 1;

    });

    $("#company-button").click(function () {

        if (number === 1) {

            $("#form-contact, #form-content").slideUp("slow");

        } else if (number === 0) {

            document.getElementsByName('formSchool')[0].placeholder = 'Firma';
            document.getElementsByName('formDepartment')[0].placeholder = 'Dział';

        }

        setTimeout(function () {

            document.getElementsByName('formSchool')[0].placeholder = 'Firma';
            document.getElementsByName('formDepartment')[0].placeholder = 'Dział';

        }, 0700);

        number = 2;

        $("#form-contact, #form-content").slideDown("slow");

    });

    $("#myModal").on("shown.bs.modal", function () {

        $("#myInput").trigger("focus");

    });


    $('div').on('click', function () {

        var target = $(this).attr('rel');

        $("#" + target).show().siblings("div").hide();


    });




    // TEAM section START


    // function showInfoAboutMember(data, index) {
    //     console.log(data[index])
    //     $('.max-photo').css('background-image', 'url(' + data[index].photo + ')')
    // }


    function getDevhouseJSON() {
        $.getJSON('../../skn-members/devhouse.json', function (data) {
            $.each(data, function (index, item) {
                $('.members-thumbnails-container')
                    .append(
                        `<div class="flex-column align-items-center one-thumbnail-container">
                    <img class="thumb-img"></img>
                    <p class="thumb-name-surname">`
                        + data[index].first_name + ` ` + data[index].last_name +
                        `</p>
                    </div>`
                    )
                $('.thumb-img').eq(index)
                    .attr({
                        id: data[index].first_name + data[index].last_name,
                        alt: data[index].first_name + ' ' + data[index].last_name + '. Zdjęcie.',
                        src: data[index].photo
                    })
                    .click(function () {
                        $('.max-member-paragraphs').empty()
                        $('.wybierz-osobe').remove()
                        $('.max-photo').css('background-image', 'url(' + data[index].photo + ')')
                        $('.max-member-paragraphs').append(
                            `<p class="max-name-surname">`
                            + data[index].first_name + ` ` + data[index].last_name +
                            `</p>
                        <p class="max-member-info-details">`
                            + data[index].info +
                            `</p>`
                        )
                    })
            })
        })
    }


    getDevhouseJSON()


    $('#team-devhouse').click(function() {
        $('.members-thumbnails-container').empty()
        getDevhouseJSON()
    }) 



    $('#team-startup').click(function() {
        $('.members-thumbnails-container').empty()
        $.getJSON('../../skn-members/startup.json', function (data) {
            $.each(data, function (index, item) {
                $('.members-thumbnails-container')
                    .append(
                        `<div class="flex-column align-items-center one-thumbnail-container">
                        <img class="thumb-img"></img>
                        <p class="thumb-name-surname">`
                        + data[index].first_name + ` ` + data[index].last_name +
                        `</p>
                        </div>`
                    )
                $('.thumb-img').eq(index)
                    .attr({
                        id: data[index].first_name + data[index].last_name,
                        alt: data[index].first_name + ' ' + data[index].last_name + '. Zdjęcie.',
                        src: data[index].photo
                    })
                    .click(function () {
                        $('.max-member-paragraphs').empty()
                        $('.wybierz-osobe').remove()
                        $('.max-photo').css('background-image', 'url(' + data[index].photo + ')')
                        $('.max-member-paragraphs').append(
                            `<p class="max-name-surname">`
                            + data[index].first_name + ` ` + data[index].last_name +
                            `</p>
                            <p class="max-member-info-details">`
                            + data[index].info +
                            `</p>`
                        )
                    })
            })
        })

    })





    // TEAM section END




});
