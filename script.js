function check() {
    let pw = document.getElementById('password').value;
    let confirm = document.getElementById('c-password').value;
    let err = document.getElementById('confirm') 
    if(pw !== confirm || (pw === '' && confirm === '')) {
        err.textContent = '*Passwords do not match';
        err.style.color = 'red'
    } else {
        err.textContent = '*Passwords match';
        err.style.color = 'green'
    }
}
