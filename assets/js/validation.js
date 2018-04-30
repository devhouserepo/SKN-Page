const _formObject = document.querySelector("#form-object");
const _fieldsObjects = document.querySelectorAll(".validationField");
const _areaObject = document.querySelector(".validateObjectTextArea");
const _submitBtnObjet = document.querySelector(".form-submit");

_submitBtnObjet.addEventListener("click", function(e) {
  _fieldsObjects.forEach(elem => {
    if (elem.value !== "") {
      elem.classList.remove("alert", "alert-danger");
      elem.classList.add("ok");
    } else if (elem.value == "") {
      elem.classList.add("alert", "alert-danger");
    }
  });
  if (_areaObject.value != "") {
    console.log(_areaObject.value);
    _areaObject.classList.remove("alert", "alert-danger");
  } else {
    _areaObject.classList.add("alert", "alert-danger");
  }
});
_areaObject.addEventListener("change", function(e) {
  if (_areaObject.value != "") {
    console.log(_areaObject.value);
    _areaObject.classList.remove("alert", "alert-danger");
    _areaObject.classList.add("ok");
  } else {
    _areaObject.classList.add("alert", "alert-danger");
  }
});
_fieldsObjects.forEach(item => {
  item.addEventListener("change", function(e) {
    _fieldsObjects.forEach(elem => {
      if (elem.value !== "") {
        elem.classList.remove("alert", "alert-danger");
        elem.classList.add("ok");
      } else {
        elem.classList.add("alert", "alert-danger");
      }
    });
  });
});
$(".validateObjectTextArea")
  .add(".validationField")
  .on("change", function() {
    if (
      _fieldsObjects[0].value &&
      _fieldsObjects[1].value &&
      _fieldsObjects[2].value &&
      _fieldsObjects[4].value &&
      _areaObject.value !== ""
    ) {
      $(".form-submit").addClass("btn-animate");
    } else {
      $(".form-submit").removeClass("btn-animate");
    }
  });
