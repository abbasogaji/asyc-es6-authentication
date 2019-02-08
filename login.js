const email = document.getElementById('email')
const password = document.getElementById('password')
const emailHelp = document.getElementById('emailHelp')
const passwordHelp = document.getElementById('passwordHelp')
const emailValidatorRegEx = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
const form  = document.getElementById('loginForm')
function checkEmail(){
        let isEmail = emailValidatorRegEx.test(email.value)
        if(!isEmail){
            emailHelp.innerText = "Email is Invalid"
            email.classList.add('border-danger')
            return false;
        }else{
            emailHelp.innerText = ""
            if(email.classList.contains('border-danger')){  
                email.classList.remove('border-danger')
            }
            return true;
        }
}
function checkPassword(){  
        if (password.value.length < 1){
            passwordHelp.innerText = "No password entered"
            password.classList.add('border-danger')
            return false
        }else{
            passwordHelp.innerText = ""
            if(password.classList.contains('border-danger')){  
                password.classList.remove('border-danger')
            }
            return true;

        }
}

function checkInputs(e){
    let noError = false;
    let noEmailError = checkEmail();
    let noPasswordError = checkPassword()
    noError = noEmailError && noPasswordError;
    if(!noError){
        e.preventDefault();
    }
    
}

email.addEventListener('blur', function() {
    checkEmail();
});
password.addEventListener('blur', function(){
    checkPassword()
})

form.addEventListener('submit', checkInputs);







