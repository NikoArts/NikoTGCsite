var Audio = new Audio('OST/Password.mp3'); 

window.addEventListener('load', function (){
    Audio.play(); 
	Audio.loop = true;
	Audio.muted = false;
	Audio.volume = 0.1;
});