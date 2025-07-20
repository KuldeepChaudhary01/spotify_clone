console.log("Welcome to Spotify");

let songIndex = 0;
let audioElement = new Audio('music.mp3');

let masterPlay = document.getElementById('masterPlay');
let progressBar = document.getElementById('progressBar');       
let gif = document.getElementById('gif');

let songs = [
    {songName: "Yaarian", filePath: "songs/music.mp3", coverPath: "covers/cover.jpg"},
    {songName: "Yaarian", filePath: "songs/music.mp3", coverPath: "covers/cover.jpg"},
    {songName: "Yaarian", filePath: "songs/music.mp3", coverPath: "covers/cover.jpg"},
    {songName: "Yaarian", filePath: "songs/music.mp3", coverPath: "covers/cover.jpg"},
    {songName: "Yaarian", filePath: "songs/music.mp3", coverPath: "covers/cover.jpg"},
    {songName: "Yaarian", filePath: "songs/music.mp3", coverPath: "covers/cover.jpg"},
]

masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        gif.style.opacity = 1;
    }
     else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
        gif.style.opacity = 0;
     }
})

audioElement.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');

    //updating  Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration) * 100);
    progressBar.value = progress;
})

progressBar.addEventListener('change', ()=>{
    audioElement.currentTime = progressBar.value * audioElement.duration / 100;
})