$(document).ready(function () {
    $("#error").hide();
    function addErrorMessage(text) {
        return $("#error").text(text).css("color",'black');
    }
    document.getElementById("next-button-octagons").onclick = function () {
        $("#error").hide().slideDown(1500).slideUp(1500);
        let letterPasword = "MIDNIGHT"
        let numberPassword = "58343466";
        var letterInput = document.getElementById('OctagonLetterForm').value.toUpperCase();
        var numberInput = document.getElementById('OctagonNumberForm').value;
        if (letterInput === "" || numberInput === "") {
            addErrorMessage("One of the fields are empty");
        } else if (letterInput === letterPasword && numberPassword === numberInput) {
            addErrorMessage("redirecting...");
            $('#lock').attr('src','Images/Unlocked.png');
            setTimeout(function ()
            {
                location.href = "riddle.html"
            },5000);
        } else if (letterInput !== letterPasword || numberInput !== numberInput) {
            addErrorMessage("some of the fields are incorrect");
        }
    };


});