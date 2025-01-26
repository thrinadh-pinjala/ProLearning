const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});


function validateForm1() {
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  // Validate email and password
  var emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

  if (!emailPattern.test(email)) {
      alert('Please enter a valid email address');
      return false;
  }

  if (!passwordPattern.test(password)) {
      alert('Please enter a valid password (6-20 characters with at least one lowercase letter, one uppercase letter, and one digit)');
      return false;
  }

  // Display the screen for adding items to the array
  document.getElementById('loginScreen').style.display = 'none';
  window.location.href = "s5.html" ;

  return false; // Prevent form submission
}

function validateForm2() {
  var user = document.getElementById('user').value;
  var password = document.getElementById('password').value;

  // Validate email and password
  var emailPattern = "admin";
  var passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

  if (user !== emailPattern) {
    alert('Please enter a valid User Name');
    return false;
  }
  

  if (!passwordPattern.test(password)) {
      alert('Please enter a valid password (6-20 characters with at least one lowercase letter, one uppercase letter, and one digit)');
      return false;
  }

  window.location.href = "index.html";

  return false; // Prevent form submission
}