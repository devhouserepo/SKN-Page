$(document).ready(function() {
  let number = 0;

  $("#private-button").click(function() {
    if (number === 2) {
      setTimeout(function() {
        document.getElementsByName("formSchool")[0].placeholder = "Uczelnia";
        document.getElementsByName("formDepartment")[0].placeholder = "Wydział";
      }, 0600);
    }

    number = 1;

    $("#form-contact, #form-content").slideToggle(600);
  });

  $("#company-button").click(function() {
    if (number === 1) {
      setTimeout(function() {
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

  $("#myModal").on("shown.bs.modal", function() {
    $("#myInput").trigger("focus");
  });

  $("div").on("click", function() {
    var target = $(this).attr("rel");

    $("#" + target)
      .show()
      .siblings("div")
      .hide();
  });

  // TEAM section START

  // function showInfoAboutMember(data, index) {
  //     console.log(data[index])
  //     $('.max-photo').css('background-image', 'url(' + data[index].photo + ')')
  // }

  

  let teamDevhouse = "#team-devhouse";
  let teamStartUp = "#team-startup";
  let teamLEAD = "#team-lead";
  let teamThinkIT = "#team-thinkit";
  let teamBootcamp = "#team-bootcamp";

  function highlighSelectedProject(elementId) {
    $(elementId).addClass("selected-project");
  }

  function getDevhouseJSON() {
    $.getJSON("../../skn-members/devhouse.json", function(data) {
      $.each(data, function(index, item) {
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
          .click(function() {
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

  $("#team-devhouse").click(function() {
    $(".members-thumbnails-container").empty();
    $(".selected-project").toggleClass("selected-project");
    highlighSelectedProject(teamDevhouse);
    getDevhouseJSON();
  });

  $("#team-startup").click(function() {
    $(".members-thumbnails-container").empty();
    $(".selected-project").toggleClass("selected-project");
    highlighSelectedProject(teamStartUp);
    $.getJSON("../../skn-members/startup.json", function(data) {
      $.each(data, function(index, item) {
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
          .click(function() {
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

  // TEAM section END

  // $(".thumbnail-container").each(function(index, item) {
  //     $(this).attr({
  //         id: "",
  //         src: ""
  //     })
  // })

  // TEAM section END
  $("#fullpage").fullpage({
    anchors: [
      "start",
      "projekty",
      "partnerzy",
      "członkowie",
      "rekrutacja",
      "kontakt"
    ],
    sectionSelector: ".section",
    slideSelector: ".slide2",
    onLeave: function(index, nextIndex, direction) {
      // console.log(index);
      var leavingSection = $(this);
      //after leaving section 1
      if (index == 1) {
        document.getElementById("navbar").classList.add("scrolled");
      }
      if (index == 2 && direction == "up") {
        document.getElementById("navbar").classList.remove("scrolled");
      }
    },
    afterLoad: function(anchor, index) {
      if (index == 1) {
        document.getElementById("navbar").classList.remove("scrolled");
      }
      const anchorsLink = document.querySelectorAll(".navbar-nav li a");
      console.log(anchor, index, anchorsLink);
      anchorsLink.forEach(elem => {
        elem.classList.remove("active");
      });
      anchorsLink[index - 1].classList.add("active");

    }
  });



});
