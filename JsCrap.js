// Passwords:

function redirectUser() {
  var code = document.getElementById("code").value;
  if(code == "W.I.P"){
    window.location.href = "W.I.P.html";
  }
  else if(code == "back"){
    window.location.href = "index.html";
  }
}
