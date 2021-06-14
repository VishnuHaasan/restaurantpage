function loadmain(content,src){
  let image = document.createElement("img");
  image.src = src;
  let text = document.createElement("p");
  text.innerHTML = "Our restaurant is the best in the world please enjoy our food.";
  content.appendChild(image);
  content.appendChild(text);
}

function loadmenu(content){
  let menuarray = ["Leau Monsieur","White Lasagna","Teriyaki Pasta","Beef Wellington","Mellorieeee"];
  for(var i = 0;i<menuarray.length;i++){
    let p = document.createElement("p");
    p.innerHTML = menuarray[i];
    content.appendChild(p);
  }
}

function loadContact(content){
  let p1 = document.createElement("p");
  p1.textContent = "Contact us on: ";
  let number = document.createElement("p");
  number.textContent = "000-5555-000";
  let email = document.createElement("p");
  email.textContent = "ezpz@ezmail.com";
  content.appendChild(p1);
  content.appendChild(number);
  content.appendChild(email);
}

function clearElements(content){
  while(content.firstChild){
    content.removeChild(content.lastChild);
  }
}


export {loadmain, loadmenu, loadContact, clearElements}