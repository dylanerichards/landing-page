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

    if (value.match(/^\d{16}$/) && startsCorrectly(value)) {
      console.log("valid")
    } else {
      console.log("invalid")
    }
  })

  function startsCorrectly(cardNumber) {
    if(cardNumber[0] == 3) {
      return true
    } else if(cardNumber[0] == 4) {
      return true
    } else if(cardNumber[0] == 5) {
      return true
    } else {
      return false
    }
  }

})
