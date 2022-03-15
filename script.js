console.log(" Welcome to Spotify" )

//initilize the variables
let songIndex = 0;
let audioElement = new Audio('song/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gify');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Shayad from Love Aaj Kal", filepath: "song/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Falling by Trevor Daniel", filepath: "song/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Tujhe Kitna Chahne Lage from Kabir Singh", filepath: "song/3.mp3", coverPath: "covers/3.jpg"},
    {songName: " Makhna from Drive", filepath: "song/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Blinding Lights by The Weeknd", filepath: "song/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Garmi from Street Dancer 3D", filepath: "song/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Ghungroo from War", filepath: "song/7.mp3", coverPath: "covers/7.jpg"},
    {songName: " Tu Hi Yaar Mera from Pati Patni Aur Woh", filepath: "song/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "Malang from Malang", filepath: "song/9.mp3", coverPath: "covers/9.jpg"},
    {songName: "Salam-e-Ishq", filepath: "song/10.mp3", coverPath: "covers/10.jpg"}
]

songItems.forEach((element , i) =>{
    console.log(element , i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})
//audioElement.play();
  
//Handle play pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;

    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
     
    }
})
//Listen to Events
audioElement .addEventListener('timeupdate', ()=>{
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100)
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = (myProgressBar.value*audioElement.duration)/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.classList.remove('fa-circle-pause');
    element.classList.add('fa-play-circle');
    })
    
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `song/${songIndex+1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-circle-pause');
    })
})
