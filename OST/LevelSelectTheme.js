var Audio = new Audio('OST/LevelSelectTheme.mp3'); 

window.addEventListener('load', function (){
    Audio.play(); 
	Audio.loop = true;
	Audio.muted = false;
});