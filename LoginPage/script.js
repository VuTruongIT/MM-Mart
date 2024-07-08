//Func xử lý việc người dùng xem mật khẩu
document.getElementById("togglePassword").addEventListener("click", function () {
    var passwordField = document.getElementById("password");
    var icon = this.querySelector("i");

    if (passwordField.type === "password") {
      passwordField.type = "text";
      icon.classList.remove("bi-eye");
      icon.classList.add("bi-eye-slash");
    } else {
      passwordField.type = "password";
      icon.classList.remove("bi-eye-slash");
      icon.classList.add("bi-eye");
    }  
});

//Xử lý người dùng không nhập đủ tài khoản mật khẩu thì không cho phép Login
const email = document.getElementById('email');
const password = document.getElementById('password');
const btnLoginCursor = document.getElementById('btn-login-cursor');
function checkInputs() {
  const inputsFilled = email.value.trim() !== '' && password.value.trim() !== '';
  btnLoginCursor.classList.toggle('loginEnter', inputsFilled);
}
email.addEventListener('input', checkInputs);
password.addEventListener('input', checkInputs);

//Mặc định load trang khi bấm button và xử lý nghiệp vụ *****
document.getElementById('btn-login-cursor').addEventListener('click', function(event) {
  event.preventDefault();

});
