import {loadmain, loadmenu, loadContact, clearElements} from './load'
let c = document.getElementById("content");
let imagesource = "https://lh3.googleusercontent.com/yBfn2YzZPQ--YraZl3iGVbu1YQArpUssS23gDg1SGcVkmRYZvsc51dHHgDAIFXdwxHzogY_ZKj_YAw5m9rrYOblp5w=w1000";
function mainLoad(e){
  clearElements(c);
  loadmain(c,imagesource);
}
function menuLoad(e){
  clearElements(c);
  loadmenu(c);
}

function contactLoad(e){
  clearElements(c);
  loadContact(c);
}
c.style.textAlign = "center";
loadmain(c,imagesource);
let homebutton = document.getElementById("home");
let menubutton = document.getElementById("menu");
let contactbutton = document.getElementById("contact");
homebutton.addEventListener("click",mainLoad);
menubutton.addEventListener("click",menuLoad);
contactbutton.addEventListener("click",contactLoad); 
