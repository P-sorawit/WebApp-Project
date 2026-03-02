function checkbox_sign() {
    var box_status = document.getElementById('box_showpass');
    var password = document.getElementById('password');
    if (box_status.checked) {
        password.type = "text";
    } else {
        password.type = "password";
    }
}

checkbox_sign();