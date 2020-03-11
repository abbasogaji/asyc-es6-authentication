// Target our html elements


const signupForm = document.getElementById("signUpForm");
const fullName = document.getElementById("fullName");
const fullNameHelp = document.getElementById("fullNameHelp");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordHelp = document.getElementById("passwordHelp");
const verifyPassword = document.getElementById("verifyPassword");





// event listners on our html elements
fullName.addEventListener("blur", function(){
        // check what we entered is valid or not
        checkIfFullNameIsCorrect()
})

email.addEventListener("blur", function(){
    //check if our email is correct
    checkIfEmailIsCorrect()
})

password.addEventListener("focusout", function(){
    checkIfPasswordIsValid()
})

verifyPassword.addEventListener("input", function(){
    checkIfPasswordsMatch()
})

signupForm.addEventListener("submit", checkAllFields)



// check for validator error or validate the fields
function checkIfFullNameIsCorrect(){
        if(new String(fullName.value).length < 1 ){
            // show error
            fullName.classList.add("border-danger")
            fullNameHelp.innerText = "Full Name is Invalid";
            return false;
        }else{
            // remove error
            if(fullName.classList.contains("border-danger")){
                fullName.classList.remove("border-danger")
            }
            fullNameHelp.innerText = null;
            return true;
        }
}

function checkIfEmailIsCorrect(){
    const emailValidatorRegEx = new RegExp(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );

      if(!emailValidatorRegEx.test(email.value)){
            email.classList.add("border-danger")
            return false;
        }else{
            // remove error
            if(email.classList.contains("border-danger")){
                email.classList.remove("border-danger")
            }
            return true;
        }
      
}

function checkIfPasswordIsValid(){
    const passwordRegEx = new RegExp('^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$')
    if(!passwordRegEx.test(password.value)){
            password.classList.add("border-danger")
            passwordHelp.innerText = "Password must atleast be 6 characters long with atleast one number and one special charcter !@#$%^&*"
                return false;
        }else{
            if(password.classList.contains("border-danger")){
                password.classList.remove("border-danger")

            } 
            passwordHelp.innerText = null;
            return true;
    }
}

function checkIfPasswordsMatch(){
    if(!(password.value == verifyPassword.value)){
        verifyPassword.classList.add("border-danger")
        verifyPasswordHelp.innerText = "Password dont match";
        return false;
}else{
        if(verifyPassword.classList.contains("border-danger")){
            verifyPassword.classList.remove("border-danger")

        } 
        verifyPasswordHelp.innerText = null;
        return true;
}
}

function checkAllFields(e){
        let isFullCorrect = checkIfFullNameIsCorrect()
        let isEmailCorrect = checkIfEmailIsCorrect()
        let isPasswordCorrect = checkIfPasswordIsValid()
        let doesPasswordMatch = checkIfPasswordsMatch();

        if(!isEmailCorrect || !isFullCorrect || !isPasswordCorrect || !doesPasswordMatch ){
            e.preventDefault()
        }
}


// display an error message if validation failed