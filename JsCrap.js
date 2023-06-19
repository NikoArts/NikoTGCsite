// Passwords:

function redirectUser() {
  var code = document.getElementById("code").value;
  if(code == "W.I.P"){
    window.location.href = "W.I.P.html";
  }
  else if(code == "back"){
    window.location.href = "index.html";
  }
  else if(code == "TheCaveGame"){
    window.location.href = "Easters/Minecraft.html";
  }
  
  else if(code == "AGESLS"){
    window.location.href = "Easters/LevelSelect.html";
  }
  
  else if(code == "TGV2ZWxTZWxlY3Qg"){
    window.location.href = "LevelSelect.html";
  }
}