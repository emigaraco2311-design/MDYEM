const audio = document.getElementById("musica");

audio.volume = 0.6;
audio.play();

function playMusica() {
    audio.play();
}

function pauseMusica() {
    audio.pause();
}

function muteMusica() {
    audio.muted = !audio.muted;
}
