var video = document.getElementById("movieTrailer");
var btn = document.getElementById("playBtn");
function playMovie() {
    if (!video.paused) {
        video.pause();
        // btn.innerHTML="Play";
        btn.innerHTML="Play";
    } else {
        video.play();
        btn.innerHTML="Pause";
    }
}