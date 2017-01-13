$(document).ready(function() {
  $("form#dateform").submit(function(event) {
    $(".male, .female, .monkey, #result").hide();
    var firstName = $("#name").val();
    var lookFor = $("input:radio[name=lookFor]:checked").val();
    var money = $("input:radio[name=money]:checked").val();

    $("#result").show();
    $(".userName").text(firstName);
    if(lookFor==="male" && money==="rich"){
      $("#dateform").removeClass();
      $(".male.rich").show();
      $(".male.rich img").show();
    }else if(lookFor === "male" && money==="notRich") {
      $(".male.notRich").show();
      $(".male.notRich img").show();
    }else if(lookFor === "female" && money==="rich") {
      $(".female.rich").show();
      $(".female.rich img").show();
    }else if(lookFor === "female" && money==="notRich") {
      $(".female.notRich").show();
      $(".female.notRich img").show();
    }else {
      $(".monkey").show();
      $(".monkey img").show();
    }
    event.preventDefault();
  });
});
