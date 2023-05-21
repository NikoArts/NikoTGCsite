function Info0()

{
document.getElementById("TutorialInfo").innerHTML = 'Добро пожаловать на сайт NikoTGC!';
}

function Info1()

{
document.getElementById("TutorialInfo").innerHTML = ' Перед тем как зайти просьба настроить<br> в браузере функцию Autoplay для<br> лучшего восприятия ';
}

function Info2()

{
document.getElementById("TutorialInfo").innerHTML = '  ';
}

function Info3()

{
document.getElementById("TutorialInfo").innerHTML = ' Начнём с того что из себя представляет сайт. ';
}

function Info4()

{
document.getElementById("TutorialInfo").innerHTML = ' Это сайт является чем-то на<br> подобии википедии творчества Нико. ';
}

function Info5()

{
document.getElementById("TutorialInfo").innerHTML = ' В данном сайте вы сможете:<br> 1. получить информацию о всех персонажах<br> и вселенных которых создал Нико ';
}

function Info6()

{
document.getElementById("TutorialInfo").innerHTML = ' В данном сайте вы сможете:<br> 2. Посмотреть галереи персонажей со всеми<br> вариациями предыдущих и последних<br> обновлений в дизайне ';
}

function Info7()

{
document.getElementById("TutorialInfo").innerHTML = ' В данном сайте вы сможете:<br> 3. Посмотреть главные новости про<br> творчество Нико. ';
}

function Info8()

{
document.getElementById("TutorialInfo").innerHTML = ' В данном сайте вы сможете:<br> 4. Почитать комиксы и Аски ';
}

function Info9()

{
document.getElementById("TutorialInfo").innerHTML = ' В данном сайте вы сможете:<br> 5. А так же узнать информацию про автора<br> и все вариации его персонажа Нико. ';
}

function Info10()

{
document.getElementById("TutorialInfo").innerHTML = '  ';
}

function Info11()

{
document.getElementById("TutorialInfo").innerHTML = ' Так же на этом сайте вы сможете<br> найти кучу секреток и пасхалок ;P ';
}

function Info12()

{
document.getElementById("TutorialInfo").innerHTML = '  ';
}
function Info13()

{
document.getElementById("TutorialInfo").innerHTML = ' Не забывайте... клавиша ` ';
}

function Info14()

{
document.getElementById("TutorialInfo").innerHTML = ' Удачи! ';
}

//Ripple Event Handler
var drawRipple = function(ev) {
  var x = ev.clientX;
  var y = ev.clientY;
  var node = document.querySelector(".ripple");
  var newNode = node.cloneNode(true);
  newNode.classList.add("animate");
  newNode.style.left = ev.clientX - 5 + "px";
  newNode.style.top = ev.clientY - 5 + "px";
  node.parentNode.replaceChild(newNode, node);
};

//Ripple Triggers
window.addEventListener("click", drawRipple);


//Control Handler
var controlHandler = function() {
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    controller.textContent = "Dark Ripple";
  } else {
    controller.textContent = "Bright Ripple";
  }
};

// Control Trigger
var controller = document.querySelector(".controller");
controller.addEventListener("click", controlHandler);

