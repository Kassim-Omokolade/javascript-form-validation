const form= document.querySelector("#form");

const username= document.getElementById("username");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const captcha = document.getElementById("captcha");
const email = document.getElementById("email");


//add a submit event listener on the form 
//prevent the dafault behaviour
//event propagation


form.addEventListener("submit",(event)=>{
    event.preventDefault()
    checkinput()
});

function setError(input,message){
    const formControl = input.parentElement
    const small = formControl.querySelector('small')
    formControl.className = "form-control error";
    small.innerText = message;
}
function setSuccess(input){
    const formControl =input.parentElement
    formControl.className="form-control success";
}

function checkinput() {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
     const passwordValue = password.value.trim();
     const password2Value = password2.value.trim();
     const captchaValue = captcha.value.trim();
    //  console.log(usernameValue,emailValue,passwordValue,password2Value,captchaValue);
    //validate the username (empty fields, min lenght is 5)
 if (usernameValue === "") {
   //username is required
   setError(username, "username is required");
 } else if (usernameValue.length < 5) {
   //minimun username lenght is 5
   setError(username, " minimum username lenght is 5");
 } else {
   //success
   setSuccess(username);
 }
//validate email(email must not be empty, email must include @)
 if (emailValue === ""){
    setError(email, "email is required");
 } else if (!emailValue.includes("@")){
    setError(email, " email must include @");
 }else{
    setSuccess(email);
 }

// password must not be empty and the min password is 7

if (passwordValue === ""){
    setError(password, " password is required")
} else if (passwordValue.length < 7){
    setError(password, " minimum password is 7");
}else{
     setSuccess(password);
}

if (password2Value === ""){
    setError(password2, "password is required")
} else if (password2Value !== passwordValue){
     setError(password2, "confirm password")
}else{
    setSuccess(password2);
}
if (captchaValue === ""){
    setError(captcha, "captcha is required");
}else{
    setSuccess(captcha)
}

}

//select that button using the class show-btn

const button = document.querySelector(".show-btn");
button.addEventListener("click", (event) => {
  event.preventDefault();
  const inputType = password.getAttribute("type")
   if (inputType === "password"){
     password.setAttribute("type", "text");
     button.value = "Hide";
   }else {
     password.setAttribute("type", "password");
      button.value = "show";
   }
});

captcha.addEventListener("input", (event)=>{
    const img = document.querySelector("img");
    const text = event.target.value
    const blurValue = 20 - text.length;
    img.style.filter = `blur(${blurValue}px)`

    if (blurValue <= 0){
        setSuccess(captcha);

    }else{
        setError(captcha,"text is not enough")
    }
});