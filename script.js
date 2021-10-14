var user = document .getElementById('user');
var menu = document .getElementById('menu');
var nav1 = document.getElementById("nav1");
var nav2 = document.getElementById("nav2");
var nav3 = document.getElementById("nav3");
var nav4 = document.getElementById("nav4");
var nav5 = document.getElementById("nav5");


menu.onclick = function(){
  if (user.classList == ""){
    user.classList.add("open");
  }else{
    user.classList.remove("open");
  }
}

nav1.onclick = function(){
  user.classList.remove('open');
}
nav2.onclick = function(){
  user.classList.remove('open');
}
nav3.onclick = function(){
  user.classList.remove('open');
}
nav4.onclick = function(){
  user.classList.remove('open');
}
nav5.onclick = function(){
  user.classList.remove('open');
}










