// HTML Elements

var password = document.getElementById("password");
var confirm = document.getElementById("confirm");

confirm.onkeyup = function () {
    if (password.value != confirm.value) {
        password.classList.add("error");
        confirm.classList.add("error");
    } else if (password.value == confirm.value) {
        password.classList.remove("error");
        confirm.classList.remove("error");
    }
};

password.onkeyup = function () {
    if (password.value != confirm.value) {
        password.classList.add("error");
        confirm.classList.add("error");
    } else if (password.value == confirm.value) {
        password.classList.remove("error");
        confirm.classList.remove("error");
    }
};
