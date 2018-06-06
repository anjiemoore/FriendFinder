$(document).ready(function(){
    $('select').formSelect();
    console.log("what");
  });
  
  $("#submit").on("click", function(event) {
      event.preventDefault();
      var answers = [];
      for (var i = 0; i <10; i++) {
          var answer = $("." + i).val()
          answers.push(answer);
      }
      var userInput = {
         name: $("#name").val().trim(),
         url: $("#imageURL").val().trim(),
         answer: answers
      }
console.log(userInput);

      $.post("/api/friends", userInput)
        .done(function(data) {
          console.log(data);
          console.log(data.name);
            $('#userMatch').html(data.name);
            $('#modal1').modal('open');
        });
  });
