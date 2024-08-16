var songs = ['Credits.ogg', 'PasswordCredits.ogg', 'MenuThemeCredits.ogg', 'oh no! ERROR! Credits.ogg', 'AuthorCredits.ogg'];
var backgrounds = ['Bg1.png', 'Bg2.png', 'Bg3.png', 'Bg4.png', 'Bg5.png'];
var currentSongIndex = 0;
var audio = new Audio(songs[currentSongIndex]);

window.addEventListener('load', function () {
    playSong();
    audio.muted = false;
    changeBackground();
});

audio.addEventListener('ended', function () {
    currentSongIndex++;
    if (currentSongIndex < songs.length) {
        playSong();
        changeBackground();
    } else {
        currentSongIndex = 0; // Reset to first song
        playSong();
        changeBackground();
    }
});

function playSong() {
    audio.src = songs[currentSongIndex];
    audio.play();
	audio.volume = 0.1;
}

function changeBackground() {
    var bgElement = document.getElementById('bg1');
    bgElement.style.backgroundImage = 'url(' + backgrounds[currentSongIndex] + ')';
    bgElement.style.opacity = 1;

    setTimeout(function() {
        bgElement.style.opacity = 0;
    }, 50000); // Adjust timing to match song transition or loop
}
