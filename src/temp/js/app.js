$(document).ready(function () {
  //Checking which element overflows the document
  var docWidth = document.documentElement.offsetWidth;

  [].forEach.call(
    document.querySelectorAll('*'),
    function (el) {
      if (el.offsetWidth > docWidth) {
        console.log(el);
      }
    }
  );



  let number = 0;

  $("#private-button").click(function () {
    if (number === 2) {
      setTimeout(function () {
        document.getElementsByName("formSchool")[0].placeholder = "Uczelnia";
        document.getElementsByName("formDepartment")[0].placeholder = "Wydział";
      }, 0600);
    }

    number = 1;

    $("#form-contact, #form-content").slideToggle(600);
  });

  $("#company-button").click(function () {
    if (number === 1) {
      setTimeout(function () {
        document.getElementsByName("formSchool")[0].placeholder = "Firma";
        document.getElementsByName("formDepartment")[0].placeholder = "Dział";
      }, 0600);
    } else if (number === 0) {
      document.getElementsByName("formSchool")[0].placeholder = "Firma";
      document.getElementsByName("formDepartment")[0].placeholder = "Dział";
    }

    number = 2;

    $("#form-contact, #form-content").slideToggle(600);
  });

  $("#myModal").on("shown.bs.modal", function () {
    $("#myInput").trigger("focus");
  });

  $("div").on("click", function () {
    var target = $(this).attr("rel");

    $("#" + target)
      .show()
      .siblings("div")
      .hide();
  });


  //PROJECTS section START

  function displayProjectInfo(projectsData) {
    $('.single-container').each(function (index) {
      $(this).find($('.single-container__project-paragraphs__title')).text(`${projectsData[index].title}`)
      $(this).find($('.single-container__project-paragraphs__kind')).text(`${projectsData[index].kind}`)
      $(this).find($('.single-container__project-paragraphs__description')).text(`${projectsData[index].description}`)
      if ($(this).find($('.single-container__project-paragraphs__btn-more')) && projectsData[index].website != "") {
        $('.single-container__project-paragraphs__btn-more').attr('href', `${projectsData[index].website}`)
      }
    })
  }

  let projects

  function downloadThanDisplayProjectInfo() {
    $.getJSON("../../projects-info/projects-info.json", function (data) {
      projects = data
      displayProjectInfo(projects)
    })
  }

  downloadThanDisplayProjectInfo()


  $('.single-container').each(function (index) {
    $(this).on('touchstart', function () {
      let projectId = $(this).attr("data-id")
      for (i = 0; i < projects.length; i++) {
        if (projects[index].id == projectId) {
          $('.mobile-project__title').text(`${projects[index].title}`)
          $('.mobile-project__kind').text(`${projects[index].kind}`)
          $('.mobile-project__description').text(`${projects[index].description}`)
          if (projects[index].website != "") {
            $(".mobile-project__btn-more").attr('href', `${projects[index].website}`).css('opacity', '1')
          }
          $('.mobile-project').css({
            'opacity': '1',
            'z-index': '20'
          })
        }
      }
    })
  })


  $('.mobile-project__close-icon').on('touchstart', function () {
    $('.mobile-project').css({
      'opacity': '0',
      'z-index': '0'
    })
  })


  // TEAM section START

  let teamDevhouse = "#team-devhouse";
  let teamStartUp = "#team-startup";
  let teamLEAD = "#team-lead";
  let teamThinkIT = "#team-thinkit";
  let teamBootcamp = "#team-bootcamp";


  function highlighSelectedProject(elementId) {
    $(elementId).addClass("selected-project");
  }


  function getDevhouseJSON() {
    $.getJSON("../../skn-members/devhouse.json", function (data) {
      const props = [...data]
      randomNumber = Math.floor(Math.random() * data.length)
      rndPerson(props);

      $.each(data, function (index, item) {
        $(".members-thumbnails-container").append(
          `<div class="flex-column align-items-center one-thumbnail-container">
                    <img class="thumb-img"></img>
                    <p class="thumb-name-surname">` +
          data[index].first_name +
          ` ` +
          data[index].last_name +
          `</p>
                    </div>`
        );
        $(".thumb-img")
          .eq(index)
          .attr({
            id: data[index].first_name + data[index].last_name,
            alt:
              data[index].first_name +
              " " +
              data[index].last_name +
              ". Zdjęcie.",
            src: data[index].photo
          })
          .click(function () {
            $(".max-member-paragraphs").empty();
            $(".wybierz-osobe").remove();
            $(".max-photo").css(
              "background-image",
              "url(" + data[index].photo + ")"
            );
            $(".max-member-paragraphs").append(
              `<p class="max-name-surname">` +
              data[index].first_name +
              ` ` +
              data[index].last_name +
              `</p>
                        <p class="max-member-info-details">` +
              data[index].info +
              `</p>`
            );
            if (data[index].linkedin != "") {
              $(".max-member-paragraphs").append(
                `<a class="linkedin-btn" target="_blank" href="` +
                data[index].linkedin +
                `"><img src="../assets/images/linkedin_white.png" width="80px"></a>`
              );
            }
          });
      });
    });
  }

  getDevhouseJSON();

  highlighSelectedProject(teamDevhouse);

  $("#team-devhouse").click(function () {
    $(".members-thumbnails-container").empty();
    $(".selected-project").toggleClass("selected-project");
    highlighSelectedProject(teamDevhouse);
    getDevhouseJSON();
  });

  $("#team-startup").click(function () {
    $(".members-thumbnails-container").empty();
    $(".selected-project").toggleClass("selected-project");
    highlighSelectedProject(teamStartUp);
    $.getJSON("../../skn-members/startup.json", function (data) {
      $.each(data, function (index, item) {
        $(".members-thumbnails-container").append(
          `<div class="flex-column align-items-center one-thumbnail-container">
                        <img class="thumb-img"></img>
                        <p class="thumb-name-surname">` +
          data[index].first_name +
          ` ` +
          data[index].last_name +
          `</p>
                        </div>`
        );
        $(".thumb-img")
          .eq(index)
          .attr({
            id: data[index].first_name + data[index].last_name,
            alt:
              data[index].first_name +
              " " +
              data[index].last_name +
              ". Zdjęcie.",
            src: data[index].photo
          })
          .click(function () {
            $(".max-member-paragraphs").empty();
            $(".wybierz-osobe").remove();
            $(".max-photo").css(
              "background-image",
              "url(" + data[index].photo + ")"
            );
            $(".max-member-paragraphs").append(
              `<p class="max-name-surname">` +
              data[index].first_name +
              ` ` +
              data[index].last_name +
              `</p>
                            <p class="max-member-info-details">` +
              data[index].info +
              `</p>`
            );
            if (data[index].linkedin != "") {
              $(".max-member-paragraphs").append(
                `<a class="linkedin-btn" href="` +
                data[index].linkedin +
                `"><img src="../assets/images/linkedin_white.png" width="80px"></a>`
              );
            }
          });
      });
    });
  });

  const rndPerson = (props) => {
    //
    $(".max-member-paragraphs").empty();
    $(".wybierz-osobe").remove();
    $(".max-photo").css(
      "background-image",
      "url(" + props[randomNumber].photo + ")"
    );
    $(".max-member-paragraphs").append(
      `<p class="max-name-surname">` +
      props[randomNumber].first_name +
      ` ` +
      props[randomNumber].last_name +
      `</p>
                    <p class="max-member-info-details">` +
      props[randomNumber].info +
      `</p>`
    );
    if (props[randomNumber].linkedin != "") {
      $(".max-member-paragraphs").append(
        `<a class="linkedin-btn" href="` +
        props[randomNumber].linkedin +
        `" target="_blank"><img src="../assets/images/linkedin_white.png" width="80px"></a>`
      );
    }

  }

  // TEAM section END



  // $("#fullpage").fullpage({
  //   anchors: [
  //     "start",
  //     "projekty",
  //     "partnerzy",
  //     "zespol",
  //     "referencje",
  //     "kontakt"
  //   ],
  //   responsiveWidth: 991,
  //   sectionSelector: ".section",
  //   slideSelector: ".slide2",
  //   onLeave: function(index, nextIndex, direction) {
  //     // console.log(index);
  //     var leavingSection = $(this);
  //     //after leaving section 1
  //     if (index == 1) {
  //       document.getElementById("navbar").classList.add("scrolled");
  //     }
  //     if (index == 2 && direction == "up") {
  //       document.getElementById("navbar").classList.remove("scrolled");
  //     }
  //   },
  //   afterLoad: function(anchor, index) {
  //     if (index == 1) {
  //       document.getElementById("navbar").classList.remove("scrolled");
  //     } else if (index == 2) {
  //       $(".svg-1").css("display", "block");
  //       $(".svg-2").css("display", "block");
  //     } else if (index == 5) {
  //       $(".svg-3").css("display", "block");
  //     } else if (index == 6) {
  //       $(".svg-4").css("display", "block");
  //     }
  //     const anchorsLink = document.querySelectorAll(".navbar-nav li a");
  //     // console.log(anchor, index, anchorsLink);
  //     anchorsLink.forEach(elem => {
  //       elem.classList.remove("active");
  //     });
  //     anchorsLink[index - 1].classList.add("active");
  //   }
  // });

});
