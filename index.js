$("document").ready(function() {

  $(".email").keyup(function() {
    var value = $(".email").val().split("")

    if(_.countBy(value)['@'] == 1) {
      console.log("valid")
    } else {
      console.log("invalid")
    }
  })

  $(".phone").keyup(function() {
    var value = $(".phone").val().replace(/\D/g,'')

    if (value.match(/^\d{10}$/)) {
      console.log("valid")
    } else {
      console.log("invalid")
    }
  })

  $(".cc").keyup(function() {
    var value = $(".cc").val().replace(/\D/g,'')

    if (startsCorrectly(value) && value.match(/^\d{16}$/)) {
      console.log("valid")
    } else {
      console.log("invalid")
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

})
