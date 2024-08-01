let SignUpbtn = document.getElementById("SignUpbtn");
let SignInbtn = document.getElementById("SignInbtn");
let namechange = document.getElementById("namechange");
let title = document.getElementById("title");

SignInbtn.onclick = function(){
    namechange.style.maxHeight="0";
    title.innerHTML="Sign In";
    SignUpbtn.classList.add("band");
    SignInbtn.classList.remove("band");
}
SignUpbtn.onclick = function(){
    namechange.style.maxHeight="65px";
    title.innerHTML="Sign Up";
    SignUpbtn.classList.remove("band");
    SignInbtn.classList.add("band");
}