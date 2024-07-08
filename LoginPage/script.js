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

//Ngăn hành động mặc định load trang của button và xử lý nghiệp vụ *****
document.getElementById('btn-login-cursor').addEventListener('click', function(event) {
  event.preventDefault();

  // Thực hiện các hành động khác ở đây nếu cần
  console.log('Button clicked!');
});