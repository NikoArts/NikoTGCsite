var songs = ['Credits.ogg', 'PasswordCredits.ogg', 'MenuThemeCredits.ogg', 'oh no! ERROR! Credits.ogg', 'AuthorCredits.ogg'];
var currentSongIndex = 0;
var audio = new Audio(songs[currentSongIndex]);

window.addEventListener('load', function () {
    playSong();
    audio.muted = false;
});

audio.addEventListener('ended', function () {
    currentSongIndex++;
    if (currentSongIndex < songs.length) {
        playSong();
    }
});

function playSong() {
    audio.src = songs[currentSongIndex];
    audio.play();
}