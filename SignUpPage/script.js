//Xử lý người dùng không nhập đủ số điện thoại thì không cho phép SignUp
const phone = document.getElementById('phone');
const btnSignUpCursor = document.getElementById('btn-signup-cursor');
function checkInputs() {
  const inputsFilled = phone.value.trim() !== '';
  btnSignUpCursor.classList.toggle('signupEnter', inputsFilled);
}
phone.addEventListener('input', checkInputs);

//Mặc định load trang khi bấm button và xử lý nghiệp vụ *****
document.getElementById('btn-signup-cursor').addEventListener('click', function(event) {
  event.preventDefault();

});
