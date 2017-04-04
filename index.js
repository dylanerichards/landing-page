$("document").ready(function() {
  $("button").click(function() {
    validateAll()
  })

  $(".email").keyup(function() {
    var value = $(".email").val().split("")

    if (validEmail(value) == true) {
      console.log("valid email")
    }
  })

  $(".phone").keyup(function() {
    var value = $(".phone").val().replace(/\D/g,'')

    if(validPhone(value) == true) {
      console.log("valid phone")
    }
  })

  $(".cc").keyup(function() {
    var value = $(".cc").val().replace(/\D/g,'')
    if(validCc(value) == true) {
      console.log("valid cc")
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
      console.log("we out!")
    } else {
      console.log("nope!")
    }
  }

})

