var Audio = new Audio('https://github.com/NikoArts/NikoTGCsite/raw/main/OST/oh%20no%20ERROR.mp3'); 

window.addEventListener('load', function (){
    Audio.play(); 
	Audio.loop = true;
	Audio.muted = false;
	Audio.volume = 0.1;
});