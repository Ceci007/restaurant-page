(()=>{"use strict";function e(e,t,...n){e.textContent=t;const o=document.createElement("ul");[...n].forEach((e=>{const t=document.createElement("li");t.textContent=e,o.appendChild(t)})),e.appendChild(o)}function t(e){return()=>{const t=document.getElementById(e.renderAreaId);t.innerHTML="",e.render(t)}}function n(e){const t=document.createElement("button");t.setAttribute("id",e.toLowerCase()+"Button"),t.className="button",t.textContent=e,btnContainer.appendChild(t)}const o={renderAreaId:"contContainer",render:e=>{const t=document.createElement("img");t.src="./images/dogo.jpg",e.textContent="Please excuse any dog hair in your food and this basic design. This project is meant to be an introduction to webpack, and I did not spend much time on CSS. I focused on DRY principle, Objects, and clean code.",e.appendChild(t)}},d={renderAreaId:"contContainer",render:t=>{e(t,"Our Menu:","Treats","Meet-ball","Bone","Chicken")}},c={renderAreaId:"contContainer",render:t=>{e(t,"Contact me at:","GitHub: https://github.com/Ceci007","Linkedin: www.linkedin.com/in/cecilia-benítez","+595981-123-456-arf!")}};(()=>{const e=document.getElementById("content"),t=document.createElement("div");!function(){const t=document.createElement("h1");t.textContent="Dogo buffet",e.appendChild(t)}(),t.setAttribute("id","btnContainer"),e.appendChild(t),function(){const t=document.createElement("div");t.setAttribute("id","contContainer"),e.appendChild(t)}(),["About","Menu","Contact"].forEach((e=>n(e)))})(),t(o)(),[{id:"menuButton",render:t(d)},{id:"aboutButton",render:t(o)},{id:"contactButton",render:t(c)}].forEach((e=>{document.getElementById(e.id).addEventListener("click",e.render)}))})();