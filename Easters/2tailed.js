function Play()

{
setTimeout(function(){
	document.getElementById("MPB").innerHTML = ' <img src = "2tailed/MusicPlayer.png" class="MusMenu"><a onclick="Pause()"><img src = "2tailed/Pause.png" class="MusMenuButton"></a><a onclick="Back()"><img src = "2tailed/ArrowB1.png" class="MusMenuBarrow"></a><a onclick="Front()"><img src = "2tailed/ArrowF1.png" class="MusMenuFarrow"></a> ';
},1);

document.getElementById('IconsVisibility').classList.remove('Invis');
document.getElementById('Disc').classList.add('DiscAnim');
if(theNum == "0")document.getElementById('Chrs').classList.add('CHrsAnim1');
if(theNum == "1")document.getElementById('Chrs').classList.add('CHrsAnim2');
if(theNum == "2")document.getElementById('Chrs').classList.add('CHrsAnim3');
if(theNum == "3")document.getElementById('Chrs').classList.add('CHrsAnim4');
if(theNum == "4")document.getElementById('Chrs').classList.add('CHrsAnim5');
if(theNum == "5")document.getElementById('Chrs').classList.add('CHrsAnim6');
if(theNum == "6")document.getElementById('Chrs').classList.add('CHrsAnim7');

if(theNum == "0")document.getElementById('IconsVisibility').classList.add('IconsAnim1');
if(theNum == "1")document.getElementById('IconsVisibility').classList.add('IconsAnim2');
if(theNum == "2")document.getElementById('IconsVisibility').classList.add('IconsAnim3');
if(theNum == "3")document.getElementById('IconsVisibility').classList.add('IconsAnim4');
if(theNum == "4")document.getElementById('IconsVisibility').classList.add('IconsAnim5');
if(theNum == "5")document.getElementById('IconsVisibility').classList.add('IconsAnim6');
if(theNum == "6")document.getElementById('IconsVisibility').classList.add('IconsAnim7');


document.getElementById('Info').classList.add('MusicInfoAnim');
document.getElementById('SongInfo').classList.add('Invis');
setTimeout(function(){
document.getElementById('Info').classList.remove('MusicInfoAnim');
document.getElementById('SongInfo').classList.remove('Invis');

if(theNum == "0"){ document.getElementById("SongInfo").innerHTML = ' FileName: FreakyMenu.mp3  |  Name: WEEK 1 Theme <br> Made by: LuigiLuckyPlumber  |  WEEK 1 Theme.<br>length: 1:30  |  [Soundtrack that is used in WEEK 1 Theme]';}
if(theNum == "1"){ document.getElementById("SongInfo").innerHTML = ' FileName: GameOver.mp3  |  Name: Game Over theme <br> Made by: LuigiLuckyPlumber  |  Game over Soundtrack.<br>length: 0:21  |  [Soundtrack that is used on Game Over]';}
if(theNum == "2"){ document.getElementById("SongInfo").innerHTML = ' FileName: SlimeDays.mp3  |  Name: Slime Days <br> Made by: Enysmo  |  VS Niko [song_1].<br>length: 1:37  |  [First song of Niko week]';}
if(theNum == "3"){ document.getElementById("SongInfo").innerHTML = ' FileName: CodeSwing.mp3  |  Name: Code Swing <br> Made by: BagheadBeatz  |  VS Niko [song_2 W.I.P].<br>length: 0:59  |  [Second song of Niko week]';}
if(theNum == "4"){ document.getElementById("SongInfo").innerHTML = ' FileName: GlitchingOut.mp3  |  Name: Glitching Out <br> Made by: Enysmo   |  VS Niko [song_3].<br>length: 2:00  |  [Final song of Niko week]';}
if(theNum == "5"){ document.getElementById("SongInfo").innerHTML = ' FileName: FighterApproaches.mp3  |  Name: Aurora Blitz <br> Made by: Enysmo   |  VS Bark [Bonus song].<br>length: 2:18  |  [Bonus song... OMG IS DAT BARK FROM SON-]';}
if(theNum == "6"){ document.getElementById("SongInfo").innerHTML = ' FileName: DadBattle.mp3  |  Name: db 2tailed mix <br> Made by: hant_iyona   |  VS Daddy Dearest [song_1].<br>length: 1:30  |  [VS Daddy Dearest 2tailed mix song_1]';}

},800);

var audio = document.getElementById("Player");
audio.play();
}

function Pause()

{
setTimeout(function(){
	document.getElementById("MPB").innerHTML = ' <img src = "2tailed/MusicPlayer.png" class="MusMenu"><a onclick="Play()"><img src = "2tailed/Play.png" class="MusMenuButton"></a><a onclick="Back()"><img src = "2tailed/ArrowB1.png" class="MusMenuBarrow"></a><a onclick="Front()"><img src = "2tailed/ArrowF1.png" class="MusMenuFarrow"></a> ';
},1);

document.getElementById('IconsVisibility').classList.add('Invis');
document.getElementById('Disc').classList.remove('DiscAnim');
if(theNum == "0")document.getElementById('Chrs').classList.remove('CHrsAnim1');
if(theNum == "1")document.getElementById('Chrs').classList.remove('CHrsAnim2');
if(theNum == "2")document.getElementById('Chrs').classList.remove('CHrsAnim3');
if(theNum == "3")document.getElementById('Chrs').classList.remove('CHrsAnim4');
if(theNum == "4")document.getElementById('Chrs').classList.remove('CHrsAnim5');
if(theNum == "5")document.getElementById('Chrs').classList.remove('CHrsAnim6');
if(theNum == "6")document.getElementById('Chrs').classList.remove('CHrsAnim7');

if(theNum == "0")document.getElementById('IconsVisibility').classList.remove('IconsAnim1');
if(theNum == "1")document.getElementById('IconsVisibility').classList.remove('IconsAnim2');
if(theNum == "2")document.getElementById('IconsVisibility').classList.remove('IconsAnim3');
if(theNum == "3")document.getElementById('IconsVisibility').classList.remove('IconsAnim4');
if(theNum == "4")document.getElementById('IconsVisibility').classList.remove('IconsAnim5');
if(theNum == "5")document.getElementById('IconsVisibility').classList.remove('IconsAnim6');
if(theNum == "6")document.getElementById('IconsVisibility').classList.remove('IconsAnim7');


var audio = document.getElementById("Player");
audio.pause();
}





var theNum = "0";
var Music = "0";

let arr = ["0", "1", "2", "3", "4", "5", "6"];

function Front()

{
setTimeout(function(){
	document.getElementById("MPB").innerHTML = ' <img src = "2tailed/MusicPlayer.png" class="MusMenu"><a onclick="Play()"><img src = "2tailed/Play.png" class="MusMenuButton"></a><a onclick="Back()"><img src = "2tailed/ArrowB1.png" class="MusMenuBarrow"></a><a onclick="Front()"><img src = "2tailed/ArrowF1.png" class="MusMenuFarrow"></a> ';
},1);

document.getElementById('IconsVisibility').classList.add('Invis');
document.getElementById('Disc').classList.remove('DiscAnim');
if(theNum == "0")document.getElementById('Chrs').classList.remove('CHrsAnim1');
if(theNum == "1")document.getElementById('Chrs').classList.remove('CHrsAnim2');
if(theNum == "2")document.getElementById('Chrs').classList.remove('CHrsAnim3');
if(theNum == "3")document.getElementById('Chrs').classList.remove('CHrsAnim4');
if(theNum == "4")document.getElementById('Chrs').classList.remove('CHrsAnim5');
if(theNum == "5")document.getElementById('Chrs').classList.remove('CHrsAnim6');
if(theNum == "6")document.getElementById('Chrs').classList.remove('CHrsAnim7');
	
if(theNum == "0")document.getElementById('IconsVisibility').classList.remove('IconsAnim1');
if(theNum == "1")document.getElementById('IconsVisibility').classList.remove('IconsAnim2');
if(theNum == "2")document.getElementById('IconsVisibility').classList.remove('IconsAnim3');
if(theNum == "3")document.getElementById('IconsVisibility').classList.remove('IconsAnim4');
if(theNum == "4")document.getElementById('IconsVisibility').classList.remove('IconsAnim5');
if(theNum == "5")document.getElementById('IconsVisibility').classList.remove('IconsAnim6');
if(theNum == "6")document.getElementById('IconsVisibility').classList.remove('IconsAnim7');


theNum++;
Music++;
if(theNum == arr.length){theNum="0";}
window.scrollTo({
		top: 0,
	});


if(theNum == "0"){ document.getElementById("SoundTrack").innerHTML = ' <audio class="MusicPlayer" id="Player"> <source src="2tailed/OST/FreakyMenu.mp3" type="audio/mpeg"></audio>';}
if(theNum == "1"){ document.getElementById("SoundTrack").innerHTML = ' <audio class="MusicPlayer" id="Player"> <source src="2tailed/OST/GameOver.mp3" type="audio/mpeg"></audio>';}
if(theNum == "2"){ document.getElementById("SoundTrack").innerHTML = ' <audio class="MusicPlayer" id="Player"> <source src="2tailed/OST/SlimeDays.mp3" type="audio/mpeg"></audio>';}
if(theNum == "3"){ document.getElementById("SoundTrack").innerHTML = ' <audio class="MusicPlayer" id="Player"> <source src="2tailed/OST/CodeSwing.mp3" type="audio/mpeg"></audio>';}
if(theNum == "4"){ document.getElementById("SoundTrack").innerHTML = ' <audio class="MusicPlayer" id="Player"> <source src="2tailed/OST/GlitchingOut.mp3" type="audio/mpeg"></audio>';}
if(theNum == "5"){ document.getElementById("SoundTrack").innerHTML = ' <audio class="MusicPlayer" id="Player"> <source src="2tailed/OST/FighterApproaches.mp3" type="audio/mpeg"></audio>';}
if(theNum == "6"){ document.getElementById("SoundTrack").innerHTML = ' <audio class="MusicPlayer" id="Player"> <source src="2tailed/OST/DadBattle.mp3" type="audio/mpeg"></audio>';}

if(theNum == "0"){ document.getElementById("Icons").innerHTML = ' <img id="IconsVisibility"  src = "2tailed/Icon1.png" class="Icons IconsAnim1 Invis">';}
if(theNum == "1"){ document.getElementById("Icons").innerHTML = ' <img id="IconsVisibility"  src = "2tailed/Icon0.png" class="Icons IconsAnim1 Invis">';}
if(theNum == "2"){ document.getElementById("Icons").innerHTML = ' <img id="IconsVisibility"  src = "2tailed/Icon2.png" class="Icons IconsAnim1 Invis">';}
if(theNum == "3"){ document.getElementById("Icons").innerHTML = ' <img id="IconsVisibility"  src = "2tailed/Icon2.png" class="Icons IconsAnim1 Invis">';}
if(theNum == "4"){ document.getElementById("Icons").innerHTML = ' <img id="IconsVisibility"  src = "2tailed/Icon2.png" class="Icons IconsAnim1 Invis">';}
if(theNum == "5"){ document.getElementById("Icons").innerHTML = ' <img id="IconsVisibility"  src = "2tailed/Icon3.png" class="Icons IconsAnim1 Invis">';}
if(theNum == "6"){ document.getElementById("Icons").innerHTML = ' <img id="IconsVisibility"  src = "2tailed/Icon4.png" class="Icons IconsAnim1 Invis">';}

if(theNum == "0"){ document.getElementById("Information").innerHTML = ' FreakyMenu.mp3<br>Main menu theme<br>length: 1:30 <br>';}
if(theNum == "1"){ document.getElementById("Information").innerHTML = ' GameOver.mp3<br>Game Over theme<br>length: 0:21 <br>';}
if(theNum == "2"){ document.getElementById("Information").innerHTML = ' SlimeDays.mp3<br>Slime Days [VS Niko]<br>length: 1:37 <br>';}
if(theNum == "3"){ document.getElementById("Information").innerHTML = ' CodeSwing.mp3<br>Code Swing [VS Niko]<br>length: 0:59 <br>';}
if(theNum == "4"){ document.getElementById("Information").innerHTML = ' GlitchingOut.mp3<br>Glitching Out [VS Niko]<br>length: 2:00 <br>';}
if(theNum == "5"){ document.getElementById("Information").innerHTML = ' FighterApproaches.mp3<br>Aurora Blitz [VS Bark]<br>length: 2:18 <br>';}
if(theNum == "6"){ document.getElementById("Information").innerHTML = ' DadBattle.mp3<br>db 2tailed mix [Vs DD]<br>length: 1:30 <br>';}

}

function Back()

{
setTimeout(function(){
	document.getElementById("MPB").innerHTML = ' <img src = "2tailed/MusicPlayer.png" class="MusMenu"><a onclick="Play()"><img src = "2tailed/Play.png" class="MusMenuButton"></a><a onclick="Back()"><img src = "2tailed/ArrowB1.png" class="MusMenuBarrow"></a><a onclick="Front()"><img src = "2tailed/ArrowF1.png" class="MusMenuFarrow"></a> ';
},1);

document.getElementById('IconsVisibility').classList.add('Invis');
document.getElementById('Disc').classList.remove('DiscAnim');
if(theNum == "0")document.getElementById('Chrs').classList.remove('CHrsAnim1');
if(theNum == "1")document.getElementById('Chrs').classList.remove('CHrsAnim2');
if(theNum == "2")document.getElementById('Chrs').classList.remove('CHrsAnim3');
if(theNum == "3")document.getElementById('Chrs').classList.remove('CHrsAnim4');
if(theNum == "4")document.getElementById('Chrs').classList.remove('CHrsAnim5');
if(theNum == "5")document.getElementById('Chrs').classList.remove('CHrsAnim6');
if(theNum == "6")document.getElementById('Chrs').classList.remove('CHrsAnim7');
	
if(theNum == "0")document.getElementById('IconsVisibility').classList.remove('IconsAnim1');
if(theNum == "1")document.getElementById('IconsVisibility').classList.remove('IconsAnim2');
if(theNum == "2")document.getElementById('IconsVisibility').classList.remove('IconsAnim3');
if(theNum == "3")document.getElementById('IconsVisibility').classList.remove('IconsAnim4');
if(theNum == "4")document.getElementById('IconsVisibility').classList.remove('IconsAnim5');
if(theNum == "5")document.getElementById('IconsVisibility').classList.remove('IconsAnim6');
if(theNum == "6")document.getElementById('IconsVisibility').classList.remove('IconsAnim7');

	
theNum--;
Music--;
if(theNum == "-1"){theNum = arr.length -1; } console.log(theNum );
window.scrollTo({
		top: 0,
	});


if(theNum == "0"){ document.getElementById("SoundTrack").innerHTML = ' <audio class="MusicPlayer" id="Player"> <source src="2tailed/OST/FreakyMenu.mp3" type="audio/mpeg"></audio>';}
if(theNum == "1"){ document.getElementById("SoundTrack").innerHTML = ' <audio class="MusicPlayer" id="Player"> <source src="2tailed/OST/GameOver.mp3" type="audio/mpeg"></audio>';}
if(theNum == "2"){ document.getElementById("SoundTrack").innerHTML = ' <audio class="MusicPlayer" id="Player"> <source src="2tailed/OST/SlimeDays.mp3" type="audio/mpeg"></audio>';}
if(theNum == "3"){ document.getElementById("SoundTrack").innerHTML = ' <audio class="MusicPlayer" id="Player"> <source src="2tailed/OST/CodeSwing.mp3" type="audio/mpeg"></audio>';}
if(theNum == "4"){ document.getElementById("SoundTrack").innerHTML = ' <audio class="MusicPlayer" id="Player"> <source src="2tailed/OST/GlitchingOut.mp3" type="audio/mpeg"></audio>';}
if(theNum == "5"){ document.getElementById("SoundTrack").innerHTML = ' <audio class="MusicPlayer" id="Player"> <source src="2tailed/OST/FighterApproaches.mp3" type="audio/mpeg"></audio>';}
if(theNum == "6"){ document.getElementById("SoundTrack").innerHTML = ' <audio class="MusicPlayer" id="Player"> <source src="2tailed/OST/DadBattle.mp3" type="audio/mpeg"></audio>';}

if(theNum == "0"){ document.getElementById("Icons").innerHTML = ' <img id="IconsVisibility"  src = "2tailed/Icon1.png" class="Icons IconsAnim1 Invis">';}
if(theNum == "1"){ document.getElementById("Icons").innerHTML = ' <img id="IconsVisibility"  src = "2tailed/Icon0.png" class="Icons IconsAnim1 Invis">';}
if(theNum == "2"){ document.getElementById("Icons").innerHTML = ' <img id="IconsVisibility"  src = "2tailed/Icon2.png" class="Icons IconsAnim1 Invis">';}
if(theNum == "3"){ document.getElementById("Icons").innerHTML = ' <img id="IconsVisibility"  src = "2tailed/Icon2.png" class="Icons IconsAnim1 Invis">';}
if(theNum == "4"){ document.getElementById("Icons").innerHTML = ' <img id="IconsVisibility"  src = "2tailed/Icon2.png" class="Icons IconsAnim1 Invis">';}
if(theNum == "5"){ document.getElementById("Icons").innerHTML = ' <img id="IconsVisibility"  src = "2tailed/Icon3.png" class="Icons IconsAnim1 Invis">';}
if(theNum == "6"){ document.getElementById("Icons").innerHTML = ' <img id="IconsVisibility"  src = "2tailed/Icon4.png" class="Icons IconsAnim1 Invis">';}

if(theNum == "0"){ document.getElementById("Information").innerHTML = ' FreakyMenu.mp3<br>Main menu theme<br>length: 1:30 <br>';}
if(theNum == "1"){ document.getElementById("Information").innerHTML = ' GameOver.mp3<br>Game Over theme<br>length: 0:21 <br>';}
if(theNum == "2"){ document.getElementById("Information").innerHTML = ' SlimeDays.mp3<br>Slime Days [VS Niko]<br>length: 1:37 <br>';}
if(theNum == "3"){ document.getElementById("Information").innerHTML = ' CodeSwing.mp3<br>Code Swing [VS Niko]<br>length: 0:59 <br>';}
if(theNum == "4"){ document.getElementById("Information").innerHTML = ' GlitchingOut.mp3<br>Glitching Out [VS Niko]<br>length: 2:00 <br>';}
if(theNum == "5"){ document.getElementById("Information").innerHTML = ' FighterApproaches.mp3<br>Aurora Blitz [VS Bark]<br>length: 2:18 <br>';}
if(theNum == "6"){ document.getElementById("Information").innerHTML = ' DadBattle.mp3<br>db 2tailed mix [Vs DD]<br>length: 1:30 <br>';}

}
