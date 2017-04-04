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


})
