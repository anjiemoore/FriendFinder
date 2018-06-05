$(document).ready(function(){
    $('select').formSelect();
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
         object: {
            name: name,
            url: url,
            answers: answers
        }
      }

      $.post("/api/friends", userInput)
        .done(function(data) {
          
            $('#userMatch').html(data.matchName);
            $('#modal1').modal('open');
        });
  });
