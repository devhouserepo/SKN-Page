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



  function displayWhiteModalAboutProject() {
    let projectId = $(this).attr("data-id")
    let project
    for (i = 0; i < projects.length; i++) {
      if (projects[i].id == projectId) {
        project = projects[i]
      }
    }
    $('.mobile-project__title').text(`${project.title}`)
    $('.mobile-project__kind').text(`${project.kind}`)
    $('.mobile-project__description').text(`${project.description}`)
    if (!!project.website) {
      $(".mobile-project__btn-more").attr('href', `${project.website}`).show()
    } else {
      $(".mobile-project__btn-more").hide()
    }
    $('.mobile-project').css('z-index', '20').fadeIn('slow')
  }


  function changesAccordingToWindowResolution() {
    if (window.innerWidth < 750) {
      $('.single-container').each(function (index) {
        $('.single-container__project-paragraphs__description').css('display', 'none')
        $(this).on('click', displayWhiteModalAboutProject)
      })
    } else {
      $('.single-container').each(function (index) {
        $('.single-container__project-paragraphs__description').css('display', 'inline-block')
        $(this).off('click')
      })
    }
  }



  function closeWhiteModalOnXClick() {
    $('.mobile-project__close-icon').on('click', function () {
      $('.mobile-project').css('z-index', '20').fadeOut('slow')
    })
  }


  downloadThanDisplayProjectInfo()

  changesAccordingToWindowResolution()

  $(window).on('resize', changesAccordingToWindowResolution)

  closeWhiteModalOnXClick()


  // PROJECTS SECTION END

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
        $(".thumbnails").append(
          `<div class="flex-column align-items-center thumbnails__person">
                    <img class="thumbnails__person__photo"></img>
                    <p class="thumbnails__person__name">` +
          data[index].first_name +
          ` ` +
          data[index].last_name +
          `</p>
                    </div>`
        );
        $(".thumbnails__person__photo")
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
            $(".max-info__paragraphs").empty();
            $(".max-info__big-photo__wybierz").remove();
            $(".max-info__big-photo").css(
              "background-image",
              "url(" + data[index].photo + ")"
            );
            $(".max-info__paragraphs").append(
              `<p class="max-info__paragraphs__name">` +
              data[index].first_name +
              ` ` +
              data[index].last_name +
              `</p>
                        <p class="max-info__paragraphs__about">` +
              data[index].info +
              `</p>`
            );
            if (data[index].linkedin != "") {
              $(".max-info__paragraphs").append(
                `<a class="max-info__paragraphs__linkedin-btn" target="_blank" href="` +
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
    $(".thumbnails").empty();
    $(".selected-project").toggleClass("selected-project");
    highlighSelectedProject(teamDevhouse);
    getDevhouseJSON();
  });

  $("#team-startup").click(function () {
    $(".thumbnails").empty();
    $(".selected-project").toggleClass("selected-project");
    highlighSelectedProject(teamStartUp);
    $.getJSON("../../skn-members/startup.json", function (data) {
      $.each(data, function (index, item) {
        $(".thumbnails").append(
          `<div class="flex-column align-items-center thumbnails__person">
                        <img class="thumbnails__person__photo"></img>
                        <p class="thumbnails__person__name">` +
          data[index].first_name +
          ` ` +
          data[index].last_name +
          `</p>
                        </div>`
        );
        $(".thumbnails__person__photo")
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
            $(".max-info__paragraphs").empty();
            $(".max-info__big-photo__wybierz").remove();
            $(".max-info__big-photo").css(
              "background-image",
              "url(" + data[index].photo + ")"
            );
            $(".max-info__paragraphs").append(
              `<p class="max-info__paragraphs__name">` +
              data[index].first_name +
              ` ` +
              data[index].last_name +
              `</p>
                            <p class="max-info__paragraphs__about">` +
              data[index].info +
              `</p>`
            );
            if (data[index].linkedin != "") {
              $(".max-info__paragraphs").append(
                `<a class="max-info__paragraphs__linkedin-btn" href="` +
                data[index].linkedin +
                `"><img src="../assets/images/linkedin_white.png" width="80px"></a>`
              );
            }
          });
      });
    });
  });

  const rndPerson = (props) => {
    $(".max-info__paragraphs").empty();
    $(".max-info__big-photo__wybierz").remove();
    $(".max-info__big-photo").css(
      "background-image",
      "url(" + props[randomNumber].photo + ")"
    );
    $(".max-info__paragraphs").append(
      `<p class="max-info__paragraphs__name">` +
      props[randomNumber].first_name +
      ` ` +
      props[randomNumber].last_name +
      `</p>
                    <p class="max-info__paragraphs__about">` +
      props[randomNumber].info +
      `</p>`
    );
    if (props[randomNumber].linkedin != "") {
      $(".max-info__paragraphs").append(
        `<a class="max-info__paragraphs__linkedin-btn" href="` +
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
