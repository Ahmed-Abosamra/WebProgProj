function login() {
  var user = document.myform.email.value;
  var pass = document.myform.password.value;
  var a = "AHMED@GMAIL.COM";

  if (user.toUpperCase() == a && pass.toUpperCase() == a) {
    window.location.href = "index.html";
  } else {
    window.alert("Error in the user name or password");
  }
}

function openmenu() {
  var menu = document.getElementById("menu");
  menu.style.width = "240px";
}

function closemenu() {
  var menu = document.getElementById("menu");
  menu.style.width = "0px";
}

let i=1;

function Next() {

    if(i==4){
      i=1;
    }
    else{
      i++
    }
    document.getElementById("slideshow").src= "assets/images/slideShow/"+i+".jpg";
}

setInterval(Next,2000);
