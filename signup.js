const email = document.getElementById("email");
const emailHelp = document.getElementById("emailHelp");

const fullName = document.getElementById("fullName");
const fullNameHelp = document.getElementById("fullNameHelp");

const password = document.getElementById("password");
const passwordHelp = document.getElementById("passwordHelp");

const verifyPassword = document.getElementById('verifyPassword');
const verifyPasswordHelp = document.getElementById('verifyPasswordHelp');

const emailValidatorRegEx = new RegExp(
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);
const passwordRegEx = new RegExp('^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$')
const fullNameValidatorRegEx = new RegExp('^[a-zA-Z ]{3,}$');
const form = document.getElementById("signUpForm");

function errorActivator(booleanCallBack, node, nodeHelp, errorMessage) {
  condition = booleanCallBack();
  console.log(condition);
  if (condition) {
    node.classList.add("border-danger");
    nodeHelp.innerText = errorMessage;
    return false;
  } else {
    nodeHelp.innerText = "";
    if (node.classList.contains("border-danger")) {
      node.classList.remove("border-danger");
    }
    return true;
  }
}

function checkFullName(){
  let isFullName = fullNameValidatorRegEx.test(fullName.value);
  return errorActivator(function(){
    return !isFullName;
  }, fullName, fullNameHelp, 'Full name is not Valid')

}
function checkEmail() {
  let isEmail = emailValidatorRegEx.test(email.value);
  return errorActivator(
    function() {  // callback fuction
      return !isEmail;
    },
    email, // reference to our email input field
    emailHelp, // reference to our email small elemeent that shows error
    "Email is Invalid" // our error message
  );
}
function checkPassword() {
  let isPassword = passwordRegEx.test(password.value);
  return errorActivator(
    function() {
      return !isPassword;
    },
    password,
    passwordHelp,
    "Password must atleast be 6 characters long with atleast one number and one special charcter !@#$%^&*"
  );
}

function checkVerifyPassword() {
  return errorActivator(
    function() {
      return password.value !== verifyPassword.value;
    },
    verifyPassword,
    verifyPasswordHelp,
    "Password don't match"
  );
}


function checkInputs(e) {
  let noError = false;
  let noEmailError = checkEmail()
  let noPasswordError = checkPassword()
  let noVpasswordError = checkVerifyPassword()
  let noFullNameError = checkFullName();
  noError = noEmailError && noPasswordError && noVpasswordError && noFullNameError;
  if (!noError) {
    e.preventDefault();
  }
}

fullName.addEventListener("blur", function() {
  checkFullName();  
})
email.addEventListener("blur", function() {
  checkEmail();
});
password.addEventListener("blur", function() {
  checkPassword();
});
verifyPassword.addEventListener("blur", function(){
  checkVerifyPassword();
})

form.addEventListener('submit', checkInputs);