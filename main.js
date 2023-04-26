
function validateForm() {
    var username = document.querySelector('input[type="text"]').value;
    var password = document.querySelector('input[type="password"]').value;

    if (username === '' || password === '') {
        alert('請重新輸入身分證號碼與密碼');
        return false;
    }
    else {
        alert("你被我駭了");
    }
}