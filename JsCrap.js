function redirectUser() {
  var code = document.getElementById("code").value;
  if(code == "W.I.P"){
    window.location.href = "https://nikoarts.github.io/NikoTGCsite/W.I.P.html";
  }
  else if(code == "back"){
    window.location.href = "https://nikoarts.github.io/NikoTGCsite/index.html";
  }
}