$("document").ready(function() {

  $("button").click(function() {
    validateAll()
    moveImage()
  })

  $(".email").keyup(function() {
    var value = $(".email").val().split("")

    if (validEmail(value) == true) {
      $(".email-valid").text("Valid email!") 
    } else {
      $(".email-valid").text("")
    }
  })

  $(".phone").keyup(function() {
    var value = $(".phone").val().replace(/\D/g,'')

    if(validPhone(value) == true) {
      $(".phone-valid").text("Valid phone!")
    } else {
      $(".phone-valid").text("")
    }
  })

  $(".cc").keyup(function() {
    var value = $(".cc").val().replace(/\D/g,'')
    if(validCc(value) == true) {
      $(".cc-valid").text("Valid card!")
    } else {
      $(".cc-valid").text("")
    }

  })

  function startsCorrectly(cardNumber) {
    if(cardNumber[0] == 3) {
      $(".ae").addClass("highlight")
      $(".mc").removeClass("highlight")
      $(".visa").removeClass("highlight")
      return true
    } else if(cardNumber[0] == 4) {
      $(".visa").addClass("highlight")
      $(".mc").removeClass("highlight")
      $(".ae").removeClass("highlight")
      return true
    } else if(cardNumber[0] == 5) {
      $(".mc").addClass("highlight")
      $(".visa").removeClass("highlight")
      $(".ae").removeClass("highlight")
      return true
    } else {
      $(".visa").removeClass("highlight")
      $(".ae").removeClass("highlight")
      $(".mc").removeClass("highlight")
      return false
    }
  }

  function validEmail(value) {
    if(_.countBy(value)['@'] == 1) {
      return true
    } else {
      return false
    }
  }

  function validPhone(value) {
    if (value.match(/^\d{10}$/)) {
      return true
    } else {
      return false
    }
  }

  function validCc(value) {
    if (startsCorrectly(value) && value.match(/^\d{16}$/)) {
      return true
    } else {
      return false
    }
  }

  function validateAll() {
    var email = $(".email").val()
    var card = $(".cc").val()
    var phone = $(".phone").val()

    if(validEmail(email) && validCc(card) && validPhone(phone)) {
      $("body").empty()
      $("body").append("<img class='test-image' src='assets/images/testImg.jpg'></img>")
    } else {
      $("h2").text("You need to enter valid information!")
    }
  }

  function moveImage() {
    $("img").click(function() {
      alert("Some day I will move this all over the DOM!")
    })
  }

})

