(()=>{"use strict";function e(e,t){let n=document.createElement("img");n.src=t;let l=document.createElement("p");l.innerHTML="Our restaurant is the best in the world please enjoy our food.",e.appendChild(n),e.appendChild(l)}function t(e){for(;e.firstChild;)e.removeChild(e.lastChild)}let n=document.getElementById("content"),l="https://lh3.googleusercontent.com/yBfn2YzZPQ--YraZl3iGVbu1YQArpUssS23gDg1SGcVkmRYZvsc51dHHgDAIFXdwxHzogY_ZKj_YAw5m9rrYOblp5w=w1000";n.style.textAlign="center",e(n,l);let o=document.getElementById("home"),c=document.getElementById("menu"),d=document.getElementById("contact");o.addEventListener("click",(function(o){t(n),e(n,l)})),c.addEventListener("click",(function(e){t(n),function(e){let t=["Leau Monsieur","White Lasagna","Teriyaki Pasta","Beef Wellington","Mellorieeee"];for(var n=0;n<t.length;n++){let l=document.createElement("p");l.innerHTML=t[n],e.appendChild(l)}}(n)})),d.addEventListener("click",(function(e){t(n),function(e){let t=document.createElement("p");t.textContent="Contact us on: ";let n=document.createElement("p");n.textContent="000-5555-000";let l=document.createElement("p");l.textContent="ezpz@ezmail.com",e.appendChild(t),e.appendChild(n),e.appendChild(l)}(n)}))})();