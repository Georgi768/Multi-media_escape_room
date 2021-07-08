$(document).ready(function () {
    var points = 0;
    var userInput = [];
    $("#error").hide();

    function addMessage(text) {
        return $("#error").text(text).css("color", 'black');
    }

    var firstRiddle = $("#firstRiddle");
    var secondRiddle = $("#secondRiddle");
    var thirdRiddle = $("#thirdRiddle");

    document.getElementById("next-button-riddle").onclick = function () {
        var code = ["MN", "DF", "MK"];
        $("#error").hide().slideDown(1500).slideUp(1500);
        var userField = document.getElementById('guess').value.toUpperCase();

        for (let i = 0; i < userInput.length; i++) {
            if (userField === userInput[i]) {
                addMessage("This code already exist");
                return;
            }
        }


        for (let i = 0; i < code.length; i++) {
            if (userField === "") {
                addMessage("The field is empty");
            } else if (userField === code[i]) {
                userInput.push(code[i]);
                points = points + 1;
                addMessage("You guessed one code");
            }
        }
        if(points === 3)
        {
            location.href = "booking.html";
        }
    };

    $(firstRiddle).hover(function () {
        $("#variableImage").attr('src', "Images/adventureTime.jpg");
    });

    $(secondRiddle).hover(function () {
        $("#variableImage").attr('src', "Images/fire.jpg");
    });
    $(thirdRiddle).hover(function () {
        $("#variableImage").attr('src', "Images/wind.png");
    });

});