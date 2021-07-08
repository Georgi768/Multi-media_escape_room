$(document).ready(function () {
    $("#error").hide();

    function addErrorMessage(text) {
        return $("#error").text(text);
    }

    document.getElementById("next-button").onclick = function () {
        $("#error").hide().slideDown(1500).slideUp(1500);
        let password = "FRONTCLOSET"
        var input = document.getElementById('compassForm').value.toUpperCase();
        if (input === "") {
            addErrorMessage("This field is empty");
        } else if (input === password) {
            location.href = "Octagone.html";
        } else if (input !== password) {
            addErrorMessage("The input is incorrect");
        }
    };
});








