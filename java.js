function myFunction() {
  alert("Hello! I am an alert box!");
}

var btn_action = document.getElementById('action')
var btn_fantasy = document.getElementById('fantasy')
var btn_horror = document.getElementById('horror')
var btn_romance = document.getElementById('romance')
var btn_scifi = document.getElementById('scifi')

btn_action.onclick= fxaction;
btn_fantasy.onclick= fxfantasy;
btn_horror.onclick= fxhorror;
btn_romance.onclick= fxromance;
btn_scifi.onclick= fxscifi;

function fxaction() {

    location.href='purchase.html';
   localStorage.setItem("type", "action");


}
function fxfantasy() {

    location.href='purchase.html';
   localStorage.setItem("type", "fantasy");


}
function fxhorror() {

    location.href='purchase.html';
   localStorage.setItem("type", "horror");


}
function fxromance() {

    location.href='purchase.html';
   localStorage.setItem("type", "romance");


}
function fxscifi() {

    location.href='purchase.html';
   localStorage.setItem("type", "scifi");


}
