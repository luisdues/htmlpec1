const t=document.querySelector('#switch input[type="checkbox"]');if(t){t.addEventListener("change",(function(t){t.target.checked?document.documentElement.setAttribute("tema","light"):document.documentElement.setAttribute("tema","dark")})),t.setAttribute("id","color-switch");const e=document.createElement("label");e.setAttribute("for","color-switch"),e.innerHTML="Cambiar tema";document.querySelector("#switch").appendChild(e)}
//# sourceMappingURL=index.17d7db97.js.map
