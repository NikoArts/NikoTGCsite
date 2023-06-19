// Gallery

var theNum = "0";
var Music = "0";

let arr = ["0", "1", "2", "3", "4", "5" ];
let Pagearr = ["0/5 [LevelSelect.mp3 / ▶Key to all pages]", "1/5 [LevelSelectTheme.mp3 / ▶Chilled rain of code]", "2/5 [MenuTheme Site.mp3 / ▶Glitchy Rain Version_1]", "3/5 [MenuTheme.mp3 / ▶Glitchy Rain]", "4/5 [Password.mp3 / ▶The enter of the void]", "5/5 [WIP theme.mp3 / ▶The nightmare of every creation]"];

function go_to_right()

{
theNum++;
Music++;
if(theNum == arr.length){theNum="0";}
window.scrollTo({
		top: 0,
	});
document.getElementById("ComicsInfo").innerHTML = 'Audio: '+Pagearr[theNum]+'';


if(theNum == "0"){ document.getElementById("SoundTrack").innerHTML = ' <audio controls class="MusicPlayer"> <source src="../OST/LevelSelect.mp3" type="audio/mpeg"> </audio>';}
if(theNum == "1"){ document.getElementById("SoundTrack").innerHTML = ' <audio controls class="MusicPlayer"> <source src="../OST/LevelSelectTheme.mp3" type="audio/mpeg"> </audio>';}
if(theNum == "2"){ document.getElementById("SoundTrack").innerHTML = ' <audio controls class="MusicPlayer"> <source src="../OST/MenuTheme Site.mp3" type="audio/mpeg"> </audio>';}
if(theNum == "3"){ document.getElementById("SoundTrack").innerHTML = ' <audio controls class="MusicPlayer"> <source src="../OST/MenuTheme.mp3" type="audio/mpeg"> </audio>';}
if(theNum == "4"){ document.getElementById("SoundTrack").innerHTML = ' <audio controls class="MusicPlayer"> <source src="../OST/Password.mp3" type="audio/mpeg"> </audio>';}
if(theNum == "5"){ document.getElementById("SoundTrack").innerHTML = ' <audio controls class="MusicPlayer"> <source src="../OST/WIP theme.mp3" type="audio/mpeg"> </audio>';}

}

function go_to_left()

{
theNum--;
Music--;
if(theNum == "-1"){theNum = arr.length -1; } console.log(theNum );
window.scrollTo({
		top: 0,
	});
document.getElementById("ComicsInfo").innerHTML = 'Audio: '+Pagearr[theNum]+'';


}
